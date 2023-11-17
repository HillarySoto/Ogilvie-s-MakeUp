import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Swal from 'sweetalert2';
import { useParams, useNavigate } from 'react-router-dom';

const ModificarPedidoForm = () => {
  const { idPedido } = useParams();
  const navigate = useNavigate();
  const [pedido, setPedido] = useState({
    detalles: '',
    subtotal: 0,
    total: 0,
  });

  useEffect(() => {
    const fetchPedido = async () => {
      try {
        const response = await fetch(`api/productoController/pedido/${idPedido}`);
        const data = await response.json();
        setPedido(data);
      } catch (error) {
        console.error('Error al obtener el pedido', error);
      }
    };

    fetchPedido();
  }, [idPedido]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPedido({
      ...pedido,
      [name]: value,
    });
  };

  const showConfirmationAlert = () => {
    Swal.fire({
      title: '¿Está seguro?',
      text: 'Esta acción modificará el pedido. ¿Desea continuar?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Sí, modificar',
      cancelButtonText: 'Cancelar',
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
    }).then((result) => {
      if (result.isConfirmed) {
        handleSubmit();
      }
    });
  };

  const handleSubmit = async () => {
    try {
      const response = await fetch(`api/productoController/modificarPedido/${idPedido}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(pedido),
      });

      if (response.ok) {
        console.log('Pedido modificado exitosamente');
        Swal.fire({
          icon: 'success',
          title: 'Pedido modificado exitosamente',
        });
        navigate("/");
      } else {
        console.error('Error al modificar el pedido');
      }
    } catch (error) {
      console.error('Error al enviar la solicitud de modificación', error);
    }
  };

  return (
    <div className="container mt-4">
      <h2>Modificar Pedido</h2>
      <form onSubmit={(e) => { e.preventDefault(); showConfirmationAlert(); }}>
        <div className="mb-3">
          <label className="form-label">Detalles:</label>
          <input type="text" className="form-control" name="detalles" value={pedido.detalles} onChange={handleChange} />
        </div>
        <div className="mb-3">
          <label className="form-label">Carrito</label>
          <input type="number" className="form-control" name="idCarrito" value={pedido.idCarrito} onChange={handleChange} />
        </div>
        <div className="mb-3">
          <label className="form-label">Subtotal:</label>
          <input type="number" className="form-control" name="subtotal" value={pedido.subtotal} onChange={handleChange} />
        </div>
        <div className="mb-3">
          <label className="form-label">Total:</label>
          <input type="number" className="form-control" name="total" value={pedido.total} onChange={handleChange} />
        </div>
        <div className="mb-3">
          <button type="submit" className="btn btn-primary">Modificar Pedido</button>
        </div>
      </form>
    </div>
  );
};

export default ModificarPedidoForm;
