import Swal from "sweetalert2";

export const mostrarClientes = async () => {

    const token = localStorage.getItem('token'); 

    const response = await fetch("api/Usuarios", { /* añadir token al header de la solicitud */
        headers: {
          Authorization: `Bearer ${token}`,
        }});

    try {
        if (response.ok) {
            const data = await response.json();
            return data; //lista de clientes

        } else {
            console.log("error al obtener la lista",response)
            return [];
        }
    } catch (error) {
        console.error("Error en la solicitud fn mostrarClientes", error);
    }

}


export const saveClient = async (client) => {

    const response = await fetch("api/Usuarios", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(client)
    })

    if (response.ok) {
        //mostrarClientes();
        
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
            const response = await fetch("api/Usuarios/" + id, {
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
            cancelButtonText: 'Cancelar',
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            allowOutsideClick: false
        });

        if (result.isConfirmed) {
            const response = await fetch("api/Usuarios/" + id, { //llama a la api
                method: 'DELETE',
            });

            if (response.ok) {
                return true;
            } else {
                console.error("error al eliminar cliente", response);
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
