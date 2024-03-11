import './PerfilPage.css';
import MenuLateral from '../../../components/Admin/MenuLateral/MenuLateral';
import { FaRegEdit } from "react-icons/fa";
import { MdOutlineDeleteForever } from "react-icons/md";
import { Link } from "react-router-dom";
import  { useState } from "react";

function PerfilPage() {
  // Estado para almacenar la información ingresada
  const [userData, setUserData] = useState({
    username: "Mariana",
    correo: "orozcomariana802@gmail.com",
    telefono: "123456789",
    estado: "Activo",
    rol: "Cliente"
  });

  // Función para manejar cambios en los datos de usuario
  const handleUserDataChange = (field, value) => {
    setUserData({ ...userData, [field]: value });
  };

  return (
    <>
      <MenuLateral />
      <div className="edit-user">
        <div className="edit-card">
          <div className="left-user">
            <div className="icone-wrapper">
              <Link>
                <FaRegEdit className="edit-icon" />
              </Link>
            </div>
            <div className="icond-wrapper">
              <Link>
                <MdOutlineDeleteForever className="delete-icon" />
              </Link>
            </div>
          </div>

          <form className="perfil-form">
            <h1 className='titulo-perfil'>Juanito Rodriguez</h1>
            <div className="grupo-perfil">
              <div className="campo-perfil">
                <label htmlFor="username">Username</label>
                <p id="username" className="chiquito" onBlur={(e) => handleUserDataChange("username", e.target.innerText)}>{userData.username}</p>
              </div>
              <div className="campo-perfil">
                <label className='chiquito-2' htmlFor="correo">Correo</label>
                <p id="correo" className="chiquito-2" onBlur={(e) => handleUserDataChange("correo", e.target.innerText)}>{userData.correo}</p>
              </div>
            </div>
            <div className="grupo-perfil">
              <div className="campo-perfil">
                <label htmlFor="telefono">Teléfono</label>
                <p id="telefono" className="chiquito" onBlur={(e) => handleUserDataChange("telefono", e.target.innerText)}>{userData.telefono}</p>
              </div>
              <div className="campo-perfil">
                <label className='chiquito-2' htmlFor="estado">Estado</label>
                <p id="estado" className="chiquito-2" onBlur={(e) => handleUserDataChange("estado", e.target.innerText)}>{userData.estado}</p>
              </div>
            </div>
            <div className="campo-perfil">
              <label htmlFor="rol">Rol</label>
              <p id="rol" className='rol' onBlur={(e) => handleUserDataChange("rol", e.target.innerText)}>{userData.rol}</p>
            </div>
          </form>

        </div>
      </div>
    </>
  );
}

export default PerfilPage;