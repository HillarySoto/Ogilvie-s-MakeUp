using System;
using System.Collections.Generic;

namespace ProyectoAnalisis.Models;

public partial class DetallePedidoDTO
{
    public int Id { get; set; }

    public int? IdPedido { get; set; }

    public int? IdProducto { get; set; }

    public string? NombreProducto { get; set; }

    public string? MarcaProducto { get; set; }

    public int? Cantidad { get; set; }

    public int? Subtotal { get; set; }

    /*
    
    public virtual Pedido? pedido { get; set; }

    public virtual Producto? producto { get; set; }

    */
}

