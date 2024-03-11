import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import Login from "./pages/LoginPage/Login";
import Register from "./pages/RegisterPage/Register";
import Producto from "./pages/Productos/Producto";
import AccesoriosPage from "./pages/AccesoriosPage/AccesoriosPage";
import ListaProductos from "./pages/Admin/ListaProductos/ListaProductos";
import ListaUsuarios from "./pages/Admin/ListaUsuarios/ListaUsuarios";
import PerfilPage from "./pages/Admin/PerfilPage/PerfilPage";
import ListaVentas from "./pages/Admin/ListaVentas/ListaVentas";
import UsuarioEspecifico from "./pages/Admin/UsuarioEspecifico/UsuarioEspecifico";

import Contacto from "./pages/ContactoPage/ContactoPage";

import ProductoDetalle from "./pages/Admin/ProductoDetalle/ProductoDetalle";

import VerMas from "./pages/VerMas/VerMas";
import ImagenDetalle from "./pages/Admin/ImagenDetalle/ImagenDetalle";
import DetallesVentas from "./pages/Admin/DetallesVentas/DetallesVentas";
import ListaProveedores from "./pages/Admin/ListaProveedores/ListaProveedores";

import CarritoCompras from "./components/CarritoCompras/CarritoCompras";
import Contraseña from "./pages/Contraseña/Contraseña";

/*HECHO MAYA 10/3/2024  1PM*/
import LoginPay from "./pages/Pagar/PagarLogin/LoginPay";
import PagarUno from "./pages/Pagar/PagarUno/PagarUno";
import PagarDos from "./pages/Pagar/PagarDos/PagarDos";
import PagarTres from "./pages/Pagar/PagarTres/PagarTres";
import Factura from "./pages/Pagar/PagarFactura/Factura";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/producto" element={<Producto />} />
        <Route path="/accesorios" element={<AccesoriosPage />} />{" "}
        {/* Hasta acá todo esta bien en estilo y responsive */}
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/carritoCompras" element={<CarritoCompras />} />
        {/*HECHO MAYA 10/3/2024 1PM*/}
        <Route path="/pagarlogin" element={<LoginPay />} />
        <Route path="/pagaruno" element={<PagarUno />} />
        <Route path="/pagardos" element={<PagarDos />} />
        <Route path="/pagartres" element={<PagarTres />} />
        <Route path="/factura" element={<Factura />} />
        <Route path="/listaproductos" element={<ListaProductos />} />
        <Route path="/listausuarios" element={<ListaUsuarios />} />
        <Route path="/listaproveedores" element={<ListaProveedores />} />
        <Route path="/perfilpage" element={<PerfilPage />} />
        <Route path="/listaventas" element={<ListaVentas />} />
        <Route path="usuarioespecifico" element={<UsuarioEspecifico />} />
        <Route path="/productodetalle" element={<ProductoDetalle />} />
        <Route path="/vermas" element={<VerMas />} />
        <Route path="/imagendetalle" element={<ImagenDetalle />} />
        <Route path="/detallesventas" element={<DetallesVentas />} />
        <Route path="/contraseña" element={<Contraseña />} />
      </Routes>
    </Router>
  );
}

export default App;
