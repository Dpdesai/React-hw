import React from "react";
import { useParams } from "react-router-dom";

function Stocks({ stockData }) {
  const { symbol } = useParams();
  const stock = stockData.find((item) => item.symbol === symbol);

  return (
    <div className="stock-info">
      <p>
        <span>Company Name:</span> {stock.name}
      </p>
      <p>
        <span>Price:</span> {stock.lastPrice}
      </p>
      <p>
        <span>Open:</span> {stock.open}
      </p>
      <p>
        <span>High:</span> {stock.high}
      </p>
      <p>
        <span>Low:</span> {stock.low}
      </p>
      <p>
        <span>Change:</span> {stock.change}
      </p>
    </div>
  );
}

export default Stocks;
