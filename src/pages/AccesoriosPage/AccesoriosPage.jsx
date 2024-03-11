import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import CardsAccesorios from "../../components/CardsAccesorios/CardsAccesorios";
import MenuLateralAccesorios from "../../components/MenuLateralAccesorios/MenuLateralAccesorios";
import "./Accesorios.css";

function AccesoriosPage() {
  return (
    <>
      <Navbar />
      <MenuLateralAccesorios />
      <div className="contenido-accesorios">
        <CardsAccesorios />
      </div>
      <Footer />
    </>
  );
}

export default AccesoriosPage;
