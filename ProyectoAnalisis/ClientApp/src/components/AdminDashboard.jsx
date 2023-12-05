import React from 'react'
import { Routes, Route } from "react-router-dom";
import FormularioEnvio from "./FormularioEnvio";
import ProveedorPage from "../pages/ProveedorPage";
import ProductoPage from "../pages/ProductoPage";
import ListaPedidos from "./Pedidos";
import ListaEnvios from "./Envios";
import ModificarPedidoForm from "./FormularioPedido";
import CrearConsultaForm from "./CrearConsultaForm";
import ListaConsultas from "./ListaConsultas";
import Sidebar from "../sidebarfiles/Sidebar";
import EditarEnvio from "./EditarEnvio";
import ClientsPage from "../pages/ClientsPage";
import Pagos from "../pages/PaymentPage"
import InventarioPage from '../pages/InventarioPage';
import PedidosPage from '../pages/PedidosPage';

function AdminDashboard({user, logout}) {
    return (
        <div style={{ display: 'flex' }}>
            <Sidebar rol={user.rol} logout={logout} />
            <Routes>
                <Route path="/info" element={<ListaPedidos />}>
                    <Route index element={<ListaPedidos />} />
                </Route>
                <Route path="/productos" element={<ProductoPage />} />
                <Route path="/proveedores" element={<ProveedorPage />} />
                <Route path="/inventario" element={<InventarioPage />} />
                <Route path="/clientes" element={<ClientsPage />} />
                <Route path="/pedido" element={<PedidosPage />} />
                <Route path="/envios" element={<ListaEnvios />} />
                <Route path="/formulario-consulta" element={<CrearConsultaForm />} />
                <Route path="/editar-envio/:idEnvio" element={<EditarEnvio />} />
                <Route path="/consultas" element={<ListaConsultas />} />
                <Route path="/formulario-pedido/:idPedido" element={<ModificarPedidoForm />} />
                <Route path="/formulario-envio/:idPedido" element={<FormularioEnvio />} />
                <Route path="/pagos" element={<Pagos />} />
            </Routes>
        </div>
    )
}

export default AdminDashboard