import React from "react";
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import ClientsPage from "./pages/ClientsPage";



function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" exact>Aqui es la pagina de inicio</Route>
                <Route path="/clientes" element={<ClientsPage/>}/>
            </Routes>
        </Router>
    );
}

export default App;