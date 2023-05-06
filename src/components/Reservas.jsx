import React from "react";
import ReservationForm from "./ReservationForm";
import "./Reservas.css";
import "./main.css"
import 'firebase/firestore';

export const Reservas = () => {
    return (
        <div className="Reservas">
            <h2 className="titulo">Reserve una mesa con nosotros</h2>
            <ReservationForm />
            <p>Para anular reserva favor llamarnos al +56 2 222-3333</p>
        </div>
        
    );
}

export default Reservas;