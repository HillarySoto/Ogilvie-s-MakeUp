const { createProxyMiddleware } = require('http-proxy-middleware');
const { env } = require('process');

const target = env.ASPNETCORE_HTTPS_PORT ? `https://localhost:${env.ASPNETCORE_HTTPS_PORT}` :
  env.ASPNETCORE_URLS ? env.ASPNETCORE_URLS.split(';')[0] : 'http://localhost:11919';

const context =  [
    "/weatherforecast",
    "/api/Usuarios",
    "/api/Categoria",
    "/api/Pago",
    "/api/Producto",
    "/api/Proveedor",
    "/api/Inventario",
    "/api/Pedido",
    "/api/Carrito",
    "/api/DetallePedido",
    "/api/Consultas",
    "/api/Envio",
    "/api",
    "/api/Token"
];

module.exports = function(app) {
  const appProxy = createProxyMiddleware(context, {
    proxyTimeout: 10000,
    target: target,
    secure: false,
    headers: {
      Connection: 'Keep-Alive'
    }
  });

  app.use(appProxy);
};
