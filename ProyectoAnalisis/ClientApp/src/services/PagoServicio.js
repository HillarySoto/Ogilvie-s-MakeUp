

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
}