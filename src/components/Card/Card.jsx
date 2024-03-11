/* eslint-disable react/prop-types */
import "./CardStyle.css";
import { Link } from "react-router-dom";

function Card({ producto }) {
  if (!producto) {
    return <div>Error: No se encontraron datos del producto.</div>;
  }

  const { nombre, descripcion, imagen, precio } = producto;

  return (
    <div className="Card">
      <div className="container-img">
        <img
          src={`https://barrelglow-api.onrender.com/imagen/${producto.image}`}
          alt="upload"
        />
        <div className="overlay">
          <button className="button-overlay">
            <Link to="/vermas">Ver más</Link>
          </button>
        </div>
      </div>
      <div className="body-card">
        <h3 className="tittle-card">{nombre}</h3>
        <p className="description-card">Descripción: </p>
        <ul>
          <li>{descripcion}</li>
          <li className="price">${precio}</li>
        </ul>
        <div className="button-card">
          <button className="button-card-add">Añadir al carrito</button>
        </div>
      </div>
    </div>
  );
}

export default Card;
