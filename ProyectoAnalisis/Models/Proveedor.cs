using System;
using System.Collections.Generic;

namespace ProyectoAnalisis.Models;

public partial class Proveedor
{
    public int Id { get; set; }

    public string? NombreEmpresa { get; set; }

    public string? Representante { get; set; }

    public string? Telefono { get; set; }

    public string? Email { get; set; }

    public string? Direccion { get; set; }

    public virtual ICollection<Producto> Productos { get; set; } = new List<Producto>();
}
