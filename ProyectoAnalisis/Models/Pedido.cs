using System;
using System.Collections.Generic;

namespace ProyectoAnalisis.Models;

public partial class Pedido
{
    public int IdPedido { get; set; }

    public int? IdCarrito { get; set; }

    public int? IdCliente { get; set; }

    public DateTime? Fecha { get; set; }

    public string? Detalles { get; set; }

    public int? Total { get; set; }

    public int? Subtotal { get; set; }

    public bool? EstadoPedido { get; set; }

    public virtual DetallePedido? DetallePedido { get; set; }
}
