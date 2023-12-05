import Swal from "sweetalert2";

export const mostrarDetallesPedidos = async (id) => { //para monstrar el inventario

    const response = await fetch("api/DetallePedido/ListarPorId/" + id);

    try {
        if (response.ok) {
            const data = await response.json();
            return data; //listado de inventario

        } else {
            console.log("error al obtener la lista")
            return [];
        }
    } catch (error) {
        console.error("Error en la solicitud fn mostrarDetalles", error);
    }
};





export const actualizarTotalPedido = async (idPedido) => {
    try {
        const response = await fetch(`api/DetallePedido/actualizarTotalPedido/${idPedido}`);

        if (response.ok) {
            const data = await response.json();
            console.log(data.message);
        } else {
            const errorData = await response.json();
            console.error(errorData.message);
        }
    } catch (error) {
        console.error('Error de red:', error.message);
    }
};





export const guardarDetalleProducto = async (detallePedido) => {
    try {
        const result = await Swal.fire({
            title: 'Desea añadir esto a su pedido?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            cancelButtonText: 'Cancelar',
            allowOutsideClick: false,
        });

        if (result.isConfirmed) {


            await fetch("api/DetallePedido/Guardar", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json;charset=utf-8',
                },
                body: JSON.stringify(detallePedido),
            });

        }

    } catch (error) {
        console.error("Error al guardar el detalle:", error);
        throw error;
    } finally {
        // mostrarDetallesPedidos();
    }
};


export const editarDetallesPedido = async (detallePedido) => {
    try {
        const result = await Swal.fire({
            title: 'Actualizar Informaci&oacuten del pedido?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            cancelButtonText: 'Cancelar',
            allowOutsideClick: false,
        });

        if (result.isConfirmed) {
            await fetch("api/DetallePedido/Editar", {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json;charset=utf-8',
                },
                body: JSON.stringify(detallePedido),
            });
        }
    } catch (error) {
        console.error("Error al editar la entrada de DetallePedido:", error);
        throw error;
    } finally {
        //  mostrarDetallesPedidos();
    }
};








export const eliminarDetallesPedido = async (id) => {
    const respuesta = await Swal.fire({
        title: 'Eliminar el producto del pedido de compras?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        cancelButtonText: 'Cancelar',
        allowOutsideClick: false,
    });

    if (respuesta.isConfirmed) {
        try {
            await fetch(`api/DetallePedido/Eliminar/${id}`, {
                method: 'DELETE',
            });
        } catch (error) {
            console.error("Error al eliminar el DetallePedido:", error);
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
