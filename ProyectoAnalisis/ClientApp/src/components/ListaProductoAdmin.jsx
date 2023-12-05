import React from "react";
import { Table, Button } from "reactstrap";

const ListaProductoAdmin = ({ data, setEditar, mostrarModal, setMostrarModal, eliminarProducto }) => {
    console.log("Datos recibidos en ListaProducto:", data);

    const enviarDatos = (producto) => {
        setEditar(producto);
        setMostrarModal(!mostrarModal); 
    };

    return (
        <Table striped responsive>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Proveedor</th>
                    <th>Nombre</th>
                    <th>Precio</th>
                    <th>Categoría</th>
                    <th>Marca</th>
                    <th>Acciones</th>
                </tr>
            </thead>
            <tbody>
                {data.length === 0 ? (
                    <tr>
                        <td colSpan="7">SIN REGISTROS</td>
                    </tr>
                ) : (
                    data.map((item) => (
                        <tr key={item.id}>
                            <td>{item.id}</td>
                            <td>{item.idProveedor}</td>
                            <td>{item.nombre}</td>
                            <td>{item.precio}</td>
                            <td>{item.idCategoria}</td>
                            <td>{item.marca}</td>
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

export default ListaProductoAdmin;
