import { useRef } from "react";
import Card from "../Card/Card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShippingFast,
  faShieldAlt,
  faCreditCard,
} from "@fortawesome/free-solid-svg-icons";
import "./MainStyle.css";
import imagenes from "../../assets/imagenes";
import { Link } from 'react-router-dom';

function Main() {
  const partTwoRef = useRef(null);

  const handleScrollToPartTwo = () => {
    const partTwoPosition = partTwoRef.current.offsetTop;
    const currentPosition = window.pageYOffset || document.documentElement.scrollTop;
    const distance = partTwoPosition - currentPosition;
    let steps = 50;
    const stepSize = distance / steps;
    const smoothScroll = () => {
      if (steps > 0) {
        window.scrollBy(0, stepSize);
        steps--;
        setTimeout(smoothScroll, 10);
      }
    };
    smoothScroll();
  };

  return (
    <div>
      <div className="part-one">
        <div className="tittle">
          <h1>BARRELGLOW</h1>
          <p>¡No hay nada más rico que una carnita asada!</p>
          <button className="button-part-one" onClick={handleScrollToPartTwo}>
            Más Información
          </button>
        </div>
        <div className="img-part-one">
          <img src={imagenes.Carne} alt="" />
        </div>
      </div>

      <div className="part-two" ref={partTwoRef}>
        <div className="tittle-part-two">
          <h1>BIENVENIDOS A NUESTRA TIENDA</h1>
          <p>¡ No te pierdas de nuestros fascinantes barriles !</p>
          <ul>
            <li>Libres de humo.</li>
            <li>Faciles de usar.</li>
            <li>La carne queda mucho mas rica.</li>
            <li>Acero inoxidable.</li>
          </ul>
        </div>
        <div className="img-part-two">
          <img src={imagenes.Barril} alt="" />
        </div>
      </div>

      <div className="part-three">
        <h1>LOS PRODUCTOS MAS VENDIDOS</h1>
        <div className="cards-body">
          <Card />
          <Card />
          <Card />
        </div>
        <div className="container-button">
          <button className="button-part-three"><Link to="/producto">Ver Más Productos</Link></button>
        </div>
      </div>

      <div className="part-four">
        <div className="icons-part-four">
          <div className="container-icons">
            <FontAwesomeIcon icon={faShippingFast} className="icon-homepage" />
            <h3>Envio GRATIS</h3>
            <p>Por tiempo limitado</p>
          </div>
          <div className="container-icons">
            <FontAwesomeIcon icon={faShieldAlt} className="icon-homepage" />
            <h3>Garantia</h3>
            <p>Tus pedidos con garantía</p>
          </div>
          <div className="container-icons">
            <FontAwesomeIcon icon={faCreditCard} className="icon-homepage" />
            <h3>Compras Seguras</h3>
            <p>SSL Cifrado 100%</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;