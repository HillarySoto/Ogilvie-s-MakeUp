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




--///////////////////////////////////////////////////////////////////////////////////////Entradas para Categoría
-- Categoría 1
INSERT INTO categoria (nombre) VALUES ('Labios');

-- Categoría 2
INSERT INTO categoria (nombre) VALUES ('Ojos');

-- Categoría 3
INSERT INTO categoria (nombre) VALUES ('Rostro');

-- Categoría 4
INSERT INTO categoria (nombre) VALUES ('Uñas');

-- Categoría 5
INSERT INTO categoria (nombre) VALUES ('Accesorios');



--///////////////////////////////////////////////////////////////////////////////////////Entradas para producto

-- Productos de la categoría "Labios"
INSERT INTO producto (idProveedor, nombre, imagen, precio, idCategoria, subcategoria, marca)
VALUES (1, 'Lápiz Labial Rojo Intenso', 'labial_rojo.jpg', 7500, 1, 'Mate', 'Glamour Beauty');

INSERT INTO producto (idProveedor, nombre, imagen, precio, idCategoria, subcategoria, marca)
VALUES (3, 'Bálsamo Labial Hidratante', 'balsamo_hidratante.jpg', 4000, 1, 'Hidratante', 'Chic Beauty');

INSERT INTO producto (idProveedor, nombre, imagen, precio, idCategoria, subcategoria, marca)
VALUES (5, 'Set de Brillos Labiales', 'brillos_labiales_set.jpg', 12500, 1, 'Brillos', 'Fashion Faces');

-- Productos de la categoría "Ojos"
INSERT INTO producto (idProveedor, nombre, imagen, precio, idCategoria, subcategoria, marca)
VALUES (2, 'Sombra de Ojos Paleta Neutra', 'paleta_neutra.jpg', 3000, 2, 'Neutra', 'Glamour Makeup');

INSERT INTO producto (idProveedor, nombre, imagen, precio, idCategoria, subcategoria, marca)
VALUES (4, 'Máscara de Pestañas Volumen Extremo', 'mascara_volumen.jpg', 11080, 2, 'Volumen', 'Trendy Cosmetics');

INSERT INTO producto (idProveedor, nombre, imagen, precio, idCategoria, subcategoria, marca)
VALUES (1, 'Delineador Líquido Negro', 'delineador_negro.jpg', 1200, 2, 'Líquido', 'Glamour Beauty');

-- Productos de la categoría "Rostro"
INSERT INTO producto (idProveedor, nombre, imagen, precio, idCategoria, subcategoria, marca)
VALUES (3, 'Base de Maquillaje Cobertura Total', 'base_cobertura_total.jpg', 6040, 3, 'Cobertura Total', 'Chic Beauty');

INSERT INTO producto (idProveedor, nombre, imagen, precio, idCategoria, subcategoria, marca)
VALUES (5, 'Polvo Translúcido Matificante', 'polvo_matificante.jpg', 2500, 3, 'Matificante', 'Fashion Faces');

INSERT INTO producto (idProveedor, nombre, imagen, precio, idCategoria, subcategoria, marca)
VALUES (2, 'Rubor en Crema Duración Extendida', 'rubor_en_crema.jpg', 4220, 3, 'Duración Extendida', 'Glamour Makeup');

-- Productos de la categoría "Uñas"
INSERT INTO producto (idProveedor, nombre, imagen, precio, idCategoria, subcategoria, marca)
VALUES (4, 'Esmalte de Uñas de Secado Rápido', 'esmalte_secado_rapido.jpg', 800, 4, 'Secado Rápido', 'Trendy Cosmetics');

INSERT INTO producto (idProveedor, nombre, imagen, precio, idCategoria, subcategoria, marca)
VALUES (1, 'Kit de Manicura Profesional', 'kit_manicura_profesional.jpg', 35000, 4, 'Profesional', 'Glamour Beauty');

INSERT INTO producto (idProveedor, nombre, imagen, precio, idCategoria, subcategoria, marca)
VALUES (3, 'Aceite para Cutículas', 'aceite_cuticulas.jpg', 1200, 4, 'Hidratante', 'Chic Beauty');

-- Productos de la categoría "Accesorios"
INSERT INTO producto (idProveedor, nombre, imagen, precio, idCategoria, subcategoria, marca)
VALUES (5, 'Estuche de Maquillaje Portátil', 'estuche_portatil.jpg', 13000, 5, 'Portátil', 'Fashion Faces');

