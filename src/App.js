import React, { useState, useEffect } from "react";
import setupMirageServer from "./mirage";
import './App.css';

setupMirageServer();

function App() {
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    fetch(`/api/weather?lat=44.34&lon=10.99`)
      .then((response) => response.json())
      .then((json) => {
        console.log(json); 
        setWeatherData(json);
      })
      .catch((error) => {
        console.error('Error fetching weather data:', error);
      });
  }, []);

  return (
    <div className="App">
      Learn React
      {weatherData && (
        <div>
          <p>Temperature: {weatherData.main.temp}</p>
          <p>Description: {weatherData.weather[0].description}</p>
        </div>
      )}
    </div>
  );
}

export default App;