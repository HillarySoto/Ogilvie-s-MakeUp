using System.Text.Json.Serialization;

namespace OgilviesMakeUpModulos.Models
{
    public class Consulta
    {
        public int IdConsulta { get; set; }
        public int IdCliente { get; set; }
        public string Detalles { get; set; }
        public DateTime Fecha { get; set; }

public ICollection<Respuesta> Respuestas { get; set; } 
    }
}