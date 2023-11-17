import React from "react";
import { Table, Button } from "reactstrap";

const TablaProveedor = ({ data, setEditar, mostrarModal, setMostrarModal, eliminarProveedor}) => {
    const enviarDatos = (proveedor) => {
        setEditar(proveedor)
        setMostrarModal(!mostrarModal)
    }

    return (
        <Table striped responsive>
            <thead>
                <tr>
                    <th>Nombre de Empresa</th>
                    <th>Representante</th>
                    <th>Teléfono</th>
                    <th>Email</th>
                    <th>Dirección</th>
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
                            <td>{item.nombreEmpresa}</td>
                            <td>{item.representante}</td>
                            <td>{item.telefono}</td>
                            <td>{item.email}</td>
                            <td>{item.direccion}</td>
                            <td>
                                <Button color="primary" size="sm" className="me-2"
                                    onClick={ () => enviarDatos(item) } >
                                    Editar
                                </Button>
                                <Button color="danger" size="sm"
                                    onClick={() => eliminarProveedor (item.id)}
                                >
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

export default TablaProveedor;
