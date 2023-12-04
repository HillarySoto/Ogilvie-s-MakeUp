import React, { useEffect, useState } from "react";
import { Modal, ModalHeader, ModalBody, Form, FormGroup, Input, Label, ModalFooter, Button } from "reactstrap";


const modeloDetallesPedido = {
    id: 0,
    idPedido: 0,
    idProducto: 0,
    cantidad: 0,
    subTotal: 0,
}

const ModalDetalle = ({ mostrarModalDetalle, setMostrarModalDetalle, guardarDetalleProducto, editarDetallePedido, setEditarDetallePedido, actualizarDetallesPedido, listaProductos, actualizarMontoTotalPedido }) => {
    const [detalles, setDetalles] = useState(modeloDetallesPedido);
    const [precioProducto, setPrecioProducto] = useState(0);


    const actualizarDato = (e) => {
        const { name, value } = e.target;
        setDetalles((prevDetalles) => ({
            ...prevDetalles,
            [name]: value || '',
        }));
    };



    useEffect(() => {
        if (detalles.idProducto) {
            const productoSeleccionado = listaProductos.find(
                (producto) => producto.id === detalles.idProducto
            );
            if (productoSeleccionado) {
                setPrecioProducto(productoSeleccionado.precio || 0);
            }
        }
    }, [detalles.idProducto, listaProductos]);



    useEffect(() => {
        if (detalles.idProducto) {
            const productoSeleccionado = listaProductos.find(
                (producto) => producto.id === detalles.idProducto
            );
            if (productoSeleccionado) {
                setPrecioProducto(productoSeleccionado.precio || 0);
            }
        }
    }, [detalles.idProducto, listaProductos]);




    useEffect(() => {
        setDetalles((prevDetalles) => ({
            ...prevDetalles,
            subTotal: calcularSubTotal(),
        }));
    }, [detalles.cantidad, precioProducto]);;



    useEffect(() => {
        if (editarDetallePedido !== null) {
            setDetalles(editarDetallePedido);
        } else {
            setDetalles(modeloDetallesPedido);
        }
    }, [editarDetallePedido]);




    const calcularSubTotal = () => {
        const subTotal = detalles.cantidad * precioProducto;
        return {
            subTotal,
            precioProducto,  // Incluimos también el precio en el resultado
        };
    };



    useEffect(() => {
        const { subTotal, precioProducto: nuevoPrecio } = calcularSubTotal();
        setDetalles((prevDetalles) => ({
            ...prevDetalles,
            subTotal,
            precioProducto: nuevoPrecio,
        }));
    }, [detalles.cantidad, precioProducto]);



    const enviarDatos = async () => {

        try {


            const datosAEnviar = {
                id: detalles.id,
                idPedido: detalles.idPedido,  // Utiliza la variable idPedidoEnviar
                idProducto: detalles.idProducto,
                cantidad: detalles.cantidad,
                subTotal: calcularSubTotal().subTotal,
            };

            console.log(datosAEnviar);

            actualizarMontoTotalPedido(datosAEnviar.idPedido);


            if (detalles.id === 0) {
                guardarDetalleProducto(datosAEnviar);
            } else {
                actualizarDetallesPedido(datosAEnviar);
            }

            setDetalles(modeloDetallesPedido);
            setMostrarModalDetalle(false);
            setEditarDetallePedido(null);

        } catch (error) {
            console.error('Error al guardar el detalle:', error);
        }
    };

    const cerrarModal = () => {
        setMostrarModalDetalle(!mostrarModalDetalle);
        setEditarDetallePedido(null);
    }

    return (
        <Modal isOpen={mostrarModalDetalle}>
            <ModalHeader>
                {detalles.id === 0 ? "Agregar producto al pedido" : "Editar producto del pedido"}
            </ModalHeader>
            <ModalBody>
                <Form>
                    <FormGroup>
                        <Label>Producto</Label>
                        <Input
                            type="select"
                            name="idProducto"
                            onChange={(e) => actualizarDato(e)}
                            value={detalles.idProducto}
                            disabled={detalles.id !== 0}
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
                            value={detalles.cantidad}
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label>Sub Total:</Label>
                        <Input
                            type="text"
                            name="subTotal"
                            value={calcularSubTotal().subTotal}
                            readOnly />
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

export default ModalDetalle;
