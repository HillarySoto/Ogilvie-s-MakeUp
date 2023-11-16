import React, { useState } from "react";
import { Card, CardHeader, Form, FormGroup, Label, Input, Button, CardBody } from 'reactstrap';

const pagoModel = {
    id: 0,
    fecha_pago: new Date().toLocaleDateString().toString(),
    monto: 25000,
    metodoPago: "",
    referencia: Math.floor(Math.random() * 100000000000).toString(),
    numeroTarjeta: "",
    codigoTarjeta: "",
    estado: ""
}

const FormularioPago = ({ savePayment }) => {

    const [pago, setPago] = useState(pagoModel);

    //modificacion de los atributos del modelo de pago (pagoModel)
    const updateModel = (ev) => {
        setPago({
            ...pago,
            [ev.target.name]: ev.target.value
        });
    }

    return (
        <div className="justify-content-center row">
            <Card >
                <CardHeader>
                    <h3>Información de Pago</h3>
                </CardHeader>
                <CardBody>
                    <Form >
                        <FormGroup>
                            <Label className="form-label">Fecha de Pago: </Label>{' '}
                            <Label name="fecha_pago" className="form-label">{pago.fecha_pago}
                            </Label>
                        </FormGroup>
                        <hr />
                        <FormGroup>
                            <Label for="referencia">Referencia:</Label>{' '}
                            <Label
                                className="form-label font-weight-bold"
                                name="referencia"> {pago.referencia}</Label>
                        </FormGroup>
                        <hr />
                        <FormGroup>
                            <Label>Monto:</Label>{' '}
                            <Label
                                name="monto"
                                className="form-label font-weight-bold"
                            >{pago.monto}</Label>
                        </FormGroup>
                        <hr />
                        <FormGroup>
                            <Label >Método de Pago:</Label>
                            <div className="form-check">
                                <Input
                                    type="radio"
                                    name="metodoPago"
                                    value="Tarjeta Credito"
                                    className="form-check-input"
                                    onChange={(ev) => updateModel(ev)}
                                />
                                <Label>Tarjeta Crédito</Label>
                            </div>                            
                        </FormGroup>

                        {pago.metodoPago === "Tarjeta Credito" && (
                            <>
                                <FormGroup className="d-flex">
                                    <div className="flex-grow-1 me-2">
                                        <Label for="numeroTarjeta">Número de Tarjeta:</Label>
                                        <Input
                                            type="text"
                                            name="numeroTarjeta"
                                            id="numeroTarjeta"
                                            onChange={(ev) => updateModel(ev)}
                                        />
                                    </div>

                                    <div className="flex-grow-1">
                                        <Label for="codigoTarjeta">Código:</Label>
                                        <Input
                                            type="text"
                                            name="codigoTarjeta"
                                            id="codigoTarjeta"
                                            onChange={(ev) => updateModel(ev)}
                                        />
                                    </div>
                                </FormGroup>
                            </>
                        )}

                        <Button color="primary" onClick={() => {
                           pago.estado="Pagado"
                           savePayment(pago);
                        }}>
                            Enviar Pago
                        </Button>{' '}
                        <Button color="secondary" onClick={() => {
                            pago.estado="Anulado"
                            savePayment(pago);
                        }}>
                            Cancelar/Anular
                        </Button>
                    </Form>

                </CardBody>
            </Card>
        </div>

    );
}
export default FormularioPago;