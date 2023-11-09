import React, { useState } from "react";

export default function UnitsChange(props) {
  const [unit, setUnit] = useState("metric");

  function showTeperature() {
    if (unit === "metric") {
      return Math.round(props.temperature);
    } else {
      return Math.round((props.temperature * 9) / 5 + 32);
    }
  }
  function rewriteUnit(event) {
    event.preventDefault();
    if (unit === "metric") {
      setUnit("imperial");
    } else {
      setUnit("metric");
    }
  }
  function showUnit() {
    if (unit === "metric") {
      return "°C";
    } else {
      return "°F";
    }
  }

  return (
    <div>
      <div className="Weather-temperature d-flex align-items-start">
        <strong>{showTeperature()}</strong>
        <a href="/" onClick={rewriteUnit}>
          {showUnit()}
        </a>
      </div>
    </div>
  );
}
