using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;

namespace ProyectoAnalisis.Models;

public partial class OgilviesmakeupContext : DbContext
{
    public OgilviesmakeupContext()
    {
    }

    public OgilviesmakeupContext(DbContextOptions<OgilviesmakeupContext> options)
        : base(options)
    {
    }

    public virtual DbSet<Cliente> Clientes { get; set; }

    public virtual DbSet<Consulta> Consultas { get; set; }

    public virtual DbSet<DetallePedido> DetallePedidos { get; set; }

    public virtual DbSet<Devolucione> Devoluciones { get; set; }

    public virtual DbSet<Encuesta> Encuestas { get; set; }

    public virtual DbSet<Envio> Envios { get; set; }

    public virtual DbSet<Inventario> Inventarios { get; set; }

    public virtual DbSet<Pago> Pagos { get; set; }

    public virtual DbSet<Pedido> Pedidos { get; set; }

    public virtual DbSet<Producto> Productos { get; set; }

    public virtual DbSet<Promocione> Promociones { get; set; }

    public virtual DbSet<Proveedores> Proveedores { get; set; }

    public virtual DbSet<Respuesta> Respuestas { get; set; }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see http://go.microsoft.com/fwlink/?LinkId=723263.
        => optionsBuilder.UseSqlServer("Server=34.122.57.221; Database=OGILVIESMAKEUP; User Id=sqlserver; Password=pwdADMIN10; TrustServerCertificate=True;");

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<Cliente>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PK__clientes__3213E83FA08BCA09");

            entity.ToTable("clientes");

