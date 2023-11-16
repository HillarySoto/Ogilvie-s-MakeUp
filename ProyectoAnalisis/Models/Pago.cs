﻿using System;
using System.Collections.Generic;

namespace ProyectoAnalisis.Models;

public partial class Pago
{
    public int Id { get; set; }

    public DateTime? FechaPago { get; set; }

    public int? Monto { get; set; }

    public string? MetodoPago { get; set; }

    public string? Referencia { get; set; }

    public string? numeroTarjeta { get; set; }

    public string? codigoTarjeta { get; set; }

    public string? Estado { get; set; }
}
