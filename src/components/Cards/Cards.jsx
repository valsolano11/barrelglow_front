import { useState, useEffect } from "react";
import Card from "../Card/Card";
import axios from "axios";

function Cards() {
  const [productos, setProductos] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;

  useEffect(() => {
    const fetchProductos = async () => {
      try {
        const response = await axios.get("http://localhost:7000/productos");
        setProductos(response.data);
        console.log(response.data);
      } catch (error) {
        console.error("Error al obtener productos:", error);
      }
    };

    fetchProductos();
  }, []);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentProductos = Array.isArray(productos)
    ? productos.slice(indexOfFirstItem, indexOfLastItem)
    : [];

  const pageNumbers = Math.ceil(productos.length / itemsPerPage);

  // const [imageUrl, setImageUrl] = useState('');

  //   useEffect(() => {
  //     const fetchImageUrl = async () => {
  //       try {
  //         const response = await axios.post('http://localhost:7000/productos');
  //         setImageUrl(response.data.imageUrl); // Suponiendo que el servidor devuelve la URL de la imagen
  //       } catch (error) {
  //         console.error('Error al obtener la imagen:', error);
  //       }
  //     };
  //     fetchImageUrl();
  //   }, []);

  return (
    <div className="container-cards">
      <div className="cards">
        {currentProductos.map((producto) => {
          return <Card key={producto.id} producto={producto} />;
        })}
      </div>
      <div className="pagination-container">
        {Array.from({ length: pageNumbers }, (_, index) => index + 1).map(
          (number) => (
            <button
              key={number}
              onClick={() => setCurrentPage(number)}
              className={currentPage === number ? "active" : ""}
            >
              {number}
            </button>
          )
        )}
      </div>
    </div>
  );
}

export default Cards;
