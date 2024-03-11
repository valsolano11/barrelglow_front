import '../MenuLateralAccesorios/MenuLateralAccesorios.css'
import { useState } from 'react';
import { FaBars } from 'react-icons/fa';

function MenuLateralProductos() {
  // Estado para controlar la visibilidad del menú
  const [menuVisible, setMenuVisible] = useState(false);

  // Función para alternar la visibilidad del menú
  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };
  return (
    <div>
      <div className="menu-accesorios">
        <div className="accesorios-menu">
          {/* Ícono de barras con función de alternar menú */}
          <div className='informacion-cate'>
            <a>
              <p >
                <FaBars onClick={toggleMenu} className='menu-categorias' />
                <span className="categorias-text">Categorias</span>
              </p>
            </a>
          </div>
          {/* Lista de opciones del menú, se muestra si menuVisible es true */}
          {menuVisible && (
            <ul className="accesorio-informacio">
              <a to="" className='todo-categoria'>
                <li>Todo</li>
              </a>
              <a>
                <li>Parrillas</li>
              </a>
              <a>
                <li>Barril Grande</li>
              </a>
              <a>
                <li>Barril Mediano</li>
              </a>
              <a>
                <li>Barril Pequeño</li>
              </a>
            </ul>
          )}
        </div>
      </div>
    </div>
  )
}

export default MenuLateralProductos;