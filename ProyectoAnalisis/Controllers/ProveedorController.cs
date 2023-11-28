using Microsoft.AspNetCore.Http;
using ProyectoAnalisis.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace OgilviesMakeUpProject.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProveedorController : ControllerBase
    {
        private readonly OgilviesmakeupContext _dbContext;

        public ProveedorController(OgilviesmakeupContext context)
        {
            _dbContext = context;
        }

        [HttpGet("Lista")]
        public async Task<ActionResult> Lista()
        {
            List<Proveedores> lista = await _dbContext.Proveedores.OrderByDescending(c => c.Id).ToListAsync();
            return StatusCode(StatusCodes.Status200OK, lista);
        }

        [HttpPost("Guardar")]
        public async Task<IActionResult> Guardar([FromBody] Proveedores request)
        {
            await _dbContext.Proveedores.AddAsync(request);
            await _dbContext.SaveChangesAsync();
            return StatusCode(StatusCodes.Status200OK, "ok");
        }

        [HttpPut("Editar")]
        public async Task<IActionResult> Editar([FromBody] Proveedores request)
        {
            _dbContext.Proveedores.Update(request);
            await _dbContext.SaveChangesAsync();
            return StatusCode(StatusCodes.Status200OK, "ok");
        }

        [HttpDelete("Eliminar/{id}")]
        public async Task<IActionResult> Eliminar(int id)
        {
            Proveedores proveedor = await _dbContext.Proveedores.FindAsync(id);

            if (proveedor == null)
            {
                return NotFound();
            }

            _dbContext.Proveedores.Remove(proveedor);
            await _dbContext.SaveChangesAsync();
            return StatusCode(StatusCodes.Status200OK, "ok");
        }
    }
}
