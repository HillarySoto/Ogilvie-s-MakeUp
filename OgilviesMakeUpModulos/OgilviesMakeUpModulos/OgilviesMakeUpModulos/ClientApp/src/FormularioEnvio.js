import React, { useState, useEffect } from 'react';
import { useParams,useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2'; 

const FormularioEnvio = () => {
  const navigate = useNavigate();
  const { idPedido } = useParams();
  const [envio, setEnvio] = useState({
    idPedido: '',
    idCliente: '',
    DireccionEnvio: '',
    fechaEnvio: '',
    fechaLlegada: '',
    costoEnvio: '',
    companiaEnvio: '',
    numGuia: ''
  });
  const [errors, setErrors] = useState({}); // Estado para manejar errores de validación

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`api/productoController/pedido/${idPedido}`);
        const data = await response.json();

        setEnvio(prevEnvio => ({
          ...prevEnvio,
          idCliente: data.idCliente,
          idPedido: data.idPedido,
        }));
      } catch (error) {
        console.error('Error al obtener datos del pedido', error);
      }
    };

    fetchData();
  }, [idPedido]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEnvio({
      ...envio,
      [name]: value
    });

    // Validaciones
    if (name === 'fechaEnvio') {
      // Validar que la fecha de envío no sea anterior a la fecha actual
      const currentDate = new Date().toISOString().split('T')[0];

      if (value < currentDate) {
        setErrors(prevErrors => ({
          ...prevErrors,
          [name]: 'La fecha de envío no puede ser anterior a la fecha actual.'
        }));
      } else {
        setErrors(prevErrors => ({
          ...prevErrors,
          [name]: ''
        }));
      }
    } else if (name === 'fechaLlegada') {
      // Validar que la fecha de llegada no sea menor que la fecha de envío
      if (value < envio.fechaEnvio) {
        setErrors(prevErrors => ({
          ...prevErrors,
          [name]: 'La fecha de llegada no puede ser menor que la fecha de envío.'
        }));
      } else {
        setErrors(prevErrors => ({
          ...prevErrors,
          [name]: ''
        }));
      }
    } else if (name === 'costoEnvio' || name === 'numGuia') {
      // Validar que el costo y el número de guía solo contengan números
      const regex = /^[0-9]*$/;
      if (!regex.test(value)) {
        setErrors(prevErrors => ({
          ...prevErrors,
          [name]: 'Este campo solo puede contener números.'
        }));
      } else {
        setErrors(prevErrors => ({
          ...prevErrors,
          [name]: ''
        }));
      }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validar si hay errores antes de enviar los datos
    const hasErrors = Object.values(errors).some(error => error !== '');
    if (hasErrors) {
        Swal.fire({
            icon: 'error',
            title: 'Error de validación',
            text: 'Hay errores de validación. No se puede enviar el formulario.'
        });
        return;
    }

    // Verificar si hay datos vacíos en envio
    const hasEmptyFields = Object.values(envio).some(value => value === '');
    if (hasEmptyFields) {
        Swal.fire({
            icon: 'error',
            title: 'Campos vacíos',
            text: 'Hay datos vacíos en el formulario. Por favor, completa todos los campos.'
        });
        return;
    }

    try{

         // Call the API to register the envio
         const response = await fetch('api/enviosController/RegistrarEnvio', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(envio),
        });

        if (response.ok) {
            const response = await fetch('api/productoController/ActualizarEstadoPedido/'+idPedido, {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify(envio),
            });

            Swal.fire({
                icon: 'success',
                title: 'Formulario enviado'
            }).then(() => {
             
              navigate('/');
            });
      
            
            
        } else {
            console.error('Error al enviar el formulario:', response.statusText);
            // Handle error if needed
        }
    } catch (error) {
        console.error('Error al enviar el formulario:', error.message);
        // Handle error if needed
    }
    }


  return (
    <div className="container mt-4">
      <h2>Formulario de Envío</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">ID Producto:</label>
          <input type="text" className="form-control" name="idProducto" value={envio.idPedido} readOnly />
        </div>
        <div className="mb-3">
          <label className="form-label">ID Cliente:</label>
          <input type="text" className="form-control" name="idCliente" value={envio.idCliente} readOnly />
        </div>
        <div className="mb-3">
          <label className="form-label">Compañía de Envío:</label>
          <input type="text" className="form-control" name="companiaEnvio" value={envio.companiaEnvio} onChange={handleChange} />
        </div>
        <div className="mb-3">
          <label className="form-label">Dirección de Envío:</label>
          <input type="text" className="form-control" name="DireccionEnvio" value={envio.DireccionEnvio} onChange={handleChange} />
        </div>
        <div className="mb-3">
          <label className="form-label">Fecha de Envío:</label>
          <input type="date" className="form-control" name="fechaEnvio" value={envio.fechaEnvio} onChange={handleChange} />
          {errors.fechaEnvio && <p className="text-danger">{errors.fechaEnvio}</p>}
        </div>
        <div className="mb-3">
          <label className="form-label">Fecha de Llegada:</label>
          <input type="date" className="form-control" name="fechaLlegada" value={envio.fechaLlegada} onChange={handleChange} />
          {errors.fechaLlegada && <p className="text-danger">{errors.fechaLlegada}</p>}
        </div>
        <div className="mb-3">
          <label className="form-label">Costo de Envío:</label>
          <input type="number" className="form-control" name="costoEnvio" value={envio.costoEnvio} onChange={handleChange} />
          {errors.costoEnvio && <p className="text-danger">{errors.costoEnvio}</p>}
        </div>
        <div className="mb-3">
          <label className="form-label">Número de Guía:</label>
          <input type="number" className="form-control" name="numGuia" value={envio.numGuia} onChange={handleChange} />
          {errors.numGuia && <p className="text-danger">{errors.numGuia}</p>}
        </div>
        <div className="mb-3">
          <button type="submit" className="btn btn-primary">Enviar</button>
        </div>
        {errors.general && <p className="text-danger">{errors.general}</p>}
      </form>
    </div>
  );
};

export default FormularioEnvio;