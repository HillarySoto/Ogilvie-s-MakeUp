/* eslint-disable eqeqeq */
import React, { useState } from 'react';
import { Table, Button, } from "reactstrap";


const TablaCarrito = ({ data, setEditarCarrito, mostrarModalCarrito, setMostrarModalCarrito, deleteCarrito, user }) => {


    //PARA PAGINACIÓN

    const itemsPerPage = 10;
    const [currentPage, setCurrentPage] = useState(1);

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

    const paginate = pageNumber => setCurrentPage(pageNumber);


    //PARA LOS DATOS

    const enviarDatos = (carrito) => {
        setEditarCarrito(carrito);
        setMostrarModalCarrito(!mostrarModalCarrito);
    };


    return (
        <div>
            <Table striped responsive>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Producto</th>
                        <th>Marca</th>
                        <th>Cantidad</th>
                        <th>Opciones</th>
                    </tr>
                </thead>

                <tbody>
                    {currentItems.length < 1 ? (
                        <tr>
                            <td colSpan="9">Sin REGISTROS</td>
                        </tr>
                    ) : (
                        console.log(data),
                        currentItems.filter((item) => item.idCliente == user.id) // Filtrar por idCliente igual a user.id
                            .map((item, index) => (
                                <tr key={item.id}>
                                    <td>{index + 1 + (currentPage - 1) * itemsPerPage}</td>
                                    <td>{item.nombreProducto}</td>
                                    <td>{item.marcaProducto}</td>
                                    <td>{item.cantidad}</td>
                                    <td>
                                        <Button color="primary" size="sm" className="me-2" onClick={() => enviarDatos(item)}> Editar </Button>
                                        <Button color="danger" size="sm" onClick={() => deleteCarrito(item.id)}> Eliminar </Button>
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

export default TablaCarrito;
