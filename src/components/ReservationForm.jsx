import React, { useState } from 'react';
import { firebase, db } from './firebase.js';
import "./Reservas.css";

function ReservationForm() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [guests, setGuests] = useState('');

    const [nameEmpty, setNameEmpty] = useState(true);
    const [emailEmpty, setEmailEmpty] = useState(true);
    const [phoneEmpty, setPhoneEmpty] = useState(true);
    const [dateEmpty, setDateEmpty] = useState(true);
    const [timeEmpty, setTimeEmpty] = useState(true);
    const [guestsEmpty, setGuestsEmpty] = useState(true);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!name || !email || !phone || !date || !time || !guests) {
            alert("Favor rellenar toda la información para realizar la reserva");
            setNameEmpty(!name);
            setEmailEmpty(!email);
            setPhoneEmpty(!phone);
            setDateEmpty(!date);
            setTimeEmpty(!time);
            setGuestsEmpty(!guests);
            return;
        }
        db.collection('reservations').add({
            name,
            email,
            phone,
            date,
            time,
            guests,
        })
            .then(() => {
                alert('Reserva realizada!');
                setName('');
                setEmail('');
                setPhone('');
                setDate('');
                setTime('');
                setGuests('');
            })
            .catch((error) => {
                alert(error.message);
            });
    };


    const minDate = new Date().toISOString().slice(0, 10);
    const maxDate = new Date();
    maxDate.setDate(maxDate.getDate() + 30);
    const maxDateStr = maxDate.toISOString().slice(0, 10);

    const minTime = '12:00';
    const maxTime = '22:00';
    const maxGuests = '10';


    return (
        <form className="reservation-form" onSubmit={handleSubmit}>
            <label htmlFor="name">Nombre y Apellido</label>
            <input type="text" id="name" value={name} onChange={(event) => {
                setName(event.target.value);
                setNameEmpty(event.target.value === "");
            }}
                className={nameEmpty ? "form-control empty" : "form-control"}
            />

            <label htmlFor="email">Correo</label>
            <input type="email" id="email" value={email} onChange={(event) => {
                setEmail(event.target.value);
                setEmailEmpty(event.target.value === "");
            }}
                className={emailEmpty ? "form-control empty" : "form-control"}
            />

            <label htmlFor="phone">Teléfono de Contacto</label>
            <input type="tel" id="phone" value={phone} onChange={(event) => {
                setPhone(event.target.value);
                setPhoneEmpty(event.target.value === "");
            }}
                className={phoneEmpty ? "form-control empty" : "form-control"}
            />

            <label htmlFor="date">Fecha</label>
            <input type="date" id="date" min={minDate} max={maxDateStr} value={date} onChange={(event) => {
                setDate(event.target.value);
                setDateEmpty(event.target.value === "");
            }}
                className={dateEmpty ? "form-control empty" : "form-control"}
            />

            <label htmlFor="time">Hora</label>
            <input type="time" id="time" min={minTime} max={maxTime} value={time} onChange={(event) => {
                setTime(event.target.value);
                setTimeEmpty(event.target.value === "");
            }}
                className={timeEmpty ? "form-control empty" : "form-control"}
            />
            <label htmlFor="guests">Comensales</label>
            <input type="number" id="guests" value={guests} onChange={(event) => {
                setGuests(event.target.value);
                setGuestsEmpty(event.target.value === "");
            }}
                min="2"
                max="10"
                className={guestsEmpty ? "form-control empty" : "form-control"}
            />
            <button type="submit">Reservar</button>
        </form>
    );
};

export default ReservationForm;