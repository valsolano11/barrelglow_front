import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { CiSearch, CiShoppingCart, CiUser } from "react-icons/ci";
import Logo from "../../assets/img/LogoBarrel.png";
import "./NavbarStyle.css";

function Navbar() {
  const [searchQuery, setSearchQuery] = useState("");
  const [showUserOptions, setShowUserOptions] = useState(false);
  const [isLoggedIn, setLoggedIn] = useState(false);
  const navigate = useNavigate();

  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      setLoggedIn(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleSearchInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSearchButtonClick = () => {
    console.log("Búsqueda:", searchQuery);
  };

  const toggleUserOptions = () => {
    setShowUserOptions(!showUserOptions);
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    setLoggedIn(false);
    navigate("/");
  };

  return (
    <nav className="navbar">
      <div className="logo-container">
        <Link to="/">
          <img className="logo-page" src={Logo} alt="Logo" />
        </Link>
      </div>

      <div className="menu-toggle" onClick={toggleMenu}>
        ☰
      </div>

      <div className={`list-navbar ${showMenu ? "show-menu" : ""}`}>
        <ul className="menu">
          <li className="menu-item">
            <Link to="/">Inicio</Link>
          </li>
          <li className="menu-item">
            <Link to="/producto">Productos</Link>
          </li>
          <li className="menu-item">
            <Link to="/accesorios">Accesorios</Link>
          </li>
          <li className="menu-item">
            <Link to="/contacto">Contacto</Link>
          </li>
        </ul>
      </div>

      <div className="search-container">
        <input
          type="text"
          placeholder="¿Qué necesitas encontrar?"
          className="search-input"
          value={searchQuery}
          onChange={handleSearchInputChange}
        />
        <button onClick={handleSearchButtonClick}>
          <CiSearch className="search-icon" />
        </button>
      </div>

      <div className="icons-container">
        <div className="container-car">
          <Link to="/carritoCompras"><CiShoppingCart className="icon-navbar" /></Link>
        </div>

        <div className="container-user" onClick={toggleUserOptions}>
          <CiUser className="icon-navbar" />
          {showUserOptions && (
            <div className="user-options">
              {isLoggedIn ? (
                <Link className="cerrar-Sesion" onClick={handleLogout}>
                  Cerrar Sesión
                </Link>
              ) : (
                <ul>
                  <li>
                    <Link to="/login">Iniciar Sesión</Link>
                  </li>
                  <li>
                    <Link to="/register">Registrarse</Link>
                  </li>
                </ul>
              )}
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
