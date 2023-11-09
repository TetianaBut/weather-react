import React, { useState } from "react";

export default function UnitsChange(props) {
  const [unit, setUnit] = useState("metric");

  function showFarenheit(event) {
    event.preventDefault();
    setUnit("imperial");
  }
  function showCelcius(event) {
    event.preventDefault();
    setUnit("metric");
  }
  function farenheit() {
    return (props.celcius * 9) / 5 + 32;
  }
  if (unit === "metric") {
    return (
      <div>
        <div className="Weather-temperature d-flex align-items-start">
          <strong>{Math.round(props.celcius)}</strong>

          <span className="units">
            °C |
            <a href="/" onClick={showFarenheit}>
              °F
            </a>
          </span>
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <div className="Weather-temperature d-flex align-items-start">
          <strong> {Math.round(farenheit())} </strong>

          <span className="units">
            <a href="/" onClick={showCelcius}>
              °C
            </a>
            |°F
          </span>
        </div>
      </div>
    );
  }
}
