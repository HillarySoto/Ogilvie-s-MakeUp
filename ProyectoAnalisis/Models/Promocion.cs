using System;
using System.Collections.Generic;

namespace ProyectoAnalisis.Models;

public partial class Promocion
{
    public int Id { get; set; }

    public string? Descripcion { get; set; }

    public DateTime? FechaInicion { get; set; }

    public DateTime? FechaFin { get; set; }

    public decimal? Descuento { get; set; }

    public string? ListaProductos { get; set; }
}
