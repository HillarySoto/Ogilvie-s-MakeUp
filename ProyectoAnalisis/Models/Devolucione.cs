using System;
using System.Collections.Generic;

namespace ProyectoAnalisis.Models;

public partial class Devolucione
{
    public int IdDevolucion { get; set; }

    public int? IdPedido { get; set; }

    public DateTime? Fecha { get; set; }

    public string? NombreProducto { get; set; }

    public string? Motivo { get; set; }

    public int? Reembolso { get; set; }

    public string? Estado { get; set; }
}
