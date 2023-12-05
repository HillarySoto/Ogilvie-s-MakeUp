--///////////////////////////////////////////////////////////////////////////////////////Entradas para proveedores

-- Entrada 1
INSERT INTO proveedor 
VALUES ('BeautyCosmetic', 'Ana Martinez', '87894402', 'ana@beautycosmetic.com', 'Calle de la Belleza, 123');

-- Entrada 2
INSERT INTO proveedor (Nombre_empresa, Representante, Telefono, email, direccion)
VALUES ('GlamourMakeup', 'Carlos Rodriguez', '60705040', 'carlos@glamourmakeup.com', 'Avenida del Glamour, 456');

-- Entrada 3
INSERT INTO proveedor (Nombre_empresa, Representante, Telefono, email, direccion)
VALUES ('ChicBeauty', 'Elena Gomez', '24123344', 'elena@chicbeauty.com', 'Plaza Elegante, 789');

-- Entrada 4
INSERT INTO proveedor (Nombre_empresa, Representante, Telefono, email, direccion)
VALUES ('TrendyCosmetics', 'Luisa Sanchez', '70609988', 'luisa@trendycosmetics.com', 'Carrera de la Moda, 101');

-- Entrada 5
INSERT INTO proveedor (Nombre_empresa, Representante, Telefono, email, direccion)
VALUES ('FashionFaces', 'Javier Torres', '22051430', 'javier@fashionfaces.com', 'Calle de la Elegancia, 234');




--///////////////////////////////////////////////////////////////////////////////////////Entradas para Categor�a
-- Categor�a 1
INSERT INTO categoria (nombre) VALUES ('Labios');

-- Categor�a 2
INSERT INTO categoria (nombre) VALUES ('Ojos');

-- Categor�a 3
INSERT INTO categoria (nombre) VALUES ('Rostro');

-- Categor�a 4
INSERT INTO categoria (nombre) VALUES ('U�as');

-- Categor�a 5
INSERT INTO categoria (nombre) VALUES ('Accesorios');



--///////////////////////////////////////////////////////////////////////////////////////Entradas para producto

-- Productos de la categor�a "Labios"
INSERT INTO producto (idProveedor, nombre, imagen, precio, idCategoria, subcategoria, marca)
VALUES (1, 'L�piz Labial Rojo Intenso', 'labial_rojo.jpg', 7500, 1, 'Mate', 'Glamour Beauty');

INSERT INTO producto (idProveedor, nombre, imagen, precio, idCategoria, subcategoria, marca)
VALUES (3, 'B�lsamo Labial Hidratante', 'balsamo_hidratante.jpg', 4000, 1, 'Hidratante', 'Chic Beauty');

INSERT INTO producto (idProveedor, nombre, imagen, precio, idCategoria, subcategoria, marca)
VALUES (5, 'Set de Brillos Labiales', 'brillos_labiales_set.jpg', 12500, 1, 'Brillos', 'Fashion Faces');

-- Productos de la categor�a "Ojos"
INSERT INTO producto (idProveedor, nombre, imagen, precio, idCategoria, subcategoria, marca)
VALUES (2, 'Sombra de Ojos Paleta Neutra', 'paleta_neutra.jpg', 3000, 2, 'Neutra', 'Glamour Makeup');

INSERT INTO producto (idProveedor, nombre, imagen, precio, idCategoria, subcategoria, marca)
VALUES (4, 'M�scara de Pesta�as Volumen Extremo', 'mascara_volumen.jpg', 11080, 2, 'Volumen', 'Trendy Cosmetics');

INSERT INTO producto (idProveedor, nombre, imagen, precio, idCategoria, subcategoria, marca)
VALUES (1, 'Delineador L�quido Negro', 'delineador_negro.jpg', 1200, 2, 'L�quido', 'Glamour Beauty');

-- Productos de la categor�a "Rostro"
INSERT INTO producto (idProveedor, nombre, imagen, precio, idCategoria, subcategoria, marca)
VALUES (3, 'Base de Maquillaje Cobertura Total', 'base_cobertura_total.jpg', 6040, 3, 'Cobertura Total', 'Chic Beauty');

INSERT INTO producto (idProveedor, nombre, imagen, precio, idCategoria, subcategoria, marca)
VALUES (5, 'Polvo Transl�cido Matificante', 'polvo_matificante.jpg', 2500, 3, 'Matificante', 'Fashion Faces');

INSERT INTO producto (idProveedor, nombre, imagen, precio, idCategoria, subcategoria, marca)
VALUES (2, 'Rubor en Crema Duraci�n Extendida', 'rubor_en_crema.jpg', 4220, 3, 'Duraci�n Extendida', 'Glamour Makeup');

-- Productos de la categor�a "U�as"
INSERT INTO producto (idProveedor, nombre, imagen, precio, idCategoria, subcategoria, marca)
VALUES (4, 'Esmalte de U�as de Secado R�pido', 'esmalte_secado_rapido.jpg', 800, 4, 'Secado R�pido', 'Trendy Cosmetics');

INSERT INTO producto (idProveedor, nombre, imagen, precio, idCategoria, subcategoria, marca)
VALUES (1, 'Kit de Manicura Profesional', 'kit_manicura_profesional.jpg', 35000, 4, 'Profesional', 'Glamour Beauty');

INSERT INTO producto (idProveedor, nombre, imagen, precio, idCategoria, subcategoria, marca)
VALUES (3, 'Aceite para Cut�culas', 'aceite_cuticulas.jpg', 1200, 4, 'Hidratante', 'Chic Beauty');

