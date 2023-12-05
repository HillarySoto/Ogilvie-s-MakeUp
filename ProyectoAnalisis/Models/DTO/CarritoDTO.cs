using System;
using System.Collections.Generic;

namespace ProyectoAnalisis.Models;

public partial class CarritoDTO
{
    public int Id { get; set; }

    public int? IdCliente { get; set; }

    public int? IdProducto { get; set; }

    public string? NombreProducto { get; set; }

    public string? MarcaProducto { get; set; }

    public string? NombreCliente { get; set; }

    public int? Cantidad { get; set; }
}
