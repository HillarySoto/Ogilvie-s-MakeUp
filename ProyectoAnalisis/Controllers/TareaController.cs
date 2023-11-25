using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using OgilviesMakeUpModulos.Models;
using System.Threading.Tasks; // Asegúrate de importar System.Threading.Tasks.

namespace OgilviesMakeUpModulos.Controllers
{
   /* [Route("api/[controller]")]
    [ApiController]
    public class TareaController : ControllerBase
    {
        private readonly OgilviesmakeupContext _dbcontext;

        public TareaController(OgilviesmakeupContext context)
        {
            _dbcontext = context;
        }

        [HttpGet]
        [Route("ListaEncuestas")] // Cambia el nombre de la ruta para reflejar "Lista de Encuestas".

        public async Task<IActionResult> ListaEncuestas() // Cambia el nombre del método a "ListaEncuestas".
        {

            // Consulta las encuestas desde la base de datos y ordénalas como desees.
            List<Encuestum> lista = await _dbcontext.Encuesta.OrderByDescending(t => t.IdEncuesta).ToListAsync();
            return StatusCode(StatusCodes.Status200OK, lista);
        }

        [HttpPost]
        [Route("GuardarEncuesta")] // Cambia el nombre de la ruta para reflejar "Guardar Encuesta".
        public async Task<IActionResult> GuardarEncuesta([FromBody] Encuestum request)
        {
            // Agrega la encuesta a la base de datos.
            await _dbcontext.Encuesta.AddAsync(request);
            await _dbcontext.SaveChangesAsync();
            return StatusCode(StatusCodes.Status200OK, "Encuesta guardada exitosamente.");
        }

        [HttpDelete]
        [Route("EliminarEncuesta/{id:int}")] // Cambia el nombre de la ruta para reflejar "Eliminar Encuesta".
        public async Task<IActionResult> EliminarEncuesta(int id)
        {
            // Encuentra la encuesta por ID y elimínala de la base de datos.
            Encuestum encuesta = await _dbcontext.Encuesta.FindAsync(id);
            if (encuesta == null)
            {
                return StatusCode(StatusCodes.Status404NotFound, "Encuesta no encontrada.");
            }

            _dbcontext.Encuesta.Remove(encuesta);
            await _dbcontext.SaveChangesAsync();
            return StatusCode(StatusCodes.Status200OK, "Encuesta eliminada exitosamente.");
        }
    }*/
}
