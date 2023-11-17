using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;

namespace OgilviesMakeUpModulos.Models;

public partial class OgilviesmakeupContext : DbContext
{
    public OgilviesmakeupContext()
    {
    }

    public OgilviesmakeupContext(DbContextOptions<OgilviesmakeupContext> options)
        : base(options)
    {
    }

    public virtual DbSet<Encuestum> Encuesta { get; set; }
    public virtual DbSet<Producto> Productos { get; set; }
    public virtual DbSet<Pedido> Pedidos { get; set; }
    public virtual DbSet<Envio> Envios { get; set; }
    public virtual DbSet<Consulta> Consultas { get; set; }
        public virtual DbSet<Respuesta> Respuestas { get; set; }
        
   
    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        => optionsBuilder.UseSqlServer("Server=(local); Database=OGILVIESMAKEUP; Integrated Security=true; Encrypt=False;");

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<Encuestum>(entity =>
        {
            entity.HasKey(e => e.IdEncuesta).HasName("PK__Encuesta__72579B5472BECF82");

            entity.Property(e => e.Apellidos)
                .HasMaxLength(50)
                .IsUnicode(false)
                .HasColumnName("apellidos");
            entity.Property(e => e.Correo)
                .HasMaxLength(60)
                .IsUnicode(false)
                .HasColumnName("correo");
            entity.Property(e => e.Descripcion)
                .HasMaxLength(500)
                .IsUnicode(false)
                .HasColumnName("descripcion");
            entity.Property(e => e.FechaEncuesta)
                .HasDefaultValueSql("(getdate())")
                .HasColumnType("datetime")
                .HasColumnName("fechaEncuesta");
            entity.Property(e => e.Nombre)
                .HasMaxLength(50)
                .IsUnicode(false)
                .HasColumnName("nombre");
            entity.Property(e => e.Telefono).HasColumnName("telefono");
        });

        modelBuilder.Entity<Pedido>(entity =>
    {
        entity.HasKey(e => e.IdPedido).HasName("PK_Pedidos");

        entity.Property(e => e.IdCliente).HasColumnName("idCliente");
         entity.Property(e => e.idCarrito).HasColumnName("idCarrito");
        entity.Property(e => e.Fecha).HasColumnType("date").HasColumnName("fecha");
        entity.Property(e => e.Detalles).HasMaxLength(500).IsUnicode(false).HasColumnName("detalles");
        entity.Property(e => e.Total).HasColumnName("total");
        entity.Property(e => e.Subtotal).HasColumnName("subtotal");
        entity.Property(e => e.EstadoPedido).HasColumnName("estadoPedido");
    });

    
    modelBuilder.Entity<Producto>(entity =>
    {
        entity.HasKey(e => e.IdProducto).HasName("PK_Productos");

        entity.Property(e => e.Nombre)
            .HasMaxLength(20)
            .IsUnicode(false)
            .HasColumnName("nombre");
        entity.Property(e => e.Imagen)
            .HasMaxLength(999)
            .IsUnicode(false)
            .HasColumnName("imagen");
        entity.Property(e => e.Precio).HasColumnName("precio");
        entity.Property(e => e.Categorias)
            .HasMaxLength(50)
            .IsUnicode(false)
            .HasColumnName("categorias");
        entity.Property(e => e.SubCategoria)
            .HasMaxLength(50)
            .IsUnicode(false)
            .HasColumnName("subCategoria");
        entity.Property(e => e.Marca)
            .HasMaxLength(20)
            .IsUnicode(false)
            .HasColumnName("marca");
        entity.Property(e => e.Categoria)
            .HasMaxLength(20)
            .IsUnicode(false)
            .HasColumnName("categoria");
    });

     modelBuilder.Entity<Envio>(entity =>
            {
                entity.HasKey(e => e.IdEnvio).HasName("PK_Envios");

                entity.Property(e => e.IdCliente).HasColumnName("idCliente");
                entity.Property(e => e.DireccionEnvio)
                    .HasMaxLength(255)
                    .IsUnicode(false)
                    .HasColumnName("direccion_envio");
                entity.Property(e => e.FechaEnvio).HasColumnType("date").HasColumnName("fecha_Envio");
                entity.Property(e => e.FechaLlegada).HasColumnType("date").HasColumnName("fecha_Llegada");
                entity.Property(e => e.CostoEnvio).HasColumnName("costo_Envio");
                entity.Property(e => e.CompaniaEnvio)
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("compañia_Envio");
                entity.Property(e => e.NumGuia).HasColumnName("num_Guia");
            });


            modelBuilder.Entity<Consulta>(entity =>
            {
                entity.HasKey(e => e.IdConsulta).HasName("PK_Consultas");

                entity.Property(e => e.IdCliente).HasColumnName("idCliente");
                entity.Property(e => e.Detalles)
                    .HasMaxLength(500)
                    .IsUnicode(false)
                    .HasColumnName("detalles");
                entity.Property(e => e.Fecha).HasColumnType("date").HasColumnName("fecha");

                // Define the one-to-many relationship with Respuestas
            
                entity.HasMany(c => c.Respuestas)
                    .WithOne(r => r.Consulta)
                    .HasForeignKey(r => r.IdConsulta);
        
            });

            modelBuilder.Entity<Respuesta>(entity =>
            {
                entity.HasKey(e => e.IdRespuesta).HasName("PK_Respuesta");
    
                entity.Property(e => e.IdConsulta).HasColumnName("idConsulta");
                entity.Property(e => e.Detalles)
                    .HasMaxLength(500)
                    .IsUnicode(false)
                    .HasColumnName("detalles");
                entity.Property(e => e.Fecha).HasColumnType("date").HasColumnName("fecha");

                // Define the many-to-one relationship with Consultas
                entity.HasOne(r => r.Consulta)
                    .WithMany(c => c.Respuestas)
                    .HasForeignKey(r => r.IdConsulta);
            });


         

            

            OnModelCreatingPartial(modelBuilder);
        }

    

    partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
}
