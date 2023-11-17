using System;
using System.Collections.Generic;

namespace OgilviesMakeUpProject.Models;

public partial class Producto
{
    public int Id { get; set; }

    public string Nombre { get; set; } = null!;

    public int? Precio { get; set; }

    public string? Color { get; set; }

    public string? Marca { get; set; }

    public string? Categoria { get; set; }
}
