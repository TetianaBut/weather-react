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
  function maxTemperature() {
    if (props.unit === "metric") {
      return Math.round(props.data.temp.max);
    } else {
      return Math.round((props.data.temp.max * 9) / 5 + 32);
    }
  }

  function minTemperature() {
    if (props.unit === "metric") {
      return Math.round(props.data.temp.min);
    } else {
      return Math.round((props.data.temp.min * 9) / 5 + 32);
    }
  }

  return (
    <div className="weather-forecast-date">
      <div className="WeatherForecast-day mb-1 pt-1">{day()}</div>
      <WeatherIcon code={props.data.weather[0].icon} size={36} />
      <div className="weather-forecast-temp">
        <span className="weather-forecast-max">{maxTemperature()}° </span>
        <span className="weather-forecast-min">{minTemperature()}°</span>
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
            if (index > 0 && index < 7) {
              return (
                <div className="col" key={index}>
                  <WeatherForecastDay data={dailyForecast} unit={props.unit} />
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
    // return <div className="text-center mt-5">" Loading..."</div>;
  }
}
