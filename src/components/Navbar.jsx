import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <nav className="navbar">
            <h1>Mi Aplicación</h1>
            <ul>
                <li><Link to="/">Inicio</Link></li>
                <li><Link to="/login">Iniciar Sesión</Link></li>
            </ul>
        </nav>
    );
}

export default Navbar;
