using System;
using System.Collections.Generic;

namespace ProyectoAnalisis.Models;

public partial class Respuestum
{
    public int Id { get; set; }

    public int? IdConsulta { get; set; }

    public string? Detalles { get; set; }
}
