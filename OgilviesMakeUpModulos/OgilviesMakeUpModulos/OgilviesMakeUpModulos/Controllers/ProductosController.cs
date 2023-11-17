using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using OgilviesMakeUpModulos.Models;

namespace OgilviesMakeUpModulos.Controllers
{
    [Route("api/productoController")]
    [ApiController]
public class ProductosController : Controller
{
     private readonly OgilviesmakeupContext _dbcontext;

    public ProductosController(OgilviesmakeupContext contexto)
    {
        _dbcontext = contexto;
    }

    [HttpGet]
    [Route("ListaProductos")] // Cambia el nombre de la ruta para reflejar "Lista de Encuestas".
    public IActionResult Index()
    {
        var productos = _dbcontext.Productos.ToList();
        
        return StatusCode(StatusCodes.Status200OK, productos);
    }

    


        [HttpGet]
    [Route("ListaPedidos")] // Cambia el nombre de la ruta para reflejar "Lista de Encuestas".
    public IActionResult getPedidos()
    {
        var pedidos = _dbcontext.Pedidos.ToList();
        
        return StatusCode(StatusCodes.Status200OK, pedidos);
    }

      // GET: Pedidos/Details/5
    [HttpGet]
  [Route("pedido/{idPedido}")]
    public IActionResult Details(int? idPedido)
    {
        if (idPedido == null)
        {
            return NotFound();
        }

        var pedido = _dbcontext.Pedidos.FirstOrDefault(p => p.IdPedido == idPedido);

        if (pedido == null)
        {
            return NotFound();
        }

        return StatusCode(StatusCodes.Status200OK,pedido);
    }

    [HttpPost]
[Route("ActualizarEstadoPedido/{idPedido}")]
public IActionResult UpdateEstadoPedido(int? idPedido)
{
    if (idPedido == null)
    {
        return NotFound();
    }

    var pedido = _dbcontext.Pedidos.FirstOrDefault(p => p.IdPedido == idPedido);

    if (pedido == null)
    {
        return NotFound();
    }

    try
    {
        // Update the EstadoPedido attribute to 1 (Enviado)
        pedido.EstadoPedido = true;

        // Save changes to the database
        _dbcontext.SaveChanges();

        return StatusCode(StatusCodes.Status200OK, pedido);
    }
    catch (Exception ex)
    {
        // Handle any exceptions that may occur during the update
        return StatusCode(StatusCodes.Status500InternalServerError, $"Error al actualizar el estado del pedido: {ex.Message}");
    }
}


        [HttpPut]
        [Route("modificarPedido/{idPedido}")]
        public IActionResult ModificarPedido(int idPedido, [FromBody] Pedido pedidoModificado)
        {
            if (idPedido != pedidoModificado.IdPedido)
            {
                return BadRequest("IdPedido en la URL no coincide con el IdPedido en el cuerpo de la solicitud.");
            }

            var pedidoExistente = _dbcontext.Pedidos.FirstOrDefault(p => p.IdPedido == idPedido);

            if (pedidoExistente == null)
            {
                return NotFound("Pedido no encontrado.");
            }

            try
            {
                // Modificar las propiedades necesarias del pedido existente
                 pedidoExistente.idCarrito = pedidoModificado.idCarrito;
                pedidoExistente.Detalles = pedidoModificado.Detalles;
                pedidoExistente.Subtotal = pedidoModificado.Subtotal;
                pedidoExistente.Total = pedidoModificado.Total;

                // Guardar los cambios en la base de datos
                _dbcontext.SaveChanges();

                return Ok("Pedido modificado exitosamente.");
            }
            catch (DbUpdateException ex)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, $"Error al modificar el pedido: {ex.Message}");
            }
        }

    
}
}