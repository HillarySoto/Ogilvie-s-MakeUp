import React, { useState } from 'react';
import { Table, Button } from "reactstrap";

const TablaDetalelsPedidos = ({ data, setEditarDetallePedido, mostrarModalDetalle, setMostrarModalDetalle, eliminarDetalles, getDetallesPedido, user }) => {

    const itemsPerPage = 10;
    const [currentPage, setCurrentPage] = useState(1);

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

    const paginate = pageNumber => setCurrentPage(pageNumber);




    const cargarPedido = () => {

        const datosAEnviar = {
            id: 0,
            idPedido: currentItems[0].idPedido,  // Utiliza la variable idPedidoEnviar
            idProducto: 0,
            cantidad: 0,
            subTotal: 0,
        };
        setEditarDetallePedido(datosAEnviar);
        setMostrarModalDetalle(!mostrarModalDetalle);

    };



    const enviarDatos = (detallesPedido) => {
        setEditarDetallePedido(detallesPedido);
        setMostrarModalDetalle(!mostrarModalDetalle);
        getDetallesPedido(detallesPedido.idPedido);
    };

    return (

        <div>
            <div className="d-flex justify-content-between mb-5">
                <h2>Detalles del Pedido</h2>
                <Button
                    size="sm-13"
                    color="success"
                    onClick={() => cargarPedido()}
                    style={{ marginRight: "55px" }}
                >
                    Agregar producto a la orden
                </Button>
            </div>
            <Table striped responsive>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Producto</th>
                        <th>Marca</th>
                        <th>Cantidad</th>
                        <th>Subtotal</th>
                        <th>Opciones</th>
                    </tr>
                </thead>

                <tbody>
                    {currentItems.length < 1 ? (
                        <tr>
                            <td colSpan="7">Sin REGISTROS</td>
                        </tr>
                    ) : (
                        currentItems.map((detallesPedido, index) => (
                            <tr key={detallesPedido.id}>
                                <td>{index + 1 + (currentPage - 1) * itemsPerPage}</td>
                                <td>{detallesPedido.nombreProducto}</td>
                                <td>{detallesPedido.marcaProducto}</td>
                                <td>{detallesPedido.cantidad}</td>
                                <td>₡ {detallesPedido.subtotal}</td>
                                <td>
                                    <Button color="primary" size="sm" className="me-2" onClick={() => enviarDatos(detallesPedido)}> Editar </Button>
                                    <Button color="danger" size="sm" onClick={() => eliminarDetalles(detallesPedido.id)}> Eliminar </Button>
                                </td>
                            </tr>
                        ))
                    )}
                </tbody>
            </Table>
            <div>
                {data.length > itemsPerPage && (
                    <ul className="pagination">
                        {[...Array(Math.ceil(data.length / itemsPerPage))].map((_, index) => (
                            <li key={index} className={`page-item ${currentPage === index + 1 ? 'active' : ''}`}>
                                <button className="page-link" onClick={() => paginate(index + 1)}>
                                    {index + 1}
                                </button>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    );
};

export default TablaDetalelsPedidos;
