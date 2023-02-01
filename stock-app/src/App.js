import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Stocks from "./pages/Stocks";
import Nav from "./components/Nav";
import Dashboards from "./pages/Dashboards";
import stockData from "./data";

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<Home stockData={stockData} />} />
        <Route path="/about" element={<About />} />
        <Route path="/stocks/" element={<Dashboards stockData={stockData} />} />
        <Route
          path="/stocks/:symbol"
          element={<Stocks stockData={stockData} />}
        />
      </Routes>
    </div>
  );
}

export default App;
