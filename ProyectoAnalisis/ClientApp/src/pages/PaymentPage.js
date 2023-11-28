import React, { useState } from 'react'
import { Container, Row, Col, Button } from 'reactstrap'
import TablaPagos from '../components/TablaPagos'
import FormularioPago from "../components/FormularioPago";
import { savePayment, deletePayment } from '../services/PagoServicio'

function PaymentPage() {

  const [form, setForm] = useState(false);

  return (
    <Container>
      <Row className='mt-5'>
        <Col sm="12">
          <div>
            {
              form ? (
                <FormularioPago savePayment={savePayment} form = {form} setForm={setForm} />
              ) : (
                <>                  
                  <TablaPagos
                    deletePayment={deletePayment} form = {form} setForm={setForm}
                  />
                </>
              )
            }
          </div>
        </Col >
      </Row >
    </Container >
  )
};


export default PaymentPage