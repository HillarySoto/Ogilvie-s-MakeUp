import Swal from "sweetalert2";
import 'sweetalert2/dist/sweetalert2.min.css';
import React, { useEffect, useState } from "react";
import { Modal, ModalHeader, ModalBody, Form, FormGroup, Input, Label, ModalFooter, Button } from "reactstrap";


const modeloCarrito = {
    id: 0,
    idCliente:0,
    idProducto: 0,
    cantidad: 0,
}

const ModalCarrito = ({ mostrarModalCarrito, setMostrarModalCarrito, addToCart, editarCarrito, setEditarCarrito, actualizarCarrito, listaProductos, getCarrito, user, validarProductoEnCarrito }) => {


    const [carrito, setCarrito] = useState(modeloCarrito);


    const actualizarDato = (e) => {
        const { name, value } = e.target;

        setCarrito((prevCarrito) => ({
            ...prevCarrito,
            [name]: value || '', // Establecer un valor predeterminado si es null o undefined
        }));
    };



    useEffect(() => {
        if (editarCarrito !== null) {
            setCarrito(editarCarrito);
        } else {
            setCarrito(modeloCarrito);
        }
    }, [editarCarrito]);



    const enviarDatos = async () => {

        try {

            const datosAEnviar = {
                id: carrito.id,
                idCliente: parseInt(user.id, 10),
                idProducto: carrito.idProducto,
                cantidad: carrito.cantidad,
            };

            console.log(datosAEnviar);


            if (carrito.id === 0) {

                if (validarProductoEnCarrito(datosAEnviar.idProducto)) {
                    await Swal.fire({
                        icon: 'error',
                        title: 'Producto Existente',
                        text: 'El producto ya est&acute en el carrito.',
                        confirmButtonColor: '#3085d6',
                    });
                    return;

                } else {
                    addToCart(datosAEnviar);
                }

            } else {
                actualizarCarrito(datosAEnviar);
            }
            

            setCarrito(modeloCarrito);
            setMostrarModalCarrito(false);
            setEditarCarrito(null);

            getCarrito(user.id);

        } catch (error) {
            console.error('Error al guardar el detalle:', error);
        }
    };

    const cerrarModal = () => {
        setMostrarModalCarrito(!mostrarModalCarrito);
        setEditarCarrito(null);
        getCarrito(user.id);
    }





    return (
        <Modal isOpen={mostrarModalCarrito}>
            <ModalHeader>
                {carrito.id === 0 ? "Agregar producto al pedido" : "Editar producto del pedido"}
            </ModalHeader>
            <ModalBody>
                <Form>
                    <FormGroup>
                        <Label>Producto</Label>
                        <Input
                            type="select"
                            name="idProducto"
                            onChange={(e) => actualizarDato(e)}
                            value={carrito.idProducto}
                            disabled={carrito.id !== 0}
                        >
                            {listaProductos.map((producto) => (
                                <option key={producto.id} value={producto.id}> {producto.nombre} </option>
                            ))}
                        </Input>
                    </FormGroup>

                    <FormGroup>
                        <Label>Cantidad</Label>
                        <Input
                            name="cantidad"
                            onChange={(e) => actualizarDato({
                                target: {
                                    name: 'cantidad',
                                    value: parseInt(e.target.value, 10)
                                }
                            })}
                            value={carrito.cantidad}
                        />
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

export default ModalCarrito;
