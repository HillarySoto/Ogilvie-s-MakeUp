using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;

namespace Ogilvie_s_MakeUp.Models;

public partial class OgilviesMakeUpContext : DbContext
{
    public OgilviesMakeUpContext()
    {
    }

    public OgilviesMakeUpContext(DbContextOptions<OgilviesMakeUpContext> options)
        : base(options)
    {
    }

    //Scaffold-DbContext "Server=JOSS;Database=Ogilvies_MakeUp;Trusted_Connection=True;TrustServerCertificate=true;" Microsoft.EntityFrameworkCore.SqlServer -OutputDir Models


    public virtual DbSet<Inventario> Inventarios { get; set; }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see http://go.microsoft.com/fwlink/?LinkId=723263.
        => optionsBuilder.UseSqlServer("Server=JOSS;Database=Ogilvies_MakeUp;Trusted_Connection=True;TrustServerCertificate=true;");

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<Inventario>(entity =>
        {
            entity.HasKey(e => e.IdInventario).HasName("PK__inventar__8F145B0DE4BD4FFE");

            entity.ToTable("inventario");

            entity.Property(e => e.IdInventario).HasColumnName("idInventario");
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
            entity.Property(e => e.Nombre)
                .HasMaxLength(500)
                .IsUnicode(false)
                .HasColumnName("nombre");
            entity.Property(e => e.Producto)
                .HasMaxLength(500)
                .IsUnicode(false)
                .HasColumnName("producto");
        });

        OnModelCreatingPartial(modelBuilder);
    }

    partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
}
