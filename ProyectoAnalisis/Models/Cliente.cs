using System;
using System.Collections.Generic;

namespace ProyectoAnalisis.Models;

public partial class Cliente
{
    public int Id { get; set; }

    public string? Cedula { get; set; }

    public string? Nombre { get; set; }

    public string? Telefono { get; set; }

    public string? Email { get; set; }

    public string? Direccion { get; set; }

    public DateTime? FechaRegistro { get; set; }

    public string? Contrasenia { get; set; }

    public virtual ICollection<Pago> Pagos { get; set; } = new List<Pago>();
}
