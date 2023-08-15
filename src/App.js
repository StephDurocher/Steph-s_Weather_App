import "./App.css";
import Weather from "./components/Weather";
import Header from "./components/Header";
import Searchbox from "./components/Searchbox";
import Footer from "./compontents/Footer";
import axios from "axios";
import { useEffect } from "react";

function App() {
  const key = "5a37a064b01ffab7f554c835e1e8aa18";
  const q = "Raleigh";
  // const url = `api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid=${key}`;
  const url = `api.openweathermap.org/data/2.5/forecast?q=${q}&appid=${key}`;

  return (
    <div className="App">
      <Header />
      <Searchbox onSubmit={getCity} />
      <Weather />
      <Footer />
    </div>
  );
}

export default App;
