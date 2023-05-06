import React from 'react'
import { Link } from 'react-router-dom'
import './NavBar.css';



export const NavBar = () => {

    return (
        <nav className="NavStyle">
            <Link to={"/"}>
            <div className="logo">München</div>
            </Link>

            <ul className="nav-list">
            <Link to={"/about"}>
                <li>Sobre Nosotros</li>
            </Link>
            <Link to={"/Menu"}>
                <li>Menú</li>
            </Link>
            <Link to={"/Reservas"}>
                <li>Reservas</li>
            </Link>
        </ul>
        </nav >
    )
}
