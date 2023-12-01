import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import FormularioEnvio from "./components/FormularioEnvio";
import ProveedorPage from "./pages/ProveedorPage";
import ProductoPage from "./pages/ProductoPage";
import ListaPedidos from "./components/Pedidos";
import ListaEnvios from "./components/Envios";
import ModificarPedidoForm from "./components/FormularioPedido";
import CrearConsultaForm from "./components/CrearConsultaForm";
import ListaConsultas from "./components/ListaConsultas";
import Sidebar from "./sidebarfiles/Sidebar";
import EditarEnvio from "./components/EditarEnvio";
import ClientsPage from "./pages/ClientsPage";
import Pagos from "./pages/PaymentPage"
import InventarioPage from "./pages/InventarioPage";
import Login from "./components/Login";

// SBAdmin2 Style

export default function App() {

    const [isAuthenticated, setIsAuthenticated] = useState(false);

    const isLogin = () => {
 
        setIsAuthenticated(true);
    };

    const handleLogout = () => {

        // Una vez cerrada la sesión, actualiza el estado
        setIsAuthenticated(false);
    };

    return (
        <BrowserRouter>
            {isAuthenticated ? (
                <div style={{ display: 'flex' }}>
                    <Sidebar />
                    <Routes>
                        <Route path="/" element={<ListaPedidos />}>
                            <Route index element={<ListaPedidos />} />
                        </Route>
                        <Route path="/productos" element={<ProductoPage />} />
                        <Route path="/proveedores" element={<ProveedorPage />} />
                        <Route path="/inventario" element={<InventarioPage />} />
                        <Route path="/clientes" element={<ClientsPage />} />
                        <Route path="/pedidos" element={<ListaPedidos />} />
                        <Route path="/envios" element={<ListaEnvios />} />
                        <Route path="/formulario-consulta" element={<CrearConsultaForm />} />
                        <Route path="/editar-envio/:idEnvio" element={<EditarEnvio />} />
                        <Route path="/consultas" element={<ListaConsultas />} />
                        <Route path="/formulario-pedido/:idPedido" element={<ModificarPedidoForm />} />
                        <Route path="/formulario-envio/:idPedido" element={<FormularioEnvio />} />
                        <Route path="/pagos" element={<Pagos />} />
                    </Routes>
                </div>
            ) : (
                <Login onLogin={isLogin} />
            )}
        </BrowserRouter>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
