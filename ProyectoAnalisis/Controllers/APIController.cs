using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using ProyectoAnalisis.Models;

namespace ProyectoMaquillajeN.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class APIController : ControllerBase
    {
        private readonly OgilviesmakeupContext _modulosContext;

        public APIController(OgilviesmakeupContext context)
        {
            _modulosContext = context;

        }

        [HttpGet]
        [Route("Lista")]
        public async Task<IActionResult> Lista()
        {
            List<Promocion> lista = await _modulosContext.Promocions.OrderByDescending(c => c.Id).ToListAsync();

            return StatusCode(StatusCodes.Status200OK, lista);
        }

        [HttpPost]
        [Route("Guardar")]
        public async Task<IActionResult> Guardar([FromBody] Promocion request)
        {
            await _modulosContext.Promocions.AddAsync(request);
            await _modulosContext.SaveChangesAsync();

            return StatusCode(StatusCodes.Status200OK, "ok");
        }

        [HttpPut]
        [Route("Editar")]
        public async Task<IActionResult> Editar([FromBody] Promocion request)
        {
            _modulosContext.Promocions.Update(request);
            await _modulosContext.SaveChangesAsync();

            return StatusCode(StatusCodes.Status200OK, "ok");
        }


        [HttpDelete]
        [Route("Eliminar/{id:int}")]
        public async Task<IActionResult> Eliminar(int id)
        {
            Promocion promocione = _modulosContext.Promocions.Find(id);
                
            _modulosContext.Promocions.Remove(promocione);
            await _modulosContext.SaveChangesAsync();

            return StatusCode(StatusCodes.Status200OK, "ok");

        }

    }

}
