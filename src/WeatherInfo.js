import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import UnitsChange from "./UnitsChange";

// import WeatherTemperature from "./WeatherTemperature";

export default function WeatherInfo(props) {
  function unitWind() {
    if (props.unit === "metric") {
      return `${Math.round(props.data.wind * 3.6)}km/h`;
    } else {
      return `${Math.round(props.data.wind * 2.2369)}miles/h`;
    }
  }
  return (
    <div>
      <div className="country">
        <h1>{props.data.name},</h1>
        <em>{props.data.country}</em>
      </div>
      <FormattedDate date={props.data.date} />
      <div className="row mt-3  align-items-center justify-content-center">
        <div className="col-5 d-flex align-items-center">
          <div>
            <WeatherIcon code={props.data.icon} size={52} />
          </div>
          <UnitsChange
            unit={props.unit}
            setUnit={props.setUnit}
            temperature={props.data.temperature}
          />
        </div>
        <div className="col-4">
          <ul>
            <li>{props.data.description}</li>
            <li>Humidity: {props.data.humidity}%</li>
            <li>Wind: {unitWind()}</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
