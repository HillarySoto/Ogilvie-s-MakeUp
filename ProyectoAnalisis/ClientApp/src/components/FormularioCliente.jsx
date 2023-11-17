import React, { useEffect, useState } from "react";
import ReactDatePicker from 'react-datepicker';
import Swal from "sweetalert2";
import { vad_alfanumerico, validarLetra, validateEmail, validarNumero } from "../services/InputValidate";
import 'react-datepicker/dist/react-datepicker.css'; //dar estilo al datepicker
import { Row, Col, Form, FormGroup, Label, Input, Button } from 'reactstrap';

const clientModel = {
    id: 0,
    cedula: "",
    nombre: "",
    telefono: "",
    email: "",
    direccion: "",
    contrasenia: ""
}

const Formulario = ({ showForm, setShowForm, saveClient, update, setUpdate, updClient }) => {

    const [client, setClient] = useState(clientModel);

    //envio de la data
    const sendData = () => {

        if (client.id === 0) {
            saveClient(client);
            setShowForm(!showForm);
        } else {
            updClient(client);
        }      
    }

    //modificar el atributo de client dinamicamente
    const updateData = (ev) => {

        setClient(
            {
                ...client,
                [ev.target.name]: ev.target.value
            }
        );
    }

    //determina la precarga de datos de client en el form
    useEffect(() => {

        if (update != null) {
            setClient(update);
        } else {
            setClient(clientModel);
        }
    }, [update]);

    //cerrar formulario y resetear el estado 'update'
    const closeForm = () => {
        setShowForm(!showForm);
        setUpdate(null);
    }

    return (
        <Row className="mt-5">
            <Col sm="12">
                <h4>{client.id === 0 ? "Registrar Cliente" : "Actualizar Información"}</h4>
                <hr></hr>
                <Form>
                    <FormGroup>
                        <Label>Cédula</Label>
                        <Input type="text" name="cedula" maxLength={9} onChange={(ev) => updateData(ev)} value={client.cedula} placeholder="Ingrese la cédula" />
                    </FormGroup>
                    <FormGroup>
                        <Label>Nombre</Label>
                        <Input type="text" name="nombre" maxLength={50} onChange={(ev) => updateData(ev)} value={client.nombre} placeholder="Ingrese el nombre" />
                    </FormGroup>
                    <FormGroup>
                        <Label>Teléfono</Label>
                        <Input type="text" name="telefono" maxLength={8} onChange={(ev) => updateData(ev)} value={client.telefono} placeholder="Ingrese el número de teléfono" />
                    </FormGroup>
                    <FormGroup>
                        <Label>Correo</Label>
                        <Input type="text" name="email" maxLength={30} onChange={(ev) => updateData(ev)} value={client.email} placeholder="Ingrese el correo" />
                    </FormGroup>
                    <FormGroup>
                        <Label>Dirección</Label>
                        <Input type="text" name="direccion" maxLength={100} onChange={(ev) => updateData(ev)} value={client.direccion} placeholder="Ingrese la dirección" />
                    </FormGroup>
                    {/*<FormGroup>
                        <Label>Fecha de Registro</Label>
                        <ReactDatePicker name="fechaRegistro"
                            selected={client.fechaRegistro ? new Date(client.fechaRegistro) : null} //convierte la cadena fechaRegistro a date
                            onChange={(date) => updateData({ target: { name: 'fechaRegistro', value: date } })}
                            dateFormat="dd/MM/yyyy"
                        />
                    </FormGroup>*/}
                    <FormGroup>
                        <Label>Contraseña</Label>
                        <Input type="password" name="contrasenia" maxLength={8} onChange={(ev) => updateData(ev)} value={client.contrasenia} placeholder="Digite su contraseña" />
                    </FormGroup>

                    <div className="d-flex justify-content-center">
                        <Button type="button" color="primary" size="lg" className="me-2" onClick={sendData}> 
                            Guardar
                        </Button>{' '}
                        <Button type="button" color="danger" size="lg" onClick={closeForm}>
                            Cancelar
                        </Button>
                    </div>
                </Form>
            </Col>
        </Row>

    );
}
export default Formulario;