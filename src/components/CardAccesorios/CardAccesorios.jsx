import './CardAccesorios.css';
import Accesorios from '../../assets/img/Accesorios.png'
import { Link } from 'react-router-dom';

function CardAccesorios() {

    const Accesoriosinfo = {
        titulo: "Accesorios Barril Asador",
        descripcion: "Puño para carne | Plancha para pescado | no sé que más",
        precio: "150,000"
    }
    return (
        <div className='Card'>
            <div className='container-img'>
                <img src={Accesorios} alt="" />
                <div className='overlay'>
                    <button className='button-overlay'><Link to="/vermas">Ver más</Link></button>
                </div>
            </div>
            <div className='body-card'>
                <h3 className='tittle-card'>{`${Accesoriosinfo.titulo}`}</h3>
                <p className='description-card'>Descripción: </p>
                <ul>
                    <li>Capacidad: {`${Accesoriosinfo.descripcion}`}</li>
                    <li className='price'>${`${Accesoriosinfo.precio}`}</li>
                </ul>
                <div className='button-card'>
                    <button className='button-card-add'><Link to="/carrito">Añadir al carrito</Link></button>
                </div>
            </div>
        </div>
    )
}

export default CardAccesorios