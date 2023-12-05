using System;
using System.Collections.Generic;

namespace ProyectoAnalisis.Models;

public partial class Usuario
{
    public int Id { get; set; }

    public string? Cedula { get; set; }

    public string? Nombre { get; set; }

    public string? Telefono { get; set; }

    public string? Email { get; set; }

    public string? Contrasenia { get; set; }

    public string? Direccion { get; set; }

    public DateTime? FechaRegistro { get; set; }

    public int? Rol { get; set; }

    public virtual ICollection<Carrito> Carritos { get; set; } = new List<Carrito>();

    public virtual ICollection<Devolucion> Devolucions { get; set; } = new List<Devolucion>();

    public virtual ICollection<Envio> Envios { get; set; } = new List<Envio>();

    public virtual ICollection<Pago> Pagos { get; set; } = new List<Pago>();

    public virtual ICollection<Pedido> Pedidos { get; set; } = new List<Pedido>();

    public virtual Rol? RolNavigation { get; set; }
}
