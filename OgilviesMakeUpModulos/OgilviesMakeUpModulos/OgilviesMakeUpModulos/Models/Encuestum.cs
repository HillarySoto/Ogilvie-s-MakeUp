using System;
using System.Collections.Generic;

namespace OgilviesMakeUpModulos.Models;

public partial class Encuestum
{
    public int IdEncuesta { get; set; }

    public string? Nombre { get; set; }

    public string? Apellidos { get; set; }

    public int? Telefono { get; set; }

    public string? Correo { get; set; }

    public string? Descripcion { get; set; }

    public DateTime? FechaEncuesta { get; set; }
}
