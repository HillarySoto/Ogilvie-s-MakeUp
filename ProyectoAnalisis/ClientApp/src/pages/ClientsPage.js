
import { useEffect, useState } from "react"
import { Col, Container, Row, Button } from "reactstrap"
import TablaClientes from "../components/TablaClientes"
import FormularioCliente from "../components/FormularioCliente"
import {mostrarClientes, saveClient, eliminarCliente, updateClient } from "../services/ClienteServicio"


const ClientsPage = () => {

    const [clients, setClients] = useState([])
    const [update, setUpdate] = useState(null) //almacena objeto cliente que se va a editar
    const [showForm, setShowForm] = useState(false);
    
    //consume el servicio mostrarClientes
    const getClients = async () => {
        const data = await mostrarClientes(); //llama al servicio
        setClients(data);
    }

    //actualizar cliente
    const updClient = async (client) => {
        const rs = await updateClient(client.id, client);
        if(rs){
            getClients();
        }
        setShowForm(!showForm);
        setUpdate(null);
    }


    //eliminar cliente
    const deleteClient = async (id) => {

        const result = await eliminarCliente(id);
        if(result){
            getClients();
        }
    }

    //actualiza el estado de clients(lista de clientes)
    useEffect(() => {        
        getClients();
    }, [clients]);

    return (
        <Container>
            <Row className="mt-5">

                <Col sm="12">
                    <div className="border rounded p-3">

                        {
                            showForm? (
                                <FormularioCliente

                                    //para guardar y mostrar/ocultar el form
                                    showForm = {showForm}
                                    setShowForm = {setShowForm}
                                    saveClient = {saveClient}

                                    //para editar un cliente y guardar los cambios
                                    update = {update}
                                    setUpdate = {setUpdate}
                                    updClient = {updClient}
                                />
                            ):(
                                <>
                                    <h5>Lista de clientes</h5>

                                    <Button size="sm" color="success"
                                        onClick={() => setShowForm(!showForm)}
                                    >Nuevo cliente</Button>

                                    <hr></hr>

                                    <TablaClientes data={clients}
                                    setUpdate = {setUpdate}
                                    showForm={showForm}
                                    setShowForm={setShowForm}
                                    deleteClient={deleteClient}
/>
                                </>
                            )
                        }

                    </div>

                </Col>

            </Row>

        </Container>
    )

}

export default ClientsPage;