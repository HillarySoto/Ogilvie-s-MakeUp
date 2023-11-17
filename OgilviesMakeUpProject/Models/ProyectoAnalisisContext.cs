using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;

namespace OgilviesMakeUpProject.Models;

public partial class ProyectoAnalisisContext : DbContext
{
    public ProyectoAnalisisContext()
    {
    }

    public ProyectoAnalisisContext(DbContextOptions<ProyectoAnalisisContext> options)
        : base(options)
    {
    }

    public virtual DbSet<Producto> Productos { get; set; }

    public virtual DbSet<Proveedor> Proveedors { get; set; }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see http://go.microsoft.com/fwlink/?LinkId=723263.
        => optionsBuilder.UseSqlServer("Server=DESKTOP-I3MGAFT; Encrypt=False; DataBase=proyectoAnalisis;Integrated Security=true");

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<Producto>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PK__producto__3213E83F9DCE3031");

            entity.ToTable("producto");

            entity.Property(e => e.Id).HasColumnName("id");
            entity.Property(e => e.Categoria)
                .HasMaxLength(255)
                .IsUnicode(false)
                .HasColumnName("categoria");
            entity.Property(e => e.Color)
                .HasMaxLength(255)
                .IsUnicode(false)
                .HasColumnName("color");
            entity.Property(e => e.Marca)
                .HasMaxLength(255)
                .IsUnicode(false)
                .HasColumnName("marca");
            entity.Property(e => e.Nombre)
                .HasMaxLength(255)
                .IsUnicode(false)
                .HasColumnName("nombre");
            entity.Property(e => e.Precio).HasColumnName("precio");
        });

        modelBuilder.Entity<Proveedor>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PK__proveedo__3213E83FB3BB43E5");

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
                .HasColumnName("nombre_empresa");
            entity.Property(e => e.Representante)
                .HasMaxLength(255)
                .IsUnicode(false)
                .HasColumnName("representante");
            entity.Property(e => e.Telefono)
                .HasMaxLength(20)
                .IsUnicode(false)
                .HasColumnName("telefono");
        });

        OnModelCreatingPartial(modelBuilder);
    }

    partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
}
