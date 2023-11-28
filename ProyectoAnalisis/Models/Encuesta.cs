using System;
using System.Collections.Generic;

namespace ProyectoAnalisis.Models;

public partial class Encuesta
{
    public int IdEncuesta { get; set; }

    public string? Apellidos { get; set; }

    public string? Correo { get; set; }

    public string? Descripcion { get; set; }

    public DateTime? FechaEncuesta { get; set; }

    public string? Nombre { get; set; }

    public int? Telefono { get; set; }
}
