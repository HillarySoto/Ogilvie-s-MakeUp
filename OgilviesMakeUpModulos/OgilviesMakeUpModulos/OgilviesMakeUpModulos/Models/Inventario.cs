using System;
using System.Collections.Generic;

namespace Ogilvie_s_MakeUp.Models;

public partial class Inventario
{
    public int IdInventario { get; set; }

    public string? Producto { get; set; }

    public string? Nombre { get; set; }

    public string? Descripcion { get; set; }

    public int? Cantidad { get; set; }

    public DateTime? FechaRegistro { get; set; }

    public DateTime? FechaCaduca { get; set; }

    public bool? Estado { get; set; }
}
