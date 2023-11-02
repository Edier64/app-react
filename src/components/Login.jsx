import React, { useState } from 'react';
import { connect } from '../BD/Supabase.ts'; 
import Header from './Header';
import './Header.css'; 

function Login() {
  const supabase = connect(); 

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const { user, session, error } = await supabase.auth.signIn({
        email,
        password,
      });

      if (error) {
        console.error('Error al iniciar sesión:', error.message);
      } else {
        console.log('Inicio de sesión exitoso. Usuario:', user);
      }
    } catch (error) {
      console.error('Error al iniciar sesión:', error.message);
    }
  }

  return (
    <div className="Login">
      <Header />
      <section id="login" className="section-init">
        <div className="container">
          <h2>Login</h2>
          <form onSubmit={handleLogin}>
            <label htmlFor="email">Correo Electrónico</label>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <label htmlFor="password">Contraseña</label>
            <input
              type="password"
              id="password"
              name="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

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
