import React, { useEffect, useState } from "react";
import { Col, Container, Row, Button } from "reactstrap";
import TablaClientes from "../components/TablaClientes";
import FormularioCliente from "../components/FormularioCliente";
import { mostrarClientes, saveClient, eliminarCliente, updateClient } from "../services/ClienteServicio";
import Footer from "../components/footer";

const ClientsPage = () => {
    const [clients, setClients] = useState([]);
    const [update, setUpdate] = useState(null);
    const [showForm, setShowForm] = useState(false);

    // Consume el servicio mostrarClientes
    const getClients = async () => {
        const data = await mostrarClientes();
        setClients(data);
    };

    // Actualizar cliente
    const updClient = async (client) => {
        const rs = await updateClient(client.id, client);
        if (rs) {
            getClients();
        }
        setShowForm(!showForm);
        setUpdate(null);
    };

    // Eliminar cliente
    const deleteClient = async (id) => {
        const result = await eliminarCliente(id);
        if (result) {
            getClients();
        }
    };

    // Actualizar el estado de clients(lista de clientes)
    useEffect(() => {
        getClients();
    }, [clients]);

    return (
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
            <Container>
                <Row className="mt-5">
                    <Col sm="12">
                        <div>
                            {showForm ? (
                                <FormularioCliente
                                    showForm={showForm}
                                    setShowForm={setShowForm}
                                    saveClient={saveClient}
                                    update={update}
                                    setUpdate={setUpdate}
                                    updClient={updClient}
                                />
                            ) : (
                                <>
                                    <div className="d-flex justify-content-between mb-5">
                                        <h2>Registro de clientes</h2>
                                        <Button
                                            size="sm-13"
                                            color="success"
                                            onClick={() => setShowForm(!showForm)}
                                            style={{ marginRight: '26px' }}
                                        >
                                            Registrar Cliente
                                        </Button>
                                    </div>
                                    <TablaClientes
                                        data={clients}
                                        setUpdate={setUpdate}
                                        showForm={showForm}
                                        setShowForm={setShowForm}
                                        deleteClient={deleteClient}
                                    />
                                </>
                            )}
                        </div>
                    </Col>
                </Row>
            </Container>
            <Footer />
        </div>
    );
};

export default ClientsPage;
