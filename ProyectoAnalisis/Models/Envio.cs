using System;
using System.Collections.Generic;

namespace ProyectoAnalisis.Models;

public partial class Envio
{
    public int Id { get; set; }

    public int? IdPedido { get; set; }

    public int? IdCliente { get; set; }

    public string? DireccionEnvio { get; set; }

    public DateTime? FechaEnvio { get; set; }

    public DateTime? FechaLlegada { get; set; }

    public decimal? CostoEnvio { get; set; }

    public string? CompañiaEnvio { get; set; }

    public string? NumGuia { get; set; }

    public virtual Usuario? IdClienteNavigation { get; set; }

    public virtual Pedido? IdPedidoNavigation { get; set; }
}
