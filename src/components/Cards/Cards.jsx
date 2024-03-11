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
        const response = await axios.get("https://barrelglow-api.onrender.com/productos");
        
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
