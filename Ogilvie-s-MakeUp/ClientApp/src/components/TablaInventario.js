
import { Table, Button } from "reactstrap";
import { parseISO, format } from 'date-fns'; 

// Esta función toma una fecha (en formato ISO) y la convierte en "dd-MM-yyyy"
function formatearFecha(fecha) {
    const date = new Date(fecha);
    const dia = date.getDate();
    const mes = date.getMonth() + 1; // Se suma 1 porque los meses comienzan en 0
    const anio = date.getFullYear();
    return `${dia}-${mes < 10 ? "0" : ""}${mes}-${anio}`;
}


const TablaInventario = ({ data, setEditar, mostrarModal, setMostrarModal, eliminarInventario }) => {

    const enviarDatos = (inventario) => {
        inventario.fechaRegistro = parseISO(inventario.fechaRegistro); // date-fns no acepta cadenas directamente como argumentos de fecha
        inventario.fechaCaduca = parseISO(inventario.fechaCaduca);  // se usa parseISO para el analizar y conversion de cadenas de fecha
        setEditar(inventario);
        setMostrarModal(!mostrarModal);
    };

    return (
        <Table striped responsive>
            <thead>
                <tr>
                    <th>Producto</th>
                    <th>Nombre</th>
                    <th>Descripcion</th>
                    <th>Cantidad</th>
                    <th>Fecha Registro</th>
                    <th>Fecha Caducidad</th>
                    <th>Estado</th>
                    <th>Opciones</th>
                </tr>
            </thead>

            <tbody>
                {data.length < 1 ? (
                    <tr>
                        <td colSpan="8">Sin REGISTROS</td>
                    </tr>
                ) : (
                    data.map((item) => (
                        <tr key={item.idInventario}>
                            <td>{item.producto}</td>
                            <td>{item.nombre}</td>
                            <td>{item.descripcion}</td>
                            <td>{item.cantidad}</td>
                            <td>{formatearFecha(item.fechaRegistro)}</td>
                            <td>{formatearFecha(item.fechaCaduca)}</td> 
                            <td>{item.estado ? "En existencia" : "Acabado"}</td>
                            <td>
                                <Button color="primary" size="sm" className="me-2" onClick={() => enviarDatos(item)}> Editar </Button>
                                <Button color="danger" size="sm" onClick={() => eliminarInventario(item.idInventario)}> Eliminar </Button>
                            </td>
                        </tr>
                    ))
                )}
            </tbody>
        </Table>
    );
};

export default TablaInventario;
