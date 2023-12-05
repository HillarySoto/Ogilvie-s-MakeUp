import Swal from "sweetalert2";

export const mostrarProductos = async () => {
  try {
    const data = await fetch("/api/Producto/Lista");
    return data.json();
  } catch (error) {
    console.error("Error al obtener la lista de productos:", error);
    throw error;
  }
};

export const guardarProducto = async (producto, setMostrarModal) => {
  try {
    await fetch("api/Producto/Guardar", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
      body: JSON.stringify(producto),
    });

    setMostrarModal(false);
  } catch (error) {
    console.error("Error al guardar el producto:", error);
    throw error;
  } finally {
    mostrarProductos();
  }
};

export const editarProducto = async (producto, setMostrarModal) => {
  try {
    const result = await Swal.fire({
      title: 'Actualizar Información?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      cancelButtonText: 'Cancelar',
      allowOutsideClick: false,
    });

    if (result.isConfirmed) {
      await fetch("api/Producto/Editar", {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json;charset=utf-8',
        },
        body: JSON.stringify(producto),
      });

      setMostrarModal(false);
    }
  } catch (error) {
    console.error("Error al editar el producto:", error);
    throw error;
  } finally {
    mostrarProductos();
  }
};

export const eliminarProducto = async (id) => {
  const respuesta = await Swal.fire({
    title: 'Eliminar Producto?',
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    cancelButtonText: 'Cancelar',
    allowOutsideClick: false,
  });

  if (respuesta.isConfirmed) {
    try {
      await fetch(`api/Producto/Eliminar/${id}`, {
        method: 'DELETE',
      });
    } catch (error) {
      console.error("Error al eliminar el producto:", error);
      throw error;
    } finally {
      mostrarProductos();
    }
  }
};
