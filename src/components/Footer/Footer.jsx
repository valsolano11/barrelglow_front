import "./FooterStyle.css";
import { Link } from "react-router-dom";
import LogoBlanco from "../../assets/img/LogoBlanco.png";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

function Footer() {
  const footerDetails = {
    year: new Date().getFullYear(),
    nameproject: "GlampZone",
  };
  return (
    <footer>
      {/* Terminos y condiciones de la izquierda */}

      <div className="footer-left">
        <p>
          @{footerDetails.year} {footerDetails.nameproject}, Project
        </p>
        <p className="separator">|</p>
        <p>
          <Link to="">Términos y Condiciones</Link>
        </p>
      </div>

      {/* Logo del centro */}

      <img src={LogoBlanco} alt="Logo" className="logo" />

      {/* iconos de la derecha */}

      <div className="footer-right">
        <FaFacebook className="social-icon" />
        <FaInstagram className="social-icon" />
        <FaTwitter className="social-icon" />
      </div>
    </footer>
  );
}

export default Footer;
