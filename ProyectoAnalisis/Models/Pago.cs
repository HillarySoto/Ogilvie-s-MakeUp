using System;
using System.Collections.Generic;

namespace ProyectoAnalisis.Models;

public partial class Pago
{
    public int Id { get; set; }

    public int? IdPedido { get; set; }

    public int? IdCliente { get; set; }

    public DateTime? FechaPago { get; set; }

    public decimal? Monto { get; set; }

    public string? MetodoPago { get; set; }

    public string? Referencia { get; set; }

    public string? NumeroTarjeta { get; set; }

    public string? CodigoTarjeta { get; set; }

    public string? Estado { get; set; }

    public virtual Usuario? IdClienteNavigation { get; set; }

    public virtual Pedido? IdPedidoNavigation { get; set; }
}
