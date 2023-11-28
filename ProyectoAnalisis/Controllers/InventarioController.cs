using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using ProyectoAnalisis.Models;
using System.Text.Json.Serialization;
using System.Text.Json;

namespace ProyectoAnalisis.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class InventarioController : ControllerBase
    {
        private readonly OgilviesmakeupContext _dbcontext;

        public InventarioController(OgilviesmakeupContext context)
        {
            _dbcontext = context;
        }

        [HttpGet("Listar")]
        public async Task<ActionResult<List<InventarioDTO>>> Listar()
        {
            List<InventarioDTO> lista = await _dbcontext.Inventarios
                .Include(i => i.IdNavigation)
                .OrderByDescending(c => c.Id)
                .Select(i => new InventarioDTO
                {
                    Id = i.Id,
                    IdProducto = i.IdNavigation.IdProducto,
                    NombreProducto = i.IdNavigation.Nombre,
                    MarcaProducto = i.IdNavigation.Marca,
                    Descripcion = i.Descripcion,
                    Cantidad = i.Cantidad ?? 0,
                    FechaRegistro = i.FechaRegistro ?? DateTime.MinValue,
                    FechaCaduca = i.FechaCaduca ?? DateTime.MinValue,
                    Estado = i.Estado ?? false,
                    Objeto = i.IdNavigation
                })
                .ToListAsync();

            return Ok(lista);
        }

        /*
        [HttpGet("Listar")]
        public async Task<ActionResult<IEnumerable<Inventario>>> Listar()
        {
            if (_dbcontext.Inventarios == null)
            {
                return NotFound();
            }

            return await _dbcontext.Inventarios.ToListAsync();
        }

        */

        [HttpPost("Guardar")]
        public async Task<IActionResult> Guardar([FromBody] Inventario request)
        {
            await _dbcontext.Inventarios.AddAsync(request);
            await _dbcontext.SaveChangesAsync();

            return StatusCode(StatusCodes.Status200OK, "Ok");
        }


        [HttpPut("Editar")]
        public async Task<IActionResult> Editar([FromBody] Inventario request)
        {
            _dbcontext.Inventarios.Update(request);
            await _dbcontext.SaveChangesAsync();

            return StatusCode(StatusCodes.Status200OK, "Ok");


        }



        [HttpDelete("Eliminar/{id:int}")]
        public async Task<IActionResult> Eliminar(int id)
        {

            Inventario inventario = _dbcontext.Inventarios.Find(id);
            _dbcontext.Inventarios.Remove(inventario);
            await _dbcontext.SaveChangesAsync();

            JsonSerializerOptions options = new()
            {
                ReferenceHandler = ReferenceHandler.IgnoreCycles,
                WriteIndented = true
            };

            return StatusCode(StatusCodes.Status200OK, "Ok");

        }



    }
}
