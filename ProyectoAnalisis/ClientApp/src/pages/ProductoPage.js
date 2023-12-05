import React, { useEffect, useState } from "react";
import { Container, Row, Col, Button } from "reactstrap";
import ListaProducto from "../components/ListaProductoAdmin";
import FormularioProducto from "../components/FormularioProducto";
import { mostrarProductos, guardarProducto, editarProducto, eliminarProducto } from "../services/ProductoServicio";

const ProductoPage = () => {
  const [productos, setProductos] = useState([]);
  const [editar, setEditar] = useState(null);
  const [showForm, setShowForm] = useState(false);

  // Consume el servicio mostrarProductos
  const getProductos = async () => {
    const data = await mostrarProductos();
    setProductos(data);
  };

  // Actualiza producto
  const updProducto = async (producto) => {
    const rs = await editarProducto(producto, setShowForm);  // Corregir aquí
    if (rs) {
      getProductos();
    }
    setEditar(null);
  };

// Elimina producto
const handleEliminarProducto = async (id) => {
  await eliminarProducto(id);
  getProductos();  // Actualiza la lista después de eliminar
};



  // Actualiza el estado de productos (lista de productos)
  useEffect(() => {
    getProductos();
  }, []);

  return (
    <Container>
      <Row className="mt-5">
        <Col sm="12">
          <div>
            {showForm ? (
              <FormularioProducto
                mostrarModal={showForm}
                setMostrarModal={setShowForm}
                guardarProducto={guardarProducto}
                editar={editar}
                setEditar={setEditar}
                editarProducto={updProducto}
                mostrarProductos={getProductos}
              />
            ) : (
              <>
                <div className="d-flex justify-content-between mb-5">
                  <h2>Registro de productos</h2>
                  <Button
                    size="sm-13"
                    color="success"
                    onClick={() => setShowForm(true)}
                    style={{ marginRight: "55px" }}
                  >
                    Registrar Producto
                  </Button>
                </div>
                <ListaProducto
                  data={productos}
                  setEditar={setEditar}
                  showForm={showForm}
                  setMostrarModal={setShowForm}
                  eliminarProducto={handleEliminarProducto}
                />
              </>
            )}
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default ProductoPage;
