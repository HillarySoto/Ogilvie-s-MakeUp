insert into dbo.rol(descripcion) values ('Cliente')
insert into dbo.rol(descripcion) values ('Admin')

--INSERT CLIENTES
INSERT INTO usuarios (cedula, nombre, telefono, email, contrasenia, direccion, fechaRegistro,rol)
VALUES
    ('123456789', 'Juan P�rez', '12345678', 'juan@example.com', 'jk123', 'Calle 123, Ciudad', GETDATE(),2),
    ('987654321', 'Mar�a L�pez', '87654321', 'maria@example.com','mb90', 'Avenida ABC, Pueblo', GETDATE(),1),
    ('111222333', 'Carlos Gonz�lez', '99998888', 'carlos@example.com','js43m', 'Ruta 66, Villa', GETDATE(),1),
    ('555666777', 'Laura Mart�nez', '77776666', 'laura@example.com','rs78ms', 'Bulevar XYZ, Aldea', GETDATE(),1),
    ('444333222', 'Pedro Rodr�guez', '11112222', 'pedro@example.com','P23dh', 'Avenida XYZ, Villa', GETDATE(),1),
    ('999000111', 'Sof�a S�nchez', '55556666', 'sofia@example.com','vC56', 'Calle 789, Ciudad', GETDATE(),1),
    ('777888999', 'Miguel Gonz�lez', '33332222', 'miguel@example.com','xs219c', 'Ruta 44, Pueblo', GETDATE(),1),
    ('888555222', 'Ana L�pez', '22221111', 'ana@example.com','oph43', 'Bulevar 123, Aldea', GETDATE(),1),
    ('666777888', 'Luis Rodr�guez', '77778888', 'luis@example.com','lp90r', 'Calle 456, Ciudad', GETDATE(),1),
    ('222333444', 'Elena Mart�nez', '44445555', 'elena@example.com','vm51jk', 'Avenida 456, Villa', GETDATE(),1);

