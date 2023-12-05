import { useEffect, useState } from "react";
import { Container, Row, Col, Button } from "reactstrap";
import TablaCarrito from "../components/TablaCarrito";
import ModalCarrito from "../components/ModalCarrito";


import { mostrarCarrito, addToCart, editarProductoCarrito, eliminarProductoCarrito, listarProductos, crearPedidoDesdeCarrito } from "../services/CarritoServicio";



const CarritoPage = ({ user }) => {


    const [Carrito, setCarrito] = useState([])
    const [editarCarrito, setEditarCarrito] = useState(null)
    const [mostrarModalCarrito, setMostrarModalCarrito] = useState(false)



    const [productos, setProductos] = useState([])




    const getCarrito = async () => {
        const data = await mostrarCarrito(user.id); // Llama al servicio
        setCarrito(data);
    };


    // Consume el servicio mostrarInvenatrio
    const getProductos = async () => {
        const data = await listarProductos(); // Llama al servicio
        setProductos(data);
    };



    const actualizarCarrito = async (carrito) => {
        const rs = await editarProductoCarrito(carrito);
        if (rs) {
            getCarrito();
        }
        setMostrarModalCarrito(false);  // Cierra el modal
        setEditarCarrito(null);
    };


    const crearPedido = async (idCliente) => {

        if (Carrito.length < 1
        ) {
            console.log('El carrito está vacío. No se puede crear un pedido.');
            return;
        }

        const rs = await crearPedidoDesdeCarrito(idCliente);
        if (rs) {
            getCarrito();
        }
    };




    // Elimina inventario
    const deleteCarrito = async (id) => {
        const result = await eliminarProductoCarrito(id);
        if (result) {
            getCarrito();
        }
    };


    const validarProductoEnCarrito = (productoId) => {
        const productoExistente = Carrito.find(item => item.idProducto == productoId);
        return productoExistente;
    };






    // Actualiza el estado de inventario (lista de inventario)
    useEffect(() => {
        getCarrito();
        getProductos();
    }, []);








    return (
        <Container>
            <Row className="mt-5">
                <Col sm="12">
                    <div>
                        {mostrarModalCarrito ? (
                            <ModalCarrito
                                mostrarModalCarrito={mostrarModalCarrito}
                                setMostrarModalCarrito={setMostrarModalCarrito}
                                addToCart={addToCart}
                                editarCarrito={editarCarrito}  // para mostrar toda la info en el formulario
                                setEditarCarrito={setEditarCarrito}
                                actualizarCarrito={actualizarCarrito}
                                listaProductos={productos}
                                getCarrito={getCarrito}
                                user={user}
                                validarProductoEnCarrito={validarProductoEnCarrito}
                            />
                        ) : (
                            <>
                                <div className="d-flex justify-content-between mb-5">
                                        <h2>Carrito de compras</h2>
                                        <Button
                                            size="sm-13"
                                            color="success"
                                            onClick={() => setMostrarModalCarrito(!mostrarModalCarrito)}
                                            style={{ marginRight: "55px" }}
                                        >
                                            Agregar producto la carrito

                                        </Button>
                                    <Button
                                        size="sm-13"
                                        color="success"
                                            onClick={() => crearPedido(parseInt(user.id, 10))}
                                        style={{ marginRight: "55px" }}
                                    >
                                        Crear Pedido
                                    </Button>
                                </div>
                                    <TablaCarrito
                                        data={Carrito}
                                        setEditarCarrito={setEditarCarrito}
                                        mostrarModalCarrito={mostrarModalCarrito}
                                        setMostrarModalCarrito={setMostrarModalCarrito}
                                        deleteCarrito={deleteCarrito}
                                        user={user}
                                />
                            </>
                        )}
                    </div>
                </Col>
            </Row>
        </Container>
    );
}


export default CarritoPage;