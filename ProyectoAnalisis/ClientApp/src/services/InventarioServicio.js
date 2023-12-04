import Swal from "sweetalert2";

export const mostrarInventario = async () => { //para monstrar el inventario

    const response = await fetch("api/Inventario/Listar");

    try {
        if (response.ok) {
            const data = await response.json();
            return data; //listado de inventario

        } else {
            console.log("error al obtener la lista")
            return [];
        }
    } catch (error) {
        console.error("Error en la solicitud fn mostrarInventario", error);
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
        console.error("Error en la solicitud fn mostrarInventario", error);
    }
};



export const guardarInventario = async (inventario) => {
    try {
        await fetch("api/Inventario/Guardar", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8',
            },
            body: JSON.stringify(inventario),
        });

    } catch (error) {
        console.error("Error al guardar el inventario:", error);
        throw error;
    } finally {
        mostrarInventario();
    }
};

export const editarInventario = async (inventario) => {
    try {
        const result = await Swal.fire({
            title: 'Actualizar Informaci&oacuten?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            cancelButtonText: 'Cancelar',
            allowOutsideClick: false,
        });

        if (result.isConfirmed) {
            await fetch("api/Inventario/Editar", {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json;charset=utf-8',
                },
                body: JSON.stringify(inventario),
            });
        }
    } catch (error) {
        console.error("Error al editar la entrada de inventario:", error);
        throw error;
    } finally {
        mostrarInventario();
    }
};





export const eliminarInventario = async (id) => {
    const respuesta = await Swal.fire({
        title: 'Eliminar Inventario?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        cancelButtonText: 'Cancelar',
        allowOutsideClick: false,
    });

    if (respuesta.isConfirmed) {
        try {
            await fetch(`api/Inventario/Eliminar/${id}`, {
                method: 'DELETE',
            });
        } catch (error) {
            console.error("Error al eliminar el invenatrio:", error);
            throw error;
        } finally {
            mostrarInventario();
        }
    }
};
