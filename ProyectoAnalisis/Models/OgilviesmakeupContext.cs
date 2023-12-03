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

    public virtual DbSet<Carrito> Carritos { get; set; }

    public virtual DbSet<Categorium> Categoria { get; set; }

    public virtual DbSet<DetallePedido> DetallePedidos { get; set; }

    public virtual DbSet<Devolucion> Devolucions { get; set; }

    public virtual DbSet<Encuestum> Encuesta { get; set; }

    public virtual DbSet<Envio> Envios { get; set; }

    public virtual DbSet<Inventario> Inventarios { get; set; }

    public virtual DbSet<Pago> Pagos { get; set; }

    public virtual DbSet<Pedido> Pedidos { get; set; }

    public virtual DbSet<Producto> Productos { get; set; }

    public virtual DbSet<Promocion> Promocions { get; set; }

    public virtual DbSet<Proveedor> Proveedors { get; set; }

    public virtual DbSet<Respuestum> Respuesta { get; set; }

    public virtual DbSet<Rol> Rols { get; set; }

    public virtual DbSet<Usuario> Usuarios { get; set; }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see http://go.microsoft.com/fwlink/?LinkId=723263.
        => optionsBuilder.UseSqlServer("Server=(local); DataBase=OGILVIESMAKEUP;Integrated Security=true;TrustServerCertificate=true;");

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<Carrito>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PK__carrito__3213E83FF8E56EE7");

            entity.ToTable("carrito");

            entity.Property(e => e.Id).HasColumnName("id");
            entity.Property(e => e.Cantidad).HasColumnName("cantidad");
            entity.Property(e => e.IdCliente).HasColumnName("idCliente");
            entity.Property(e => e.IdProducto).HasColumnName("idProducto");

            entity.HasOne(d => d.IdClienteNavigation).WithMany(p => p.Carritos)
                .HasForeignKey(d => d.IdCliente)
                .HasConstraintName("FK_Carrito_Cliente");

            entity.HasOne(d => d.IdProductoNavigation).WithMany(p => p.Carritos)
                .HasForeignKey(d => d.IdProducto)
                .HasConstraintName("FK_Carrito_Producto");
        });

        modelBuilder.Entity<Categorium>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PK__categori__3213E83F165822B2");

            entity.ToTable("categoria");

            entity.Property(e => e.Id).HasColumnName("id");
            entity.Property(e => e.Nombre)
                .HasMaxLength(50)
                .IsUnicode(false)
                .HasColumnName("nombre");
        });

        modelBuilder.Entity<DetallePedido>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PK__detalleP__3213E83FE3F79F1F");

            entity.ToTable("detallePedido");

            entity.Property(e => e.Id).HasColumnName("id");
            entity.Property(e => e.Cantidad).HasColumnName("cantidad");
            entity.Property(e => e.IdPedido).HasColumnName("idPedido");
            entity.Property(e => e.IdProducto).HasColumnName("idProducto");
            entity.Property(e => e.Subtotal).HasColumnName("subtotal");

            entity.HasOne(d => d.IdPedidoNavigation).WithMany(p => p.DetallePedidos)
                .HasForeignKey(d => d.IdPedido)
                .HasConstraintName("FK_DetallePedido_Pedido");

            entity.HasOne(d => d.IdProductoNavigation).WithMany(p => p.DetallePedidos)
                .HasForeignKey(d => d.IdProducto)
                .HasConstraintName("FK_DetallePedido_Producto");
        });

        modelBuilder.Entity<Devolucion>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PK__devoluci__3213E83FE0851BC5");

            entity.ToTable("devolucion");

            entity.Property(e => e.Id).HasColumnName("id");
            entity.Property(e => e.Estado)
                .HasMaxLength(50)
                .IsUnicode(false)
                .HasColumnName("estado");
            entity.Property(e => e.Fecha)
                .HasColumnType("date")
                .HasColumnName("fecha");
            entity.Property(e => e.IdCliente).HasColumnName("idCliente");
            entity.Property(e => e.IdPedido).HasColumnName("idPedido");
            entity.Property(e => e.Motivo)
                .HasMaxLength(255)
                .IsUnicode(false)
                .HasColumnName("motivo");
            entity.Property(e => e.NombreProducto)
                .HasMaxLength(255)
                .IsUnicode(false)
                .HasColumnName("nombreProducto");

            entity.HasOne(d => d.IdClienteNavigation).WithMany(p => p.Devolucions)
                .HasForeignKey(d => d.IdCliente)
                .HasConstraintName("FK_Devolucion_Cliente");

            entity.HasOne(d => d.IdPedidoNavigation).WithMany(p => p.Devolucions)
                .HasForeignKey(d => d.IdPedido)
                .HasConstraintName("FK_Devolucion_Pedido");
        });

        modelBuilder.Entity<Encuestum>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PK__encuesta__3213E83F531B1EAC");

            entity.ToTable("encuesta");

            entity.Property(e => e.Id).HasColumnName("id");
            entity.Property(e => e.Apellidos)
                .HasMaxLength(255)
                .IsUnicode(false)
                .HasColumnName("apellidos");
            entity.Property(e => e.Correo)
                .HasMaxLength(255)
                .IsUnicode(false)
                .HasColumnName("correo");
            entity.Property(e => e.Descripcion)
                .HasColumnType("text")
                .HasColumnName("descripcion");
            entity.Property(e => e.FechaEncuesta)
                .HasColumnType("date")
                .HasColumnName("fechaEncuesta");
            entity.Property(e => e.Nombre)
                .HasMaxLength(255)
                .IsUnicode(false)
                .HasColumnName("nombre");
            entity.Property(e => e.Telefono)
                .HasMaxLength(20)
                .IsUnicode(false)
                .HasColumnName("telefono");
        });

        modelBuilder.Entity<Envio>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PK__envio__3213E83F3B1B3987");

            entity.ToTable("envio");

            entity.Property(e => e.Id).HasColumnName("id");
            entity.Property(e => e.CompañiaEnvio)
                .HasMaxLength(255)
                .IsUnicode(false)
                .HasColumnName("compañia_envio");
            entity.Property(e => e.CostoEnvio)
                .HasColumnType("decimal(8, 2)")
                .HasColumnName("costo_envio");
            entity.Property(e => e.DireccionEnvio)
                .HasMaxLength(255)
                .IsUnicode(false)
                .HasColumnName("direccion_envio");
            entity.Property(e => e.FechaEnvio)
                .HasColumnType("date")
                .HasColumnName("fecha_envio");
            entity.Property(e => e.FechaLlegada)
                .HasColumnType("date")
                .HasColumnName("fecha_llegada");
            entity.Property(e => e.IdCliente).HasColumnName("idCliente");
            entity.Property(e => e.IdPedido).HasColumnName("idPedido");
            entity.Property(e => e.NumGuia)
                .HasMaxLength(50)
                .IsUnicode(false)
                .HasColumnName("num_guia");

            entity.HasOne(d => d.IdClienteNavigation).WithMany(p => p.Envios)
                .HasForeignKey(d => d.IdCliente)
                .HasConstraintName("FK_Envio_Cliente");

            entity.HasOne(d => d.IdPedidoNavigation).WithMany(p => p.Envios)
                .HasForeignKey(d => d.IdPedido)
                .HasConstraintName("FK_Envio_Pedido");
        });

        modelBuilder.Entity<Inventario>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PK__inventar__3213E83F25B9CBF2");

            entity.ToTable("inventario");

            entity.Property(e => e.Id).HasColumnName("id");
            entity.Property(e => e.Cantidad).HasColumnName("cantidad");
            entity.Property(e => e.Descripcion)
                .HasMaxLength(500)
                .IsUnicode(false)
                .HasColumnName("descripcion");
            entity.Property(e => e.Estado).HasColumnName("estado");
            entity.Property(e => e.FechaCaduca)
                .HasDefaultValueSql("(dateadd(month,(5),getdate()))")
                .HasColumnType("date")
                .HasColumnName("fechaCaduca");
            entity.Property(e => e.FechaRegistro)
                .HasDefaultValueSql("(getdate())")
                .HasColumnType("date")
                .HasColumnName("fechaRegistro");
            entity.Property(e => e.IdProducto).HasColumnName("idProducto");

            entity.HasOne(d => d.IdProductoNavigation).WithMany(p => p.Inventarios)
                .HasForeignKey(d => d.IdProducto)
                .HasConstraintName("FK_Inventario_Producto");
        });

        modelBuilder.Entity<Pago>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PK__pago__3213E83F85CC33AD");

            entity.ToTable("pago");

            entity.Property(e => e.Id).HasColumnName("id");
            entity.Property(e => e.CodigoTarjeta)
                .HasMaxLength(10)
                .IsUnicode(false)
                .HasColumnName("codigoTarjeta");
            entity.Property(e => e.Estado)
                .HasMaxLength(50)
                .IsUnicode(false)
                .HasColumnName("estado");
            entity.Property(e => e.FechaPago)
                .HasDefaultValueSql("(getdate())")
                .HasColumnType("date")
                .HasColumnName("fechaPago");
            entity.Property(e => e.IdCliente).HasColumnName("idCliente");
            entity.Property(e => e.IdPedido).HasColumnName("idPedido");
            entity.Property(e => e.MetodoPago)
                .HasMaxLength(50)
                .IsUnicode(false)
                .HasColumnName("metodoPago");
            entity.Property(e => e.Monto)
                .HasColumnType("decimal(8, 2)")
                .HasColumnName("monto");
            entity.Property(e => e.NumeroTarjeta)
                .HasMaxLength(20)
                .IsUnicode(false)
                .HasColumnName("numeroTarjeta");
            entity.Property(e => e.Referencia)
                .HasMaxLength(255)
                .IsUnicode(false)
                .HasColumnName("referencia");

            entity.HasOne(d => d.IdClienteNavigation).WithMany(p => p.Pagos)
                .HasForeignKey(d => d.IdCliente)
                .HasConstraintName("FK_Pago_Cliente");

            entity.HasOne(d => d.IdPedidoNavigation).WithMany(p => p.Pagos)
                .HasForeignKey(d => d.IdPedido)
                .HasConstraintName("FK_Pago_Pedido");
        });

        modelBuilder.Entity<Pedido>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PK__pedido__3213E83FB27FAC77");

            entity.ToTable("pedido");

            entity.Property(e => e.Id).HasColumnName("id");
            entity.Property(e => e.Estado).HasColumnName("estado");
            entity.Property(e => e.FechaRegistro)
                .HasDefaultValueSql("(getdate())")
                .HasColumnType("date")
                .HasColumnName("fechaRegistro");
            entity.Property(e => e.IdCliente).HasColumnName("idCliente");
            entity.Property(e => e.Total).HasColumnName("total");

            entity.HasOne(d => d.IdClienteNavigation).WithMany(p => p.Pedidos)
                .HasForeignKey(d => d.IdCliente)
                .HasConstraintName("FK_Pedido_Cliente");
        });

        modelBuilder.Entity<Producto>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PK__producto__3213E83FB16C2711");

            entity.ToTable("producto");

            entity.Property(e => e.Id).HasColumnName("id");
            entity.Property(e => e.IdCategoria).HasColumnName("idCategoria");
            entity.Property(e => e.IdProveedor).HasColumnName("idProveedor");
            entity.Property(e => e.Imagen)
                .HasMaxLength(999)
                .IsUnicode(false)
                .HasColumnName("imagen");
            entity.Property(e => e.Marca)
                .HasMaxLength(50)
                .IsUnicode(false)
                .HasColumnName("marca");
            entity.Property(e => e.Nombre)
                .HasMaxLength(50)
                .IsUnicode(false)
                .HasColumnName("nombre");
            entity.Property(e => e.Precio).HasColumnName("precio");
            entity.Property(e => e.Subcategoria)
                .HasMaxLength(50)
                .IsUnicode(false)
                .HasColumnName("subcategoria");

            entity.HasOne(d => d.IdCategoriaNavigation).WithMany(p => p.Productos)
                .HasForeignKey(d => d.IdCategoria)
                .HasConstraintName("FK_Categoria_Producto");

            entity.HasOne(d => d.IdProveedorNavigation).WithMany(p => p.Productos)
                .HasForeignKey(d => d.IdProveedor)
                .HasConstraintName("FK_Proovedor_Producto");
        });

        modelBuilder.Entity<Promocion>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PK__promocio__3213E83F7C1211A6");

            entity.ToTable("promocion");

            entity.Property(e => e.Id).HasColumnName("id");
            entity.Property(e => e.Descripcion)
                .HasMaxLength(255)
                .IsUnicode(false)
                .HasColumnName("descripcion");
            entity.Property(e => e.Descuento)
                .HasColumnType("decimal(5, 2)")
                .HasColumnName("descuento");
            entity.Property(e => e.FechaFin)
                .HasColumnType("date")
                .HasColumnName("fechaFin");
            entity.Property(e => e.FechaInicion)
                .HasDefaultValueSql("(getdate())")
                .HasColumnType("date")
                .HasColumnName("fechaInicion");
            entity.Property(e => e.ListaProductos)
                .HasColumnType("text")
                .HasColumnName("listaProductos");
        });

        modelBuilder.Entity<Proveedor>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PK__proveedo__3213E83FB4886999");

            entity.ToTable("proveedor");

            entity.Property(e => e.Id).HasColumnName("id");
            entity.Property(e => e.Direccion)
                .HasMaxLength(255)
                .IsUnicode(false)
                .HasColumnName("direccion");
            entity.Property(e => e.Email)
                .HasMaxLength(255)
                .IsUnicode(false)
                .HasColumnName("email");
            entity.Property(e => e.NombreEmpresa)
                .HasMaxLength(255)
                .IsUnicode(false)
                .HasColumnName("Nombre_empresa");
            entity.Property(e => e.Representante)
                .HasMaxLength(255)
                .IsUnicode(false);
            entity.Property(e => e.Telefono)
                .HasMaxLength(20)
                .IsUnicode(false);
        });

        modelBuilder.Entity<Respuestum>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PK__respuest__3213E83F47301732");

            entity.ToTable("respuesta");

            entity.Property(e => e.Id).HasColumnName("id");
            entity.Property(e => e.Detalles).HasColumnType("text");
            entity.Property(e => e.IdConsulta).HasColumnName("idConsulta");
        });

        modelBuilder.Entity<Rol>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PK__rol__3213E83FDD45BAA6");

            entity.ToTable("rol");

            entity.Property(e => e.Id).HasColumnName("id");
            entity.Property(e => e.Descripcion)
                .HasMaxLength(50)
                .IsUnicode(false)
                .HasColumnName("descripcion");
        });

        modelBuilder.Entity<Usuario>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PK__usuarios__3213E83F58CBC89B");

            entity.ToTable("usuarios");

            entity.Property(e => e.Id).HasColumnName("id");
            entity.Property(e => e.Cedula)
                .HasMaxLength(20)
                .IsUnicode(false)
                .HasColumnName("cedula");
            entity.Property(e => e.Contrasenia)
                .HasMaxLength(255)
                .IsUnicode(false)
                .HasColumnName("contrasenia");
            entity.Property(e => e.Direccion)
                .HasMaxLength(255)
                .IsUnicode(false)
                .HasColumnName("direccion");
            entity.Property(e => e.Email)
                .HasMaxLength(255)
                .IsUnicode(false)
                .HasColumnName("email");
            entity.Property(e => e.FechaRegistro)
                .HasDefaultValueSql("(getdate())")
                .HasColumnType("date")
                .HasColumnName("fechaRegistro");
            entity.Property(e => e.Nombre)
                .HasMaxLength(255)
                .IsUnicode(false)
                .HasColumnName("nombre");
            entity.Property(e => e.Rol).HasColumnName("rol");
            entity.Property(e => e.Telefono)
                .HasMaxLength(20)
                .IsUnicode(false)
                .HasColumnName("telefono");

            entity.HasOne(d => d.RolNavigation).WithMany(p => p.Usuarios)
                .HasForeignKey(d => d.Rol)
                .HasConstraintName("FK__usuarios__rol__46E78A0C");
        });

        OnModelCreatingPartial(modelBuilder);
    }

    partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
}
