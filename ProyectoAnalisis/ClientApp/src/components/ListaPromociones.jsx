import { Button, Table } from "reactstrap"


const ListaPromociones = ({ data, setEditar, mostrarModalF, setMostrarModalF, eliminarPromocion }) => {

    const enviarDatos = (promocion) => {

        setEditar(promocion)
        setMostrarModalF(!mostrarModalF)
    }



    return ( 
        <Table stripped responsive>
            <thead>
                <tr>
                    <th>idPromocion</th>
                    <th>descripcion</th>
                    <th>fechaInicion</th>
                    <th>fechaFin</th>
                    <th>Descuento</th>
                    <th>listaProductos</th>
                    <th></th>
                </tr>
            </thead>
            <tbody> 
                {
                    (data.length < 1) ? (
                        <tr>
                            <td colSpan="6">SIN REGISTROS</td>
                        </tr>

                    ) : (
                    
                            data.map((item) => (

                                <tr key={item.idPromocion}>
                                    <td>{item.idPromocion}</td>
                                    <td>{item.descripcion}</td>
                                    <td>{item.fechaInicion}</td>
                                    <td>{item.fechaFin}</td>
                                    <td>{item.descuento}</td>
                                    <td>{item.listaProductos}</td>
                                    
                                      
                                    
                                    <td>
                                        <Button color="primary" size="sm" className="me-2"
                                            onClick={() => enviarDatos(item)}


                                        >Editar</Button>
                                        <Button color="danger" size="sm"
                                            onClick={() => eliminarPromocion(item.idPromocion)}
                                        >Eliminar</Button>
                                 
                                    </td>
                                </tr>
                            
                           
                            
                            ))  

                    )
                       
                }
            </tbody>

        </Table>

    )

}

export default TablaPromociones;