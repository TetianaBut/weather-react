import React, { useState } from "react";
import axios from "axios";

import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast";
import "./App.css";
import "./Picture.css";

export default function Weather(props) {
  // const units = "metric";

  const [units, setUnits] = useState("metric");
  const [city, setCity] = useState(props.defaultCity);
  const [weather, setWeather] = useState({ ready: false });
  const [picture, setPicture] = useState("nul");

  function displayWeather(response) {
    setWeather({
      ready: true,
      coordinates: response.data.coord,
      date: new Date(),
      name: response.data.name,
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      icon: response.data.weather[0].icon,
      // icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      description: response.data.weather[0].description,
      country: response.data.sys.country,
      // picture: `./img/picture_${response.data.weather[0].icon.slice(0, 2)}.jpg`,
    });
    setPicture(`picture_${response.data.weather[0].icon.slice(0, 2)}`);
  }

  function retrieveDataWeather(cityName) {
    let apiKey = "36eeef5b0cb8b4f4de85392d5b87261c";
    // let apiKey = "9633ac883d0aa48cc3c6f3b8f7a32323";
    // let apiUrl = `https://api.openweathermap.org/data/2.5/weather?${cityName}&appid=${apiKey}&units=${units}`;
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?${cityName}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(displayWeather);
  }

  function handleSubmit(event) {
    event.preventDefault();
    retrieveDataWeather(`q=${city}`);
  }
  function updateCity(event) {
    setCity(event.target.value);
  }
  // current City Name
  function currentLocation(event) {
    function retrievePosition(position) {
      let positionCityName = `lat=${position.coords.latitude}&lon=${position.coords.longitude}`;
      retrieveDataWeather(positionCityName);
    }
    event.preventDefault();
    navigator.geolocation.getCurrentPosition(retrievePosition);
  }

  function FavoriteSity() {
    let favorites = ["Kyiv", "Paris", "Brno", "Ashquelon", "New York"];
    return (
      <header>
        <ul>
          {favorites.map(function (favoriteCity, index) {
            return (
              <li className="item-city-favorites" key={index}>
                <a
                  href="/"
                  onClick={(event) => {
                    event.preventDefault();
                    retrieveDataWeather(`q=${favoriteCity}`);
                  }}
                >
                  {favoriteCity}
                </a>
              </li>
            );
          })}
        </ul>
      </header>
    );
  }

  if (weather.ready) {
    return (
      <div className={picture}>
        <div className="mb-4 d-flex justify-content-between align-items-baseline">
          <a
            className="logo"
            href="https://www.shecodes.io/graduates/93245-tetiana-butok"
            title="SheCodes Profile"
            target="_blank"
            rel="noreferrer"
          >
            Tetiana Butok
          </a>
          <FavoriteSity />
        </div>
        <form className="form-input}">
          <div className="row d-flex justify-content-center">
            <div className="col-5">
              <input
                type="search"
                placeholder="Input name city..."
                className="form-control search-input w-100"
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
                onClick={currentLocation}
              >
                Current location
              </button>
            </div>
          </div>
        </form>

        <WeatherInfo unit={units} setUnit={setUnits} data={weather} />
        <WeatherForecast coordinates={weather.coordinates} unit={units} />
      </div>
    );
  } else {
    retrieveDataWeather(`q=${city}`);
    return <div className="text-center mt-5">" Loading..."</div>;
  }
}
