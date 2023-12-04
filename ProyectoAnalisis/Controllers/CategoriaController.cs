using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using ProyectoAnalisis.Models;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace OgilviesMakeUpProject.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CategoriaController : ControllerBase
    {
        private readonly OgilviesmakeupContext _dbContext;

        public CategoriaController(OgilviesmakeupContext context)
        {
            _dbContext = context;
        }




[HttpGet("Lista")]
public async Task<ActionResult> Lista()
{
    List<Categoria> lista = await _dbContext.Categoria.OrderByDescending(c => c.Id).ToListAsync();
    return StatusCode(StatusCodes.Status200OK, lista);
}


[HttpGet("ListaNombres")]
        public async Task<ActionResult> ListaNombres()
        {
            List<string> nombres = await _dbContext.Categoria
                .OrderByDescending(c => c.Id)
                .Select(p => p.Nombre)
                .ToListAsync();

            return StatusCode(StatusCodes.Status200OK, nombres);
        }
    }
}
