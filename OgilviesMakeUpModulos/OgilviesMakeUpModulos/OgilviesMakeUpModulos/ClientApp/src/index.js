import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import FormularioEnvio from "./FormularioEnvio";

import ListaPedidos from "./Pedidos";
import Navbar from "./components/NavMenu";
import ListaEnvios from "./Envios";
import ModificarPedidoForm from "./FormularioPedido";
import CrearConsultaForm from "./CrearConsultaForm";
import ListaConsultas from "./ListaConsultas";
import Sidebar from "./components/Sidebar";
import EditarEnvio from "./EditarEnvio";
//SBAdmin2 Style

export default function App() {
  return (
    <BrowserRouter>
     <div style={{ display: 'flex' }}>
      <Sidebar/>
      <Routes>
        <Route path="/" element={<ListaPedidos />}>
        <Route index element={<ListaPedidos />} />
        </Route>
        <Route path="/pedidos" element={<ListaPedidos />}/>
        <Route path="/envios" element={<ListaEnvios />}/>
        <Route path="/formulario-consulta" element={<CrearConsultaForm />}/>
        <Route path="/editar-envio/:idEnvio" element={<EditarEnvio />}/>
        <Route path="/consultas" element={<ListaConsultas />}/>
        <Route path="/formulario-pedido/:idPedido" element={<ModificarPedidoForm />}/>
        <Route path="/formulario-envio/:idPedido" element={<FormularioEnvio />}/>
      </Routes>
      </div>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);