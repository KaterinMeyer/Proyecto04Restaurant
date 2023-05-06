import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

export const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-section">
                    <Link to ={"/about"}>
                    <h4>Sobre Nosotros</h4></Link>
                    <Link to ={"/Menu"}>
                    <h4>Menu</h4></Link>
                </div>
                <div className="footer-section">
                    <h4>Horarios</h4>
                    <p>Martes a Domingo: 12 hrs - 24 hrs</p>
                    <p>Lunes Cerrado</p>
                </div>
                <div className="footer-section">
                <Link to ={"/Reservas"}>
                    <h4>Reservas</h4></Link>
                    <p>Avenida el Bosque 189</p>
                    <p>Las Condes, Santiago</p>
                    <p>Teléfono: +56 2 222-3333</p>
                    <p>Correo: info@munchen.cl</p>
                </div>
            </div>
            <div className="footer-credits">
                <p>&copy; 2023 Restaurant München. Todos los derechos reservados.</p>
            </div>
        </footer>
    );
};
