import React from "react";
import Weather from "./Weather";

import "./App.css";

function App() {
  return (
    <div className="App ">
      <header className="App-header">
        <h1 className="text-center">Hello Weather React </h1>
        <div className="Weather-container">
          <Weather defaultCity="New York" />
        </div>
      </header>
      <footer>
        <p className="footer text-center">
          This page was built by 👩‍💻
          <a
            href="https://www.shecodes.io/graduates/93245-tetiana-butok"
            target="_blank"
            rel="noreferrer"
          >
            Tetiana Butok
          </a>
          {" and open sourse code on "}
          <a
            href="https://github.com/TetianaBut/weather-react"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
          {" / hosted on "}
          <a
            href="https://mellifluous-hotteok-aa7314.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            Netlify
          </a>
        </p>
      </footer>
    </div>
  );
}

export default App;
