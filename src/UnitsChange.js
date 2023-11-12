import React from "react";

export default function UnitsChange(props) {
  // const [unit, setUnit] = useState("metric");

  function showTeperature() {
    if (props.unit === "metric") {
      return Math.round(props.temperature);
    } else {
      return Math.round((props.temperature * 9) / 5 + 32);
    }
  }
  function rewriteUnit(event) {
    event.preventDefault();
    if (props.unit === "metric") {
      // setUnits("imperial");
      props.setUnit("imperial");
    } else {
      // setUnits("metric");
      props.setUnit("metric");
    }
  }
  function showUnit() {
    if (props.unit === "metric") {
      return "°C";
    } else {
      return "°F";
    }
  }

  return (
    <div>
      <div className="Weather-temperature d-flex align-items-start">
        <strong>{showTeperature()}</strong>
        <div>
          <a
            className="btn btn-primary location-btn"
            href="/"
            onClick={rewriteUnit}
          >
            {showUnit()}
          </a>
        </div>
      </div>
    </div>
  );
}
