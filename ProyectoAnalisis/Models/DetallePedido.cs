using System;
using System.Collections.Generic;

namespace ProyectoAnalisis.Models;

public partial class DetallePedido
{
    public int Id { get; set; }

    public int? IdPedido { get; set; }

    public int? IdProducto { get; set; }

    public int? Cantidad { get; set; }

    public int? Subtotal { get; set; }

    public virtual Producto Id1 { get; set; } = null!;

    public virtual Pedido IdNavigation { get; set; } = null!;
}
