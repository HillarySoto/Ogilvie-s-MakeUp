using System;
using System.Collections.Generic;

namespace ProyectoAnalisis.Models;

public partial class PedidoDTO
{
    public int Id { get; set; }

    public int? IdCliente { get; set; }

    public string? NombreCliente { get; set; }

    public DateTime? FechaRegistro { get; set; }

    public int? Total { get; set; }

    public int? Estado { get; set; }

}
