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
    const [token, setToken] = useState(localStorage.getItem('token'));

    const checkAuthentication = () => {

        const jwtoken = localStorage.getItem('token');

        //decodifica el token y obtiene su info
        if (jwtoken) {
            const decoded = jwtDecode(jwtoken);
            setUser({
                id: decoded.id,
                correo: decoded.correo,
                rol: decoded['http://schemas.microsoft.com/ws/2008/06/identity/claims/role']
            });
            setToken(jwtoken)
        } else {
            setToken(null);
        }
    };


    const logout = () => {
        localStorage.removeItem('token');
        setUser(null);
        setIsAuthenticated(false);
        setToken(null);
    };

    return (
        <BrowserRouter>
            {token ? (
                <div>
                    <AdminDashboard user={user} logout={logout} />
                    {user.rol === "Admin" ? (
                        <div >                            
                        </div>
                    ) : (
                        <ClientDashboard user={user} logout={logout} />
                    )}
                </div>
            ) : (
                <Routes>
                    <Route path="/" element={<Login onLogin={checkAuthentication} />} >
                    </Route>
                </Routes>
            )}
        </BrowserRouter>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);