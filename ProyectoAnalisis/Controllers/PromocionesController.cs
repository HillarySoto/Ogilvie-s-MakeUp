using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Http;
using ProyectoAnalisis.Models;



namespace OgilviesMakeUpProject.Controllers;
{
    [Route("api/[controller]")]
    [ApiController]
    public class PromocionesController : ControllerBase
    {
        private readonly OgilviesmakeupContext _modulosContext;

        public PromocionesController(OgilviesmakeupContext context)
        {
            _modulosContext = context;

        }

        [HttpGet]
      //  [Route("Lista")]
        public async Task<ActionResult<IEnumerable<Promocione>>> Lista()

        { /*
            List<Promocione> lista = await _modulosContext.Promociones.OrderByDescending(c => c.IdPromocion).ToListAsync();

            return StatusCode(StatusCodes.Status200OK, lista);*/
            if (_modulosContext.Promociones == null)
          {
              return NotFound();
          }

            return await _modulosContext.Promociones.ToListAsync();

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

