import React, { useState, useEffect } from 'react';
import { Table, Button } from "reactstrap";
import { parseISO, format } from 'date-fns';

function formatearFecha(fecha) {
    const date = new Date(fecha);
    const dia = date.getDate();
    const mes = date.getMonth() + 1;
    const anio = date.getFullYear();
    return `${dia}-${mes < 10 ? "0" : ""}${mes}-${anio}`;
}

const TablaPedidos = ({ data, setEditarPedido, mostrarModalPedido, setMostrarModalPedido, deletePedido, getDetallesPedido, getPedidos, user }) => {
    const itemsPerPage = 10;
    const [currentPage, setCurrentPage] = useState(1);

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

    const paginate = pageNumber => setCurrentPage(pageNumber);

    const enviarDatos = (pedido) => {
        pedido.fechaRegistro = parseISO(pedido.fechaRegistro);
        setEditarPedido(pedido);
        setMostrarModalPedido(!mostrarModalPedido);

        getPedidos();
    };


    return (
        <div>
            <Table striped responsive>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Cliente</th>
                        <th>Fecha Registro</th>
                        <th>Monto total</th>
                        <th>Estado</th>
                        <th>Ver Detalles</th>
                        <th>Opciones</th>
                    </tr>
                </thead>

                <tbody>
                    {currentItems.length < 1 ? (
                        <tr>
                            <td colSpan="7">Sin REGISTROS</td>
                        </tr>
                    ) : (
                            currentItems
                                .filter((item) => {
                                    if (user.rol == "Admin") {
                                        return true; // Mostrar todos los elementos para el administrador
                                    } else {
                                        return item.idCliente == user.id;
                                    }
                                })
                                .map((pedido, index) => (
                                <tr key={pedido.id}>
                                    <td>{index + 1 + (currentPage - 1) * itemsPerPage}</td>
                                    <td>{pedido.nombreCliente}</td>
                                    <td>{formatearFecha(pedido.fechaRegistro)}</td>
                                    <td>₡ {pedido.total}</td>
                                    <td>
                                        {pedido.estado === 0 ? "Inactivo" :
                                            pedido.estado === 1 ? "Solicitado" :
                                                pedido.estado === 2 ? "Pagado" :
                                                    pedido.estado === 3 ? "Confirmado" :
                                                        pedido.estado === 4 ? "Enviado" :
                                                            pedido.estado === 5 ? "Devuelto" : ""}
                                    </td>
                                    <td>
                                        <Button color="secondary" size="sm" className="me-2" onClick={() => getDetallesPedido(pedido.id)}> Detalles Orden </Button>
                                    </td>
                                    <td>
                                        <Button color="primary" size="sm" className="me-2" onClick={() => enviarDatos(pedido)}> Editar </Button>
                                        <Button color="danger" size="sm" onClick={() => deletePedido(pedido.id)}> Eliminar </Button>
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

export default TablaPedidos;
