using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using ProyectoMaquillajeN.Models;

namespace ProyectoMaquillajeN.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class APIController : ControllerBase
    {
        private readonly ProyectoMakeupModulosContext _modulosContext;

        public APIController(ProyectoMakeupModulosContext context)
        {
            _modulosContext = context;

        }

        [HttpGet]
        [Route("Lista")]
        public async Task<IActionResult> Lista()
        {
            List<Promocione> lista = await _modulosContext.Promociones.OrderByDescending(c => c.IdPromocion).ToListAsync();

            return StatusCode(StatusCodes.Status200OK, lista);
        }

        [HttpPost]
        [Route("Guardar")]
        public async Task<IActionResult> Guardar([FromBody] Promocione request)
        {
            await _modulosContext.Promociones.AddAsync(request);
            await _modulosContext.SaveChangesAsync();

            return StatusCode(StatusCodes.Status200OK, "ok");
        }

        [HttpPut]
        [Route("Editar")]
        public async Task<IActionResult> Editar([FromBody] Promocione request)
        {
            _modulosContext.Promociones.Update(request);
            await _modulosContext.SaveChangesAsync();

            return StatusCode(StatusCodes.Status200OK, "ok");
        }


        [HttpDelete]
        [Route("Eliminar/{id:int}")]
        public async Task<IActionResult> Eliminar(int id)
        {
            Promocione promocione = _modulosContext.Promociones.Find(id);
                
            _modulosContext.Promociones.Remove(promocione);
            await _modulosContext.SaveChangesAsync();

            return StatusCode(StatusCodes.Status200OK, "ok");

        }

    }

}
