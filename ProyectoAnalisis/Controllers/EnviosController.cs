using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using OgilviesMakeUpModulos.Models;
using System;

namespace OgilviesMakeUpModulos.Controllers
{
   /* [Route("api/enviosController")]
    [ApiController]
    public class EnviosController : Controller
    {
        private readonly OgilviesmakeupContext _dbcontext;

        public EnviosController(OgilviesmakeupContext contexto)
        {
            _dbcontext = contexto;
        }

        [HttpGet]
        [Route("Lista")]
        public IActionResult Index()
        {
            var envios = _dbcontext.Envios.ToList();
            return StatusCode(StatusCodes.Status200OK, envios);
        }

        [HttpPost]
        [Route("RegistrarEnvio")]
        public IActionResult RegistrarEnvio([FromBody] Envio envio)
        {
            try
            {
                _dbcontext.Envios.Add(envio);
                _dbcontext.SaveChanges();
                return StatusCode(StatusCodes.Status201Created, new { Message = "Envío registrado exitosamente", Envio = envio });
            }
            catch (Exception ex)
            {
                // Log the exception or handle it as needed
                return StatusCode(StatusCodes.Status500InternalServerError, new { Message = "Error al registrar el envío", Error = ex.Message });
            }
        }

        [HttpPut]
[Route("EditarEnvio/{idEnvio}")]
public IActionResult EditarEnvio(int idEnvio, [FromBody] Envio envioModificado)
{
    try
    {
        // Verificar si el envío existe
        var envioExistente = _dbcontext.Envios.Find(idEnvio);

        if (envioExistente == null)
        {
            return StatusCode(StatusCodes.Status404NotFound, new { Message = "Envío no encontrado" });
        }

        // Actualizar las propiedades del envío existente con las del envío modificado
        envioExistente.DireccionEnvio = envioModificado.DireccionEnvio;
        envioExistente.FechaEnvio = envioModificado.FechaEnvio;
        envioExistente.FechaLlegada = envioModificado.FechaLlegada;
        envioExistente.CostoEnvio = envioModificado.CostoEnvio;
        envioExistente.CompaniaEnvio = envioModificado.CompaniaEnvio;
        envioExistente.NumGuia = envioModificado.NumGuia;

        // Guardar los cambios en la base de datos
        _dbcontext.SaveChanges();

        return StatusCode(StatusCodes.Status200OK, new { Message = "Envío editado exitosamente", Envio = envioExistente });
    }
    catch (Exception ex)
    {
        return StatusCode(StatusCodes.Status500InternalServerError, new { Message = "Error al editar el envío", Error = ex.Message });
    }
}

[HttpGet("ObtenerEnvio/{idEnvio}")]
public IActionResult ObtenerEnvio(int idEnvio)
{
    try
    {
        // Obtén el envío desde tu base de datos o almacenamiento
        var envio = _dbcontext.Envios.Find(idEnvio);

        if (envio == null)
        {
            return StatusCode(StatusCodes.Status404NotFound, new { Message = "Envío no encontrado" });
        }

        // Puedes ajustar la respuesta según tus necesidades
        return Ok(new
        {
            IdEnvio = envio.IdEnvio,
            IdCliente = envio.IdCliente,
            DireccionEnvio = envio.DireccionEnvio,
            FechaEnvio = envio.FechaEnvio,
            FechaLlegada = envio.FechaLlegada,
            CostoEnvio = envio.CostoEnvio,
            CompaniaEnvio = envio.CompaniaEnvio,
            NumGuia = envio.NumGuia
            // Agrega otros campos según sea necesario
        });
    }
    catch (Exception ex)
    {
        return StatusCode(StatusCodes.Status500InternalServerError, new { Message = "Error al obtener el envío", Error = ex.Message });
    }
}


        [HttpDelete]
        [Route("EliminarEnvio/{idEnvio}")]
        public IActionResult EliminarEnvio(int idEnvio)
        {
            try
            {
                var envio = _dbcontext.Envios.Find(idEnvio);

                if (envio == null)
                {
                    return NotFound(new { Message = "Envío no encontrado" });
                }

                _dbcontext.Envios.Remove(envio);
                _dbcontext.SaveChanges();

                return StatusCode(StatusCodes.Status200OK, new { Message = "Envío eliminado exitosamente" });
            }
            catch (Exception ex)
            {
                // Log the exception or handle it as needed
                return StatusCode(StatusCodes.Status500InternalServerError, new { Message = "Error al eliminar el envío", Error = ex.Message });
            }
        }
    }*/
}
