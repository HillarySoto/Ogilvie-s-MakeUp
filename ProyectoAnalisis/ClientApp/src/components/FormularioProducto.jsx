﻿import React, { useEffect, useState } from "react";
import { Modal, ModalHeader, ModalBody, Form, FormGroup, Label, Input, ModalFooter, Button } from "reactstrap";
import Swal from "sweetalert2";
import { mostrarProductos } from "../services/ProductoServicio";

const modeloProducto = {
    id: 0,
    idProveedor: 0,
    nombre: "",
    imagen: "",
    precio: 0.0,
    idCategoria: 0,
    subcategoria: "",
    marca: ""
};

const FormularioProducto = ({ mostrarModal, setMostrarModal, guardarProducto, editar, setEditar, editarProducto, mostrarProductos }) => {
    const [producto, setProducto] = useState(modeloProducto);
    const [proveedores, setProveedores] = useState([]);
    const [categorias, setCategorias] = useState([]);

    useEffect(() => {
        fetch("/api/Proveedor/Lista")
            .then(response => response.json())
            .then(data => setProveedores(data))
            .catch(error => console.error('Error al cargar proveedores:', error));

        fetch("/api/Categoria/Lista")
            .then(response => response.json())
            .then(data => setCategorias(data))
            .catch(error => console.error('Error al cargar categorías:', error));

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

    const enviarDatos = async () => {
        if (producto.id === 0) {
            await guardarProducto(producto, setMostrarModal);
            mostrarProductos();
        } else {
            await editarProducto(producto, setMostrarModal);
            mostrarProductos();
        }
        setProducto(modeloProducto);
    };

    const cerrarModal = () => {
        setMostrarModal(false);
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
                        <Label>Proveedor</Label>
                        <Input
                            type="select"
                            name="idProveedor"
                            onChange={(e) => actualizarDato(e)}
                            value={producto.idProveedor}
                        >
                            <option value="" disabled>Selecciona un proveedor</option>
                            {proveedores.map((proveedor) => (
                                <option key={proveedor.id} value={proveedor.id}>
                                    {proveedor.nombreEmpresa}
                                </option>
                            ))}
                        </Input>
                    </FormGroup>
                    <FormGroup>
                        <Label>Categoría</Label>
                        <Input
                            type="select"
                            name="idCategoria"
                            onChange={(e) => actualizarDato(e)}
                            value={producto.idCategoria}
                        >
                            <option value="" disabled>Selecciona una categoría</option>
                            {categorias.map((categoria) => (
                                <option key={categoria.id} value={categoria.id}>
                                    {categoria.nombre}
                                </option>
                            ))}
                        </Input>
                    </FormGroup>
                    <FormGroup>
                        <Label>Nombre</Label>
                        <Input name="nombre" onChange={(e) => actualizarDato(e)} value={producto.nombre} />
                    </FormGroup>
                    <FormGroup>
                        <Label>Marca</Label>
                        <Input name="marca" onChange={(e) => actualizarDato(e)} value={producto.marca} />
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
