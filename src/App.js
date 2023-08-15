import "./App.css";
import Weather from "./components/Weather";
import Header from "./components/Header";
import Searchbox from "./components/Searchbox";
import Footer from "./components/Footer";
import axios from "axios";
import { useEffect, useState } from "react";

function App() {
  const [temp, setTemp] = useState({});
  const [weatherData, setWeatherData] = useState({});
  const [loading, setLoading] = useState(true);

  const key = "667d9f573c8af4c33457be5d561a9148";
  const city = "Raleigh";
  const units = "imperial";

  // const url = `api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid=${key}`;
  const url = `http://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${key}&units=${units}`;

  const handleResponse = (response) => {
    console.log(response.data.list[0].main);
    setTemp({
      low: response.data.list[0].main.temp_min,
      high: response.data.list[0].main.temp_max,
    });
    setWeatherData({
      humidity: response.data.list[0].main.humidity,
      wind: 6,
      city: response.data.name,
    });
    console.log(weatherData.humidity);
    setLoading(false);
  };

  axios.get(url).then(handleResponse);

  return (
    <div className="App">
      <Header />
      <Searchbox />
      <div>City: {weatherData.city}</div>

      {
        !loading && (
          // <h2>Day and Time</h2>
          <Weather temp={temp} humidity={weatherData.humidity} />
        )
        // <div>The temperature is {temp}</div>
      }
      {loading && <div>Loading...</div>}
      <hr />
      <Footer />
    </div>
  );
}

export default App;
