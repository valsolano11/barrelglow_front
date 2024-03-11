import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import imagenes from "../../assets/imagenes";
import "./Contacto.css";
import { MdOutlineEmail } from "react-icons/md";
import { BsTelephone } from "react-icons/bs";

function ContactoPage() {
  return (
    <>
      <Navbar />
      <div className="contacto-container">
        <div className="header">
          <img src={imagenes.Todo} alt="" />
          <h1>¿En que podemos ayudarte?</h1>
        </div>

        <div className="container-contacto">
          <div className="container-info">
            <div className="grupo1">
              <h1>
                {" "}
                <MdOutlineEmail className="icno-correo" />
                barrelglowcontact@gmail.com
              </h1>
            </div>
            <div className="grupo2">
              <h1>
                <MdOutlineEmail className="icno-correito" />
                servicioalclientebarrelglow@gmail.com
              </h1>
            </div>
            <div className="grupo3">
              <h1>
                <BsTelephone className="icno-telefono" />
                (+57)3100987789
              </h1>
            </div>
          </div>
          <form>
            <div>
              <label>Nombre Completo</label>
              <input
                placeholder="....."
                type="text"
                id="name"
                name="nombre"
                required
              />
            </div>
            <div>
              <label>Teléfono Celular</label>
              <input
                placeholder="....."
                type="text"
                id="phone"
                name="telefono"
                pattern="[0-9]{10}"
                required
              />
            </div>
            <div>
              <label>Correo Electrónico</label>
              <input
                placeholder="....."
                type="email"
                id="email"
                name="correo"
                required
              />
            </div>
            <div>
              <label>Cuéntanos tu problema</label>
              <textarea
                placeholder="....."
                id="problema"
                name="problem"
                rows="5"
                required
              ></textarea>
            </div>
            <button type="submit">Enviar</button>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default ContactoPage;
