import { useEffect, useState } from "react";
import { Modal, ModalHeader, ModalBody, Form, FormGroup, Input, Label, ModalFooter, Button } from "reactstrap";
import ReactDatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const modeloInventario = {
    id: 0,
    idProducto: 0,
    descripcion: "",
    cantidad: "",
    fechaRegistro: null,
    fechaCaduca: null,
    estado: null,
    IdNavigation: null

}

const ModalInventario = ({ mostrarModal, setMostrarModal, guardarInventario, editar, setEditar, editarInventario }) => {
    const [inventario, setInventario] = useState(modeloInventario);

    const actualizarDato = (e) => {
        setInventario({
            ...inventario,
            [e.target.name]: e.target.value || '' // Establecer un valor predeterminado si es null o undefined
        });
    }


    const enviarDatos = async () => {
        const estado = inventario.estado === "true" ? true : false;
        inventario.estado = estado;

        const fechaRegistroFormateada = inventario.fechaRegistro
            ? inventario.fechaRegistro.toISOString().split("T")[0]
            : null;
        const fechaCaducidadFormateada = inventario.fechaCaduca
            ? inventario.fechaCaduca.toISOString().split("T")[0]
            : null;

        try {

            const datosAEnviar = {
                id: inventario.id,
                idProducto: inventario.idProducto,
                descripcion: inventario.descripcion,
                cantidad: inventario.cantidad,
                fechaRegistro: fechaRegistroFormateada,
                fechaCaduca: fechaCaducidadFormateada,
                estado: inventario.estado,
                IdNavigation: inventario.objeto
            };

            if (inventario.id === 0) {
                guardarInventario(datosAEnviar);
            } else {
                editarInventario(datosAEnviar);
            }

            setInventario(modeloInventario);
        } catch (error) {
            console.error('Error al buscar el producto:', error);
        }
    };


    useEffect(() => {
        if (editar !== null) {
            setInventario(editar);
        } else {
            setInventario(modeloInventario);
        }
    }, [editar]);

    const cerrarModal = () => {
        setMostrarModal(!mostrarModal);
        setEditar(null);
    }

    return (
        <Modal isOpen={mostrarModal}>
            <ModalHeader>
                {inventario.id === 0 ? "Nuevo Inventario" : "Editar Inventario"}
            </ModalHeader>
            <ModalBody>
                <Form>
                    <FormGroup>
                        <Label>ID Producto</Label>
                        <Input
                            name="idProducto"
                            onChange={(e) => actualizarDato({
                                target: {
                                    name: 'idProducto',
                                    value: parseInt(e.target.value, 10) // Convertir a entero
                                }
                            })}
                            value={inventario.idProducto}
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label>Descripción</Label>
                        <Input name="descripcion" onChange={(e) => actualizarDato(e)} value={inventario.descripcion} />
                    </FormGroup>
                    <FormGroup>
                        <Label>Cantidad</Label>
                        <Input
                            name="cantidad"
                            onChange={(e) => actualizarDato({
                                target: {
                                    name: 'cantidad',
                                    value: parseInt(e.target.value, 10) // Convertir a entero
                                }
                            })}
                            value={inventario.cantidad}
                        />
                    </FormGroup>

                    <FormGroup>
                        <Label>Fecha Registro</Label>
                        <ReactDatePicker
                            name="fechaRegistro"
                            selected={inventario.fechaRegistro}
                            onChange={(date) => actualizarDato({ target: { name: 'fechaRegistro', value: date } })}
                            dateFormat="yyyy-MM-dd"
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
                            value={inventario.estado ? "true" : "false"}
                        >
                            <option value="true">En existencia</option>
                            <option value="false">Acabado</option>
                        </Input>
                    </FormGroup>
                </Form>
            </ModalBody>
            <ModalFooter>
                <Button color="primary" size="sm" onClick={enviarDatos}>Guardar</Button>
                <Button color="danger" size="sm" onClick={cerrarModal}>Cerrar</Button>
            </ModalFooter>
        </Modal>
    );
}

export default ModalInventario;
