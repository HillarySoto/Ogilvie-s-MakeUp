import React, { useState, useEffect } from 'react';
import { useParams,useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const EditarEnvio = () => {
  const { idEnvio } = useParams();
const navigate = useNavigate()
  const [envio, setEnvio] = useState({
    idEnvio: 0,
    idCliente: 0,
    direccionEnvio: '',
    fechaEnvio: '',
    fechaLlegada: '',
    costoEnvio: 0,
    compañiaEnvio: '',
    numGuia: '',
  });

  useEffect(() => {
    const fetchEnvio = async () => {
      try {
        const response = await fetch(`/api/enviosController/ObtenerEnvio/${idEnvio}`);
        const data = await response.json();
        setEnvio({
          idEnvio: data.idEnvio,
          idCliente: data.idCliente,
          direccionEnvio: data.direccionEnvio,
          fechaEnvio: new Date(data.fechaEnvio).toISOString().split('T')[0],
          fechaLlegada: new Date(data.fechaLlegada).toISOString().split('T')[0],
          costoEnvio: data.costoEnvio,
          compañiaEnvio: data.compañiaEnvio,
          numGuia: data.numGuia,
        });
      } catch (error) {
        console.error('Error al obtener el envío para editar', error);
      }
    };

    fetchEnvio();
  }, [idEnvio]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`/api/enviosController/EditarEnvio/${idEnvio}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(envio),
      });

      if (response.ok) {
        // Redirigir a la lista de envíos después de la edición exitosa
        navigate('/envios');
      } else {
        console.error('Error al editar el envío');
      }
    } catch (error) {
      console.error('Error al enviar la solicitud de edición', error);
    }
  };

  const handleChange = (e) => {
    setEnvio({
      ...envio,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="container mt-4">
      <h2>Editar Envío</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Dirección de Envío</label>
          <input
            type="text"
            className="form-control"
            name="direccionEnvio"
            value={envio.direccionEnvio}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Fecha de Envío</label>
          <input
            type="date"
            className="form-control"
            name="fechaEnvio"
            value={envio.fechaEnvio}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Fecha de Llegada</label>
          <input
            type="date"
            className="form-control"
            name="fechaLlegada"
            value={envio.fechaLlegada}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Costo de Envío</label>
          <input
            type="number"
            className="form-control"
            name="costoEnvio"
            value={envio.costoEnvio}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Compañía de Envío</label>
          <input
            type="text"
            className="form-control"
            name="compañiaEnvio"
            value={envio.compañiaEnvio}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Número de Guía</label>
          <input
            type="text"
            className="form-control"
            name="numGuia"
            value={envio.numGuia}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Guardar Cambios
        </button>
      </form>
    </div>
  );
};

export default EditarEnvio;