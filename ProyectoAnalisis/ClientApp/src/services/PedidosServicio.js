import Swal from "sweetalert2";

export const mostrarPedidos = async () => { //para monstrar el inventario

    const response = await fetch("api/Pedidos/Listar");

    try {
        if (response.ok) {
            const data = await response.json();
            return data; //listado de pedidos

        } else {
            console.log("error al obtener la lista")
            return [];
        }
    } catch (error) {
        console.error("Error en la solicitud fn mostrarPedido", error);
    }
};



export const guardarPedido = async (pedido) => {
    try {
        await fetch("api/Pedidos/Guardar", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8',
            },
            body: JSON.stringify(pedido),
        });

    } catch (error) {
        console.error("Error al guardar el pedido:", error);
        throw error;
    } finally {
        mostrarPedidos();
    }
};


export const editarPedido = async (id, pedido) => {

    try {
        const result = await Swal.fire({
            title: 'Actualizar Informacii&oacuten?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            cancelButtonText: 'Cancelar',
            allowOutsideClick: false
        });

        if (result.isConfirmed) {
            const response = await fetch(`api/Pedidos/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json;charset=utf-8'
                },
                body: JSON.stringify(pedido)
            })

            if (response.ok) {
                return true;
            } else {
                console.error("error al actualizar el pedido");
                return false;
            }
        } else {
            return false; //cancelo la actualizacion
        }


    } catch (error) {
        console.error("Error en la solicitud fn editarPedido: ", error);
        return false;
    }
};





export const eliminarPedido = async (id) => {
    const respuesta = await Swal.fire({
        title: 'Eliminar Pedido?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        cancelButtonText: 'Cancelar',
        allowOutsideClick: false,
    });

    if (respuesta.isConfirmed) {
        try {
            await fetch(`api/Pedidos/Eliminar/${id}`, {
                method: 'DELETE',
            });
        } catch (error) {
            console.error("Error al eliminar el pedido:", error);
            throw error;
        } finally {
            mostrarPedidos();
        }
    }
};
