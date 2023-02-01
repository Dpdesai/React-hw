import { Link } from "react-router-dom";

function Dashboards({ stockData }) {
  return (
    <div className="dashboard">
      <h1>Most Active Stocks</h1>
      <table className="stock-list">
        <thead>
          <tr>
            <th>Company Name</th>
            <th>Price</th>
            <th>Change</th>
          </tr>
        </thead>
        <tbody>
          {stockData.map((item, id) => {
            return (
              <tr key={id} className="stocks-list">
                <td>
                  <Link to={`/stocks/${item.symbol}`}>{item.name}</Link>
                </td>
                <td className="price">{item.lastPrice}</td>
                <td className="price">{item.change}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default Dashboards;
