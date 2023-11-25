using System;
using System.Collections.Generic;

namespace ProyectoAnalisis.Models;

public partial class Envio
{
    public int IdEnvio { get; set; }

    public int? IdProducto { get; set; }

    public int? IdCliente { get; set; }

    public string? DireccionEnvio { get; set; }

    public DateTime? FechaEnvio { get; set; }

    public DateTime? FechaLlegada { get; set; }

    public int? CostoEnvio { get; set; }

    public string? CompañiaEnvio { get; set; }

    public int? NumGuia { get; set; }
}
