using System;
using System.Collections.Generic;

namespace ProyectoAnalisis.Models;

public partial class Producto
{
    public int Id { get; set; }

    public int? IdProveedor { get; set; }

    public string? Nombre { get; set; }

    public string? Imagen { get; set; }

    public int? Precio { get; set; }

    public int? IdCategoria { get; set; }

    public string? Marca { get; set; }

    public virtual ICollection<Carrito> Carritos { get; set; } = new List<Carrito>();

    public virtual ICollection<DetallePedido> DetallePedidos { get; set; } = new List<DetallePedido>();

    public virtual Categorium? IdCategoriaNavigation { get; set; }

    public virtual Proveedor? IdProveedorNavigation { get; set; }

    public virtual ICollection<Inventario> Inventarios { get; set; } = new List<Inventario>();
}
