import { useState, useEffect } from "react";
import getAllShip from "./components/services/sw-api";
import StarShipCard from "./components/StarShipCard";

function App() {
  const [shipCard, setShipCard] = useState([]);

  useEffect(() => {
    getAllShip().then((data) => {
      setShipCard(data.results);
    });
  }, []);

  return (
    <div className="main">
      <StarShipCard shipCard={shipCard} />
    </div>
  );
}

export default App;
