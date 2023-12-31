import { useEffect, useState } from "react";
import { Container, Row, Col, Button } from "reactstrap";
import TablaPedidos from "../components/TablaPedidos";
import TablaDetallesPedidos from "../components/TablaDetallesPedidos";
import ModalDetallesPedido from "../components/ModalDetalles";

import { mostrarPedidos, guardarPedido, editarPedido, eliminarPedido, } from "../services/PedidosServicio";
import { mostrarDetallesPedidos, guardarDetalleProducto, editarDetallesPedido, eliminarDetallesPedido, listarProductos, actualizarTotalPedido, } from "../services/DetallesPedidoServicio";



const PedidoPage = ({ user }) => {

    //para administrar los pedidos
    const [pedidos, setPedidos] = useState([]);
    const [editarPedidos, setEditarPedido] = useState(null);
    const [mostrarModalPedido, setMostrarModalPedido] = useState(false);


    //para administrar los detalles de compra en pedido
    const [detallePedido, setDetallePedido] = useState([]);
    const [editarDetallePedido, setEditarDetallePedido] = useState(null);
    const [mostrarModalDetalle, setMostrarModalDetalle] = useState(false);


    const [mostrarDetalles, setMostrarDetalles] = useState(false);


    //para uso como lista
    const [productos, setProductos] = useState([])




    // Consume el servicio mostrarPedidos
    const getPedidos = async () => {
        const data = await mostrarPedidos(); // Llama al servicio
        setPedidos(data);
    };



    // Actualiza Total del Pedido
    const actualizarMontoTotalPedido = async (id) => {
        const rs = await actualizarTotalPedido(id);
        if (rs) {
            getPedidos();
        }
        setMostrarModalPedido(!mostrarModalPedido);
        setEditarPedido(null);
    };


    // Actualiza Pedido
    const actualizarPedido = async (pedido) => {
        const rs = await editarPedido(pedido.id, pedido);
        if (rs) {
            getPedidos();
        }
        setMostrarModalPedido(!mostrarModalPedido);
        setEditarPedido(null);
    };


    // Eliminar Pedido
    const deletePedido = async (idPedio) => {
        const result = await eliminarPedido(idPedio);
        if (result) {
            getPedidos();
        }
    };






    // Consume el servicio mostrarInvenatrio
    const getProductos = async () => {
        const data = await listarProductos(); // Llama al servicio
        setProductos(data);
    };







    // Consume el servicio mostrarDetallesPedidos
    const getDetallesPedido = async (id) => {
        const data = await mostrarDetallesPedidos(id);
        console.log(data);
        setDetallePedido(data);
        setMostrarDetalles(true);
    };


    // Actualiza detallesPedido
    const actualizarDetallesPedido = async (detallesPedido) => {
        const rs = await editarDetallesPedido(detallesPedido);
        if (rs) {
            getDetallesPedido();
        }
        setMostrarModalDetalle(!mostrarModalDetalle);
        setEditarDetallePedido(null);
    };


    // Elimina detalles del pedido
    const eliminarDetalles = async (detallesPedido) => {
        const result = await eliminarDetallesPedido(detallesPedido);
        if (result) {
            getDetallesPedido();
            setMostrarModalDetalle(false);
        }
    };


    // Actualiza el estado de pedidos (lista de pedidos)
    useEffect(() => {
        const fetchData = async () => {
            const pedidosData = await mostrarPedidos();
            const productosData = await listarProductos();

            setPedidos(pedidosData);
            setProductos(productosData);
        };

        fetchData();
    }, []);






    return (
        <Container>
            <Row className="mt-5">
                <Col sm="12">
                    <div>
                        {/*mostrarModalPedido ? (
                           // <ModalPedido
                                //mostrarModal={mostrarModalPedido}
                               // setMostrarModal={setMostrarModalPedido}
                               // guardarPedido={guardarPedido}
                               // editar={editarPedidos}  // para mostrar toda la info en el formulario
                               // setEditarPedido={setEditarPedido}
                               // actualizarPedido={actualizarPedido}

                           // />
                        ) :*/ mostrarModalDetalle ? (
                                <ModalDetallesPedido
                                    mostrarModalDetalle={mostrarModalDetalle}
                                    setMostrarModalDetalle={setMostrarModalDetalle}
                                    guardarDetalleProducto={guardarDetalleProducto}
                                    editarDetallePedido={editarDetallePedido}
                                    setEditarDetallePedido={setEditarDetallePedido}
                                    actualizarDetallesPedido={actualizarDetallesPedido}
                                    listaProductos={productos}
                                    actualizarMontoTotalPedido={actualizarMontoTotalPedido}
                                    getDetallesPedido={getDetallesPedido}
                                    user={user}
                                />


                            ) : mostrarDetalles ? (
                                <>
                                    <TablaDetallesPedidos
                                        data={detallePedido}
                                        setEditarDetallePedido={setEditarDetallePedido}
                                        mostrarModalDetalle={mostrarModalDetalle}
                                        setMostrarModalDetalle={setMostrarModalDetalle}
                                        eliminarDetalles={eliminarDetalles}
                                        getDetallesPedido={getDetallesPedido}
                                        user={user}
                                    />
                                </>
                            ) : (
                                <>
                                    <div className="d-flex justify-content-between mb-5">
                                                <h2>Tabla de Pedidos</h2>
                                    </div>
                                    <TablaPedidos
                                        data={pedidos}
                                        setEditarPedido={setEditarPedido}
                                        mostrarModalPedido={mostrarModalPedido}
                                        setMostrarModalPedido={setMostrarModalPedido}
                                        deletePedido={deletePedido}
                                        getDetallesPedido={getDetallesPedido}
                                        getPedidos={getPedidos}
                                        user={user}
                                    />
                                </>
                            )}
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default PedidoPage;
