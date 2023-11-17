namespace OgilviesMakeUpModulos.Models;

public partial class Producto
{
    public int IdProducto { get; set; }
    public string Nombre { get; set; }
    public string Imagen { get; set; }
    public int Precio { get; set; }
    public string Categorias { get; set; }
    public string SubCategoria { get; set; }
    public string Marca { get; set; }
    public string Categoria { get; set; }
}