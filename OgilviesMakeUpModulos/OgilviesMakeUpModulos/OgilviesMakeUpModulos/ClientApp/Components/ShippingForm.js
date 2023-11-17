import React, { useState } from 'react';

const ShippingForm = () => {
    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    const [city, setCity] = useState('');
    const [postalCode, setPostalCode] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Aquí puedes enviar los datos del formulario al backend (usando una solicitud HTTP).
        console.log('Datos enviados:', { name, address, city, postalCode });
    };

    return (
        <div>
            <h2>Formulario de Envío</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Nombre:</label>
                <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} />

                <label htmlFor="address">Dirección:</label>
                <input type="text" id="address" value={address} onChange={(e) => setAddress(e.target.value)} />

                <label htmlFor="city">Ciudad:</label>
                <input type="text" id="city" value={city} onChange={(e) => setCity(e.target.value)} />

                <label htmlFor="postalCode">Código Postal:</label>
                <input type="text" id="postalCode" value={postalCode} onChange={(e) => setPostalCode(e.target.value)} />

                <button type="submit">Enviar</button>
            </form>
        </div>
    );
};

export default ShippingForm;