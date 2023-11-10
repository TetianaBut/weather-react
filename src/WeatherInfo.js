import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import UnitsChange from "./UnitsChange";

// import WeatherTemperature from "./WeatherTemperature";

export default function WeatherInfo(props) {
  return (
    <div>
      <div className="country">
        <h1>{props.data.name},</h1>
        <em>{props.data.country}</em>
      </div>

      <FormattedDate date={props.data.date} />

      <div className="row mt-3  align-items-center">
        <div className="col-5 d-flex align-items-center">
          <div>
            <WeatherIcon code={props.data.icon} size={52} />
          </div>
          <UnitsChange temperature={props.data.temperature} />
        </div>
        <div className="col-4">
          <ul>
            <li>{props.data.description}</li>
            <li>Humidity: {props.data.humidity}%</li>
            <li>Wind: {Math.round(props.data.wind * 3.6)}km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
