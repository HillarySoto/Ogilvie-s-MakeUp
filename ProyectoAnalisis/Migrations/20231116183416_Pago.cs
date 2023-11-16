using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace ProyectoAnalisis.Migrations
{
    /// <inheritdoc />
    public partial class Pago : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {

            migrationBuilder.CreateTable(
                name: "pagos",
                columns: table => new
                {
                    id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    fechaPago = table.Column<DateTime>(type: "date", nullable: true),
                    monto = table.Column<int>(type: "int", nullable: true),
                    metodoPago = table.Column<string>(type: "varchar(30)", unicode: false, maxLength: 30, nullable: true),
                    referencia = table.Column<string>(type: "varchar(50)", unicode: false, maxLength: 50, nullable: true),
                    numeroTarjeta = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    codigoTarjeta = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    estado = table.Column<string>(type: "varchar(20)", unicode: false, maxLength: 20, nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK__pagos__3213E83FB01B2DA1", x => x.id);
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "clientes");

            migrationBuilder.DropTable(
                name: "pagos");
        }
    }
}
