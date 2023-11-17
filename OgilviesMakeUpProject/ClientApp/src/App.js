import React, { useEffect, useState } from "react";
import { Container, Row, Col, Card, CardHeader, CardBody, Button } from "reactstrap";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Sidebar from "react-sidebar";

import ModalProveedor from "./componentes/ModalProveedor";
import TablaProveedor from "./componentes/TablaProveedor";
import ModalProducto from "./componentes/ModalProducto";
import TablaProducto from "./componentes/TablaProducto";

const App = () => {
    const [proveedores, setProveedores] = useState([]);
    const [productos, setProductos] = useState([]);
    const [mostrarModalProveedor, setMostrarModalProveedor] = useState(false);
    const [mostrarModalProducto, setMostrarModalProducto] = useState(false);
    const [editarProveedor, setEditarProveedor] = useState(null);
    const [editarProducto, setEditarProducto] = useState(null);
    const [sidebarOpen, setSidebarOpen] = useState(false);

    const onSetSidebarOpen = (open) => {
        setSidebarOpen(open);
    };

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

    const mostrarProductos = async () => {
        try {
            const data = await fetchData("/api/producto/lista");
            setProductos(data);
        } catch (error) {
            console.error("Error al obtener la lista de productos:", error);
        }
    };

    useEffect(() => {
        mostrarProveedores();
        mostrarProductos();
    }, [mostrarModalProveedor, mostrarModalProducto]);

    const handleGuardarProveedor = async (proveedor) => {
        try {
            await fetchData("api/proveedor/Guardar", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json;charset=utf-8',
                },
                body: JSON.stringify(proveedor),
            });

            setMostrarModalProveedor(false);
        } catch (error) {
            console.error("Error al guardar el proveedor:", error);
        } finally {
            mostrarProveedores();
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

            setMostrarModalProveedor(false);
        } catch (error) {
            console.error("Error al editar el proveedor:", error);
        } finally {
            mostrarProveedores();
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
            mostrarProveedores();
        }
    };

    const handleGuardarProducto = async (producto) => {
        try {
            await fetchData("api/producto/Guardar", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json;charset=utf-8',
                },
                body: JSON.stringify(producto),
            });

            setMostrarModalProducto(false);
        } catch (error) {
            console.error("Error al guardar el producto:", error);
        } finally {
            mostrarProductos();
        }
    };

    const handleEditarProducto = async (producto) => {
        try {
            await fetchData("api/producto/Editar", {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json;charset=utf-8',
                },
                body: JSON.stringify(producto),
            });

            setMostrarModalProducto(false);
        } catch (error) {
            console.error("Error al editar el producto:", error);
        } finally {
            mostrarProductos();
        }
    };

    const handleEliminarProducto = async (id) => {
        const respuesta = window.confirm("¿Desea eliminar el producto?");

        if (!respuesta) {
            return;
        }

        try {
            await fetchData(`api/producto/Eliminar/${id}`, {
                method: 'DELETE',
            });
        } catch (error) {
            console.error("Error al eliminar el producto:", error);
        } finally {
            mostrarProductos();
        }
    };

    return (
        <Router>
            <Sidebar
                sidebar={
                    <div>
                        <h2>Menú</h2>
                        <Link to="/proveedores">Proveedores</Link>
                        <Link to="/productos">Productos</Link>
                    </div>
                }
                open={sidebarOpen}
                onSetOpen={onSetSidebarOpen}
                styles={{ sidebar: { background: "white", width: "200px" } }}
            >
                <Container>
                    <Row>
                        <Col>
                            <Card>
                                <CardHeader>
                                    <Button onClick={() => onSetSidebarOpen(true)}>☰ Menú</Button>
                                    Proveedores
                                </CardHeader>
                                <CardBody>
                                    <Routes>
                                        <Route path="/proveedores" element={
                                            <div>
                                                <Button color="success" onClick={() => setMostrarModalProveedor(true)}>
                                                    Nuevo Proveedor
                                                </Button>
                                                <TablaProveedor
                                                    data={proveedores}
                                                    setEditar={setEditarProveedor}
                                                    mostrarModal={mostrarModalProveedor}
                                                    setMostrarModal={setMostrarModalProveedor}
                                                    eliminarProveedor={handleEliminarProveedor}
                                                />
                                                <ModalProveedor
                                                    mostrarModal={mostrarModalProveedor}
                                                    setMostrarModal={setMostrarModalProveedor}
                                                    guardarProveedor={handleGuardarProveedor}
                                                    editar={editarProveedor}
                                                    setEditar={setEditarProveedor}
                                                    editarProveedor={handleEditarProveedor}
                                                />
                                            </div>
                                        } />
                                        <Route path="/productos" element={
                                            <div>
                                                <Button color="success" onClick={() => setMostrarModalProducto(true)}>
                                                    Nuevo Producto
                                                </Button>
                                                <TablaProducto
                                                    data={productos}
                                                    setEditar={setEditarProducto}
                                                    mostrarModal={mostrarModalProducto}
                                                    setMostrarModal={setMostrarModalProducto}
                                                    eliminarProducto={handleEliminarProducto}
                                                />
                                                <ModalProducto
                                                    mostrarModal={mostrarModalProducto}
                                                    setMostrarModal={setMostrarModalProducto}
                                                    guardarProducto={handleGuardarProducto}
                                                    editar={editarProducto}
                                                    setEditar={setEditarProducto}
                                                    editarProducto={handleEditarProducto}
                                                />
                                            </div>
                                        } />
                                    </Routes>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </Sidebar>
        </Router>
    );
};

export default App;
