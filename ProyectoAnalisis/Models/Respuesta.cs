using System;
using System.Collections.Generic;

namespace ProyectoAnalisis.Models;

public partial class Respuesta
{
    public int IdRespuesta { get; set; }

    public int? IdConsulta { get; set; }

    public string? Detalles { get; set; }

    public DateTime? Fecha { get; set; }

    public virtual Consulta? IdConsultaNavigation { get; set; }
}
