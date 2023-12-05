import React, { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import ReactDOM from "react-dom/client";
import Login from "./components/Login";
import AdminDashboard from './components/AdminDashboard';
import ClientDashboard from './components/ClientDashboard';
import { jwtDecode } from "jwt-decode"; // decode token

export default function App() {
    const [user, setUser] = useState({ id: 0, correo: '', rol: '' });
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    const checkAuthentication = () => {
        const token = localStorage.getItem('token');

        //decodifica el token y obtiene info
        if (token) {
            const decoded = jwtDecode(token);
            setUser({
                id: decoded.id,
                correo: decoded.correo,
                rol: decoded['http://schemas.microsoft.com/ws/2008/06/identity/claims/role']
            });
            setIsAuthenticated(true);
        } else {
            setIsAuthenticated(false);
        }
    };


    const logout = () => {
        localStorage.removeItem('token');
        setUser(null);
        setIsAuthenticated(false);
    };

    return (
        <BrowserRouter>
            {isAuthenticated ? (
                <div>
                    {user.rol === "Admin" ? (
                        <div >
                            <AdminDashboard user={user} logout={logout} />
                        </div>
                    ) : (
                        <ClientDashboard user={user} logout={logout} />
                    )}
                </div>
            ) : (
                <Routes>
                    <Route path="/" element={<Login onLogin={checkAuthentication} />} >
                    </Route>
                    {/* Si el usuario no está autenticado, redirige a la página de inicio de sesión */}
                    <Route path="/*" element={<Navigate to="/" />} />
                </Routes>
            )}
        </BrowserRouter>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);