            entity.Property(e => e.Id).HasColumnName("id");
            entity.Property(e => e.Cedula)
                .HasMaxLength(9)
                .IsUnicode(false)
                .HasColumnName("cedula");
            entity.Property(e => e.Contrasenia)
                .HasMaxLength(50)
                .IsUnicode(false)
                .HasColumnName("contrasenia");
            entity.Property(e => e.Direccion)
                .HasMaxLength(100)
                .IsUnicode(false)
                .HasColumnName("direccion");
            entity.Property(e => e.Email)
                .HasMaxLength(30)
                .IsUnicode(false)
                .HasColumnName("email");
            entity.Property(e => e.FechaRegistro)
                .HasColumnType("date")
                .HasColumnName("fechaRegistro");
            entity.Property(e => e.Nombre)
                .HasMaxLength(50)
                .IsUnicode(false)
                .HasColumnName("nombre");
            entity.Property(e => e.Telefono)
                .HasMaxLength(8)
                .IsUnicode(false)
                .HasColumnName("telefono");
        });

        modelBuilder.Entity<Consulta>(entity =>
        {
            entity.HasKey(e => e.IdConsulta).HasName("PK__consulta__9B2AD1D8FFBDC98C");

            entity.ToTable("consultas");

            entity.Property(e => e.Fecha).HasColumnType("date");
        });

        modelBuilder.Entity<DetallePedido>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PK__detalleP__3213E83F4CFA85BE");

            entity.ToTable("detallePedido");

            entity.Property(e => e.Id)
                .ValueGeneratedOnAdd()
                .HasColumnName("id");
            entity.Property(e => e.Cantidad).HasColumnName("cantidad");
            entity.Property(e => e.IdPedido).HasColumnName("idPedido");
            entity.Property(e => e.IdProducto).HasColumnName("idProducto");
            entity.Property(e => e.Subtotal).HasColumnName("subtotal");

            entity.HasOne(d => d.IdNavigation).WithOne(p => p.DetallePedido)
                .HasForeignKey<DetallePedido>(d => d.Id)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FK_DetallePedido_Pedido");

            entity.HasOne(d => d.Id1).WithOne(p => p.DetallePedido)
                .HasForeignKey<DetallePedido>(d => d.Id)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FK_DetallePedido_Producto");
        });

        modelBuilder.Entity<Devolucione>(entity =>
        {
            entity.HasKey(e => e.IdDevolucion).HasName("PK__devoluci__BFAF069AD8CCCD0F");

            entity.ToTable("devoluciones");

            entity.Property(e => e.IdDevolucion)
                .ValueGeneratedNever()
                .HasColumnName("idDevolucion");
            entity.Property(e => e.Estado)
                .HasMaxLength(1)
                .IsUnicode(false)
                .IsFixedLength()
                .HasColumnName("estado");
            entity.Property(e => e.Fecha)
                .HasColumnType("date")
                .HasColumnName("fecha");
            entity.Property(e => e.IdPedido).HasColumnName("idPedido");
            entity.Property(e => e.Motivo)
                .HasMaxLength(100)
                .IsUnicode(false)
                .HasColumnName("motivo");
            entity.Property(e => e.NombreProducto)
                .HasMaxLength(50)
                .IsUnicode(false)
                .HasColumnName("nombreProducto");
            entity.Property(e => e.Reembolso).HasColumnName("reembolso");
        });

        modelBuilder.Entity<Encuesta>(entity =>
        {
            entity.HasKey(e => e.IdEncuesta).HasName("PK__encuesta__72579B5439670F98");

            entity.ToTable("encuestas");

            entity.Property(e => e.IdEncuesta).ValueGeneratedNever();
            entity.Property(e => e.Apellidos)
                .HasMaxLength(50)
                .HasColumnName("apellidos");
            entity.Property(e => e.Correo)
                .HasMaxLength(60)
                .HasColumnName("correo");
            entity.Property(e => e.Descripcion)
                .HasMaxLength(500)
                .HasColumnName("descripcion");
            entity.Property(e => e.FechaEncuesta)
                .HasDefaultValueSql("(getdate())")
                .HasColumnType("datetime")
                .HasColumnName("fechaEncuesta");
            entity.Property(e => e.Nombre)
                .HasMaxLength(50)
                .HasColumnName("nombre");
            entity.Property(e => e.Telefono).HasColumnName("telefono");
        });

        modelBuilder.Entity<Envio>(entity =>
        {
            entity.HasKey(e => e.IdEnvio).HasName("PK__envios__527F831F76DE9E68");

            entity.ToTable("envios");

            entity.Property(e => e.IdEnvio).HasColumnName("idEnvio");
            entity.Property(e => e.CompañiaEnvio)
                .HasMaxLength(50)
                .IsUnicode(false)
                .HasColumnName("compañia_envio");
            entity.Property(e => e.CostoEnvio).HasColumnName("costo_envio");
            entity.Property(e => e.DireccionEnvio)
                .HasMaxLength(300)
                .IsUnicode(false)
                .HasColumnName("direccion_envio");
            entity.Property(e => e.FechaEnvio)
                .HasColumnType("date")
                .HasColumnName("fecha_envio");
            entity.Property(e => e.FechaLlegada)
                .HasColumnType("date")
                .HasColumnName("fecha_llegada");
            entity.Property(e => e.IdCliente).HasColumnName("idCliente");
            entity.Property(e => e.IdProducto).HasColumnName("idProducto");
            entity.Property(e => e.NumGuia).HasColumnName("num_guia");
        });

        modelBuilder.Entity<Inventario>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PK__inventar__3213E83F04F02D99");

            entity.ToTable("inventario");

            entity.Property(e => e.Id)
                .ValueGeneratedOnAdd()
                .HasColumnName("id");
            entity.Property(e => e.Cantidad).HasColumnName("cantidad");
            entity.Property(e => e.Descripcion)
                .HasMaxLength(500)
                .IsUnicode(false)
                .HasColumnName("descripcion");
            entity.Property(e => e.Estado).HasColumnName("estado");
            entity.Property(e => e.FechaCaduca)
                .HasColumnType("date")
                .HasColumnName("fechaCaduca");
            entity.Property(e => e.FechaRegistro)
                .HasColumnType("date")
                .HasColumnName("fechaRegistro");
            entity.Property(e => e.IdProducto).HasColumnName("idProducto");

            entity.HasOne(d => d.IdNavigation).WithOne(p => p.Inventario)
                .HasForeignKey<Inventario>(d => d.Id)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FK_Inventario_Producto");
        });

        modelBuilder.Entity<Pago>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PK__pagos__3213E83FCEA26352");

            entity.ToTable("pagos");

            entity.Property(e => e.Id).HasColumnName("id");
            entity.Property(e => e.CodigoTarjeta)
                .HasMaxLength(3)
                .IsUnicode(false)
                .HasColumnName("codigoTarjeta");
            entity.Property(e => e.Estado)
                .HasMaxLength(20)
                .IsUnicode(false)
                .HasColumnName("estado");
            entity.Property(e => e.FechaPago)
                .HasDefaultValueSql("(getdate())")
                .HasColumnType("date")
                .HasColumnName("fechaPago");
            entity.Property(e => e.IdCliente).HasColumnName("idCliente");
            entity.Property(e => e.IdProducto).HasColumnName("idProducto");
            entity.Property(e => e.MetodoPago)
                .HasMaxLength(30)
                .IsUnicode(false)
                .HasColumnName("metodoPago");
            entity.Property(e => e.Monto).HasColumnName("monto");
            entity.Property(e => e.NumeroTarjeta)
                .HasMaxLength(23)
                .IsUnicode(false)
                .HasColumnName("numeroTarjeta");
            entity.Property(e => e.Referencia)
                .HasMaxLength(50)
                .IsUnicode(false)
                .HasColumnName("referencia");

            entity.HasOne(d => d.IdClienteNavigation).WithMany(p => p.Pagos)
                .HasForeignKey(d => d.IdCliente)
                .HasConstraintName("FK__pagos__idCliente__5441852A");

            entity.HasOne(d => d.IdProductoNavigation).WithMany(p => p.Pagos)
                .HasForeignKey(d => d.IdProducto)
                .HasConstraintName("FK__pagos__idProduct__534D60F1");
        });

        modelBuilder.Entity<Pedido>(entity =>
        {
            entity.HasKey(e => e.IdPedido).HasName("PK__Pedidos__A9F619B785E84412");

            entity.ToTable("pedidos");

            entity.Property(e => e.IdPedido).HasColumnName("idPedido");
            entity.Property(e => e.Detalles)
                .HasMaxLength(500)
                .IsUnicode(false)
                .HasColumnName("detalles");
            entity.Property(e => e.EstadoPedido).HasColumnName("estadoPedido");
            entity.Property(e => e.Fecha)
                .HasColumnType("date")
                .HasColumnName("fecha");
            entity.Property(e => e.IdCarrito).HasColumnName("idCarrito");
            entity.Property(e => e.IdCliente).HasColumnName("idCliente");
            entity.Property(e => e.Subtotal).HasColumnName("subtotal");
            entity.Property(e => e.Total).HasColumnName("total");
        });

        modelBuilder.Entity<Producto>(entity =>
        {
            entity.HasKey(e => e.IdProducto).HasName("PK__producto__07F4A132EA66A3C4");

            entity.ToTable("producto");

            entity.Property(e => e.IdProducto).HasColumnName("idProducto");
            entity.Property(e => e.Categoria)
                .HasMaxLength(20)
                .IsUnicode(false)
                .HasColumnName("categoria");
            entity.Property(e => e.Imagen)
                .HasMaxLength(999)
                .IsUnicode(false)
                .HasColumnName("imagen");
            entity.Property(e => e.Marca)
                .HasMaxLength(20)
                .IsUnicode(false)
                .HasColumnName("marca");
            entity.Property(e => e.Nombre)
                .HasMaxLength(50)
                .IsUnicode(false)
                .HasColumnName("nombre");
            entity.Property(e => e.Precio).HasColumnName("precio");
        });

        modelBuilder.Entity<Promocione>(entity =>
        {
            entity.HasKey(e => e.IdPromocion).HasName("PK__promocio__811C0F991EA560A4");

            entity.ToTable("promociones");

            entity.Property(e => e.IdPromocion)
                .ValueGeneratedNever()
                .HasColumnName("idPromocion");
            entity.Property(e => e.Descripcion)
                .HasMaxLength(50)
                .IsUnicode(false)
                .HasColumnName("descripcion");
            entity.Property(e => e.Descuento).HasColumnName("descuento");
            entity.Property(e => e.FechaFin)
                .HasColumnType("date")
                .HasColumnName("fechaFin");
            entity.Property(e => e.FechaInicion)
                .HasColumnType("date")
                .HasColumnName("fechaInicion");
            entity.Property(e => e.ListaProductos)
                .HasMaxLength(100)
                .IsUnicode(false)
                .HasColumnName("listaProductos");
        });

        modelBuilder.Entity<Proveedores>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PK__proveedo__3214EC071F872BBD");

            entity.ToTable("proveedores");

            entity.Property(e => e.Direccion)
                .HasMaxLength(255)
                .HasColumnName("direccion");
            entity.Property(e => e.Email)
                .HasMaxLength(255)
                .HasColumnName("email");
            entity.Property(e => e.NombreEmpresa)
                .HasMaxLength(255)
                .HasColumnName("Nombre_empresa");
            entity.Property(e => e.Representante).HasMaxLength(255);
            entity.Property(e => e.Telefono).HasMaxLength(20);
        });

        modelBuilder.Entity<Respuesta>(entity =>
        {
            entity.HasKey(e => e.IdRespuesta).HasName("PK__respuest__D3480198299D8052");

            entity.ToTable("respuestas");

            entity.Property(e => e.Fecha).HasColumnType("date");

            entity.HasOne(d => d.IdConsultaNavigation).WithMany(p => p.Respuesta)
                .HasForeignKey(d => d.IdConsulta)
                .HasConstraintName("FK__respuesta__IdCon__4222D4EF");
        });

        OnModelCreatingPartial(modelBuilder);
    }

    partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
}
