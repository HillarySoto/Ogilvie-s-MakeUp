import React, { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom/client";
import Login from "./components/Login";
import AdminDashboard from './components/AdminDashboard';
import ClientDashboard from './components/ClientDashboard';
import { jwtDecode } from "jwt-decode";//decode token


// SBAdmin2 Style

export default function App() {

    const [user, setUser] = useState({ id: 0, correo: '', rol: '' });

    const [isAuthenticated, setIsAuthenticated] = useState(false);

    const isLogin = () => {

        const token = localStorage.getItem('token'); //obtener token

        //obtner datos del token para el usuario
        if (token) { 
            const decoded = jwtDecode(token);

            setUser({
                id: decoded.id,
                correo: decoded.correo,
                rol: decoded['http://schemas.microsoft.com/ws/2008/06/identity/claims/role']
            });

            console.log(decoded);
        }
        setIsAuthenticated(true);

    };

    const handleLogout = () => {

        // Una vez cerrada la sesión, actualiza el estado
        setIsAuthenticated(false);
    };

    //retorno de renderizacion de componentes
    return (
        <BrowserRouter>
            {isAuthenticated ? (
                <div>
                    {user.rol === "Admin" ? (
                        <div >
                            <AdminDashboard user={user}/>
                        </div>
                    ) : (
                        <ClientDashboard user={user}/>
                    )}

                </div>
            ) : (
                <Login onLogin={isLogin} />
            )}
        </BrowserRouter>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
