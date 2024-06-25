import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import Newsboard from "./components/newsboard/Newsboard";
import Card from "./components/card/Card";
import News from "./components/news/News";
import { useState } from "react";
function App() {
  const [category, setCategory] = useState("Technology");
  return (
    <div className="bodyContainer">
      <Navbar setCategory={setCategory} />
      <Newsboard category={category} />
    </div>
  );
}

export default App;
//fixed-top
