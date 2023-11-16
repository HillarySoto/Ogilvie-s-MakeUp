import { useEffect, useState } from "react"
import { Modal, ModalHeader, ModalBody, Form, FormGroup, Input, Label, ModalFooter, Button } from "reactstrap"
import ReactDatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css'; // Estilos CSS de react-datepicker



const modeloInventario = {
    idInventario: 0,
    producto: "",
    nombre: "",
    descripcion: "",
    cantidad: "",
    fechaRegistro: null,
    fechaCaduca: null,
    estado: null
}


const ModalInventario = ({ mostrarModal, setMostrarModal, guardarInventario, editar, setEditar, editarInventario }) => { // logica para crear un modal con un forms

    const [inventario, setInventario] = useState(modeloInventario);

    const actualizarDato = (e) => { // logica para la actualizacion del modal en pantalla

        console.log(e.target.name + " : " + e.target.value)
        setInventario(
            {
                ...inventario,
                [e.target.name] : e.target.value
            }
        )
    }


    const enviarDatos = () => { // logica para enviar los datos al SQL

        const estado = inventario.estado === "true" ? true : false;
        inventario.estado = estado;

        const fechaRegistroFormateada = inventario.fechaRegistro
            ? inventario.fechaRegistro.toISOString().split("T")[0]
            : null;
        const fechaCaducidadFormateada = inventario.fechaCaducidad
            ? inventario.fechaCaducidad.toISOString().split("T")[0]
            : null;


        inventario.fechaRegistro = fechaRegistroFormateada;
        inventario.fechaCaducidad = fechaCaducidadFormateada;
  

        if (inventario.idInventario === 0) {
            guardarInventario(inventario);
        } else {
            editarInventario(inventario)
        }

        setInventario(modeloInventario)
    }



    useEffect(() => {  // para editar
        if (editar != null) {
            setInventario(editar)
        } else {
            setInventario(modeloInventario)
        }
    }, [editar])



    const cerrarModal = () => {
        setMostrarModal(!mostrarModal)
        setEditar= null
    }


    return (

        <Modal isOpen={mostrarModal}>
            <ModalHeader>
                {inventario.idInventario === 0 ? "Nuevo Inventario" : "Editar Inventario"}
            </ModalHeader>

            <ModalBody>
                <Form>
                    <FormGroup>
                        <Label>Producto</Label>
                        <Input name="producto" onChange={(e) => actualizarDato(e)} value={inventario.producto} />
                    </FormGroup>
                    <FormGroup>
                        <Label>Nombre</Label>
                        <Input name="nombre" onChange={(e) => actualizarDato(e)} value={inventario.nombre} />
                    </FormGroup>
                    <FormGroup>
                        <Label>Descripción</Label>
                        <Input name="descripcion" onChange={(e) => actualizarDato(e)} value={inventario.descripcion} />
                    </FormGroup>
                    <FormGroup>
                        <Label>Cantidad</Label>
                        <Input name="cantidad" onChange={(e) => actualizarDato(e)} value={inventario.cantidad} />
                    </FormGroup>
                    <FormGroup>
                        <Label>Fecha Registro</Label>
                        <ReactDatePicker
                            name="fechaRegistro"
                            selected={inventario.fechaRegistro}
                            onChange={(date) => actualizarDato({ target: { name: 'fechaRegistro', value: date } })}
                            dateFormat="yyyy-MM-dd" // Puedes personalizar el formato de la fecha
                        />
                    </FormGroup>

                    <FormGroup>
                        <Label>Fecha Caducidad</Label>
                        <ReactDatePicker
                            name="fechaCaduca"
                            selected={inventario.fechaCaduca}
                            onChange={(date) => actualizarDato({ target: { name: 'fechaCaduca', value: date } })}
                            dateFormat="yyyy-MM-dd" 
                        />
                    </FormGroup>

                    <FormGroup>
                        <Label>Estado</Label>
                        <Input
                            type="select"
                            name="estado"
                            onChange={(e) => actualizarDato(e)}
                            value={inventario.estado ? "true" : "false"} // Convierte el valor booleano a cadena
                        >
                            <option value="true">En existencia</option>
                            <option value="false">Acabado</option>
                        </Input>
                    </FormGroup>
                </Form>
            </ModalBody>

            <ModalFooter> 
                <Button color="primary" size="sm" onClick={enviarDatos }>Guardar</Button> 
                <Button color="danger" size="sm" onClick={cerrarModal } >Cerrar</Button>
            </ModalFooter>
        </Modal>
    )

}

export default ModalInventario;