
import { Container, Row, Col, Card, CardHeader, CardBody, Button, Table } from "reactstrap";
import { getPayments } from "../services/PagoServicio";
import { useEffect, useState } from "react";


const TablaPagos = ({ deletePayment, form, setForm }) => {

    const [pagos, setPagos] = useState([]);

    const payments = async () => {
        const data = await getPayments(); //llama al servicio
        setPagos(data);
    }

    useEffect(() => {
        payments();
    }, [pagos]);

    return (

        <Container>
            <Row className='mt-5'>
                <Col sm="12">

                    <div className="justify-content-center row">
                        <div className="col-md-12">
                            <Card className="shadow p-3 mb-5 bg-body rounded">
                                <CardHeader>
                                    <div className="d-flex justify-content-between mb-5">
                                        <h3>Registro de Pagos</h3>
                                        <Button size="sm-13" color="success"
                                            onClick={() => setForm(!form)} 
                                        >Realizar Pago</Button>
                                    </div>
                                </CardHeader>
                                <CardBody>
                                    <Table class="table table-striped">
                                        <thead>
                                            <tr>
                                                <th>Fecha de pago</th>
                                                <th>Monto</th>
                                                <th>Método de Pago</th>
                                                <th>Referencia</th>
                                                <th>Número de Tarjeta</th>
                                                <th>Estado del Pago</th>
                                                <th></th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                (pagos.length < 1) ? (
                                                    <tr>
                                                        <td colSpan="6">Sin registros</td>
                                                    </tr>
                                                ) : (
                                                    pagos.map((item) => (

                                                        <tr key={item.id}>
                                                            <td>{new Date(item.fechaPago).toLocaleDateString("es-ES", { year: "numeric", month: "2-digit", day: "2-digit" })}</td>
                                                            <td>{item.monto}</td>
                                                            <td>{item.metodoPago}</td>
                                                            <td>{item.referencia}</td>
                                                            <td>{item.numeroTarjeta}</td>
                                                            <td>{item.estado}</td>
                                                            <td>
                                                                <Button size="sm" color="danger"
                                                                    onClick={() => deletePayment(item.id)}
                                                                > Eliminar
                                                                </Button>
                                                            </td>
                                                        </tr>

                                                    ))

                                                )

                                            }
                                        </tbody>
                                    </Table>

                                </CardBody>
                            </Card>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>

    )

}

export default TablaPagos;