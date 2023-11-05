import React, { useState } from "react";
import axios from "axios";

import WeatherInfo from "./WeatherInfo";
import "./App.css";

export default function Weather() {
  let units = "metric";
  let [city, setCity] = useState("");
  let [weather, setWeather] = useState({});
  // let [loaded, setLoaded] = useState(false);

  function displayWeather(response) {
    // setLoaded(true);
    // alert(`The weather in ${city} is ${response.data.weather[0].description}`);
    setWeather({
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
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?${cityName}&appid=${apiKey}&units=${units}`;
    // alert(apiUrl);
    axios.get(apiUrl).then(displayWeather);
  }
  function handleSubmit(event) {
    event.preventDefault();
    retrieveDataWeather(`q=${city}`);
    // let cityName = `q=${city}`;
    // let apiKey = "36eeef5b0cb8b4f4de85392d5b87261c";
    // let apiUrl = `https://api.openweathermap.org/data/2.5/weather?${cityName}&appid=${apiKey}&units=${units}`;
    // alert(apiUrl);
    // axios.get(apiUrl).then(displayWeather);
  }
  function updateCity(event) {
    setCity(event.target.value);
  }
  // function handleCurrentCity(event) {
  //   // updateCityStart();
  //   event.preventDefault();
  //   alert(`The weather in ${city} }`);
  //   retrieveDataWeather(`q=${city}`);
  // }
  function updateCityStart(event) {
    function handleCurrentCity() {
      // updateCityStart();
      //  event.preventDefault();
      // alert(`The weather in ${city} }`);
      retrieveDataWeather(`q=${city}`);
    }
    event.preventDefault();
    setCity("kyiv");
    // alert(`The weather in ${city} }`);
    handleCurrentCity();

    // handleSubmit();
  }

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
              onClick={updateCityStart}
            >
              Current location
            </button>
          </div>
        </div>
      </form>

      <WeatherInfo data={weather} />
    </div>
  );
}
