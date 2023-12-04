import React, { useEffect, useState } from "react";
import { Container, Row, Col, Button } from "reactstrap";
import ListaProveedor from "../components/ListaProveedor";
import FormularioProveedor from "../components/FormularioProveedor";
import { mostrarProveedores, guardarProveedor, editarProveedor, eliminarProveedor } from "../services/ProveedorServicio";

const ProveedorPage = () => {
  const [proveedores, setProveedores] = useState([]);
  const [update, setUpdate] = useState(null); // Almacena el objeto proveedor que se va a editar
  const [showForm, setShowForm] = useState(false);

  // Consume el servicio mostrarProveedores
  const getProveedores = async () => {
    const data = await mostrarProveedores(); // Llama al servicio
    setProveedores(data);
  };

  // Actualiza proveedor
  const updProveedor = async (proveedor) => {
    const rs = await editarProveedor(proveedor.id, proveedor);
    if (rs) {
      getProveedores();
    }
    setShowForm(!showForm);
    setUpdate(null);
  };

  // Elimina proveedor
  const deleteProveedor = async (id) => {
    const result = await eliminarProveedor(id);
    if (result) {
      getProveedores();
    }
  };

  // Actualiza el estado de proveedores (lista de proveedores)
  useEffect(() => {
    getProveedores();
  }, [proveedores]);

  return (
    <Container>
      <Row className="mt-5">
        <Col sm="12">
          <div>
            {showForm ? (
              <FormularioProveedor
                mostrarModal={showForm}
                setMostrarModal={setShowForm}
                guardarProveedor={guardarProveedor}
                editar={update}
                setEditar={setUpdate}
                editarProveedor={updProveedor}
              />
            ) : (
              <>
                <div className="d-flex justify-content-between mb-5">
                  <h2>Registro de proveedores</h2>
                  <Button
                    size="sm-13"
                    color="success"
                    onClick={() => setShowForm(!showForm)}
                    style={{ marginRight: "55px" }}
                  >
                    Registrar Proveedor
                  </Button>
                </div>
                <ListaProveedor
                  data={proveedores}
                  setUpdate={setUpdate}
                  showForm={showForm}
                  setShowForm={setShowForm}
                  deleteProveedor={deleteProveedor}
                />
              </>
            )}
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default ProveedorPage;