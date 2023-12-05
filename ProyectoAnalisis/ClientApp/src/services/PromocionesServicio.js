import Swal from "sweetalert2";

export const mostrarPromociones = async () => {

    const response = await fetch("api/Promociones");/* ver ruta del controlador */

    try {
        if (response.ok) {
            const data = await response.json();
            return data; //lista de promos

        } else {
            console.log("error al obtener la lista")
            return [];
        }
    } catch (error) {
        console.error("Error en la solicitud fn mostrarPromociones", error);
    }
}

export const savePromo = async (promocion) => {

    const response = await fetch("api/Promociones", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(promocion)
    })

    if (response.ok) {
        mostrarClientes();
    }
}

export const updatePromo = async (id, promocion) => {

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
            const response = await fetch("api/Promociones/" + id, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json;charset=utf-8'
                },
                body: JSON.stringify(client)
            })

            if (response.ok) {
                return true;
            } else {
                console.error("error al actualizar la promocion");
                return false;
            }
        } else {
            return false; //cancelo la actualizacion
        }


    } catch (error) {
        console.error("Error en la solicitud fn updatePromo: ", error);
        return false;
    }

}


export const eliminarPromocion = async (id) => {

    try {
        const result = await Swal.fire({
            title: 'Eliminar Promocion?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            cancelButtonText: 'Cancelar',
            allowOutsideClick: false
        });

        if (result.isConfirmed) {
            const response = await fetch("api/Promociones/" + id, { //llama a la api
                method: 'DELETE',
            });

            if (response.ok) {
                return true;
            } else {
                console.error("error al eliminar promocion");
                return false;
            }
        } else {
            return false; //cancelo la eliminacion
        }


    } catch (error) {
        console.error("Error en la solicitud fn eliminarPromocion: ", error);
        return false;
    }

};

