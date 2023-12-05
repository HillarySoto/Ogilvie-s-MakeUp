// Sidebar.js

import "./css/styles.css"
import React, { useState } from 'react';
import classNames from 'classnames';
import { useNavigate } from "react-router-dom";

const Sidebar = () => {
  const navigate = useNavigate()
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [menuItems, setMenuItems] = useState({
    clients: false,
    categories: false,
    providers: false,
    products: false,
    inventory: false,
    orders: false,
    shipments: false,
    returns: false,
    promotions: false,
    support: false,
  });

  const handleMenuToggle = (menuItem) => {
    setMenuItems((prevMenuItems) => ({
      ...prevMenuItems,
      [menuItem]: !prevMenuItems[menuItem], //muestra u oculta el Nav Menu correspondiente
    }));
  };




  return (
    <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">
      {/* Sidebar - Brand */}
      <a className="sidebar-brand d-flex align-items-center justify-content-center" href="#">
        <div className="sidebar-brand-icon rotate-n-15">
          <i className="fas fa-laugh-wink"></i>
        </div>
        <div className="sidebar-brand-text mx-3">Ogilvie´s MakeUp</div>
      </a>

      {/* Divider */}
      <hr className="sidebar-divider my-0" />

      {/* Nav Item Proveedores - Proveedores Collapse Menu *****************************/}
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




      {/* Nav Item CLIENTES - Categorías Collapse Menu ************************/}
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
      {/* Nav Item PEDIDOS - Categorías Collapse Menu *****************************/}
      <li className="nav-item">
        <a
          className="nav-link"
          onClick={() => handleMenuToggle('categories')}
          aria-expanded={menuItems.categories ? 'true' : 'false'}
          aria-controls="collapseCategories"
        >
          <i className="fas fa-fw fa-folder"></i>
          <span>Pedidos</span>
        </a>
        <div
          id="collapseCategories"
          className={`collapse ${menuItems.categories ? 'show' : ''}`}
          aria-labelledby="headingCategories"
        >
          <div className="bg-white py-2 collapse-inner rounded">
            <a className="collapse-item" onClick={() => navigate('/')}>
              Lista pedidos
            </a>
            {/* ... (other items) */}
          </div>
        </div>
      </li>

      {/* Nav Item Envios - Proveedores Collapse Menu *************************************/}
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

      {/* Nav Item Promociones - Promociones Collapse Menu *************************************/}
      <li className="nav-item">
        <a
          className="nav-link"
          onClick={() => handleMenuToggle('shipments')}
          aria-expanded={menuItems.shipments ? 'true' : 'false'}
          aria-controls="collapseShipments"
        >
          <i className="fas fa-fw fa-folder"></i>
          <span>Promociones</span>
        </a>
        <div
          id="collapseShipments"
          className={`collapse ${menuItems.shipments ? 'show' : ''}`}
          aria-labelledby="headingShipments"
        >
          <div className="bg-white py-2 collapse-inner rounded">
            <a className="collapse-item" onClick={() => navigate('/promociones')}>
              Lista de promociones
            </a>
            {/* ... (other items) */}
          </div>
        </div>
      </li>


      {/* Nav Item Atencion al Cliente - Proveedores Collapse Menu *****************************/}
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

    




    </ul>
  );
};

export default Sidebar;