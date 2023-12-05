import React, { useState, useEffect } from 'react';
import { Button, ListGroup, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'sweetalert2/dist/sweetalert2.min.css';
import Swal from 'sweetalert2';
const ListaConsultas = () => {
  const [consultas, setConsultas] = useState([]);
  const [respuestas, setRespuestas] = useState({});
  const [selectedConsulta, setSelectedConsulta] = useState(null);
  const [nuevaRespuesta, setNuevaRespuesta] = useState('');
  const [showAgregarRespuesta, setShowAgregarRespuesta] = useState(false);

  useEffect(() => {
    const fetchConsultas = async () => {
      try {
        const response = await fetch('api/consultasController/ListaConsultas');
        const data = await response.json();
        setConsultas(data);
      } catch (error) {
        console.error('Error al obtener la lista de consultas', error);
      }
    };

    fetchConsultas();
  }, []);

  const handleConsultaClick = async (idConsulta) => {
    try {
      if (selectedConsulta === idConsulta && !showAgregarRespuesta) {
        setRespuestas({ ...respuestas, [idConsulta]: [] });
        setSelectedConsulta(null);
      } else {
        const response = await fetch(`api/consultasController/ObtenerRespuestas/${idConsulta}`);
        const data = await response.json();
        setRespuestas({ ...respuestas, [idConsulta]: data });
        setSelectedConsulta(idConsulta);
      }
    } catch (error) {
      console.error('Error al obtener respuestas de la consulta', error);
    }
  };

  const handleAgregarRespuesta = () => {
    setShowAgregarRespuesta(true);
  };

  const handleSubmitRespuesta = async (e) => {
    e.preventDefault();
  
    try {
      const fechaActual = new Date(); // Obtener la fecha actual
      console.log(nuevaRespuesta)
      const response = await fetch(`api/consultasController/ResponderConsulta/${selectedConsulta}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          detalles: nuevaRespuesta,
          fecha: new Date().toISOString()
        }),
      });
  
      if (response.ok) {
        handleConsultaClick(selectedConsulta);
        setNuevaRespuesta('');
        setShowAgregarRespuesta(false);
      } else {
        console.error('Error al agregar la respuesta');
      }
    } catch (error) {
      console.error('Error al enviar la solicitud de respuesta', error);
    }
  };

  const handleEliminarRespuesta = async (idRespuesta) => {
    // Mostrar SweetAlert de confirmación
    const confirmacion = await Swal.fire({
      title: '¿Estás seguro?',
      text: 'Esta acción no se puede deshacer',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí, eliminar',
      cancelButtonText: 'Cancelar',
    });

    // Si se confirma la eliminación
    if (confirmacion.isConfirmed) {
      try {
        const response = await fetch(`api/consultasController/EliminarRespuesta/${idRespuesta}`, {
          method: 'DELETE',
        });

        if (response.ok) {
          // Actualizar la lista de respuestas después de eliminar
          handleConsultaClick(selectedConsulta);

          // Mostrar SweetAlert de éxito
          Swal.fire({
            title: 'Eliminado',
            text: 'La respuesta ha sido eliminada correctamente',
            icon: 'success',
          });
        } else {
          console.error('Error al eliminar la respuesta');
          Swal.fire({
            title: 'Error',
            text: 'Hubo un error al intentar eliminar la respuesta',
            icon: 'error',
          });
        }
      } catch (error) {
        console.error('Error al enviar la solicitud de eliminación', error);
        Swal.fire({
          title: 'Error',
          text: 'Hubo un error al intentar eliminar la respuesta',
          icon: 'error',
        });
      }
    }
  };

  const handleEliminarConsulta = async (idConsulta) => {
    // Mostrar SweetAlert de confirmación
    const confirmacion = await Swal.fire({
      title: '¿Estás seguro?',
      text: 'Esta acción no se puede deshacer',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí, eliminar',
      cancelButtonText: 'Cancelar',
    });

    // Si se confirma la eliminación
    if (confirmacion.isConfirmed) {
      try {
        const response = await fetch(`api/consultasController/EliminarConsulta/${idConsulta}`, {
          method: 'DELETE',
        });

        if (response.ok) {
          // Actualizar la lista de respuestas después de eliminar
          handleConsultaClick(selectedConsulta);

          // Mostrar SweetAlert de éxito
          Swal.fire({
            title: 'Eliminado',
            text: 'La consulta ha sido eliminada correctamente',
            icon: 'success',
          });
        } else {
          console.error('Error al eliminar la consulta');
          Swal.fire({
            title: 'Error',
            text: 'Hubo un error al intentar eliminar la consulta',
            icon: 'error',
          });
        }
      } catch (error) {
        console.error('Error al enviar la solicitud de eliminación', error);
        Swal.fire({
          title: 'Error',
          text: 'Hubo un error al intentar eliminar la consulta',
          icon: 'error',
        });
      }
    }
  };

  return (
    <div className="container mt-4">
      <h2>Lista de Consultas</h2>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Consulta</th>
            <th>Fecha</th>
            <th>Cliente</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {consultas.map((consulta) => (
            <React.Fragment key={consulta.idConsulta}>
              <tr>
                <td>{consulta.detalles}</td>
                <td>{new Date(consulta.fecha).toLocaleDateString()}</td>
                <td>{consulta.clienteNombre}</td>
                <td>
                  <Button
                    variant="primary"
                    onClick={() => handleConsultaClick(consulta.idConsulta)}
                  >
                    Ver Respuestas
                  </Button>
                  <Button
                    variant="danger"
                    onClick={() => handleEliminarConsulta(consulta.idConsulta)}
                  >
                    Eliminar
                  </Button>
                </td>
              </tr>
              {selectedConsulta === consulta.idConsulta && (
                <tr>
                  <td colSpan="4">
                    {respuestas[consulta.idConsulta] && respuestas[consulta.idConsulta].length > 0 ? (
                      <table className="table table-bordered">
                        <thead>
                          <tr>
                            <th>Respuesta</th>
                            <th>Fecha</th>
                            <th>Acciones</th>
                          </tr>
                        </thead>
                        <tbody>
                          {respuestas[consulta.idConsulta].map((respuesta) => (
                            <tr key={respuesta.id}>
                              <td>{respuesta.detalles}</td>
                              <td>{new Date(respuesta.fecha).toLocaleDateString()}</td>
                              <td>
                                <Button
                                  variant="danger"
                                  size="sm"
                                  onClick={() => handleEliminarRespuesta(respuesta.id)}
                                >
                                  Eliminar
                                </Button>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    ) : (
                      <p className="text-muted mt-2">No hay respuestas para esta consulta.</p>
                    )}
                    {showAgregarRespuesta && (
                      <Form onSubmit={handleSubmitRespuesta} className="mt-3">
                        <Form.Group controlId="formNuevaRespuesta">
                          <Form.Label>Nueva Respuesta</Form.Label>
                          <Form.Control
                            type="text"
                            placeholder="Ingrese la nueva respuesta"
                            value={nuevaRespuesta}
                            onChange={(e) => setNuevaRespuesta(e.target.value)}
                            required
                          />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                          Enviar Respuesta
                        </Button>
                      </Form>
                    )}
                    <Button
                      variant="primary"
                      onClick={handleAgregarRespuesta}
                      style={{ width: '100%', marginTop: '10px' }}
                    >
                      Agregar Respuesta
                    </Button>
                  </td>
                </tr>
              )}
            </React.Fragment>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListaConsultas;
