using System;
using System.Collections.Generic;

namespace ProyectoAnalisis.Models;

public partial class Consulta
{
    public int id{ get; set; }

    public int? idCliente { get; set; }

    public string? Detalles { get; set; }

    //public DateTime? Fecha { get; set; }

   public ICollection<Respuesta> Respuesta { get; set; } 
}
