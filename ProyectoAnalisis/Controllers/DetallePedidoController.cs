using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using ProyectoAnalisis.Models;


namespace Ogilvies_Maquillaje.Controllers
{
    [Route("api/[controller]")]
    [ApiController]

    public class DetallePedidoController : ControllerBase
    {

        private readonly OgilviesmakeupContext _dbcontext;


        public DetallePedidoController(OgilviesmakeupContext context)
        {
            _dbcontext = context;
        }


        [HttpGet("ListarPorId/{id:int}")]
        public async Task<ActionResult<List<DetallePedidoDTO>>> ListarPorId(int id)
        {
            List<DetallePedidoDTO> lista = await _dbcontext.DetallePedidos
                .Include(i => i.IdProductoNavigation)
                .Where(d => d.IdPedido == id)
                .OrderByDescending(c => c.Id)
                .Select(i => new DetallePedidoDTO
                {
                    Id = i.Id,
                    IdPedido = i.IdPedido,
                    IdProducto = i.IdProducto,
                    NombreProducto = i.IdProductoNavigation.Nombre,
                    MarcaProducto = i.IdProductoNavigation.Marca,
                    Cantidad = i.Cantidad ?? 0,
                    Subtotal = i.Subtotal ?? 0,
                })
                .ToListAsync();

            Console.WriteLine(lista);

            return Ok(lista);
        }



        [HttpGet("Listar")]
        public async Task<ActionResult<IEnumerable<DetallePedido>>> Listar()
        {
            try
            {
                if (_dbcontext.DetallePedidos == null)
                {
                    return NotFound();
                }

                return await _dbcontext.DetallePedidos.ToListAsync();
            }
            catch (Exception ex)
            {
                // Log the exception
                Console.Error.WriteLine($"Error en el controlador DetallePedido: {ex.Message}");

                // Devolver una respuesta de error en formato JSON
                return StatusCode(StatusCodes.Status500InternalServerError, new { error = "Error interno del servidor" });
            }
        }







        [HttpPost("Guardar")]
        public async Task<IActionResult> Guardar([FromBody] DetallePedido request)
        {
            await _dbcontext.DetallePedidos.AddAsync(request);
            await _dbcontext.SaveChangesAsync();

            return StatusCode(StatusCodes.Status200OK, "Ok");
        }




        [HttpPut("Editar")]
        public async Task<IActionResult> Editar([FromBody] DetallePedido request)
        {
            _dbcontext.DetallePedidos.Update(request);
            await _dbcontext.SaveChangesAsync();

            return StatusCode(StatusCodes.Status200OK, "Ok");


        }



        [HttpGet("actualizarTotalPedido/{idPedido}")]
        public IActionResult ActualizarTotalPedido(int idPedido)
        {
            try
            {
                // Llamada al procedimiento almacenado a través de Entity Framework o ADO.NET
                _dbcontext.Database.ExecuteSqlRaw("EXEC ActualizarTotalPedido @p0", idPedido);

                return Ok(new { message = "Total actualizado correctamente" });
            }
            catch (Exception ex)
            {
                return BadRequest(new { message = "Error al actualizar el total del pedido", error = ex.Message });
            }
        }




        [HttpDelete("Eliminar/{id:int}")]
        public async Task<IActionResult> EliminarDetallePedido(int id)
        {
            if (_dbcontext.DetallePedidos == null)
            {
                return NotFound();
            }
            var detallePedido = await _dbcontext.DetallePedidos.FindAsync(id);
            if (detallePedido == null)
            {
                return NotFound();
            }

            _dbcontext.DetallePedidos.Remove(detallePedido);
            await _dbcontext.SaveChangesAsync();

            return NoContent();
        }





        [HttpGet("Buscar/{id:int}")]
        public async Task<ActionResult<DetallePedido>> GetDetallePedido(int id)
        {

            if (_dbcontext.DetallePedidos == null)
            {
                return NotFound();
            }
            var detallePedido = await _dbcontext.DetallePedidos.FindAsync(id);

            if (detallePedido == null)
            {
                return NotFound();
            }

            return detallePedido;
        }



    }
}
