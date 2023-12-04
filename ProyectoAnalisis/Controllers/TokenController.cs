using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;
using Newtonsoft.Json;
using ProyectoAnalisis.Models;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;

namespace ProyectoAnalisis.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class TokenController : ControllerBase
    {
        private readonly OgilviesmakeupContext _dbContext;
        private IConfiguration _configuration;

        public TokenController(OgilviesmakeupContext dbContext, IConfiguration configuration)
        {
            _dbContext = dbContext;
            _configuration = configuration;
        }

        [HttpPost("iniciarSesion")]
        public dynamic IniciarSesion([FromBody] Object obj)
        {
            var data = JsonConvert.DeserializeObject<dynamic>(obj.ToString());
            string email = data.email.ToString();
            string password = data.password.ToString();

            var usuario = _dbContext.Usuarios
                .Include(u => u.RolNavigation)
                .FirstOrDefault(u => u.Email == email && u.Contrasenia == password);


            if (usuario == null)
            {
                Console.WriteLine($"Intento de inicio de sesión fallido para {email}");
                return new {
                    success = false,
                    message = "Credenciales incorrectas",
                    result = ""
                };
            }

            //var jwt = _configuration.GetSection("Jwt").Get<Jwt>();

            var claims = new[]
            {
                new Claim(JwtRegisteredClaimNames.Sub, _configuration["Jwt:Subject"]),
                new Claim(JwtRegisteredClaimNames.Jti, Guid.NewGuid().ToString()),
                new Claim(JwtRegisteredClaimNames.Iat, DateTime.UtcNow.ToString()),
                new Claim("id", usuario.Id.ToString()),
                new Claim("correo", usuario.Email),
                new Claim(ClaimTypes.Role, usuario.RolNavigation.Descripcion)
            };

            var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_configuration["Jwt:Key"])); //********
            var signIn = new SigningCredentials(key, SecurityAlgorithms.HmacSha256); //encriptacion del key
            var token = new JwtSecurityToken(_configuration["Jwt:Issuer"], _configuration["Jwt:Audience"], claims, signingCredentials: signIn); //aca se puede configurar el tiempo que durara la sesion


            return Ok(new { Token = new JwtSecurityTokenHandler().WriteToken(token) }); //***
        }
    }
}
