
import { Button, Table } from "reactstrap";


const TablaClientes = ({ data, setUpdate, showForm, setShowForm, deleteClient }) => {

    //sendData setea el registro en 'update' (en ClienstPage) y oculta el form
    const sendData = (client) => {
        setUpdate(client)
        setShowForm(!showForm)
    }


    return (
        <div className="justify-content-center row">
            <div className="mb-3">
                <input width="40"
                    type="text"
                    placeholder="Hacer busqueda"
                    className="form-control"
                    value={''}                    
                    //onChange={}
                />
            </div>
            <div>
                <Table className="table table-striped table-hover">
                    <thead>
                        <tr>
                            <th>Cédula</th>
                            <th>Nombre</th>
                            <th>Teléfono</th>
                            <th>Correo Electrónico</th>
                            <th>Dirección</th>
                            <th>Fecha de registro</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            (data.length < 1) ? (
                                <tr>
                                    <td colSpan="7">Sin registros</td>
                                </tr>
                            ) : (
                                data.map((item) => (

                                    <tr key={item.id}>
                                        <td>{item.cedula}</td>
                                        <td>{item.nombre}</td>
                                        <td>{item.telefono}</td>
                                        <td>{item.email}</td>
                                        <td>{item.direccion}</td>
                                        <td>{new Date(item.fechaRegistro).toLocaleDateString("es-ES", { year: "numeric", month: "2-digit", day: "2-digit" })}</td>
                                        <td>
                                            <Button color="primary" size="sm" className="me-2"
                                                onClick={() => sendData(item)}
                                            >Editar</Button>

                                            <Button color="danger" size="sm"
                                                onClick={() => deleteClient(item.id)}
                                            >Eliminar</Button>
                                        </td>
                                    </tr>

                                ))

                            )

                        }
                    </tbody>
                </Table>
            </div>
        </div>

    )

}

export default TablaClientes;