using System;
using System.Collections.Generic;

namespace ProyectoAnalisis.Models;

public partial class Promocione
{
    public int IdPromocion { get; set; }

    public string? Descripcion { get; set; }

    public DateTime? FechaInicion { get; set; }

    public DateTime? FechaFin { get; set; }

    public int? Descuento { get; set; }

    public string? ListaProductos { get; set; }
}
