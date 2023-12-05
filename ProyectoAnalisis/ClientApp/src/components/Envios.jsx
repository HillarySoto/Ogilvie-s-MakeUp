import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';

const ListaEnvios = () => {
  const [envios, setEnvios] = useState([]);
  const [filteredEnvios, setFilteredEnvios] = useState([]);
  const [filterDate, setFilterDate] = useState('');

  const fetchEnvios = async () => {
    try {
      const response = await fetch('api/enviosController/Lista');
      const data = await response.json();
      const mappedEnvios = data.map((envio) => ({
        ...envio,
        fechaEnvio: new Date(envio.fechaEnvio).toLocaleDateString(),
        fechaLlegada: new Date(envio.fechaLlegada).toLocaleDateString(),
      }));
      setEnvios(mappedEnvios);
      setFilteredEnvios(mappedEnvios);
    } catch (error) {
      console.error('Error al obtener los envíos', error);
    }
  };

  useEffect(() => {
    // Aplicar el filtro basado en fechaEnvio
    if (filterDate.trim() === '') {
      setFilteredEnvios(envios);
    } else {
      const filteredData = envios.filter(
        (envio) => envio.fechaEnvio.includes(filterDate)
      );
      setFilteredEnvios(filteredData);
    }
  }, [filterDate, envios]);

  useEffect(() => {
    fetchEnvios();
  }, []);

  const handleDelete = async (Id) => {
    try {
      const result = await Swal.fire({
        title: '¿Está seguro?',
        text: 'Esta acción eliminará el envío. ¿Desea continuar?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Sí, eliminar',
        cancelButtonText: 'Cancelar',
        confirmButtonColor: '#d33',
        cancelButtonColor: '#3085d6',
      });

      if (result.isConfirmed) {
        // Realizar la operación de eliminación
        const response = await fetch(`api/enviosController/EliminarEnvio/${Id}`, {
          method: 'DELETE',
        });

        if (response.ok) {
          // Recargar los envíos después de la eliminación
          fetchEnvios();
          Swal.fire({
            icon: 'success',
            title: 'Envío eliminado exitosamente',
          });
        } else {
          console.error('Error al eliminar el envío');
        }
      }
    } catch (error) {
      console.error('Error al enviar la solicitud de eliminación', error);
    }
  };

  return (
    <div className="container mt-4">
      <h2>Lista de envíos</h2>
      <div className="mb-3">
        <label className="form-label">Filtrar por Fecha de Envío:</label>
        <input
          type="text"
          className="form-control"
          value={filterDate}
          onChange={(e) => setFilterDate(e.target.value)}
        />
      </div>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>ID Envío</th>
            <th>ID Cliente</th>
            <th>Dirección de Envío</th>
            <th>Fecha de Envío</th>
            <th>Fecha de Llegada</th>
            <th>Costo de Envío</th>
            <th>Compañía de Envío</th>
            <th>Número de Guía</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {filteredEnvios.map((envio) => (
            <tr key={envio.id}>
              <td>{envio.id}</td>
              <td>{envio.idCliente}</td>
              <td>{envio.direccionEnvio}</td>
              <td>{envio.fechaEnvio}</td>
              <td>{envio.fechaLlegada}</td>
              <td>{envio.costoEnvio}</td>
              <td>{envio.compañiaEnvio}</td>
              <td>{envio.numGuia}</td>
              <td>
                <Link to={`/editar-envio/${envio.id}`} className="btn btn-primary me-2">
                  Editar Envío
                </Link>
                <button
                  className="btn btn-danger"
                  onClick={() => handleDelete(envio.id)}
                >
                  Eliminar Envío
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListaEnvios;
