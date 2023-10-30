import React from 'react';
import Header from './Header'; // Asegúrate de que el archivo de encabezado sea correcto
import './Header.css'; // Incluye los estilos necesarios

function Login() {
  return (
    <div className="Login">
      <Header />
      <section id="login" className="section-init">
        <div className="container">
          <h2>Login</h2>
          <form>
            <label for="email">Correo Electrónico</label>
            <input type="email" id="email" name="email" required />

            <label for="password">Contraseña</label>
            <input type="password" id="password" name="password" required />

            <button type="submit">Iniciar Sesión</button>
          </form>
        </div>
      </section>

      <footer>
        <div className="container">
          <p>&copy; 2023 Bolsa de Empleo</p>
        </div>
      </footer>
    </div>
  );
}

export default Login;
