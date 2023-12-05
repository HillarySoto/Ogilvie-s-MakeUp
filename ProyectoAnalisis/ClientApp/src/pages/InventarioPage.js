import { useEffect, useState } from "react";
import { Container, Row, Col, Button } from "reactstrap";
import ModalInventario from "../components/ModalInventario";
import TablaInventario from "../components/TablaInventario";
import { mostrarInventario, guardarInventario, editarInventario, eliminarInventario, listarProductos } from "../services/InventarioServicio";


const InventarioPage = () => {

    const [inventarios, setInventarios] = useState([])
    const [editar, setEditar] = useState(null)
    const [mostrarModal, setMostrarModal] = useState(false)



    const [productos, setProductos] = useState([])




    // Consume el servicio mostrarInvenatrio
    const getInventario = async () => {
        const data = await mostrarInventario(); // Llama al servicio
        setInventarios(data);
    };


    // Consume el servicio mostrarInvenatrio
    const getProductos = async () => {
        const data = await listarProductos(); // Llama al servicio
        setProductos(data);
    };


    const updInventario = async (inventario) => {
        const rs = await editarInventario(inventario);
        if (rs) {
            getInventario();
        }
        setMostrarModal(false);  // Cierra el modal
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
        getProductos();
    }, []);





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
                                listaProductos={productos}
                                getInventario={getInventario}
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