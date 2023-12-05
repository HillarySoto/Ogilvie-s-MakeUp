using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using ProyectoAnalisis.Models;


namespace Ogilvies_Maquillaje.Controllers
{
    [Route("api/[controller]")]
    [ApiController]

    public class PedidosController : ControllerBase
    {


        private readonly OgilviesmakeupContext _dbcontext;

        public PedidosController(OgilviesmakeupContext context)
        {
            _dbcontext = context;
        }

        /*
        [HttpGet("Listar")]
        public async Task<ActionResult<IEnumerable<Pedido>>> Listar()
        {
            if (_dbcontext.Pedidos == null)
            {
                return NotFound();
            }

            return await _dbcontext.Pedidos.ToListAsync();
        }

        */

        [HttpGet("Listar")]
        public async Task<ActionResult<List<PedidoDTO>>> Listar()
        {
            List<PedidoDTO> lista = await _dbcontext.Pedidos
                .Include(i => i.IdClienteNavigation)
                .OrderByDescending(c => c.Id)
                .Select(i => new PedidoDTO
                {
                    Id = i.Id,
                    IdCliente=i.IdCliente,
                    NombreCliente = i.IdClienteNavigation.Nombre,
                    FechaRegistro =i.FechaRegistro,
                    Total = i.Total ?? 0,
                    Estado = i.Estado ?? 0,

                })

                .ToListAsync();

            return Ok(lista);
        }

         
 



        [HttpGet("Buscar/{id:int}")]
        public async Task<ActionResult<Pedido>> GetPedido(int id)
        {

                if (_dbcontext.Pedidos == null)
            {
                return NotFound();
            }
            var pedido = await _dbcontext.Pedidos.FindAsync(id);

            if (pedido == null)
            {
                return NotFound();
            }

            return pedido;
        }



        [HttpGet("Editar/{id:int}")]
        public async Task<IActionResult> EditarPedido(int id, Pedido pedido)
        {
            if (id != pedido.Id)
            {
                return BadRequest();
            }

            _dbcontext.Entry(pedido).State = EntityState.Modified;

            try
            {
                await _dbcontext.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!PedidoExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }


        [HttpPost("Guardar")]
        public async Task<ActionResult<Pedido>> GuardarPedido(Pedido pedido)
        {
            if (_dbcontext.Pedidos == null)
            {
                return Problem("Entity set 'ProyectoAnalisisContext.Clientes'  is null.");
            }
            _dbcontext.Pedidos.Add(pedido);
            await _dbcontext.SaveChangesAsync();

            return CreatedAtAction("GetPedido", new { id = pedido.Id }, pedido);
        }




        [HttpDelete("Eliminar/{id:int}")]
        public async Task<IActionResult> EliminarPedido(int id)
        {
            if (_dbcontext.Pedidos == null)
            {
                return NotFound();
            }
            var pedido = await _dbcontext.Pedidos.FindAsync(id);
            if (pedido == null)
            {
                return NotFound();
            }

            _dbcontext.Pedidos.Remove(pedido);
            await _dbcontext.SaveChangesAsync();

            return NoContent();
        }


        private bool PedidoExists(int id)
        {
            return (_dbcontext.Pedidos?.Any(e => e.Id == id)).GetValueOrDefault();
        }
    }
}
