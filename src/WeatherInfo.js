import React from "react";
// import FormattedDate from "./FormattedDate";
// import WeatherIcon from "./WeatherIcon";
// import WeatherTemperature from "./WeatherTemperature";

export default function WeatherInfo(props) {
  return (
    <div>
      <div className="country">
        <h1>{props.data.name},</h1>
        <em>{props.data.country}</em>
      </div>
      <ul>
        <li>{/* <FormattedDate date={props.data.date} /> */}tuesday 10:00</li>
        <li>{props.data.description}</li>
      </ul>
      <div className="row mt-3">
        <div className="col-7 d-flex Weather-temperature">
          <img src={props.data.icon} alt={props.data.description} />
          <strong>{Math.round(props.data.temperature)}</strong>
          <a href="/">°C</a>
        </div>
        <div className="col-5">
          <ul>
            <li>Humidity: {props.data.humidity}%</li>
            <li>Wind: {props.data.wind}km/h</li>
            <li></li>
          </ul>
        </div>
      </div>
    </div>
  );
}
