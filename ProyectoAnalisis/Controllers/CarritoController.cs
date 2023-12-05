using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using ProyectoAnalisis.Models;


namespace Ogilvies_Maquillaje.Controllers
{
    [Route("api/[controller]")]
    [ApiController]

    public class CarritoController : ControllerBase
    {


        private readonly OgilviesmakeupContext _dbcontext;

        public CarritoController(OgilviesmakeupContext context)
        {
            _dbcontext = context;
        }


        [HttpGet("ListarCarrito/{id:int}")]
        public async Task<ActionResult<List<CarritoDTO>>> ListarCarrito(int id)
        {
            List<CarritoDTO> lista = await _dbcontext.Carritos
                .Include(i => i.IdClienteNavigation)
                .Include(h => h.IdProductoNavigation)
                .Where(d => d.IdCliente == id)
                .OrderByDescending(c => c.Id)
                .Select(i => new CarritoDTO
                {
                    Id = i.Id,
                    IdCliente=i.IdCliente,
                    IdProducto=i.IdProducto,
                    NombreProducto = i.IdProductoNavigation.Nombre,
                    MarcaProducto = i.IdProductoNavigation.Marca,
                    NombreCliente = i.IdClienteNavigation.Nombre,
                    Cantidad = i.Cantidad ?? 0,
                })

                .ToListAsync();

            return Ok(lista);
        }

         
 



        [HttpGet("Buscar/{id:int}")]
        public async Task<ActionResult<Carrito>> GetCarrito(int id)
        {
                if (_dbcontext.Carritos == null)
            {
                return NotFound();
            }
            var carrito = await _dbcontext.Carritos.FindAsync(id);

            if (carrito == null)
            {
                return NotFound();
            }

            return carrito;
        }



        [HttpPut("Editar")]
        public async Task<IActionResult> Editar([FromBody] Carrito request)
        {
            _dbcontext.Carritos.Update(request);
            await _dbcontext.SaveChangesAsync();

            return StatusCode(StatusCodes.Status200OK, "Ok");


        }


        [HttpPost("Guardar")]
        public async Task<ActionResult<Pedido>> GuardarCarrito(Carrito carrito)
        {
            if (_dbcontext.Carritos == null)
            {
                return Problem("Entity set 'ProyectoAnalisisContext.Clientes'  is null.");
            }
            _dbcontext.Carritos.Add(carrito);
            await _dbcontext.SaveChangesAsync();

            return CreatedAtAction("GetPedido", new { id = carrito.Id }, carrito);
        }




        [HttpDelete("Eliminar/{id:int}")]
        public async Task<IActionResult> EliminarCarrito(int id)
        {
            if (_dbcontext.Carritos == null)
            {
                return NotFound();
            }
            var carrito = await _dbcontext.Carritos.FindAsync(id);
            if (carrito == null)
            {
                return NotFound();
            }

            _dbcontext.Carritos.Remove(carrito);
            await _dbcontext.SaveChangesAsync();

            return NoContent();
        }



        [HttpPost("CrearPedidoDesdeCarrito/{idCliente}")]
        public IActionResult CrearPedidoDesdeCarrito(int idCliente)
        {
            try
            {
                // Llamar al procedimiento almacenado usando Entity Framework Core
                _dbcontext.Database.ExecuteSqlInterpolated($@"EXEC CrearPedidoDesdeCarrito {idCliente}");

                return Ok("Pedido creado exitosamente desde el carrito.");
            }
            catch (Exception ex)
            {
                // Manejar errores aquí
                return BadRequest($"Error al crear el pedido desde el carrito: {ex.Message}");
            }
        }






    }
}
