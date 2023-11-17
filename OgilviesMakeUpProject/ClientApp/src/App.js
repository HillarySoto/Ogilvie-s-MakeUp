import React, { useEffect, useState } from "react";
import { Container, Row, Col, Card, CardHeader, CardBody, Button } from "reactstrap";
import { BrowserRouter as Router } from "react-router-dom";
import ModalProveedor from "./componentes/ModalProveedor";
import TablaProveedor from "./componentes/TablaProveedor";

const App = () => {
    const [proveedores, setProveedores] = useState([]);
    const [mostrarModal, setMostrarModal] = useState(false);
    const [editar, setEditar] = useState(null);

    const fetchData = async (url, options = {}) => {
        try {
            const response = await fetch(url, options);

            if (!response.ok) {
                throw new Error(`Error en la solicitud: ${response.statusText}`);
            }

            return await response.json();
        } catch (error) {
            console.error(`Error en la solicitud: ${error.message}`);
            throw error;
        }
    };

    const mostrarProveedores = async () => {
        try {
            const data = await fetchData("/api/proveedor/lista");
            setProveedores(data);
        } catch (error) {
            console.error("Error al obtener la lista de proveedores:", error);
        }
    };

    useEffect(() => {
        mostrarProveedores();
    }, [mostrarModal]); // <-- Agregado mostrarModal como dependencia

    const handleGuardarProveedor = async (proveedor) => {
        try {
            await fetchData("api/proveedor/Guardar", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json;charset=utf-8',
                },
                body: JSON.stringify(proveedor),
            });

            setMostrarModal(false);
        } catch (error) {
            console.error("Error al guardar el proveedor:", error);
        } finally {
            mostrarProveedores(); // <-- Llamar a mostrarProveedores después de la operación asincrónica
        }
    };

    const handleEditarProveedor = async (proveedor) => {
        try {
            await fetchData("api/proveedor/Editar", {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json;charset=utf-8',
                },
                body: JSON.stringify(proveedor),
            });

            setMostrarModal(false);
        } catch (error) {
            console.error("Error al editar el proveedor:", error);
        } finally {
            mostrarProveedores(); // <-- Llamar a mostrarProveedores después de la operación asincrónica
        }
    };

    const handleEliminarProveedor = async (id) => {
        const respuesta = window.confirm("¿Desea eliminar el proveedor?");

        if (!respuesta) {
            return;
        }

        try {
            await fetchData(`api/proveedor/Eliminar/${id}`, {
                method: 'DELETE',
            });
        } catch (error) {
            console.error("Error al eliminar el proveedor:", error);
        } finally {
            mostrarProveedores(); // <-- Llamar a mostrarProveedores después de la operación asincrónica
        }
    };

    return (
        <Router>
            <Container>
                <Row>
                    <Col>
                        <Card>
                            <CardHeader>Proveedores</CardHeader>
                            <CardBody>
                                <Button color="success" onClick={() => setMostrarModal(true)}>
                                    Nuevo Proveedor
                                </Button>
                                <TablaProveedor
                                    data={proveedores}
                                    setEditar={setEditar}
                                    mostrarModal={mostrarModal}
                                    setMostrarModal={setMostrarModal}
                                    eliminarProveedor={handleEliminarProveedor}
                                />
                                <ModalProveedor
                                    mostrarModal={mostrarModal}
                                    setMostrarModal={setMostrarModal}
                                    guardarProveedor={handleGuardarProveedor}
                                    editar={editar}
                                    setEditar={setEditar}
                                    editarProveedor={handleEditarProveedor}
                                />
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </Router>
    );
};

export default App;
