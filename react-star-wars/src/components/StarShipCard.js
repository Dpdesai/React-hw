import React from "react";

function StarShipCard({ shipCard }) {
  return (
    <div className="starship-cards">
      {shipCard.map((item) => {
        return <div>{item.name}</div>;
      })}
    </div>
  );
}

export default StarShipCard;
