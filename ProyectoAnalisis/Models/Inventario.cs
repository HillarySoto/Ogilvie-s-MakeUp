using ProyectoAnalisis.Models;
using System;
using System.Collections.Generic;

namespace ProyectoAnalisis.Models;

public partial class Inventario
{
    public int Id { get; set; }

    public int? IdProducto { get; set; }

    public string? Descripcion { get; set; }

    public int? Cantidad { get; set; }

    public DateTime? FechaRegistro { get; set; }

    public DateTime? FechaCaduca { get; set; }

    public bool? Estado { get; set; }

    public virtual Producto? IdNavigation { get; set; }
}
