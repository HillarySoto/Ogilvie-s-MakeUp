import React, { useEffect, useState } from "react";
import { Container, Row, Col, Button } from "reactstrap";
import ModalInventario from "../components/ModalInventario";
import TablaInventario from "../components/TablaInventario";
import { mostrarInventario, guardarInventario, editarInventario, eliminarInventario } from "../services/InventarioServicio";

const InventarioPage = () => {
    const [inventarios, setInventarios] = useState([])
    const [editar, setEditar] = useState(null)
    const [mostrarModal, setMostrarModal] = useState(false)


    // Consume el servicio mostrarInvenatrio
    const getInventario = async () => {
        const data = await mostrarInventario(); // Llama al servicio
        setInventarios(data);
    };

    // Actualiza inventario
    const updInventario = async (inventario) => {
        const rs = await editarInventario(inventario.id, inventario);
        if (rs) {
            getInventario();
        }
        setMostrarModal(!mostrarModal);
        setEditar(null);
    };

    // Elimina inventario
    const deleteInventario = async (id) => {
        const result = await eliminarInventario(id);
        if (result) {
            getInventario();
        }
    };

    // Actualiza el estado de inventario (lista de inventario)
    useEffect(() => {
        getInventario();
    }, [inventarios]);


    return (
        <Container>
            <Row className="mt-5">
                <Col sm="12">
                    <div>
                        {mostrarModal ? (
                            <ModalInventario
                                mostrarModal={mostrarModal}
                                setMostrarModal={setMostrarModal}
                                guardarInventario={guardarInventario}
                                editar={editar}  // para mostrar toda la info en el formulario
                                setEditar={setEditar}
                                editarInventario={updInventario}
                            />
                        ) : (
                            <>
                                <div className="d-flex justify-content-between mb-5">
                                    <h2>Registro Inventario</h2>
                                    <Button
                                        size="sm-13"
                                        color="success"
                                        onClick={() => setMostrarModal(!mostrarModal)}
                                        style={{ marginRight: "55px" }}
                                    >
                                        Registrar Inventario
                                    </Button>
                                </div>
                                <TablaInventario

                                    data={inventarios}
                                    setEditar={setEditar}
                                    mostrarModal={mostrarModal}
                                    setMostrarModal={setMostrarModal}
                                    eliminarInventario={deleteInventario}
                                />
                            </>
                        )}
                    </div>
                </Col>
            </Row>
        </Container>
    );
};


export default InventarioPage;