import React, { useEffect, useState } from "react";
import { Container, Row, Col, Button } from "reactstrap";
import ListaProducto from "../components/ListaProducto";
import FormularioProducto from "../components/FormularioProducto";
import { mostrarProductos, guardarProducto, editarProducto, eliminarProducto } from "../services/ProductoServicio";

const ProductoPage = () => {
  const [productos, setProductos] = useState([]);
  const [update, setUpdate] = useState(null);
  const [showForm, setShowForm] = useState(false);

  // Consume el servicio mostrarProductos
  const getProductos = async () => {
    const data = await mostrarProductos();
    setProductos(data);
  };

  // Actualiza producto
  const updProducto = async (producto) => {
    const rs = await editarProducto(producto.id, producto);
    if (rs) {
      getProductos();
    }
    setShowForm(!showForm);
    setUpdate(null);
  };

  // Elimina producto
  const deleteProducto = async (id) => {
    const result = await eliminarProducto(id);
    if (result) {
      getProductos();
    }
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
                editar={update}
                setEditar={setUpdate}
                editarProducto={updProducto}
              />
            ) : (
              <>
                <div className="d-flex justify-content-between mb-5">
                  <h2>Registro de productos</h2>
                  <Button
                    size="sm-13"
                    color="success"
                    onClick={() => setShowForm(!showForm)}
                    style={{ marginRight: "55px" }}
                  >
                    Registrar Producto
                  </Button>
                </div>
                <ListaProducto
                  data={productos}
                  setUpdate={setUpdate}
                  showForm={showForm}
                  setShowForm={setShowForm}
                  deleteProducto={deleteProducto}
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
