using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace OgilviesMakeUpProject.Controllers
{
   /* [Route("api/[controller]")]
    [ApiController]
    public class ProveedorController : ControllerBase
    {
        private readonly ProyectoAnalisisContext _dbContext;

        public ProveedorController(ProyectoAnalisisContext context)
        {
            _dbContext = context;
        }

        [HttpGet("Lista")]
        public async Task<ActionResult> Lista()
        {
            List<Proveedor> lista = await _dbContext.Proveedors.OrderByDescending(c => c.Id).ToListAsync();
            return StatusCode(StatusCodes.Status200OK, lista);
        }

        [HttpPost("Guardar")]
        public async Task<IActionResult> Guardar([FromBody] Proveedor request)
        {
            await _dbContext.Proveedors.AddAsync(request);
            await _dbContext.SaveChangesAsync();
            return StatusCode(StatusCodes.Status200OK, "ok");
        }

        [HttpPut("Editar")]
        public async Task<IActionResult> Editar([FromBody] Proveedor request)
        {
            _dbContext.Proveedors.Update(request);
            await _dbContext.SaveChangesAsync();
            return StatusCode(StatusCodes.Status200OK, "ok");
        }

        [HttpDelete("Eliminar/{id}")]
        public async Task<IActionResult> Eliminar(int id)
        {
            Proveedor proveedor = await _dbContext.Proveedors.FindAsync(id);

            if (proveedor == null)
            {
                return NotFound();
            }

            _dbContext.Proveedors.Remove(proveedor);
            await _dbContext.SaveChangesAsync();
            return StatusCode(StatusCodes.Status200OK, "ok");
        }
    }*/
}
