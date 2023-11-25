using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace OgilviesMakeUpProject.Controllers
{
   /* [Route("api/[controller]")]
    [ApiController]
    public class ProductoController : ControllerBase
    {
        private readonly ProyectoAnalisisContext _dbContext;

        public ProductoController(ProyectoAnalisisContext context)
        {
            _dbContext = context;
        }

        [HttpGet("Lista")]
        public async Task<ActionResult> Lista()
        {
            List<Producto> lista = await _dbContext.Productos.OrderByDescending(p => p.Id).ToListAsync();
            return StatusCode(StatusCodes.Status200OK, lista);
        }

        [HttpPost("Guardar")]
        public async Task<IActionResult> Guardar([FromBody] Producto request)
        {
            await _dbContext.Productos.AddAsync(request);
            await _dbContext.SaveChangesAsync();
            return StatusCode(StatusCodes.Status200OK, "ok");
        }

        [HttpPut("Editar")]
        public async Task<IActionResult> Editar([FromBody] Producto request)
        {
            _dbContext.Productos.Update(request);
            await _dbContext.SaveChangesAsync();
            return StatusCode(StatusCodes.Status200OK, "ok");
        }

        [HttpDelete("Eliminar/{id}")]
        public async Task<IActionResult> Eliminar(int id)
        {
            Producto producto = await _dbContext.Productos.FindAsync(id);

            if (producto == null)
            {
                return NotFound();
            }

            _dbContext.Productos.Remove(producto);
            await _dbContext.SaveChangesAsync();
            return StatusCode(StatusCodes.Status200OK, "ok");
        }
    }*/
}
