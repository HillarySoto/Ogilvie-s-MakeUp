
import { Container, Row, Col, Button, Table } from "reactstrap";


const TablaPagos = ({ data }) => {


    return (

        <Container>
            <Row className='mt-5'>
                <Col sm="12">
                    <div>
                        <h4>Registro de Pagos</h4>
                        <hr/>
                        <Table class="table table-striped">
                            <thead>
                                <tr>
                                    <th>Fecha de pago</th>
                                    <th>Monto</th>
                                    <th>Mètodo de Pago</th>
                                    <th>Referencia</th>
                                    <th>Estado del Pago</th>
                                    <th>Numero de Tarjeta</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    (data.length < 1) ? (
                                        <tr>
                                            <td colSpan="6">Sin registros</td>
                                        </tr>
                                    ) : (
                                        data.map((item) => (

                                            <tr key={item.id}>
                                                <td>{item.fechaPago}</td>
                                                <td>{item.monto}</td>
                                                <td>{item.metodoPago}</td>
                                                <td>{item.refernacia}</td>
                                                <td>{item.estado}</td>ñ
                                                <td>{item.numeroTarjeta}</td>

                                            </tr>

                                        ))

                                    )

                                }
                            </tbody>
                        </Table>

                    </div>
                </Col>
            </Row>
        </Container>

    )

}

export default TablaPagos;