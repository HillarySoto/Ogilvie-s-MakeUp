using System;
using System.Collections.Generic;

namespace ProyectoAnalisis.Models;

public partial class Pedido
{
    public int Id { get; set; }

    public int? IdCliente { get; set; }

    public DateTime? FechaRegistro { get; set; }

    public int? Total { get; set; }

    public int? Estado { get; set; }

    public virtual ICollection<DetallePedido> DetallePedidos { get; set; } = new List<DetallePedido>();

    public virtual ICollection<Devolucion> Devolucions { get; set; } = new List<Devolucion>();

    public virtual ICollection<Envio> Envios { get; set; } = new List<Envio>();

    public virtual Usuario? IdClienteNavigation { get; set; }

    public virtual ICollection<Pago> Pagos { get; set; } = new List<Pago>();
}
