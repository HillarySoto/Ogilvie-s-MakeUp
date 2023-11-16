import React, { useState } from 'react'
import { Container, Row, Col } from 'reactstrap'
import FormularioPago from '../components/FormularioPago'
import {savePayment} from '../services/PagoServicio'

function PaymentPage() {

  const [form, setForm] = useState(false);

  return (
    <Container>
        <Row className='mt-5'>
            <Col sm="12">
              <div>
                <FormularioPago
                  savePayment={savePayment}
                />
              </div>
            </Col>
        </Row>
    </Container>
  )
}

export default PaymentPage