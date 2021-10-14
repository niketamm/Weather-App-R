import 'bootstrap/dist/css/bootstrap.css';
import React from "react";
import "./App.css";
import WeatherData from "./WeatherAPI";

function App() {
  return (
     <div className="Body">
    <div className="App">

        <div>
          <WeatherData defaultCity="Tokyo" />
        </div>

    </div>
   
    <div className="footer">
        Coded by Nike <a 
        href="https://github.com/niketamm/Weather-App-R" 
        target="_blank" 
        rel="noreferrer noopener">
        open-sourced at GitHub
        </a>
    </div>
    </div>
  );
}

export default App;
