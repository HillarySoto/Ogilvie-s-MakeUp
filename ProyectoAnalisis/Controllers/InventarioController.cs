using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace Ogilvie_s_MakeUp.Controllers
{
    /*[Route("api/[controller]")]
    [ApiController]
    public class InventarioController : ControllerBase
    {

        private readonly OgilviesMakeUpContext _dbcontext;

        public InventarioController (OgilviesMakeUpContext context) 
        {
            _dbcontext = context;
        }



        [HttpGet]
        [Route("Listar")]
        public async Task<IActionResult> Listar() {

            List<Inventario> lista = await _dbcontext.Inventarios.OrderByDescending(c => c.IdInventario).ToListAsync();

            return StatusCode(StatusCodes.Status200OK, lista);

        }

        [HttpPost]
        [Route("Guardar")]
        public async Task<IActionResult> Guardar([FromBody] Inventario request) { 
            await _dbcontext.Inventarios.AddAsync(request);
            await _dbcontext.SaveChangesAsync();

            return StatusCode(StatusCodes.Status200OK, "Ok");


        }


        [HttpPut]
        [Route("Editar")]
        public async Task<IActionResult> Editar([FromBody] Inventario request)
        {
            _dbcontext.Inventarios.Update(request);
            await _dbcontext.SaveChangesAsync();

            return StatusCode(StatusCodes.Status200OK, "Ok");


        }



        [HttpDelete]
        [Route("Eliminar/{id:int}")]
        public async Task<IActionResult> Eliminar(int id) {

            Inventario inventario = _dbcontext.Inventarios.Find(id);
            _dbcontext.Inventarios.Remove(inventario);
            await _dbcontext.SaveChangesAsync();

            return StatusCode(StatusCodes.Status200OK, "Ok");

        }



        }*/
}
