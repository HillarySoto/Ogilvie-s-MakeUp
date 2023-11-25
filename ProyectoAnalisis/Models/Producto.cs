using System;
using System.Collections.Generic;

namespace ProyectoAnalisis.Models;

public partial class Producto
{
    public int IdProducto { get; set; }

    public string? Nombre { get; set; }

    public string? Imagen { get; set; }

    public int? Precio { get; set; }

    public string? Marca { get; set; }

    public string? Categoria { get; set; }

    public virtual DetallePedido? DetallePedido { get; set; }

    public virtual Inventario? Inventario { get; set; }

    public virtual ICollection<Pago> Pagos { get; set; } = new List<Pago>();
}
