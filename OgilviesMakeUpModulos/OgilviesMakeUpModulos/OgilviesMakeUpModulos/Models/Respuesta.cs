using System.Text.Json.Serialization;

namespace OgilviesMakeUpModulos.Models;

 public class Respuesta
{
    public int IdRespuesta { get; set; }
    public int? IdConsulta { get; set; }  // Nullable int
    public string Detalles { get; set; }
    public DateTime Fecha { get; set; }

    
  [JsonIgnore]
    public Consulta Consulta { get; set; }
}
