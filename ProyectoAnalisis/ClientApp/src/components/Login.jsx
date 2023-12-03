import React, { useState } from 'react';
import "../styles/css/Login.css";
import email_icon from "../styles/Icons/email.png";
import password_icon from "../styles/Icons/password.png";
import person_icon from "../styles/Icons/person.png";
import { useNavigate } from "react-router-dom";
import { Container, Row, Col } from 'reactstrap';

function Login({ onLogin }) {
  //estados 
  const navigate = useNavigate();
  const [action, setAction] = useState('Iniciar sesion');
  const [error, setError] = useState(false);
  const [usuario, setUsuario] = useState({ email: '', password: '' });

  // Actualizar estado usuario
  const updateUsuario = (ev) => {
    setUsuario({
      ...usuario,
      [ev.target.name]: ev.target.value

    });
  };

  // verificar autenticación
  const autenticar = async () => {
    const response = await fetch("/api/Token/iniciarSesion", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(usuario),
    });

    if (response.ok) {

      const data = await response.json();
      const { token } = data;
      localStorage.setItem('token', token); // Almacena el token en localStorage, se usa luego en las solicitudes
      onLogin(); //el usuario se autentico correctamente
      navigate("/"); //redirige a la pagina de inicio

    } else {
      setError(true);
      setTimeout(() => {
        setError(false);
      }, 5000); // Ocultar el mensaje de error después de 5 segundos
      console.log(response);
    }
  };



  return (

    <div className='login-body'>
      <div className='login-container'>
        {error && (
          <div className="alert alert-danger" role="alert">
            Error! Credenciales incorrectas.
          </div>
        )}
        <div className="login-header">
          <div className="login-text">{action}</div>
          <div className="login-underline"> </div>
        </div>
        <div className="login-inputs">
          <div className="login-input">
            <img src={email_icon} alt="" />
            <input type="email" name='email' placeholder='Correo electrónico' onChange={(ev) => updateUsuario(ev)} value={usuario.email} />
          </div>
          <div className="login-input">
            <img src={password_icon} alt="" />
            <input type="password" name='password' placeholder='Contraseña' onChange={(ev) => updateUsuario(ev)} value={usuario.password} />
          </div>
        </div>
        {action === "Registrarse" ? <div></div> :
          <div className="login-forgot-password">¿Olvidó su contraseña?{' '}<span>Recuperar</span></div>}
        <div className="login-submit-container">
          {/*<div className={action === "Iniciar sesion" ? "submit gray" : "submit"} onClick={() => { setAction("Registrarse") }}>Registrarme</div>*/}
          <div className={action === "Registrarse" ? "login-submit gray" : "login-submit"} onClick={() => {
            autenticar();
            console.log(usuario.email, usuario.password);
            setAction("Iniciar sesion")
          }}>Iniciar sesión</div>
        </div>
      </div>

    </div>

  );
}

export default Login;
