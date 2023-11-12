CREATE DATABASE ProyectoAnalisis

CREATE TABLE clientes(
	id int primary key identity,
	cedula varchar(9),
	nombre varchar(50),
	telefono varchar(8),
	email varchar(30),
	direccion varchar(100),
	fecha_registro date
	);
	alter table clientes set
CREATE TABLE pagos(
	id int primary key identity,
	fecha_pago date,
	monto int,
	metodo_pago varchar(30),
	referencia varchar(50),
	estado varchar(20)
	);

	INSERT INTO clientes (cedula, nombre, telefono, email, direccion, fecha_registro)
VALUES
    ('123456789', 'Juan Pérez', '12345678', 'juan@example.com', 'Calle 123, Ciudad', GETDATE()),
    ('987654321', 'María López', '87654321', 'maria@example.com', 'Avenida ABC, Pueblo', GETDATE()),
    ('111222333', 'Carlos González', '99998888', 'carlos@example.com', 'Ruta 66, Villa', GETDATE()),
    ('555666777', 'Laura Martínez', '77776666', 'laura@example.com', 'Bulevar XYZ, Aldea', GETDATE()),
    ('444333222', 'Pedro Rodríguez', '11112222', 'pedro@example.com', 'Avenida XYZ, Villa', GETDATE()),
    ('999000111', 'Sofía Sánchez', '55556666', 'sofia@example.com', 'Calle 789, Ciudad', GETDATE()),
    ('777888999', 'Miguel González', '33332222', 'miguel@example.com', 'Ruta 44, Pueblo', GETDATE()),
    ('888555222', 'Ana López', '22221111', 'ana@example.com', 'Bulevar 123, Aldea', GETDATE()),
    ('666777888', 'Luis Rodríguez', '77778888', 'luis@example.com', 'Calle 456, Ciudad', GETDATE()),
    ('222333444', 'Elena Martínez', '44445555', 'elena@example.com', 'Avenida 456, Villa', GETDATE());
