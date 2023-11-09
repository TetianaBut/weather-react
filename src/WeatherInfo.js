import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import UnitsChange from "./UnitsChange";
// import WeatherTemperature from "./WeatherTemperature";
// import WeatherTemperature from "./WeatherTemperature";

export default function WeatherInfo(props) {
  return (
    <div>
      <div className="country">
        <h1>{props.data.name},</h1>
        <em>{props.data.country}</em>
      </div>
      <ul>
        <li>
          <FormattedDate date={props.data.date} />
        </li>
        <li>{props.data.description}</li>
      </ul>
      <div className="row mt-3  align-items-center">
        <div className="col-7 d-flex align-items-center">
          {/* <img src={props.data.icon} alt={props.data.description} /> */}
          <div>
            <WeatherIcon code={props.data.icon} size={52} />
          </div>
          <UnitsChange celcius={props.data.temperature} />
          {/* <WeatherTemperature temp={props.data.temperature} /> */}
          {/* <div className="Weather-temperature d-flex align-items-start">
            <strong>{Math.round(props.data.temperature)}</strong>
            <a href="/">°C</a>
          </div> */}
        </div>
        <div className="col-5">
          <ul>
            <li>Humidity: {props.data.humidity}%</li>
            <li>Wind: {Math.round(props.data.wind * 3.6)}km/h</li>
            <li></li>
          </ul>
        </div>
      </div>
    </div>
  );
}
