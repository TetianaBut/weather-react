import React from "react";
// import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import UnitsChange from "./UnitsChange";

// import WeatherTemperature from "./WeatherTemperature";

function FormattedDate(props) {
  //   let nowDate = new Date();
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  let day = days[props.date.getDay()];
  let date = props.date.getDate();
  let month = props.date.getMonth();
  let hours = props.date.getHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }

  let minutes = props.date.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  return (
    <div className="opacity-50 fst-italic">
      {day}, {date}.{months[month]} {hours}:{minutes}
    </div>
  );
}

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
      <div className="d-flex align-items-baseline ms-4">
        <h1>{props.data.name} </h1>
        <em className="opacity-50 ms-2"> {props.data.country}</em>
      </div>
      <FormattedDate date={props.data.date} />
      <div className="row mt-3  align-items-center justify-content-evenly">
        <div className="col-5 d-flex align-items-center">
          <div>
            <WeatherIcon code={props.data.icon} size={64} />
          </div>
          <UnitsChange
            unit={props.unit}
            setUnit={props.setUnit}
            temperature={props.data.temperature}
          />
        </div>
        <div className="col-4">
          <ul>
            <li>
              {" "}
              <span> {props.data.description}</span>
            </li>
            <li>
              <em>Humidity</em> : <span>{props.data.humidity}%</span>
            </li>
            <li>
              <em>Wind</em> : <span>{unitWind()} </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
