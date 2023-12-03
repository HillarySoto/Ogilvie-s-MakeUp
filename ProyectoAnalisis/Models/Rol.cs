using System;
using System.Collections.Generic;

namespace ProyectoAnalisis.Models;

public partial class Rol
{
    public int Id { get; set; }

    public string? Descripcion { get; set; }

    public virtual ICollection<Usuario> Usuarios { get; set; } = new List<Usuario>();
}
