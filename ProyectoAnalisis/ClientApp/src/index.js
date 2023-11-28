import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import FormularioEnvio from "./components/FormularioEnvio";
import ProveedorPage from "./pages/ProveedorPage";
import ListaPedidos from "./components/Pedidos";
import Navbar from "./sidebarfiles/NavMenu";
import ListaEnvios from "./components/Envios";
import ModificarPedidoForm from "./components/FormularioPedido";
import CrearConsultaForm from "./components/CrearConsultaForm";
import ListaConsultas from "./components/ListaConsultas";
import Sidebar from "./sidebarfiles/Sidebar";
import EditarEnvio from "./components/EditarEnvio";
import ClientsPage from "./pages/ClientsPage";
import Login from "./components/Login";

//SBAdmin2 Style

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route
          path="/principal"
          element={
            <div style={{ display: 'flex' }}>
              <Sidebar />
              <Routes>
                <Route index element={<ListaPedidos />} />
                <Route path="/proveedores" element={<ProveedorPage />} />
                <Route
                  path="/clientes"
                  element={
                    <ClientsPage/>
                  }
                />
                <Route path="/pedidos" element={<ListaPedidos />} />
                <Route path="/envios" element={<ListaEnvios />} />
                <Route path="/formulario-consulta" element={<CrearConsultaForm />} />
                <Route path="/editar-envio/:idEnvio" element={<EditarEnvio />} />
                <Route path="/consultas" element={<ListaConsultas />} />
                <Route path="/formulario-pedido/:idPedido" element={<ModificarPedidoForm />} />
                <Route path="/formulario-envio/:idPedido" element={<FormularioEnvio />} />
              </Routes>
            </div>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
