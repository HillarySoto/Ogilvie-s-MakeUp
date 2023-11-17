import React, { useState } from "react";
import Swal from "sweetalert2";
import { validarNumero } from "../services/InputValidate";
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
            <div className="col-md-10">
                <Card className="shadow p-3 mb-5 bg-body rounded">
                    <CardHeader>
                        <h3>Información de Pago</h3>
                    </CardHeader>
                    <CardBody>
                        <Form >
                            <FormGroup>
                                <div className="d-flex justify-content-between">
                                    <Label className="form-label">Fecha de Pago: </Label>{' '}
                                    <Label name="fecha_pago" className="form-label">{pago.fecha_pago}
                                    </Label>
                                </div>
                            </FormGroup>
                            <hr />
                            <FormGroup>
                                <div className="d-flex justify-content-between">
                                    <Label for="referencia">Referencia:</Label>{' '}
                                    <Label
                                        className="form-label font-weight-bold"
                                        name="referencia"> {pago.referencia}</Label>
                                </div>
                            </FormGroup>
                            <hr />
                            <FormGroup>
                                <div className="d-flex justify-content-between">
                                    <Label>Monto:</Label>{' '}
                                    <Label
                                        name="monto"
                                        className="form-label font-weight-bold"
                                    ><span>₡</span>{pago.monto}</Label>
                                </div>
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
                                    <Label>Tarjeta de Crédito</Label>
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
                                                className="form-control border-2"
                                                placeholder="**************"
                                                maxLength={23}
                                                onChange={(ev) => updateModel(ev)}
                                            />
                                        </div>

                                        <div className="flex-grow-1">
                                            <Label for="codigoTarjeta">CVV/CVC:</Label>
                                            <Input
                                                type="text"
                                                name="codigoTarjeta"
                                                id="codigoTarjeta"
                                                className="form-control border-2"
                                                placeholder="código"
                                                maxLength={3}
                                                onChange={(ev) => updateModel(ev)}
                                            />
                                        </div>
                                    </FormGroup>
                                </>
                            )}
                            <Button color="secondary">
                                Cancelar/Anular
                            </Button>{' '}
                            <Button color="primary" onClick={() => {

                                //validacion de campos y alerta
                                if(validarNumero(pago.numeroTarjeta) === false || validarNumero(pago.codigoTarjeta) === false){
                                    Swal.fire({
                                        icon: 'error',
                                        title: 'Entrada(s) invalida(s)',
                                        text: 'Hay campos vacios o entradas invalidas, por favor verifique!',
                                        allowOutsideClick: false
                                    })
                                }else{
                                    pago.estado = "Pagado"
                                    savePayment(pago);
                                }
                            }}>
                                Enviar Pago
                            </Button>

                        </Form>

                    </CardBody>
                </Card>
            </div>
        </div>

    );
}
export default FormularioPago;