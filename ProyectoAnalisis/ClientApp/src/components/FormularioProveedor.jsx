import { useEffect, useState } from "react"
import { Modal, ModalHeader, ModalBody, Form, FormGroup, Label, Input, ModalFooter, Button } from "reactstrap"

const modeloProveedor = {
    id: 0,
  nombreEmpresa: "",
    representante: "",
    telefono: "",
    email: "",
    direccion: "",
}
const FormularioProveedor = ({ mostrarModal, setMostrarModal, guardarProveedor, editar, setEditar, editarProveedor }) => {
    const [proveedor, setProveedor] = useState(modeloProveedor);

    useEffect(() => {
        if (editar != null) {
            setProveedor(editar);
        } else {
            setProveedor(modeloProveedor); 
        }
    }, [editar]);

    const actualizarDato = (e) => {
        setProveedor({
            ...proveedor,
            [e.target.name]: e.target.value,
        });
    };

    const enviarDatos = () => {
        if (proveedor.id === 0) {
            guardarProveedor(proveedor);
        } else {
            editarProveedor(proveedor);
        }
        setProveedor(modeloProveedor)

    };

    const cerrarModal = () => {
        setMostrarModal(!mostrarModal);
        setEditar(null);
    };

    return (
        <Modal isOpen={mostrarModal}>
            <ModalHeader>
                {proveedor.id == 0 ? "Nuevo Proveedor":"Editar Contacto"}
            </ModalHeader>

            <ModalBody>
                <Form>
                    <FormGroup>
                        <Label>Nombre Empresa</Label>
                        <Input name="nombreEmpresa" onChange={(e) => actualizarDato(e)} value={proveedor.nombreEmpresa}/>
                    </FormGroup>
                    <FormGroup>
                        <Label>Representante</Label>
                        <Input name="representante" onChange={(e) => actualizarDato(e)} value={proveedor.representante} />
                    </FormGroup>
                    <FormGroup>
                        <Label>Teléfono</Label>
                        <Input name="telefono" onChange={(e) => actualizarDato(e)} value={proveedor.telefono} />
                    </FormGroup>
                    <FormGroup>
                        <Label>Email</Label>
                        <Input name="email" onChange={(e) => actualizarDato(e)} value={proveedor.email} />
                    </FormGroup>
                    <FormGroup>
                        <Label>Dirección</Label>
                        <Input name="direccion" onChange={(e) => actualizarDato(e)} value={proveedor.direccion} />
                    </FormGroup>
                </Form>
            </ModalBody>
            <ModalFooter>
                <Button color="primary" size="sm" onClick={enviarDatos}>
                    Guardar
                </Button>
                <Button color="danger" size="sm" onClick={cerrarModal}>
                    Cerrar
                </Button>
            </ModalFooter>



        </Modal>

    )
}

export default FormularioProveedor;