import React from "react";
import { Table, Button } from "reactstrap";

const ListaProducto = ({ data, setEditar, mostrarModal, setMostrarModal, eliminarProducto }) => {
    console.log("Datos recibidos en TablaProducto:", data);
    const enviarDatos = (producto) => {
        setEditar(producto);
        setMostrarModal(!mostrarModal);
    };

    return (
        <Table striped responsive>
            <thead>
                <tr>
                    <th>Categoría</th>
                    <th>Colores</th>
                    <th>Marca</th>
                    <th>Nombre</th>
                    <th>Precio</th>
                    <th>Acciones</th>
                </tr>
            </thead>
            <tbody>
                {data.length < 1 ? (
                    <tr>
                        <td colSpan="6">SIN REGISTROS</td>
                    </tr>
                ) : (
                    data.map((item) => (
                        <tr key={item.id}>
                            <td>{item.categoria}</td>
                            <td>{item.color}</td>
                            <td>{item.marca}</td>
                            <td>{item.nombre}</td>
                            <td>{item.precio}</td>
                            <td>
                                <Button color="primary" size="sm" className="me-2" onClick={() => enviarDatos(item)}>
                                    Editar
                                </Button>
                                <Button color="danger" size="sm" onClick={() => eliminarProducto(item.id)}>
                                    Eliminar
                                </Button>
                            </td>
                        </tr>
                    ))
                )}
            </tbody>
        </Table>
    );
};

export default ListaProducto;
