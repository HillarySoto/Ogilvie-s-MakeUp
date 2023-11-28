import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
const ListaPedidos = () => {
  const [pedidos, setPedidos] = useState([]);

  useEffect(() => {
    const fetchPedidos = async () => {
      try {
        const response = await fetch('api/productoController/ListaPedidos');
        const data = await response.json();
        setPedidos(data.map(pedido => ({
          ...pedido,
          fecha: new Date(pedido.fecha).toLocaleDateString(),
        })));
      } catch (error) {
        console.error('Error al obtener los pedidos', error);
      }
    };

    fetchPedidos();
  }, []);


  return (
    <div className="container mt-4">
      <h2>Lista de Pedidos</h2>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>ID Pedido</th>
            <th>ID Cliente</th>
            <th>ID Carrito</th>
            <th>Fecha</th>
            <th>Detalles</th>
            <th>Subtotal</th>
            <th>Total</th>
          
            <th>Estado Pedido</th>
            <th>Confirmar pedido</th>
          </tr>
        </thead>
        <tbody>
          {pedidos.map((pedido) => (
            <tr key={pedido.idPedido}>
              <td>{pedido.idPedido}</td>
              <td>{pedido.idCliente}</td>
              <td>{pedido.idCarrito}</td>
              <td>{pedido.fecha}</td>
              <td>{pedido.detalles}</td>
           
              <td>{pedido.subtotal}</td>
              <td>{pedido.total}</td>
              <td>{pedido.estadoPedido ? 'Envio confirmado' : 'Envio no confirmado'}</td>
              <td>
                {!pedido.estadoPedido && (
                  <div>
                   <Link to={`/formulario-envio/${pedido.idPedido}`} className="btn btn-success me-2">
                   Confirmar envío
                 </Link>
            
                 <Link to={`/formulario-pedido/${pedido.idPedido}`} className="btn btn-success">
                   Modificar Pedido
                 </Link>
                 </div>
                 
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListaPedidos;
