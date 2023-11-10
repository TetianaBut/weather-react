import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecastDay(props) {
  function maxTemperature() {
    let temperature = Math.round(props.data.temp.max);
    return `${temperature}°`;
  }

  function minTemperature() {
    let temperature = Math.round(props.data.temp.min);
    return `${temperature}°`;
  }

  function day() {
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();
    return days[day];
  }

  // let urlicon = `http://openweathermap.org/img/wn/${props.data.weather[0].icon}@2x.png`;
  // console.log(
  //   `The img codicon = ${props.data.weather[0].icon} alt = ${props.data.weather[0].description} src=${urlicon} `
  // );
  return (
    <div>
      <div className="WeatherForecast-day">{day()}</div>
      <WeatherIcon code={props.data.weather[0].icon} size={36} />
      <div className="weather-forecast-temp">
        <span className="weather-forecast-max">{maxTemperature()}</span>
        <span className="weather-forecast-min">{minTemperature()}</span>
      </div>
    </div>
  );
}
