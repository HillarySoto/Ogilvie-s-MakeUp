import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Select from 'react-select';
import Swal from 'sweetalert2';

const CrearConsultaForm = () => {
  const [idCliente, setIdCliente] = useState('');
  const [detalles, setDetalles] = useState('');
  const [productoSeleccionado, setProductoSeleccionado] = useState(null);
  const [productos, setProductos] = useState([]);
  const [consultaEnviada, setConsultaEnviada] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [fecha, setFecha] = useState('');

  useEffect(() => {
    const fetchProductos = async () => {
      try {
        const response = await fetch('api/productoController/ListaProductos');
        const data = await response.json();
        setProductos(data.map(producto => ({ value: producto.id, label: producto.nombre })));
      } catch (error) {
        console.error('Error al obtener la lista de productos', error);
      }
    };

    fetchProductos();
  }, []);

  const filteredProductos = productos.filter(
    (producto) =>
      producto.label.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validaciones para asegurarse de que no haya campos vacíos
    if (!idCliente || !detalles || !productoSeleccionado) {
      Swal.fire({
        title: 'Campos vacíos',
        text: 'Por favor, completa todos los campos antes de enviar la consulta.',
        icon: 'warning',
      });
      return;
    }

    // Preguntar al usuario si está seguro de enviar la consulta
    const confirmacion = await Swal.fire({
      title: '¿Estás seguro?',
      text: '¿Quieres enviar la consulta?',
      icon: 'question',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí, enviar',
      cancelButtonText: 'Cancelar',
    });

    if (!confirmacion.isConfirmed) {
      // El usuario canceló el envío
      return;
    }

    try {
      const response = await fetch('api/consultasController/CrearConsulta', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          idCliente,
          detalles,
          productoSeleccionado: productoSeleccionado.value,
          fecha: new Date().toISOString(),
        }),
      });

      if (response.ok) {
        setConsultaEnviada(true);
        // Alerta de éxito después de enviar la consulta
        Swal.fire({
          title: 'Consulta enviada',
          text: 'La consulta se ha enviado con éxito.',
          icon: 'success',
        });
      } else {
        // Alerta de error si no se pudo enviar la consulta
        console.error('Error al enviar la consulta');
        Swal.fire({
          title: 'Error',
          text: 'Hubo un problema al enviar la consulta. Inténtalo de nuevo.',
          icon: 'error',
        });
      }
    } catch (error) {
      console.error('Error al enviar la solicitud de consulta', error);
      // Alerta de error si hubo un problema con la solicitud
      Swal.fire({
        title: 'Error',
        text: 'Hubo un problema al enviar la consulta. Inténtalo de nuevo.',
        icon: 'error',
      });
    }
  };

  return (
    <div className="container mt-4">
      <h2>Crear Consulta</h2>
      {consultaEnviada && <p>Consulta enviada con éxito</p>}
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">ID Cliente:</label>
          <input
            type="text"
            className="form-control"
            value={idCliente}
            onChange={(e) => setIdCliente(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Detalles:</label>
          <textarea
            className="form-control"
            value={detalles}
            onChange={(e) => setDetalles(e.target.value)}
          ></textarea>
        </div>
        <div className="mb-3">
          <Select
            options={filteredProductos}
            value={productoSeleccionado}
            onChange={(selectedOption) => setProductoSeleccionado(selectedOption)}
          />
        </div>
        <div className="mb-3">
          <button type="submit" className="btn btn-primary">
            Enviar Consulta
          </button>
        </div>
      </form>
    </div>
  );
};

export default CrearConsultaForm;
