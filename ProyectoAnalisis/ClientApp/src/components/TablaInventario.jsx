import React, { useState } from 'react';
import { Table, Button, } from "reactstrap";
import { parseISO, format } from 'date-fns';

// Esta función toma una fecha (en formato ISO) y la convierte en "dd-MM-yyyy"
function formatearFecha(fecha) {
    const date = new Date(fecha);
    const dia = date.getDate();
    const mes = date.getMonth() + 1; // Se suma 1 porque los meses comienzan en 0
    const anio = date.getFullYear();
    return `${dia}-${mes < 10 ? "0" : ""}${mes}-${anio}`;
}

const TablaInventario = ({ data, setEditar, mostrarModal, setMostrarModal, eliminarInventario, }) => {


    //PARA PAGINACIÓN

    const itemsPerPage = 10;
    const [currentPage, setCurrentPage] = useState(1);

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

    const paginate = pageNumber => setCurrentPage(pageNumber);


    //PARA LOS DATOS

    const enviarDatos = (inventario) => {
        inventario.fechaRegistro = parseISO(inventario.fechaRegistro);
        inventario.fechaCaduca = parseISO(inventario.fechaCaduca);
        setEditar(inventario);
        setMostrarModal(!mostrarModal);
    };

    //PARA DAR COLOR A LAS FILAS

    const getFilaColor = (cantidad) => {
        if (cantidad < 10) {
            return 'table-danger'; // Rojo
        } else if (cantidad < 30) {
            return 'table-warning'; // Amarillo
        } else {
            return ''; // Sin estilo adicional
        }
    };


    return (
        <div>
            <Table striped responsive>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Producto</th>
                        <th>Marca</th>
                        <th>Descripcion</th>
                        <th>Cantidad</th>
                        <th>Fecha Registro</th>
                        <th>Fecha Caducidad</th>
                        <th>Estado</th>
                        <th>Opciones</th>
                    </tr>
                </thead>

                <tbody>
                    {currentItems.length < 1 ? (
                        <tr>
                            <td colSpan="9">Sin REGISTROS</td>
                        </tr>
                    ) : (
                        console.log(data), // Asegúrate de que data tenga la estructura esperada
                            currentItems.map((item, index) => (
                                <tr key={item.id} className={getFilaColor(item.cantidad)}>
                                <td>{index + 1 + (currentPage - 1) * itemsPerPage}</td>
                                <td>{item.nombreProducto}</td>
                                <td>{item.marcaProducto}</td>
                                <td>{item.descripcion}</td>
                                <td>{item.cantidad}</td>
                                <td>{formatearFecha(item.fechaRegistro)}</td>
                                <td>{formatearFecha(item.fechaCaduca)}</td>
                                <td>{item.estado ? "En existencia" : "Acabado"}</td>
                                <td>
                                    <Button color="primary" size="sm" className="me-2" onClick={() => enviarDatos(item)}> Editar </Button>
                                    <Button color="danger" size="sm" onClick={() => eliminarInventario(item.Id)}> Eliminar </Button>
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

export default TablaInventario;
