

export const savePayment = async (pago) => {

    const response = await fetch("api/Pago",{
        method: 'POST',
        headers:{
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(pago)
    });
}