import 'bootstrap/dist/css/bootstrap.css';
import React from "react";
import "./App.css";
import WeatherData from "./WeatherAPI";

function App() {
  return (
     <div className="Body">
    <div className="App">
      
        <div>
          <WeatherData defaultCity="Tokyo"/>
        </div>
    
    </div>
   
    <div>
        Coded by Nike <a href="https://github.com/niketamm/Weather-App-R">GitHub repository</a>
    </div>
    </div>
  );
}

export default App;
