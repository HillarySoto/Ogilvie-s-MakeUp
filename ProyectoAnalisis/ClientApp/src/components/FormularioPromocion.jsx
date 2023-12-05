import { useEffect, useState } from "react"
import { Modal, ModalHeader, ModalBody, Form, FormGroup, Label, Input, ModalFooter, Button} from "reactstrap"

const modelForm = {
    idPromocion: 0,
    descripcion: "",
    fechaInicion: "",
    fechaFin: "",
    descuento: 0,
    productos:""



}   


const FormularioPromocion = ({ mostrarModalF, setMostrarModalF, guardarPromocion, editar, editarPromocion, setEditar }) => {

    const [promocion, setPromocion] = useState(modelForm);

    const actualizarDato = (e) => {
       
        console.log(e.target.name + " : " + e.target.value)
        setPromocion(
            {
                ...promocion,
                [e.target.name]: e.target.value

            }

        )
    }

    const enviarDatos = () => {
        if (promocion.idPromocion === 0) {
            guardarPromocion(promocion)
        } else {
            editarPromocion(promocion)
        }

        setPromocion(modelForm)
    }


    useEffect(() => {
        if (editar != null) {
            setPromocion(editar)
        } else {
            setPromocion(modelForm)

        }
    }, [editar] )

    const cerrarModal = () => {
        setMostrarModalF(!mostrarModalF)
        setEditar(null)
    }



    return (

        <Modal isOpen={mostrarModalF}>
            <ModalHeader>
                {promocion.idPromocion === 0 ? "Nueva Promocion" : "Editar Promocion"}                

                Nueva Promocion
            </ModalHeader>

            <ModalBody>
                <Form>

                    <FormGroup>
                        <Label>IdPromocion</Label>
                        <Input name="idPromocion" onChange={(e) => actualizarDato(e)} value={promocion.idPromocion} />
                    </FormGroup>

                    <FormGroup>
                        <Label>Descripcion</Label>
                        <Input name="descripcion" onChange={(e) => actualizarDato(e)} value={promocion.descripcion} />
                    </FormGroup>

                    <FormGroup>
                        <Label>Fecha inicio</Label>
                        <Input name="fecha inicio" onChange={(e) => actualizarDato(e)} value={promocion.fechaInicion} />
                    </FormGroup>

                    <FormGroup>
                        <Label>Fecha fin</Label>
                        <Input name="fecha fin" onChange={(e) => actualizarDato(e)} value={promocion.fechaFin} />
                    </FormGroup>

                    <FormGroup>
                        <Label>Descuento</Label>
                        <Input name="descuento" onChange={(e) => actualizarDato(e)} value={promocion.descuento} />
                    </FormGroup>

                    <FormGroup>
                        <Label>Productos</Label>
                        <Input name="productos" onChange={(e) => actualizarDato(e)} value={promocion.productos} />
                    </FormGroup>

                </Form>
            </ModalBody>

            <ModalFooter>
                <Button color="primary" size="sm" onClick={enviarDatos}>Guardar</Button>
                <Button color="danger" size="sm" onClick={cerrarModal}>Cerrar</Button>
            </ModalFooter>



        </Modal>


    )


}

export default FormularioP; 