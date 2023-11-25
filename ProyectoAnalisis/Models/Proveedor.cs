using System;
using System.Collections.Generic;

namespace OgilviesMakeUpProject.Models;

public partial class Proveedor
{
    public int Id { get; set; }

    public string NombreEmpresa { get; set; } = null!;

    public string? Representante { get; set; }

    public string? Telefono { get; set; }

    public string? Email { get; set; }

    public string? Direccion { get; set; }
}
