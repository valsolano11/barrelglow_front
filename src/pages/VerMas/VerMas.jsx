import Footer from '../../components/Footer/Footer'
import Navbar from '../../components/Navbar/Navbar'
import '../VerMas/VerMas.css'
import Barril from '../../assets/img/Barriles.jpg'
import { Link } from 'react-router-dom'
import Card from './../../components/Card/Card';
function VerMas() {
  return (
    <div>
        <Navbar/>
        <div className="verdetalle">
    <img src={Barril}alt="Descripción"/>
    <div className="informacion">
        <h1 className='titulo-1'>Asador Pequeño En Acero</h1>
        <p className='valor'>$ 1120000</p>
        <h3 className='titulo-descri'>Descripción</h3>
        <div className='descripcion-detalle'>
       <ul>
        <li>Diametro: 40c</li>
         <li>Altura: 75 c</li>
        <li>Capacidad aprox: De 15 a 20 lb</li>
        <li>Viene con los ganchos y garfio</li>
        </ul>
        </div>
        <li className='sub-opcion'>Cenicero</li>
        <li className='sub-opcion'>Hornilla con Brasero</li>
        <div className='botones-detalle'>
        <button className='boton-1'><Link to="">Añadir al Carrito</Link> </button>
        <button className='boton-2'><Link to="">Comprar Ahora</Link></button>
        </div>
    </div>
</div>
<div className='titulito'>
  <h1>PRODUCTOS RECOMENDADOS</h1>
  <div className='card-detalle'>
   <Card/>
   <Card/>
   <Card/>
   </div>
    </div>
        <Footer/>
    </div>
  )
}

export default VerMas