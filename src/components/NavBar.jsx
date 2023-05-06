import React from 'react'
import { Link } from 'react-router-dom'
export const NavBar = () => {
    const navStyles = {
        color: "#fff"
    }
    return (
        <nav>
            <Link to={"/"} style={navStyles}>
                <h2>Logo</h2>
            </Link>
            <ul className="nav-list">
            <Link to={"/about"} style={navStyles}>
                <li>Sobre Nosotros</li>
            </Link>
            <Link to={"/Menu"} style={navStyles}>
                <li>Menú</li>
            </Link>
            <Link to={"/Reservas"} style={navStyles}>
                <li>Reservas</li>
            </Link>
        </ul>
        </nav >
    )
}
