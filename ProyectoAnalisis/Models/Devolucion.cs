using System;
using System.Collections.Generic;

namespace ProyectoAnalisis.Models;

public partial class Devolucion
{
    public int Id { get; set; }

    public int? IdPedido { get; set; }

    public int? IdCliente { get; set; }

    public DateTime? Fecha { get; set; }

    public string? NombreProducto { get; set; }

    public string? Motivo { get; set; }

    public string? Estado { get; set; }

    public virtual Usuario? IdClienteNavigation { get; set; }

    public virtual Pedido? IdPedidoNavigation { get; set; }
}
