import { useEffect, useState } from "react"
import { Container, Row, Col, Card, CardHeader, CardBody, Button } from "reactstrap"
import ModalInventario from "./components/ModalInventario"
import TablaInventario from "./components/TablaInventario"

const App = () => {


    const [mostrarModal, setMostrarModal] = useState(false)

    const [inventarios, setInventarios] = useState([])

    const [editar, setEditar] = useState(null)



    const mostrarInvenatrio = async () => { //para monstrar el inventario
        const response = await fetch("api/inventario/Listar");
        if (response.ok) {

            const data = await response.json();
            setInventarios(data);
        } else { console.log("Error en la lista") }
    }

    useEffect(() => {
        mostrarInvenatrio()
    }, [])

    const guardarInventario = async (inventario) => {

        const response = await fetch("api/inventario/Guardar", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify(inventario)
        })

        if (response.ok) {

            setMostrarModal(!mostrarModal);
            mostrarInvenatrio();
        }
    }


    const editarInventario = async (inventario) => {

        const response = await fetch("api/inventario/Editar", {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify(inventario)
        })

        if (response.ok) {

            setMostrarModal(!mostrarModal);
            mostrarInvenatrio();
        }
    }


    const eliminarInventario = async (id) => {

        var respuesta = window.confirm("Desea eliminar el inventario?")

        if (!respuesta) {
            return;

        }

        const response = await fetch("api/inventario/Eliminar/" + id, {
            method: 'DELETE'
        })

        if (response.ok) {
            mostrarInvenatrio();
        }
    }






    return (
        <Container>
            <Row className="mt-5">
                <Col sm="12">
                    <Card>
                        <CardHeader>
                        <h5>Inventario</h5>
                        </CardHeader>
                        <CardBody>
                            <Button size="sm" color="success" onClick={()=> setMostrarModal(!mostrarModal) }>Crear Inventario</Button>
                            <hr></hr>
                            <TablaInventario
                                data={inventarios}
                                setEditar={setEditar}
                                mostrarModal={mostrarModal}
                                setMostrarModal={setMostrarModal}
                                eliminarInventario={eliminarInventario }
                            />
                        </CardBody>
                    </Card>
                </Col>
            </Row>

            <ModalInventario
                mostrarModal={mostrarModal}
                setMostrarModal={setMostrarModal}
                guardarInventario={guardarInventario}

                editar={editar }  // para mostrar toda la info en el formulario
                setEditar={setEditar}
                editarInventario={editarInventario}

            />
        </Container>    
    )
}

export default App;