INSERT INTO producto (idProveedor, nombre, imagen, precio, idCategoria, subcategoria, marca)
VALUES (2, 'Brochas de Maquillaje Profesionales', 'brochas_profesionales.jpg', 28000, 5, 'Profesionales', 'Glamour Makeup');

INSERT INTO producto (idProveedor, nombre, imagen, precio, idCategoria, subcategoria, marca)
VALUES (4, 'Esponja Mezcladora de Maquillaje', 'esponja_mezcladora.jpg', 1000, 5, 'Mezcladora', 'Trendy Cosmetics');



--///////////////////////////////////////////////////////////////////////////////////////Entradas para Inventario


-- Inventario para productos de la categoría "Labios"
INSERT INTO inventario (idProducto, descripcion, cantidad, estado)
VALUES (1, 'Stock inicial de lápices labiales rojos', 50, 1);

INSERT INTO inventario (idProducto, descripcion, cantidad, estado)
VALUES (2, 'Inventario de bálsamos labiales hidratantes', 30, 1);

INSERT INTO inventario (idProducto, descripcion, cantidad, estado)
VALUES (3, 'Inventario de sets de brillos labiales', 40, 1);

-- Inventario para productos de la categoría "Ojos"
INSERT INTO inventario (idProducto, descripcion, cantidad, estado)
VALUES (4, 'Inventario de sombras de ojos paleta neutra', 25, 1);

INSERT INTO inventario (idProducto, descripcion, cantidad, estado)
VALUES (5, 'Inventario de máscaras de pestañas volumen extremo', 20, 1);

INSERT INTO inventario (idProducto, descripcion, cantidad, estado)
VALUES (6, 'Inventario de delineadores líquidos negros', 35, 1);

-- Inventario para productos de la categoría "Rostro"
INSERT INTO inventario (idProducto, descripcion, cantidad, estado)
VALUES (7, 'Inventario de bases de maquillaje cobertura total', 15, 1);

INSERT INTO inventario (idProducto, descripcion, cantidad, estado)
VALUES (8, 'Inventario de polvos translúcidos matificantes', 28, 1);

INSERT INTO inventario (idProducto, descripcion, cantidad, estado)
VALUES (9, 'Inventario de rubores en crema duración extendida', 22, 1);

-- Inventario para productos de la categoría "Uñas"
INSERT INTO inventario (idProducto, descripcion, cantidad, estado)
VALUES (10, 'Inventario de esmaltes de uñas de secado rápido', 40, 1);

INSERT INTO inventario (idProducto, descripcion, cantidad, estado)
VALUES (11, 'Inventario de kits de manicura profesional', 18, 1);

INSERT INTO inventario (idProducto, descripcion, cantidad, estado)
VALUES (12, 'Inventario de aceites para cutículas', 50, 1);

-- Inventario para productos de la categoría "Accesorios"
INSERT INTO inventario (idProducto, descripcion, cantidad, estado)
VALUES (13, 'Inventario de estuches de maquillaje portátiles', 10, 1);

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
    ('123456789', 'Juan Pérez', '12345678', 'juan@example.com', 'jk123', 'Calle 123, Ciudad', GETDATE(),2),
    ('987654321', 'María López', '87654321', 'maria@example.com','mb90', 'Avenida ABC, Pueblo', GETDATE(),1),
    ('111222333', 'Carlos González', '99998888', 'carlos@example.com','js43m', 'Ruta 66, Villa', GETDATE(),1),
    ('555666777', 'Laura Martínez', '77776666', 'laura@example.com','rs78ms', 'Bulevar XYZ, Aldea', GETDATE(),1),
    ('444333222', 'Pedro Rodríguez', '11112222', 'pedro@example.com','P23dh', 'Avenida XYZ, Villa', GETDATE(),1),
    ('999000111', 'Sofía Sánchez', '55556666', 'sofia@example.com','vC56', 'Calle 789, Ciudad', GETDATE(),1),
    ('777888999', 'Miguel González', '33332222', 'miguel@example.com','xs219c', 'Ruta 44, Pueblo', GETDATE(),1),
    ('888555222', 'Ana López', '22221111', 'ana@example.com','oph43', 'Bulevar 123, Aldea', GETDATE(),1),
    ('666777888', 'Luis Rodríguez', '77778888', 'luis@example.com','lp90r', 'Calle 456, Ciudad', GETDATE(),1),
    ('222333444', 'Elena Martínez', '44445555', 'elena@example.com','vm51jk', 'Avenida 456, Villa', GETDATE(),1);




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

    -- Devolver un mensaje o valor según sea necesario
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

