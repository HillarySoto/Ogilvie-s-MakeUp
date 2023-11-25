// Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">
      {/* Navbar content */}
      <Link to="/" className="navbar-brand">Ogilvies Make Up</Link>
      <Link to="/envios" className="navbar-brand">Envios</Link>
    
      <Link to="/formulario-consulta" className="navbar-brand">Atencion al cliente</Link>
      <Link to="/consultas" className="navbar-brand">Lista Consultas</Link>

      {/* Other Navbar elements */}
    </nav>
  );
};

export default Navbar;