-- Productos de la categor�a "Accesorios"
INSERT INTO producto (idProveedor, nombre, imagen, precio, idCategoria, subcategoria, marca)
VALUES (5, 'Estuche de Maquillaje Port�til', 'estuche_portatil.jpg', 13000, 5, 'Port�til', 'Fashion Faces');

INSERT INTO producto (idProveedor, nombre, imagen, precio, idCategoria, subcategoria, marca)
VALUES (2, 'Brochas de Maquillaje Profesionales', 'brochas_profesionales.jpg', 28000, 5, 'Profesionales', 'Glamour Makeup');

INSERT INTO producto (idProveedor, nombre, imagen, precio, idCategoria, subcategoria, marca)
VALUES (4, 'Esponja Mezcladora de Maquillaje', 'esponja_mezcladora.jpg', 1000, 5, 'Mezcladora', 'Trendy Cosmetics');



--///////////////////////////////////////////////////////////////////////////////////////Entradas para Inventario


-- Inventario para productos de la categor�a "Labios"
INSERT INTO inventario (idProducto, descripcion, cantidad, estado)
VALUES (1, 'Stock inicial de l�pices labiales rojos', 50, 1);

INSERT INTO inventario (idProducto, descripcion, cantidad, estado)
VALUES (2, 'Inventario de b�lsamos labiales hidratantes', 30, 1);

INSERT INTO inventario (idProducto, descripcion, cantidad, estado)
VALUES (3, 'Inventario de sets de brillos labiales', 40, 1);

-- Inventario para productos de la categor�a "Ojos"
INSERT INTO inventario (idProducto, descripcion, cantidad, estado)
VALUES (4, 'Inventario de sombras de ojos paleta neutra', 25, 1);

INSERT INTO inventario (idProducto, descripcion, cantidad, estado)
VALUES (5, 'Inventario de m�scaras de pesta�as volumen extremo', 20, 1);

INSERT INTO inventario (idProducto, descripcion, cantidad, estado)
VALUES (6, 'Inventario de delineadores l�quidos negros', 35, 1);

-- Inventario para productos de la categor�a "Rostro"
INSERT INTO inventario (idProducto, descripcion, cantidad, estado)
VALUES (7, 'Inventario de bases de maquillaje cobertura total', 15, 1);

INSERT INTO inventario (idProducto, descripcion, cantidad, estado)
VALUES (8, 'Inventario de polvos transl�cidos matificantes', 28, 1);

INSERT INTO inventario (idProducto, descripcion, cantidad, estado)
VALUES (9, 'Inventario de rubores en crema duraci�n extendida', 22, 1);

-- Inventario para productos de la categor�a "U�as"
INSERT INTO inventario (idProducto, descripcion, cantidad, estado)
VALUES (10, 'Inventario de esmaltes de u�as de secado r�pido', 40, 1);

INSERT INTO inventario (idProducto, descripcion, cantidad, estado)
VALUES (11, 'Inventario de kits de manicura profesional', 18, 1);

INSERT INTO inventario (idProducto, descripcion, cantidad, estado)
VALUES (12, 'Inventario de aceites para cut�culas', 50, 1);

-- Inventario para productos de la categor�a "Accesorios"
INSERT INTO inventario (idProducto, descripcion, cantidad, estado)
VALUES (13, 'Inventario de estuches de maquillaje port�tiles', 10, 1);

INSERT INTO inventario (idProducto, descripcion, cantidad, estado)
VALUES (14, 'Inventario de brochas de maquillaje profesionales', 32, 1);

INSERT INTO inventario (idProducto, descripcion, cantidad, estado)
VALUES (15, 'Inventario de esponjas mezcladoras de maquillaje', 25, 1);


--///////////////////////////////////////////////////////////////////////////////////////Entradas para Rol

insert into dbo.rol(descripcion) values ('Cliente')
insert into dbo.rol(descripcion) values ('Admin')


--///////////////////////////////////////////////////////////////////////////////////////Entradas para Usuarios

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




	-- Procedimiento almacenado para actualizar el total del pedido cuando se agregan objetos al Pedido
CREATE PROCEDURE ActualizarTotalPedido
    @idPedido INT
AS
BEGIN
    -- Declarar una variable para almacenar la sumatoria de subtotales
    DECLARE @nuevoTotal INT;

    -- Calcular la sumatoria de subtotales para el pedido dado
    SELECT @nuevoTotal = SUM(subtotal)
    FROM detallePedido
    WHERE idPedido = @idPedido;

    -- Actualizar el total en la tabla pedido
    UPDATE pedido
    SET total = @nuevoTotal
    WHERE id = @idPedido;

    -- Devolver un mensaje o valor seg�n sea necesario
    SELECT 'Total actualizado correctamente' AS Mensaje;
END;


--///////////////////////////////////////////////////////////////////////////////////////Entradas para Pedidos

insert into pedido (idCliente, total, estado)
values (4, 57000, 1);

insert into pedido (idCliente, total, estado)
values (16, 7000, 1);

insert into pedido (idCliente, total, estado)
values (2, 14750, 1);

insert into pedido (idCliente, total, estado)
values (2, 4600, 1);

--///////////////////////////////////////////////////////////////////////////////////////Entradas para DetallesPedidos

insert into detallePedido (idPedido ,idProducto, cantidad, subtotal)
values (1, 1, 3, 45);

insert into detallePedido (idPedido ,idProducto, cantidad, subtotal)
values (2, 4, 5, 60);

insert into detallePedido (idPedido ,idProducto, cantidad, subtotal)
values (2, 14, 11, 28);

insert into detallePedido (idPedido ,idProducto, cantidad, subtotal)
values (3, 4, 2, 24);

insert into detallePedido (idPedido ,idProducto, cantidad, subtotal)
values (4, 4, 1, 12);

