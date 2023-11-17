using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;

namespace ProyectoAnalisis.Models;

public partial class ProyectoAnalisisContext : DbContext
{
    public ProyectoAnalisisContext()
    {
    }

    public ProyectoAnalisisContext(DbContextOptions<ProyectoAnalisisContext> options)
        : base(options)
    {
    }

    public virtual DbSet<Cliente> Clientes { get; set; }

    public virtual DbSet<Pago> Pagos { get; set; }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see http://go.microsoft.com/fwlink/?LinkId=723263.
        => optionsBuilder.UseSqlServer("Server=(local); DataBase=ProyectoAnalisis;Integrated Security=true; TrustServerCertificate=true");

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<Cliente>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PK__clientes__3213E83FB6D7ECFB");

            entity.ToTable("clientes");

            entity.Property(e => e.Id).HasColumnName("id");
            entity.Property(e => e.Cedula)
                .HasMaxLength(9)
                .IsUnicode(false)
                .HasColumnName("cedula");
            entity.Property(e => e.Contrasenia)
                .HasMaxLength(8)
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
                .HasDefaultValueSql("(getdate())")
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

        modelBuilder.Entity<Pago>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PK__pagos__3213E83F848C3CD5");

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
        });

        OnModelCreatingPartial(modelBuilder);
    }

    partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
}
