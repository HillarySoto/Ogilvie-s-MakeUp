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

const categoriasMaquillaje = [
    "Base y Correctores",
    "Ojos",
    "Labios",
    "Mejillas",
    "Cejas",
    "Herramientas y Accesorios",
    "Productos Específicos",
    "Maquillaje Corporal",
    "Maquillaje Artístico",
    "Productos para el Cuidado de la Piel",
];

const colores = [
    "Rojo",
    "Verde",
    "Azul",
    "Amarillo",
    "Magenta",
    "Cian",
    "Gris",
    // Puedes agregar más colores según sea necesario
];

const FormularioProducto = ({ mostrarModal, setMostrarModal, guardarProducto, editar, setEditar, editarProducto }) => {
    const [producto, setProducto] = useState(modeloProducto);

    useEffect(() => {
        if (editar != null) {
            setProducto(editar);
        } else {
            setProducto(modeloProducto);
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
                        <Input
                            type="select"
                            name="categoria"
                            onChange={(e) => actualizarDato(e)}
                            value={producto.categoria}
                        >
                            <option value="" disabled>Selecciona una categoría</option>
                            {categoriasMaquillaje.map((categoria, index) => (
                                <option key={index} value={categoria}>
                                    {categoria}
                                </option>
                            ))}
                        </Input>
                    </FormGroup>
                    <FormGroup>
                        <Label>Color</Label>
                        <Input
                            type="select"
                            name="color"
                            onChange={(e) => actualizarDato(e)}
                            value={producto.color}
                        >
                            <option value="" disabled>Selecciona un color</option>
                            {colores.map((color, index) => (
                                <option key={index} value={color}>
                                    {color}
                                </option>
                            ))}
                        </Input>
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

export default FormularioProducto;
