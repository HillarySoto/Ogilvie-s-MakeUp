import React from "react";
import { Table, Button } from "reactstrap";

const ListaProveedor = ({ data, setUpdate, showForm, setShowForm, deleteProveedor}) => {
    const enviarDatos = (proveedor) => {
        setUpdate(proveedor)
        setShowForm(!showForm)
    }

    return (
        <Table striped responsive>
            <thead>
                <tr>
                    <th>Nombre de Empresa</th>
                    <th>Representante</th>
                    <th>Teléfono</th>
                    <th>Correo Eletrónico</th>
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
                                    onClick={() => deleteProveedor (item.id)}
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

export default ListaProveedor;