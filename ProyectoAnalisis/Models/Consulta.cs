using System;
using System.Collections.Generic;

namespace ProyectoAnalisis.Models;

public partial class Consulta
{
    public int IdConsulta { get; set; }

    public int? IdCliente { get; set; }

    public string? Detalles { get; set; }

    public DateTime? Fecha { get; set; }

    public virtual ICollection<Respuesta> Respuesta { get; set; } = new List<Respuesta>();
}
