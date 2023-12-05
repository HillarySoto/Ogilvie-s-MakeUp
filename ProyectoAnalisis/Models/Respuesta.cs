using System;
using System.Collections.Generic;
using System.Text.Json.Serialization;

namespace ProyectoAnalisis.Models;

public partial class Respuesta
{
    public int id { get; set; }

    public int? idConsulta { get; set; }

    public string? Detalles { get; set; }

    public DateTime? Fecha { get; set; }

     [JsonIgnore]
    public Consulta IdConsultaNavigation { get; set; }
}
