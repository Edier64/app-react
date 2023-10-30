import React from 'react';
import './Header.css';
import Login from './Login';


function Header() {
  return (
    <header>
      <div className="container">
        <h1>Bolsa de Empleo</h1>
        <nav>
          <ul>
            <li><a href="./Index">Index</a></li>
            <li><a href="./Services">Servicios</a></li>
            <li><a href="./Login">Login</a></li>
            <li><a href="./Register">Registro</a></li>
            <li><a href="#terminos">Términos y Condiciones</a></li>
            <li><a href="#privacidad">Políticas de Privacidad</a></li>
            <li><a href="#contacto">Contáctanos</a></li>
            <li><a href="#nosotros">Quiénes Somos</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
