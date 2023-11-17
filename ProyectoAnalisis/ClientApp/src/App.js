import React from "react";
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import ClientsPage from "./pages/ClientsPage";
import PaymentPage from "./pages/PaymentPage";
import TablaPagos from "./components/TablaPagos";



function App() {
    return (
        <Router>
            <Routes>
                <Route path="/clientes" element={<ClientsPage/>}/>
                <Route path="/pago" element={<PaymentPage/>}/>
                <Route path="/admin/listapagos" element={TablaPagos}/>
            </Routes>
        </Router>
    );
}

export default App;