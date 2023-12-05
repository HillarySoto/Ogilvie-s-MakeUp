CREATE DATABASE OGILVIESMAKEUP;
USE OGILVIESMAKEUP;

GO

--______________________________________________________________________--


	-- Tabla Proveedor
CREATE TABLE proveedor (
    id INT PRIMARY KEY IDENTITY (1,1),
    Nombre_empresa VARCHAR(255),
    Representante VARCHAR(255),
    Telefono VARCHAR(20),
    email VARCHAR(255),
    direccion VARCHAR(255)
);

	-- Tabla Categoría
CREATE TABLE categoria(
	id int primary key identity (1,1),
	nombre varchar(50),
);

	-- Tabla Producto
CREATE TABLE producto(
	id int primary key identity (1,1),
	idProveedor int,
	nombre varchar(50),
	imagen varchar(999),
	precio int,
	idCategoria int ,
	subcategoria varchar(50),
	marca varchar(50)
	CONSTRAINT FK_Categoria_Producto FOREIGN KEY (idCategoria) REFERENCES categoria (id),
	CONSTRAINT FK_Proovedor_Producto FOREIGN KEY (idProveedor) REFERENCES proveedor (id)
);


-- Tabla Inventario
CREATE TABLE inventario (
    id int PRIMARY KEY IDENTITY (1,1),
    idProducto int,
    descripcion varchar(500),
    cantidad int,
    fechaRegistro DATE DEFAULT GETDATE(),
    fechaCaduca DATE DEFAULT DATEADD(MONTH, 5, GETDATE()),
    estado bit,
    CONSTRAINT FK_Inventario_Producto FOREIGN KEY (idProducto) REFERENCES producto (id)
);

	-- Rol
CREATE TABLE rol(
	id int primary key identity(1,1),
	descripcion varchar(50)
	);

	-- Tabla Cliente
CREATE TABLE usuarios (
    id INT PRIMARY KEY IDENTITY (1,1),
    cedula VARCHAR(20),
    nombre VARCHAR(255),
    telefono VARCHAR(20),
    email VARCHAR(255),
	contrasenia VARCHAR(255),
    direccion VARCHAR(255),
    fechaRegistro DATE DEFAULT GETDATE(), 
	rol int references rol (id)
);



	-- Tabla Carrito
CREATE TABLE carrito (
	id int PRIMARY KEY IDENTITY (1,1),
	idCliente int,
	idProducto int,
	cantidad int,
	CONSTRAINT FK_Carrito_Producto FOREIGN KEY (idProducto) REFERENCES producto (id),
	CONSTRAINT FK_Carrito_Cliente FOREIGN KEY (idCliente) REFERENCES usuarios (id),
);




	-- Tabla Pedido
CREATE TABLE pedido (
	id int PRIMARY KEY IDENTITY (1,1),
	idCliente int,
	fechaRegistro DATE DEFAULT GETDATE(),
	total int,
	estado int, -- puede ser 1 solicitado, 2 pagado, 3 confirmado, 4 enviado, 5 devuelto
CONSTRAINT FK_Pedido_Cliente FOREIGN KEY (idCliente) REFERENCES usuarios (id)
);


	-- Tabla DetallePedido
CREATE TABLE detallePedido (
	id int PRIMARY KEY IDENTITY (1,1),
	idPedido int,
	idProducto int,
	cantidad int,
	subtotal int,
	CONSTRAINT FK_DetallePedido_Pedido FOREIGN KEY (idPedido) REFERENCES pedido (id),
	CONSTRAINT FK_DetallePedido_Producto FOREIGN KEY (idProducto) REFERENCES producto (id) ON DELETE CASCADE
);



	-- Tabla Promociones
CREATE TABLE promocion (
   id INT PRIMARY KEY IDENTITY,
   descripcion VARCHAR(255),
   fechaInicion DATE DEFAULT GETDATE(),
   fechaFin DATE,
   descuento DECIMAL(5,2),
   listaProductos TEXT
);


	-- Tabla Envio
CREATE TABLE envio (
   id INT PRIMARY KEY IDENTITY,
   idPedido INT,
   idCliente INT,
   direccion_envio VARCHAR(255),
   fecha_envio DATE,
   fecha_llegada DATE,
   costo_envio DECIMAL(8,2),
   compañia_envio VARCHAR(255),
   num_guia VARCHAR(50),
   CONSTRAINT FK_Envio_Cliente FOREIGN KEY (idCliente) REFERENCES usuarios (id),
   CONSTRAINT FK_Envio_Pedido FOREIGN KEY (idPedido) REFERENCES pedido (id)
);


	-- Tabla Devolución
CREATE TABLE devolucion (
	id INT PRIMARY KEY IDENTITY,
	idPedido INT,
    idCliente INT,
    fecha DATE,
    nombreProducto VARCHAR(255),
    motivo VARCHAR(255),
    estado VARCHAR(50),
	CONSTRAINT FK_Devolucion_Cliente FOREIGN KEY (idCliente) REFERENCES usuarios (id),
    CONSTRAINT FK_Devolucion_Pedido FOREIGN KEY (idPedido) REFERENCES pedido (id)
);


	-- Tabla Respuesta
CREATE TABLE respuesta (
   id INT PRIMARY KEY IDENTITY,
    idConsulta INT,
    Detalles TEXT
);

	-- Tabla Encuesta
CREATE TABLE encuesta (
    id INT PRIMARY KEY IDENTITY,
    apellidos VARCHAR(255),
    correo VARCHAR(255),
    descripcion TEXT,
    fechaEncuesta DATE,
    nombre VARCHAR(255),
    telefono VARCHAR(20)
);

	-- Tabla Pago
CREATE TABLE pago (
	id INT PRIMARY KEY IDENTITY,
	idPedido INT,
    idCliente INT,
    fechaPago DATE DEFAULT GETDATE(),
    monto DECIMAL(8,2),
    metodoPago VARCHAR(50),
    referencia VARCHAR(255),
    numeroTarjeta VARCHAR(20),
    codigoTarjeta VARCHAR(10),
    estado VARCHAR(50),
	CONSTRAINT FK_Pago_Pedido FOREIGN KEY (idPedido) REFERENCES pedido (id),
	CONSTRAINT FK_Pago_Cliente FOREIGN KEY (idCliente) REFERENCES usuarios (id)
);

