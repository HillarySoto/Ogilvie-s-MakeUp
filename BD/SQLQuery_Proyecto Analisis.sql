create database Ogilvies_MakeUp
use Ogilvies_MakeUp

Create table inventario (
idInventario int primary key identity (1,1),
producto varchar(500),
nombre varchar(500),
descripcion varchar(500),
cantidad int,
fechaRegistro DATE,
fechaCaduca DATE,
estado bit
);

drop table inventario

create table pedido(
idPedido int primary key identity (1,1),
);


-- Insertar datos en la tabla de inventario
INSERT INTO inventario (producto, nombre, descripcion, cantidad, fechaRegistro, fechaCaduca, estado)
VALUES
('Base', 'Base Maquillaje X', 'Base de maquillaje de larga duración', 100, '2023-01-15', '2023-12-31', 1),
('Labial', 'Labial Rojo Pasión', 'Labial de color rojo intenso', 50, '2023-02-20', '2024-02-20', 1),
('Sombra de ojos', 'Sombra Ojos Brillante', 'Sombra de ojos con brillo', 75, '2023-03-10', '2024-03-10', 1),
('Rubor', 'Rubor en Polvo', 'Rubor en polvo compacto', 60, '2023-04-05', '2024-04-05', 1),
('Máscara de pestañas', 'Máscara Pestañas Volumen', 'Máscara para pestañas con efecto de volumen', 80, '2023-05-12', '2024-05-12', 1),
('Lápiz de cejas', 'Lápiz Cejas Definidor', 'Lápiz para definir cejas', 70, '2023-06-08', '2024-06-08', 1),
('Delineador de ojos', 'Delineador Ojos Líquido', 'Delineador líquido para ojos', 90, '2023-07-21', '2024-07-21', 1),
('Corrector', 'Corrector de Ojeras', 'Corrector para ojeras', 55, '2023-08-30', '2024-08-30', 1),
('Pinceles de maquillaje', 'Set Pinceles Profesionales', 'Set de pinceles para maquillaje', 40, '2023-09-14', '2024-09-14', 1),
('Esponja de maquillaje', 'Esponja Maquillaje Blender', 'Esponja para aplicar maquillaje', 70, '2023-10-02', '2024-10-02', 1),
('Polvo translúcido', 'Polvo Translúcido Fijador', 'Polvo para sellar el maquillaje', 65, '2023-11-25', '2024-11-25', 1),
('Brocha para rubor', 'Brocha Rubor Profesional', 'Brocha para aplicar rubor', 50, '2023-12-10', '2024-12-10', 1),
('Esmalte de uñas', 'Esmalte Uñas Rosa Claro', 'Esmalte de uñas de color rosa', 85, '2023-12-20', '2024-12-20', 1),
('Cremas faciales', 'Crema Facial Hidratante', 'Crema hidratante para el rostro', 45, '2023-01-05', '2024-01-05', 1),
('Perfume', 'Perfume Floral Elegante', 'Perfume con aroma floral', 30, '2023-02-10', '2024-02-10', 1),
('Removedor de maquillaje', 'Removedor Maquillaje Suave', 'Removedor suave para maquillaje', 60, '2023-03-05', '2024-03-05', 1),
('Lápiz labial', 'Labial Mate Duradero', 'Labial de acabado mate', 70, '2023-04-10', '2024-04-10', 1),
('Esmalte de uñas', 'Esmalte Uñas Brillante', 'Esmalte de uñas con brillo', 80, '2023-05-15', '2024-05-15', 1),
('Colorete en crema', 'Colorete Crema Rosa', 'Colorete en crema de color rosa', 55, '2023-06-20', '2024-06-20', 1),
('Máscara de pestañas', 'Máscara Pestañas Waterproof', 'Máscara resistente al agua', 50, '2023-07-25', '2024-07-25', 1);
