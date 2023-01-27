import { useState } from "react";
import studentData from "./data";
import "./styles.css";
import Students from "./components/Students";
import Header from "./components/Header";

function App() {
  const [data, setData] = useState(studentData);
  return (
    <div className="main">
      <Header />
      <Students data={data} />
    </div>
  );
}

export default App;
