using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using OgilviesMakeUpModulos.Models;
using System;
using System.Linq;

namespace OgilviesMakeUpModulos.Controllers
{
    [Route("api/consultasController")]
    [ApiController]
    public class ConsultasController : Controller
    {
        private readonly OgilviesmakeupContext _dbContext;

        public ConsultasController(OgilviesmakeupContext dbContext)
        {
            _dbContext = dbContext;
        }

        [HttpGet]
        [Route("ListaConsultas")]
        public IActionResult ListaConsultas()
        {
            try
            {
                var consultas = _dbContext.Consultas
                    .Select(c => new
                    {
                        IdConsulta = c.IdConsulta,
                        Detalles = c.Detalles,
                        Fecha = c.Fecha,
                        IdCliente = c.IdCliente,
                        Respuestas = _dbContext.Respuestas
                            .Where(r => r.IdConsulta == c.IdConsulta)
                            .Select(r => new
                            {
                                IdRespuesta = r.IdRespuesta,
                                DetallesRespuesta = r.Detalles,
                                FechaRespuesta = r.Fecha,
                                IdConsultaRespuesta = r.IdConsulta
                            })
                            .ToList()
                    })
                    .ToList();

                return StatusCode(StatusCodes.Status200OK, consultas);
            }
            catch (Exception ex)
            {
                // Log the exception or handle it as needed
                return StatusCode(StatusCodes.Status500InternalServerError, new { Message = "Error al obtener las consultas", Error = ex.Message });
            }
        }

        [HttpPost]
        [Route("ResponderConsulta/{idConsulta}")]
        public IActionResult ResponderConsulta(int idConsulta, [FromBody] RespuestaInput respuestaInput)
        {
            try
            {
                // Ensure the consulta exists
                var consulta = _dbContext.Consultas.Find(idConsulta);

                if (consulta == null)
                {
                    return StatusCode(StatusCodes.Status404NotFound, new { Message = "Consulta no encontrada" });
                }

                // Create a Respuesta entity from the input model
                var respuesta = new Respuesta
                {
                    IdConsulta = idConsulta,
                    Detalles = respuestaInput.Detalles,
                    // Set other properties if needed
                };

                // Add the respuesta to the context
                _dbContext.Respuestas.Add(respuesta);
                _dbContext.SaveChanges();

                return StatusCode(StatusCodes.Status201Created, new { Message = "Respuesta agregada exitosamente", Respuesta = respuesta });
            }
            catch (Exception ex)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, new { Message = "Error al responder la consulta", Error = ex.Message });
            }
        }





        [HttpPost]
        [Route("CrearConsulta")]
        public IActionResult CrearConsulta([FromBody] ConsultaInputModel consultaInput)
        {
            try
            {
                var consulta = new Consulta
                {
                    IdCliente = consultaInput.IdCliente,
                    Detalles = consultaInput.Detalles,
                    Fecha = consultaInput.Fecha
                };

                // Add the consulta to the context
                _dbContext.Consultas.Add(consulta);
                _dbContext.SaveChanges();

                return StatusCode(StatusCodes.Status201Created, new { Message = "Consulta creada exitosamente", Consulta = consulta });
            }
            catch (Exception ex)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, new { Message = "Error al crear la consulta", Error = ex.Message });
            }
        }


        [HttpGet]
        [Route("ObtenerRespuestas/{idConsulta}")]
        public IActionResult ObtenerRespuestas(int idConsulta)
        {
            try
            {
                var respuestas = _dbContext.Respuestas
                    .Where(r => r.IdConsulta == idConsulta)
                    .ToList();

                return StatusCode(StatusCodes.Status200OK, respuestas);
            }
            catch (Exception ex)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, new { Message = "Error al obtener las respuestas", Error = ex.Message });
            }
        }

        [HttpDelete]
        [Route("EliminarRespuesta/{idRespuesta}")]
        public IActionResult EliminarRespuesta(int idRespuesta)
        {
            try
            {
                // Buscar la respuesta por ID
                var respuesta = _dbContext.Respuestas.Find(idRespuesta);

                if (respuesta == null)
                {
                    return StatusCode(StatusCodes.Status404NotFound, new { Message = "Respuesta no encontrada" });
                }

                // Eliminar la respuesta
                _dbContext.Respuestas.Remove(respuesta);
                _dbContext.SaveChanges();

                return StatusCode(StatusCodes.Status200OK, new { Message = "Respuesta eliminada exitosamente" });
            }
            catch (Exception ex)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, new { Message = "Error al eliminar la respuesta", Error = ex.Message });
            }
        }


    }





}



