import React from "react";
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import ClientsPage from "./pages/ClientsPage";
import PaymentPage from "./pages/PaymentPage";



function App() {
    return (
        <Router>
            <Routes>
                <Route path="/clientes" element={<ClientsPage/>}/>
                <Route path="/pago" element={<PaymentPage/>}/>
            </Routes>
        </Router>
    );
}

export default App;