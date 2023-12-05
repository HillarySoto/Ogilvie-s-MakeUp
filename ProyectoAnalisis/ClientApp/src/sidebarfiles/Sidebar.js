// Sidebar.js

import "./css/styles.css"
import "../styles/css/custom.css"
import React, { useState } from 'react';
import classNames from 'classnames';
import { useNavigate } from "react-router-dom";

const Sidebar = ({ rol, logout}) => {

  const navigate = useNavigate();
  const [style, setStyle] = useState("navbar-nav bg-gradient-primary sidebar sidebar-dark accordion");
  const [menuItems, setMenuItems] = useState({
      clients: false,
      categories: false, //--> categories lo estan usando en el item pedidos ¿por qué?
      providers: false,
      products: false,
      inventory: false,
      orders: false,
      shipments: false,
      returns: false,
      promotions: false,
      support: false,
      payments: false,
      categorias: false,
      shoppingCart: false
  });

  //despliega o reduce el sidebar
  const changeStyle = () => {
    if (style == "navbar-nav bg-gradient-primary sidebar sidebar-dark accordion") {
      setStyle("navbar-nav bg-gradient-primary sidebar sidebar-dark accordion toggled");
    }
    else {
      setStyle("navbar-nav bg-gradient-primary sidebar sidebar-dark accordion")
    }
  }

  const handleMenuToggle = (menuItem) => {
    setMenuItems((prevMenuItems) => ({
      ...prevMenuItems,
      [menuItem]: !prevMenuItems[menuItem], //muestra u oculta el Nav Menu correspondiente
    }));
  };




  return (
    <ul className={style} id="accordionSidebar">
      {/* Sidebar - Brand */}
      <a className="sidebar-brand d-flex align-items-center justify-content-center" href="#">
        <div className="sidebar-brand-icon rotate-n-15">
          <i className="fas fa-laugh-wink"></i>
        </div>
        <div className="sidebar-brand-text mx-3">Ogilvie´s MakeUp</div>
      </a>

      {/* Divider */}
      <hr className="sidebar-divider my-0" />
      <li className="nav-item">
        <a className="nav-link" onClick={() => {
          logout();
          navigate("/");
        }}>
          <i class="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400"></i>
          Cerrar Sesión
        </a>
      </li>

      {/* Nav Item Productos - Productos Collapse Menu *****************************/}
      {rol === "Admin" && (
        <li className="nav-item">
          <a
            className="nav-link"
            onClick={() => handleMenuToggle('products')}
            aria-expanded={menuItems.products ? 'true' : 'false'}
            aria-controls="collapseProducts"
          >
            <i className="fas fa-fw fa-folder"></i>
            <span>Productos</span>
          </a>
          <div
            id="collapseSupport"
            className={`collapse ${menuItems.products ? 'show' : ''}`}
            aria-labelledby="headingProducts"
          >
            <div className="bg-white py-2 collapse-inner rounded">
              <a className="collapse-item" onClick={() => navigate('/productos')}>
                Administrar Productos            </a>
            </div>

          </div>
        </li>
      )}


          {/* Nav Item Inventario - Categorías Collapse Menu ************************/}
          <li className="nav-item">
              <a
                  className="nav-link"
                  onClick={() => handleMenuToggle('inventory')}
                  aria-expanded={menuItems.inventory ? 'true' : 'false'}
                  aria-controls="collapseCategories"
              >
                  <i className="fas fa-fw fa-folder"></i>
                  <span>Inventario</span>
              </a>
              <div
                  id="collapseCategories"
                  className={`collapse ${menuItems.inventory ? 'show' : ''}`}
                  aria-labelledby="headingCategories"
              >
                  <div className="bg-white py-2 collapse-inner rounded">
                      <a className="collapse-item" onClick={() => navigate('/inventario')}>
                          Administrar Inventario
                      </a>
                  </div>
              </div>
          </li>


      {/* Nav Item Proveedores - Proveedores Collapse Menu *****************************/}
      {rol === "Admin" && (
        <li className="nav-item">
          <a
            className="nav-link"
            onClick={() => handleMenuToggle('providers')}
            aria-expanded={menuItems.providers ? 'true' : 'false'}
            aria-controls="collapseProviders"
          >
            <i className="fas fa-fw fa-folder"></i>
            <span>Proveeduría</span>
          </a>
          <div
            id="collapseSupport"
            className={`collapse ${menuItems.providers ? 'show' : ''}`}
            aria-labelledby="headingProviders"
          >
            <div className="bg-white py-2 collapse-inner rounded">
              <a className="collapse-item" onClick={() => navigate('/proveedores')}>
                Administrar Proveedores            </a>


            </div>

          </div>
        </li>

      )}

      {/* Nav Item CLIENTES - Categorías Collapse Menu ************************/}
      {rol === "Admin" && (
        <li className="nav-item">
          <a
            className="nav-link"
            onClick={() => handleMenuToggle('clients')}
            aria-expanded={menuItems.clients ? 'true' : 'false'}
            aria-controls="collapseCategories"
          >
            <i className="fas fa-fw fa-folder"></i>
            <span>Clientes</span>
          </a>
          <div
            id="collapseCategories"
            className={`collapse ${menuItems.clients ? 'show' : ''}`}
            aria-labelledby="headingCategories"
          >
            <div className="bg-white py-2 collapse-inner rounded">
              <a className="collapse-item" onClick={() => navigate('/clientes')}>
                Administrar Clientes
              </a>
            </div>
          </div>
        </li>
      )}

          {/* Nav Item Pedidos - Categorías Collapse Menu ************************/}
          <li className="nav-item">
              <a
                  className="nav-link"
                  onClick={() => handleMenuToggle('orders')}
                  aria-expanded={menuItems.orders ? 'true' : 'false'}
                  aria-controls="collapseCategories"
              >
                  <i className="fas fa-fw fa-folder"></i>
                  <span>Pedidos</span>
              </a>
              <div
                  id="collapseCategories"
                  className={`collapse ${menuItems.orders ? 'show' : ''}`}
                  aria-labelledby="headingCategories"
              >
                  <div className="bg-white py-2 collapse-inner rounded">
                      <a className="collapse-item" onClick={() => navigate('/pedido')}>
                          Administrar Pedidos
                      </a>
                  </div>
              </div>
          </li>



          {/* Nav Item Carrito - Categorías Collapse Menu ************************/}
          <li className="nav-item">
              <a
                  className="nav-link"
                  onClick={() => handleMenuToggle('shoppingCart')}
                  aria-expanded={menuItems.shoppingCart ? 'true' : 'false'}
                  aria-controls="collapseCategories"
              >
                  <i className="fas fa-fw fa-folder"></i>
                  <span>Carrito</span>
              </a>
              <div
                  id="collapseCategories"
                  className={`collapse ${menuItems.shoppingCart ? 'show' : ''}`}
                  aria-labelledby="headingCategories"
              >
                  <div className="bg-white py-2 collapse-inner rounded">
                      <a className="collapse-item" onClick={() => navigate('/carrito')}>
                          Ver carrito
                      </a>
                  </div>
              </div>
          </li>


      {/* Nav Item Envios - Proveedores Collapse Menu *************************************/}
      {rol === "Admin" && (
        <li className="nav-item">
          <a
            className="nav-link"
            onClick={() => handleMenuToggle('shipments')}
            aria-expanded={menuItems.shipments ? 'true' : 'false'}
            aria-controls="collapseShipments"
          >
            <i className="fas fa-fw fa-folder"></i>
            <span>Envios</span>
          </a>
          <div
            id="collapseShipments"
            className={`collapse ${menuItems.shipments ? 'show' : ''}`}
            aria-labelledby="headingShipments"
          >
            <div className="bg-white py-2 collapse-inner rounded">
              <a className="collapse-item" onClick={() => navigate('/envios')}>
                Lista de envios
              </a>
              {/* ... (other items) */}
            </div>
          </div>
        </li>
      )}


      {/* Nav Item Atencion al Cliente - Proveedores Collapse Menu *****************************/}
      {rol === "Admin" && (
        <li className="nav-item">
          <a
            className="nav-link"
            onClick={() => handleMenuToggle('support')}
            aria-expanded={menuItems.support ? 'true' : 'false'}
            aria-controls="collapseProviders"
          >
            <i className="fas fa-fw fa-folder"></i>
            <span>Atencion al cliente</span>
          </a>
          <div
            id="collapseSupport"
            className={`collapse ${menuItems.support ? 'show' : ''}`}
            aria-labelledby="headingSupports"
          >
            <div className="bg-white py-2 collapse-inner rounded">
              <a className="collapse-item" onClick={() => navigate('/formulario-consulta')}>
                Crear Consultas
              </a>
              <a className="collapse-item" onClick={() => navigate('/consultas')}>
                Ver consultas
              </a>
              {/* ... (other items) */}
            </div>

          </div>
        </li>

      )}

      {/* Nav Item Atencion al Cliente - Proveedores Collapse Menu *****************************/}
      {rol === "Admin" && (
        <li className="nav-item">
          <a
            className="nav-link"
            onClick={() => handleMenuToggle('payments')}
            aria-expanded={menuItems.payments ? 'true' : 'false'}
            aria-controls="collapseProviders"
          >
            <i className="fas fa-fw fa-folder"></i>
            <span>Registro de Pagos</span>
          </a>
          <div
            id="collapseSupport"
            className={`collapse ${menuItems.payments ? 'show' : ''}`}
            aria-labelledby="headingSupports"
          >
            <div className="bg-white py-2 collapse-inner rounded">
              <a className="collapse-item" onClick={() => navigate('/pagos')}>
                Administrar Pagos
              </a>
            </div>

          </div>
        </li>

      )}

      {rol === "Cliente" && (
        <li className="nav-item">
          <a
            className="nav-link"
            onClick={() => handleMenuToggle('categorias')}
            aria-expanded={menuItems.categorias ? 'true' : 'false'}
            aria-controls="collapseCategorias"
          >
            <i className="fas fa-fw fa-folder"></i>
            <span>Categorias</span>
          </a>
          <div
            id="collapseSupport"
            className={`collapse ${menuItems.categorias ? 'show' : ''}`}
            aria-labelledby="headingSupports"
          >
            <div className="bg-white py-2 collapse-inner rounded">
              <a className="collapse-item" onClick={() => navigate('/vistaclientes')}> {/*añadir rutas de productos segun categorias*/}
                Rostro
              </a>
              <a className="collapse-item" onClick={() => navigate('/#')}> {/*añadir rutas de productos segun categorias*/}
                Cejas
              </a>
            </div>

          </div>
        </li>
      )}
      {/*ToggleButton */}
      <div class="text-center d-none d-md-inline">
        <button class="rounded-circle border-0" id="sidebarToggle" onClick={changeStyle}></button>
      </div>
    </ul>
  );
};

export default Sidebar