import Swal from "sweetalert2";

export const savePayment = async (pago) => {

    const response = await fetch("api/Pago",{
        method: 'POST',
        headers:{
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(pago)
    });
}

export const getPayments = async () => {

    const response = await fetch("api/Pago");

    try {
        if (response.ok) {
            const data = await response.json();
            return data; //lista de clientes

        } else {
            console.log("error al obtener la lista")
            return [];
        }
    } catch (error) {
        console.error("Error en la solicitud fn getPayments", error);
    }
};

export const deletePayment = async (id) => {

    try {
        const result = await Swal.fire({
            title: 'Eliminar Registro?',
            icon: 'warning',
            showCancelButton: true,
            cancelButtonText: 'Cancelar',
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            allowOutsideClick: false
        });
  
        if (result.isConfirmed) {
            const response = await fetch("api/Pago/" + id, { //llama a la api
                method: 'DELETE',
            });
  
            if (response.ok) {
                return true;
            } else {
                console.error("error al eliminar pago");
                return false;
            }
        } else {
            return false; //cancelo la eliminacion
        }
  
  
    } catch (error) {
        console.error("Error en la solicitud fn deletePago: ", error);
        return false;
    }
  
  };
  