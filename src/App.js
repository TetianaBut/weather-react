import React from "react";
import Weather from "./Weather";

import "./App.css";

function App() {
  return (
    <div className="App ">
      <header className="App-header">
        <h1 className="text-center">Hello Weather React </h1>

        <Weather />
      </header>
      <footer className="text-center">
        This page was built by 👩‍💻
        <a
          href="https://www.shecodes.io/graduates/93245-tetiana-butok"
          target="_blank"
        >
          Tetiana Butok
        </a>{" "}
        and open-
        <a href="https://github.com/TetianaBut/weather-react" target="_blank">
          sourse code on GitHub
        </a>
        {" / "}
        <a
          href="https://mellifluous-hotteok-aa7314.netlify.app/"
          target="_blank"
        >
          hosted on Netlify
        </a>
      </footer>
    </div>
  );
}

export default App;
