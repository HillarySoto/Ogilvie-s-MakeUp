using Microsoft.AspNetCore.Mvc;
using Microsoft.IdentityModel.Tokens;
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
        public IActionResult IniciarSesion([FromBody] Cliente cliente)
        {
            var usuario = _dbContext.Clientes
                .FirstOrDefault(u => u.Email == cliente.Email && u.Contrasenia == cliente.Contrasenia);


            if (usuario == null)
            {
                return Unauthorized();
            }

            var jwt = _configuration.GetSection("Jwt").Get<Jwt>();

            var claims = new[]
            {
                new Claim(JwtRegisteredClaimNames.Sub, jwt.Subject),
                new Claim(JwtRegisteredClaimNames.Jti, Guid.NewGuid().ToString()),
                new Claim(JwtRegisteredClaimNames.Iat, DateTime.UtcNow.ToString()),
                new Claim("id", cliente.Id.ToString()),
                new Claim("correo", cliente.Email)
            };

            var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(jwt.Key)); //********
            var signIn = new SigningCredentials(key, SecurityAlgorithms.HmacSha256); //encriptacion del key
            var token = new JwtSecurityToken(jwt.Issuer, jwt.Audience, claims, signingCredentials: signIn); //aca se puede configurar el tiempo que durara la sesion


            return Ok(new { Token = token }); //***
        }
    }
}
