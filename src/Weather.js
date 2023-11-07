import React, { useState } from "react";
import axios from "axios";

import WeatherInfo from "./WeatherInfo";
// import WeatherForecast from "./WeatherForecast";
import "./App.css";

export default function Weather(props) {
  const units = "metric";
  const [city, setCity] = useState(props.defaultCity);
  const [weather, setWeather] = useState({ ready: false });

  function displayWeather(response) {
    // alert(`The weather in ${city} is ${response.data.weather[0].description}`);
    setWeather({
      ready: true,
      coordinates: response.data.coord,
      // date: new Date(response.data.dt * 1000),
      date: new Date(),
      name: response.data.name,
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      description: response.data.weather[0].description,
      country: response.data.sys.country,
    });
  }

  function retrieveDataWeather(cityName) {
    let apiKey = "36eeef5b0cb8b4f4de85392d5b87261c";
    // let apiKey = "9633ac883d0aa48cc3c6f3b8f7a32323";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?${cityName}&appid=${apiKey}&units=${units}`;
    // alert(apiUrl);
    axios.get(apiUrl).then(displayWeather);
  }

  function handleSubmit(event) {
    event.preventDefault();
    // alert(`The weather in ${city} }`);
    retrieveDataWeather(`q=${city}`);
  }
  function updateCity(event) {
    setCity(event.target.value);
  }

  if (weather.ready) {
    return (
      <div className="Weather-container">
        <form className="form-input}">
          <div className="row d-flex justify-content-center">
            <div className="col-5">
              <input
                type="search"
                placeholder="Input name city.."
                className="form-control search-input"
                autoFocus="on"
                required
                onChange={updateCity}
              />
            </div>
            <div className="col-3">
              <input
                type="submit"
                className="btn btn-primary w-100 location-btn"
                value="Search"
                onClick={handleSubmit}
              />
            </div>
            <div className="col-4">
              <button
                type="button"
                className="btn btn-primary w-100 location-btn"
              >
                Current location
              </button>
            </div>
          </div>
        </form>

        <WeatherInfo data={weather} />
        {/* <WeatherForecast coordinates={weather.coordinates} /> */}
      </div>
    );
  } else {
    retrieveDataWeather(`q=${city}`);
    return "Loading...";
  }
}
