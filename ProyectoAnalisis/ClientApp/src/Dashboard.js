import React, { useState } from 'react'

function Dashboard() {
    const [style, setStyle] = useState("navbar-nav bg-gradient-primary sidebar sidebar-dark accordion");

    const changestyle = () => {
        if(style === "navbar-nav bg-gradient-primary sidebar sidebar-dark accordion"){
            setStyle("navbar-nav bg-gradient-primary sidebar sidebar-dark accordion toggled");
        }else{
            setStyle("navbar-nav bg-gradient-primary sidebar sidebar-dark accordion");
        }
    }

    return (
        <div>
            <body id="page-top">

                {/* <!-- Page Wrapper --> */}
                <div id="wrapper">

                    {/* <!-- Sidebar --> *******************************/}
                    <ul className={style} id="accordionSidebar">

                        {/*  <!-- Sidebar - Brand --> */}
                        <a className="sidebar-brand d-flex align-items-center justify-content-center" href="index.html">
                            <div className="sidebar-brand-icon rotate-n-15">
                                <i className="fas fa-laugh-wink"></i>
                            </div>
                            <div className="sidebar-brand-text mx-3">Ogilvie´s MakeUp</div>
                        </a>

                        {/* <!-- Divider --> */}
                        <hr className="sidebar-divider my-0" />

                        <li class="nav-item">
                            <a class="nav-link" data-toggle="collapse" href="#collapseCategories" aria-expanded="false" aria-controls="collapseCategories">
                                <i class="fas fa-fw fa-folder"></i>
                                <span>Categorías</span>
                            </a>
                            <div id="collapseCategories" class="collapse" aria-labelledby="headingCategories" data-parent="#accordionSidebar">
                                <div class="bg-white py-2 collapse-inner rounded">
                                    <a class="collapse-item" href="category1.html">Categoría 1</a>
                                    <a class="collapse-item" href="category2.html">Categoría 2</a>
                                    <a class="collapse-item" href="category3.html">Categoría 3</a>
                                </div>
                            </div>
                        </li>

                        {/*  <!-- Nav Item - Proveedores Collapse Menu --> */}
                        <li class="nav-item">
                            <a class="nav-link" data-toggle="collapse" href="#collapseProviders" aria-expanded="false" aria-controls="collapseProviders">
                                <i class="fas fa-fw fa-folder"></i>
                                <span>Proveedores</span>
                            </a>
                            <div id="collapseProviders" class="collapse" aria-labelledby="headingProviders" data-parent="#accordionSidebar">
                                <div class="bg-white py-2 collapse-inner rounded">
                                    <a class="collapse-item" href="add-provider.html">Agregar proveedor</a>
                                    <a class="collapse-item" href="modify-provider.html">Modificar Proveedor</a>
                                    <a class="collapse-item" href="list-providers.html">Ver lista de proveedores</a>
                                    <a class="collapse-item" href="delete-provider.html">Eliminar proveedor</a>
                                </div>
                            </div>
                        </li>

                        {/* <!-- Nav Item - Producto Collapse Menu --> */}
                        <li class="nav-item">
                            <a class="nav-link" data-toggle="collapse" href="#collapseProducts" aria-expanded="false" aria-controls="collapseProducts">
                                <i class="fas fa-fw fa-folder"></i>
                                <span>Producto</span>
                            </a>
                            <div id="collapseProducts" class="collapse" aria-labelledby="headingProducts" data-parent="#accordionSidebar">
                                <div class="bg-white py-2 collapse-inner rounded">
                                    <a class="collapse-item" href="add-product.html">Agregar producto</a>
                                    <a class="collapse-item" href="modify-product.html">Modificar Producto</a>
                                    <a class="collapse-item" href="list-products.html">Ver lista de productos</a>
                                    <a class="collapse-item" href="delete-product.html">Eliminar producto</a>
                                </div>
                            </div>
                        </li>

                        {/*  <!-- Nav Item - Inventario Collapse Menu --> */}
                        <li class="nav-item">
                            <a class="nav-link" data-toggle="collapse" href="#collapseInventory" aria-expanded="false" aria-controls="collapseInventory">
                                <i class="fas fa-fw fa-folder"></i>
                                <span>Inventario</span>
                            </a>
                            <div id="collapseInventory" class="collapse" aria-labelledby="headingInventory" data-parent="#accordionSidebar">
                                <div class="bg-white py-2 collapse-inner rounded">
                                    <a class="collapse-item" href="add-inventory.html">Agregar inventario</a>
                                    <a class="collapse-item" href="modify-inventory.html">Modificar Inventario</a>
                                    <a class="collapse-item" href="list-inventory.html">Ver inventario</a>
                                    <a class="collapse-item" href="delete-inventory.html">Eliminar inventario</a>
                                </div>
                            </div>
                        </li>

                        {/*  <!-- Nav Item - Pedidos Collapse Menu --> */}
                        <li class="nav-item">
                            <a class="nav-link" data-toggle="collapse" href="#collapseOrders" aria-expanded="false" aria-controls="collapseOrders">
                                <i class="fas fa-fw fa-folder"></i>
                                <span>Pedidos</span>
                            </a>
                            <div id="collapseOrders" class="collapse" aria-labelledby="headingOrders" data-parent="#accordionSidebar">
                                <div class="bg-white py-2 collapse-inner rounded">
                                    <a class="collapse-item" href="create-order.html">Crear pedido</a>
                                    <a class="collapse-item" href="manage-orders.html">Gestionar Pedidos</a>
                                    <a class="collapse-item" href="order-history.html">Historial de Pedidos</a>
                                </div>
                            </div>
                        </li>

                        {/*  <!-- Nav Item - Envíos Collapse Menu --> */}
                        <li class="nav-item">
                            <a class="nav-link" data-toggle="collapse" href="#collapseShipments" aria-expanded="false" aria-controls="collapseShipments">
                                <i class="fas fa-fw fa-folder"></i>
                                <span>Envíos</span>
                            </a>
                            <div id="collapseShipments" class="collapse" aria-labelledby="headingShipments" data-parent="#accordionSidebar">
                                <div class="bg-white py-2 collapse-inner rounded">
                                    <a class="collapse-item" href="ship-order.html">Enviar Pedido</a>
                                    <a class="collapse-item" href="track-shipments.html">Seguimiento de Envíos</a>
                                    <a class="collapse-item" href="shipment-history.html">Historial de Envíos</a>
                                </div>
                            </div>
                        </li>

                        {/* <!-- Nav Item - Devoluciones Collapse Menu --> */}
                        <li class="nav-item">
                            <a class="nav-link" data-toggle="collapse" href="#collapseReturns" aria-expanded="false" aria-controls="collapseReturns">
                                <i class="fas fa-fw fa-folder"></i>
                                <span>Devoluciones</span>
                            </a>
                            <div id="collapseReturns" class="collapse" aria-labelledby="headingReturns" data-parent="#accordionSidebar">
                                <div class="bg-white py-2 collapse-inner rounded">
                                    <a class="collapse-item" href="initiate-return.html">Iniciar Devolución</a>
                                    <a class="collapse-item" href="manage-returns.html">Gestionar Devoluciones</a>
                                    <a class="collapse-item" href="return-history.html">Historial de Devoluciones</a>
                                </div>
                            </div>
                        </li>

                        {/*  <!-- Nav Item - Promociones Collapse Menu --> */}
                        <li class="nav-item">
                            <a class="nav-link" data-toggle="collapse" href="#collapsePromotions" aria-expanded="false" aria-controls="collapsePromotions">
                                <i class="fas fa-fw fa-folder"></i>
                                <span>Promociones</span>
                            </a>
                            <div id="collapsePromotions" class="collapse" aria-labelledby="headingPromotions" data-parent="#accordionSidebar">
                                <div class="bg-white py-2 collapse-inner rounded">
                                    <a class="collapse-item" href="create-promotion.html">Crear Promoción</a>
                                    <a class="collapse-item" href="manage-promotions.html">Gestionar Promociones</a>
                                    <a class="collapse-item" href="promotion-history.html">Historial de Promociones</a>
                                </div>
                            </div>
                        </li>

                        {/*  <!-- Nav Item - Atención Collapse Menu --> */}
                        <li class="nav-item">
                            <a class="nav-link" data-toggle="collapse" href="#collapseSupport" aria-expanded="false" aria-controls="collapseSupport">
                                <i class="fas fa-fw fa-folder"></i>
                                <span>Atención</span>
                            </a>
                            <div id="collapseSupport" class="collapse" aria-labelledby="headingSupport" data-parent="#accordionSidebar">
                                <div class="bg-white py-2 collapse-inner rounded">
                                    <a class="collapse-item" href="contact-support.html">Contactar Soporte</a>
                                    <a class="collapse-item" href="faq.html">Preguntas Frecuentes</a>
                                </div>
                            </div>
                        </li>

                        {/* <!-- Divider --> */}
                        <hr class="sidebar-divider d-none d-md-block" />

                        {/* <!-- Sidebar Toggler (Sidebar) --> */}
                        <div class="text-center d-none d-md-inline">
                            <button class="rounded-circle border-0" id="sidebarToggle" onClick={changestyle}></button>
                        </div>


                    </ul>
                    {/*  <!-- End of Sidebar --> ***************************************************/}



                    {/* <!-- Content Wrapper --> */}
                    <div id="content-wrapper" className="d-flex flex-column">

                        {/*  <!-- Main Content --> */}
                        <div id="content">

                            {/*  <!-- Topbar --> */}
                            <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">

                                {/*  <!-- Topbar Navbar --> */}
                                <ul className="navbar-nav ml-auto">

                                    <div className="topbar-divider d-none d-sm-block"></div>

                                    {/* <!-- Nav Item - User Information --> */}
                                    <li className="nav-item dropdown no-arrow">
                                        <a className="nav-link dropdown-toggle" href="#" id="userDropdown" role="button"
                                            data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            <span className="mr-2 d-none d-lg-inline text-gray-600 small">Admin</span>
                                            <img className="img-profile rounded-circle"
                                                src="img/undraw_profile.svg" />
                                        </a>
                                        {/* <!-- Dropdown - User Information --> */}
                                        <div className="dropdown-menu dropdown-menu-right shadow animated--grow-in"
                                            aria-labelledby="userDropdown">

                                            <a className="dropdown-item" href="#" data-toggle="modal" data-target="#logoutModal">
                                                <i className="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400"></i>
                                                Logout
                                            </a>
                                        </div>
                                    </li>

                                </ul>

                            </nav>
                            {/* <!-- End of Topbar --> */}

                            {/* <!-- Begin Page Content --> */}
                            <div className="container-fluid">

                            </div>
                            {/* <!-- /.container-fluid --> */}

                        </div>
                        {/*  <!-- End of Main Content --> */}

                        {/*  <!-- Footer --> */}
                        <footer className="sticky-footer bg-white">
                            <div className="container my-auto">
                                <div className="copyright text-center my-auto">
                                    <span>Copyright &copy; Your Website 2021</span>
                                </div>
                            </div>
                        </footer>
                        {/*   <!-- End of Footer --> */}

                    </div>
                    {/*   <!-- End of Content Wrapper --> */}

                </div>
                {/* <!-- End of Page Wrapper --> */}

                {/* <!-- Scroll to Top Button--> */}
                <a className="scroll-to-top rounded" href="#page-top">
                    <i className="fas fa-angle-up"></i>
                </a>

            </body>
        </div>
    )
}

export default Dashboard;