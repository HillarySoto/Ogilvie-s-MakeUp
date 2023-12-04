import Swal from "sweetalert2";

export const mostrarProveedores = async () => {
  try {
    const data = await fetch("/api/Proveedor/lista");
    return data.json();
  } catch (error) {
    console.error("Error al obtener la lista de proveedores:", error);
    throw error;
  }
};

export const guardarProveedor = async (proveedor, setMostrarModalProveedor) => {
  try {
    await fetch("api/Proveedor/Guardar", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
      body: JSON.stringify(proveedor),
    });

    setMostrarModalProveedor(false);
  } catch (error) {
    console.error("Error al guardar el proveedor:", error);
    throw error;
  } finally {
    mostrarProveedores();
  }
};

export const editarProveedor = async (proveedor, setMostrarModalProveedor) => {
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
      await fetch("api/Proveedor/Editar", {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json;charset=utf-8',
        },
        body: JSON.stringify(proveedor),
      });

      setMostrarModalProveedor(false);
    }
  } catch (error) {
    console.error("Error al editar el proveedor:", error);
    throw error;
  } finally {
    mostrarProveedores();
  }
};

export const eliminarProveedor = async (id) => {
  const respuesta = await Swal.fire({
    title: 'Eliminar Proveedor?',
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    cancelButtonText: 'Cancelar',
    allowOutsideClick: false,
  });

  if (respuesta.isConfirmed) {
    try {
      await fetch(`api/Proveedor/Eliminar/${id}`, {
        method: 'DELETE',
      });
    } catch (error) {
      console.error("Error al eliminar el proveedor:", error);
      throw error;
    } finally {
      mostrarProveedores();
    }
  }
};