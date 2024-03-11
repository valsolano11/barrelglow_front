import CardAccesorios from '../CardAccesorios/CardAccesorios';
import "../Cards/CardsStyle.css";

function Cards() {
  return (
    <div className="container-cards">
      <div className="cards">
        <CardAccesorios/>
        <CardAccesorios/>
        <CardAccesorios/>
        <CardAccesorios/>
        <CardAccesorios/>
        <CardAccesorios/>
        <CardAccesorios/>
        <CardAccesorios/>
      </div>
    </div>
  );
}

export default Cards;
