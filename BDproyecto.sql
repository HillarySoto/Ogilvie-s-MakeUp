CREATE DATABASE ProyectoAnalisis

CREATE TABLE clientes(
	id int primary key identity,
	cedula varchar(9),
	nombre varchar(50),
	telefono varchar(8),
	email varchar(30),
	direccion varchar(100),
	fechaRegistro date default GETDATE(),
	contrasenia varchar(8)

	);

CREATE TABLE pagos(
	id int primary key identity,
	fechaPago date default GETDATE(),
	monto int,
	metodoPago varchar(30),
	referencia varchar(50),
	numeroTarjeta varchar(23),
	codigoTarjeta varchar(3),
	estado varchar(20)
	);



	INSERT INTO clientes (cedula, nombre, telefono, email, direccion, fechaRegistro, contrasenia)
VALUES
    ('123456789', 'Juan Pérez', '12345678', 'juan@example.com', 'Calle 123, Ciudad', GETDATE(), 'abc1234'),
    ('987654321', 'María López', '87654321', 'maria@example.com', 'Avenida ABC, Pueblo', GETDATE(), 'cd0918'),
    ('111222333', 'Carlos González', '99998888', 'carlos@example.com', 'Ruta 66, Villa', GETDATE(), 'kf21c2'),
    ('555666777', 'Laura Martínez', '77776666', 'laura@example.com', 'Bulevar XYZ, Aldea', GETDATE(), 'cKf1'),
    ('444333222', 'Pedro Rodríguez', '11112222', 'pedro@example.com', 'Avenida XYZ, Villa', GETDATE(), '32L21'),
    ('999000111', 'Sofía Sánchez', '55556666', 'sofia@example.com', 'Calle 789, Ciudad', GETDATE(), 'br12p3'),
    ('777888999', 'Miguel González', '33332222', 'miguel@example.com', 'Ruta 44, Pueblo', GETDATE(), 'ls3415'),
    ('888555222', 'Ana López', '22221111', 'ana@example.com', 'Bulevar 123, Aldea', GETDATE(), 'vm25'),
    ('666777888', 'Luis Rodríguez', '77778888', 'luis@example.com', 'Calle 456, Ciudad', GETDATE(), 'zwx23'),
    ('222333444', 'Elena Martínez', '44445555', 'elena@example.com', 'Avenida 456, Villa', GETDATE(), 'user91');
