import { useState } from "react";
import { FaTrashAlt } from "react-icons/fa";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import "./CarritoCompras.css";
import Accesorios from "../../assets/img/Accesorios.png";

function CarritoCompras() {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      titulo: "Mini Asador En Acero Inoxidable",
      capacidad: "4 KG todo porcionado",
      diametro: 19,
      altura: "27 cm",
      precio: 1239232,
      cantidad: 1,
    },
  ]);

  const ivaPorcentaje = 0.16;

  const handleCantidadChange = (itemId, newCantidad) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === itemId ? { ...item, cantidad: newCantidad } : item
      )
    );
  };

  const handleEliminarProducto = (itemId) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== itemId));
  };

  return (
    <div className="container">
      <Navbar />
      <div className="carrito-container">
        <div className="products-cart">
          <h3>Carrito</h3>
          {cartItems.map((item) => (
            <div key={item.id} className="item-card">
              <figure>
                <img className="item-cart-img" src={Accesorios} alt="" />
              </figure>
              <div className="description-item">
                <div className="items-descri">
                  <h4 className="name-item">{item.titulo}</h4>
                  <ul className="list-description-item">
                    <li>Capacidad: {item.capacidad}</li>
                    <li>Diametro: {item.diametro}</li>
                    <li>Altura: {item.altura}</li>
                  </ul>
                  <div className="cantidad-item">
                    <label className="cant-item">Cantidad</label>
                    <select
                      name={`cantidad-${item.id}`}
                      id={`cantidad-${item.id}`}
                      value={item.cantidad}
                      onChange={(e) =>
                        handleCantidadChange(item.id, parseInt(e.target.value))
                      }
                    >
                      {[1, 2, 3, 4, 5].map((cantidad) => (
                        <option key={cantidad} value={cantidad}>
                          {cantidad}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="eliminar-item">
                    <div onClick={() => handleEliminarProducto(item.id)}>
                      <FaTrashAlt  className="icon-trash" />
                    </div>
                  </div>
                </div>
                <div className="price-item">
                  <span>{`$${item.precio.toLocaleString(undefined, {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2,
                  })}`}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="sale-cart">
          <h3>Resumen</h3>
          <div className="resumen-item">
            <span>Subtotal:</span>
            <span>
              $
              {cartItems
                .reduce(
                  (total, item) =>
                    total + item.cantidad * parseFloat(item.precio),
                  0
                )
                .toLocaleString(undefined, {
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2,
                })}
            </span>
          </div>
          <div className="resumen-item">
            <span>IVA ({(ivaPorcentaje * 100).toFixed(0)}%):</span>
            <span>
              $
              {(
                cartItems.reduce(
                  (total, item) =>
                    total + item.cantidad * parseFloat(item.precio),
                  0
                ) * ivaPorcentaje
              ).toLocaleString(undefined, {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              })}
            </span>
          </div>
          <div className="resumen-item-total">
            <span>Total:</span>
            <span>
              $
              {(
                cartItems.reduce(
                  (total, item) =>
                    total + item.cantidad * parseFloat(item.precio),
                  0
                ) +
                cartItems.reduce(
                  (total, item) =>
                    total + item.cantidad * parseFloat(item.precio),
                  0
                ) *
                  ivaPorcentaje
              ).toLocaleString(undefined, {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              })}
            </span>
          </div>
          <button className="continuar-btn">Continuar al pago</button>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default CarritoCompras;
