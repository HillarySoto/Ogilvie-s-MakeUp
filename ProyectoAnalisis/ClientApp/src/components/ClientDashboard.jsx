import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ClientHome from './ClientHome'; //ruta de prueba nomas
import Sidebar from "../sidebarfiles/Sidebar";

const ClientDashboard = ({user}) => {
    return (
        <div style={{ display: 'flex' }}>
            <Sidebar rol={user.rol} />
            <Routes>
                <Route path="/vistaclientes" element={<ClientHome />} />
                {/* Otras rutas para el cliente */}
            </Routes>
        </div>
    );
};

export default ClientDashboard;
