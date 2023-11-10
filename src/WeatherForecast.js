import React, { useState, useEffect } from "react";
import axios from "axios";
import WeatherIcon from "./WeatherIcon";
// import WeatherForecastDay from "./WeatherForecastDay";

function WeatherForecastDay(props) {
  function day() {
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();
    return days[day];
  }
  return (
    <div>
      <div className="WeatherForecast-day">{day()}</div>
      <WeatherIcon code={props.data.weather[0].icon} size={36} />
      <div className="weather-forecast-temp">
        <span className="weather-forecast-max">
          {Math.round(props.data.temp.max)}°{" "}
        </span>

        <span className="weather-forecast-min">
          {Math.round(props.data.temp.min)}°
        </span>
      </div>
    </div>
  );
}

export default function WeatherForecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);

  useEffect(() => {
    setLoaded(false);
  }, [props.coordinates]);

  function handleResponse(response) {
    setForecast(response.data.daily);
    setLoaded(true);
  }

  function load() {
    // let apiKey = "5f472b7acba333cd8a035ea85a0d4d4c";
    // let apiKey = "36eeef5b0cb8b4f4de85392d5b87261c";
    let apiKey = "281450ec88936f4fa8ee9864682b49a0";
    let longitude = props.coordinates.lon;
    let latitude = props.coordinates.lat;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  if (loaded) {
    return (
      <div className="weather-forecast">
        <div className="row weather-week mt-4">
          {forecast.map(function (dailyForecast, index) {
            if (index < 5) {
              return (
                <div className="col weather-forecast-date" key={index}>
                  <WeatherForecastDay data={dailyForecast} />
                </div>
              );
            } else {
              return null;
            }
          })}
        </div>
      </div>
    );
  } else {
    load();
    return null;
  }
}
