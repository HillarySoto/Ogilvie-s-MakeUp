import Swal from "sweetalert2";

export const mostrarClientes = async () => {

    const response = await fetch("api/Clientes");/* ver ruta del controlador */

    try {
        if (response.ok) {
            const data = await response.json();
            return data; //lista de clientes

        } else {
            console.log("error al obtener la lista")
            return [];
        }
    } catch (error) {
        console.error("Error en la solicitud fn mostrarClientes", error);
    }

}


export const saveClient = async (client) => {

    const response = await fetch("api/Clientes", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(client)
    })

    if (response.ok) {
        mostrarClientes();
    }
}

export const updateClient = async (id, client) => {

    try {
        const result = await Swal.fire({
            title: 'Actualizar Información?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            cancelButtonText: 'Cancelar',
            allowOutsideClick: false
        });

        if (result.isConfirmed) {
            const response = await fetch("api/Clientes/" + id, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json;charset=utf-8'
                },
                body: JSON.stringify(client)
            })

            if (response.ok) {
                return true;
            } else {
                console.error("error al actualizar cliente");
                return false;
            }
        } else {
            return false; //cancelo la actualizacion
        }


    } catch (error) {
        console.error("Error en la solicitud fn updateClient: ", error);
        return false;
    }

}

export const eliminarCliente = async (id) => {

    try {
        const result = await Swal.fire({
            title: 'Eliminar Cliente?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            cancelButtonText: 'Cancelar',
            allowOutsideClick: false
        });

        if (result.isConfirmed) {
            const response = await fetch("api/Clientes/" + id, { //llama a la api
                method: 'DELETE',
            });

            if (response.ok) {
                return true;
            } else {
                console.error("error al eliminar cliente");
                return false;
            }
        } else {
            return false; //cancelo la eliminacion
        }


    } catch (error) {
        console.error("Error en la solicitud fn eliminarCliente: ", error);
        return false;
    }

};
