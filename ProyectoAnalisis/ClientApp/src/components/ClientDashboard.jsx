import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ClientHome from './ClientHome'; //ruta de prueba nomas
import Sidebar from "../sidebarfiles/Sidebar";

import CarritoPage from '../pages/CarritoPage';
import PedidosPage from '../pages/PedidosPage';

const ClientDashboard = ({ user }) => {
    return (
        <div style={{ display: 'flex' }}>
            <Sidebar rol={user.rol} />
            <Routes>
                <Route path="/vistaclientes" element={<ClientHome />} />
                <Route path="/carrito" element={<CarritoPage user={user} />} />
                <Route path="/pedido" element={<PedidosPage user={user} />} />

                {/* Otras rutas para el cliente */}
            </Routes>
        </div>
    );
};

export default ClientDashboard;
