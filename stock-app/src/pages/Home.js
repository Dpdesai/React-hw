import React from "react";
import Dashboards from "./Dashboards";

function Home({ stockData }) {
  return (
    <div>
      <Dashboards stockData={stockData} />
    </div>
  );
}

export default Home;
