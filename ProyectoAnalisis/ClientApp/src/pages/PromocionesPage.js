import { useEffect, useState} from "react"
import { Col, Container, Row, Card, CardHeader, CardBody, Button } from "reactstrap"
import TablaPromociones from "./componentes/TablaPromociones"
import FormularioP from "./componentes/FormularioP"

const PromocionesPage = () => {

    const [promociones, setPromociones] = useState([])
    const [mostrarModalF, setMostrarModalF] = useState(false);
    const [editar, setEditar] = useState(null)




    const mostrarPromos = async() => {

        const data= await mostrarPromos();
        setPromociones(data);


        /*
        const response = await fetch("api/api/Lista");

       if(response.ok){
            const data = await response.json();
        setPromociones(data)
       }else {
           console.log("error en la lista")
       }*/
    }


    useEffect(() => {
        mostrarPromos()
    }, [promociones])

    const guardarPromocion = async (promocion) => {
        const response = await fetch("api/api/Guardar", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify(promocion)

        })

        if (response.ok) {
            setMostrarModalF(!mostrarModalF);
            mostrarPromos();
        }

    }


    const eliminarPromocion = async (id) => {

        const result= await eliminarPromocion(id);

        if (result) {
            mostrarPromos();
        }
        /*
        var respuesta = window.confirm("�Desea eliminar la promocion?")

        if (!respuesta) {

            return; 
        }

        const response = await fetch("api/api/Eliminar" + id, {
            method: 'DELETE',
        })

        if (response.ok) {
            mostrarPromos();
        }*/

    }


    const editarPromocion = async (promocion) => {

        const response = await editarPromo(promocion.id, promocion);
        if (response) {
            getPromos();
        }
        setMostrarModalF(!mostrarModalF);
        setEditar(null);
        /*
        const response = await fetch("api/api/Editar", {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify(promocion)

        })

        if (response.ok) {
            setMostrarModalF(!mostrarModalF);
            mostrarPromos();
        }*/

    }







    return ( 
        <Container>
            <Row className="mt-5">
                <Col sm="12">
                    <Card>
                        <CardHeader>   
                        <h5>LISTA DE PROMOCIONES OLIVES MAKE UP</h5>
                        </CardHeader>
                        <CardBody>
                            mostrarModalF={mostrarModalF}
                            setMostrarModalF={setMostrarModalF};
                            savePromo={savePromo};



                            <Button type="submit" size="sn" color="success"
                                onClick={() => setMostrarModalF(!mostrarModalF)}
                            >Nueva promocion</Button>
                           
                            <hr></hr>
                            <TablaPromociones data={promociones}
                                setEditar={setEditar}
                                mostrarModalF={mostrarModalF}
                                setMostrarModalF={setMostrarModalF}
                                eliminarPromocion={eliminarPromocion}
                            />
                        </CardBody>


                    </Card>

                </Col>

            </Row>

            <FormularioP
                mostrarModalF={mostrarModalF}
                setMostrarModalF={setMostrarModalF}
                guardarPromocion={guardarPromocion}

                editar={editar}
                setEditar={setEditar}
                editarPromocion={editarPromocion}
                
            />
        </Container>
    )

}

export default App;