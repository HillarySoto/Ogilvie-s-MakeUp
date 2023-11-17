import React, { useEffect, useState } from "react";
import { Modal, ModalHeader, ModalBody, Form, FormGroup, Label, Input, ModalFooter, Button } from "reactstrap";

const modeloProducto = {
    id: 0,
    categoria: "",
    color: "",
    marca: "",
    nombre: "",
    precio: 0.0,
};

const ModalProducto = ({ mostrarModal, setMostrarModal, guardarProducto, editar, setEditar, editarProducto }) => {
    const [producto, setProducto] = useState(modeloProducto);

    useEffect(() => {
        if (editar != null) {
            setProducto(editar);
        } else {
            setProducto(modeloProducto); // Restablece el estado para un nuevo producto
        }
    }, [editar]);

    const actualizarDato = (e) => {
        setProducto({
            ...producto,
            [e.target.name]: e.target.value,
        });
    };

    const enviarDatos = () => {
        if (producto.id === 0) {
            guardarProducto(producto);
        } else {
            editarProducto(producto);
        }
        setProducto(modeloProducto);
    };

    const cerrarModal = () => {
        setMostrarModal(!mostrarModal);
        setEditar(null);
    };

    return (
        <Modal isOpen={mostrarModal}>
            <ModalHeader>
                {producto.id === 0 ? "Nuevo Producto" : "Editar Producto"}
            </ModalHeader>

            <ModalBody>
                <Form>
                    <FormGroup>
                        <Label>Categoría</Label>
                        <Input name="categoria" onChange={(e) => actualizarDato(e)} value={producto.categoria} />
                    </FormGroup>
                    <FormGroup>
                        <Label>Color</Label>
                        <Input name="color" onChange={(e) => actualizarDato(e)} value={producto.color} />
                    </FormGroup>
                    <FormGroup>
                        <Label>Marca</Label>
                        <Input name="marca" onChange={(e) => actualizarDato(e)} value={producto.marca} />
                    </FormGroup>
                    <FormGroup>
                        <Label>Nombre</Label>
                        <Input name="nombre" onChange={(e) => actualizarDato(e)} value={producto.nombre} />
                    </FormGroup>
                    <FormGroup>
                        <Label>Precio</Label>
                        <Input name="precio" type="number" step="0.01" onChange={(e) => actualizarDato(e)} value={producto.precio} />
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
    );
};

export default ModalProducto;
