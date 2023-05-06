import React from "react";
import ReservationForm from "./ReservationForm";
import "./Reservas.css";
import 'firebase/firestore';

export const Reservas = () => {
    return (
        <div className="Reservas">
            <h2>Reserve una mesa con nosotros</h2>
            <ReservationForm />
        </div>
    );
}

export default Reservas;