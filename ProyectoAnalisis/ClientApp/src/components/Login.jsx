import React, { useState } from 'react';
import "../styles/css/Login.css";
import email_icon from "../styles/Icons/email.png";
import password_icon from "../styles/Icons/password.png";
import person_icon from "../styles/Icons/person.png";
import { useNavigate } from "react-router-dom";

function Login({isLogin}) {
  const navigate = useNavigate();
  const [action, setAction] = useState('Registrarse');
  const [error, setError] = useState(false);
  const [usuario, setUsuario] = useState({ email: '', password: '' });

  // Actualizar estado usuario
  const updateUsuario = (ev) => {
    setUsuario({
      ...usuario,
      [ev.target.name]: ev.target.value
    });
  };

  // Enviar autenticación
  const autenticar = async () => {
    const response = await fetch("/api/Token/iniciarSesion", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(usuario),
    });

    if (response.ok) {
      isLogin(); //el usuario se autentico correctamente
      const data = await response.json();
      const { token } = data;

      localStorage.setItem('token', token); // Almacena el token en localStorage, se usa luego en las solicitudes
      navigate("/"); //redirige a la pagina de inicio
    } else {
      setError(true);
      setTimeout(() => {
        setError(false);
      }, 5000); // Ocultar el mensaje de error después de 5 segundos
    }
  };

  return (
    <div className='container'>
      {error && (
        <div className="alert alert-danger" role="alert">
          Error de inicio de sesión. Por favor, verifique sus credenciales.
        </div>
      )}
      <div className="header">
        <div className="text">{action}</div>
        <div className="underline"> </div>
      </div>
      <div className="inputs">
        <div className="input">
          <img src={person_icon} alt="" />
          <input type="text" placeholder='Nombre' />
        </div>
        <div className="input">
          <img src={email_icon} alt="" />
          <input type="email" name='email' placeholder='Correo electrónico' onChange={(ev) => updateUsuario(ev)} value={usuario.email} />
        </div>
        <div className="input">
          <img src={password_icon} alt="" />
          <input type="password" name='password' placeholder='Contraseña' onChange={(ev) => updateUsuario(ev)} value={usuario.password} />
        </div>
      </div>
      {action === "Registrarse" ? <div></div> :
        <div className="forgot-password">¿Olvidó su contraseña?<span>Recuperar</span></div>}
      <div className="submit-container">
        <div className={action === "Iniciar sesion" ? "submit gray" : "submit"} onClick={() => { setAction("Registrarse") }}>Registrarme</div>
        <div className={action === "Registrarse" ? "submit gray" : "submit"} onClick={() => { setAction("Iniciar sesion") }}>Iniciar sesión</div>
      </div>
    </div>
  );
}

export default Login;
