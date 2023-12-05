import Swal from "sweetalert2";

export const mostrarCarrito = async (id) => { //para monstrar el inventario

    const response = await fetch("api/Carrito/ListarCarrito/" + id);

    try {
        if (response.ok) {
            const data = await response.json();
            return data; //listado de inventario

        } else {
            console.log("error al obtener la lista")
            return [];
        }
    } catch (error) {
        console.error("Error en la solicitud fn mostrarCarrito", error);
    }
};



export const addToCart = async (objeto) => {

    try {

        await fetch("api/Carrito/Guardar", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8',
            },
            body: JSON.stringify(objeto),
        });

    } catch (error) {
        console.error("Error al agregar al carrito:", error);
        throw error;
    } finally {
        //mostrarDetallesPedidos();
    }
};


export const editarProductoCarrito = async (objeto) => {
    try {
        const result = await Swal.fire({
            title: 'Actualizar la Informaci&oacuten?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            cancelButtonText: 'Cancelar',
            allowOutsideClick: false,
        });

        if (result.isConfirmed) {
            await fetch("api/Carrito/Editar", {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json;charset=utf-8',
                },
                body: JSON.stringify(objeto),
            });
        }
    } catch (error) {
        console.error("Error al editar la entrada de Carrito:", error);
        throw error;
    } finally {
        //  mostrarDetallesPedidos();
    }
};








export const eliminarProductoCarrito = async (id) => {
    const respuesta = await Swal.fire({
        title: 'Eliminar el producto del carrito?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        cancelButtonText: 'Cancelar',
        allowOutsideClick: false,
    });

    if (respuesta.isConfirmed) {
        try {
            await fetch(`api/Carrito/Eliminar/${id}`, {
                method: 'DELETE',
            });
        } catch (error) {
            console.error("Error al eliminar el Carrito:", error);
            throw error;
        } finally {
            //   mostrarDetallesPedidos();
        }
    }
};


export const listarProductos = async () => { //para monstrar el inventario

    const response = await fetch("api/Producto/Lista");

    try {
        if (response.ok) {
            const data = await response.json();
            return data; //listado de inventario

        } else {
            console.log("error al obtener la lista")
            return [];
        }
    } catch (error) {
        console.error("Error en la solicitud fn listarProductos", error);
    }
};




export const crearPedidoDesdeCarrito = async (idCliente) => {
    try {
        const response = await fetch(`api/Carrito/CrearPedidoDesdeCarrito/${idCliente}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (response.ok) {
            console.log('Pedido creado exitosamente desde el carrito.');
        } else {
            console.error('Error al crear el pedido desde el carrito:', response.statusText);
        }
    } catch (error) {
        console.error('Error en la solicitud:', error);
    }
};
