import 'bootstrap/dist/css/bootstrap.css';
import React from "react";
import "./App.css";
import WeatherIcon from "./WeatherIcon";
import WeatherData from "./WeatherAPI";

function App() {
  return (
     <div className="Body">
    <div className="App">

        <div className="Icon">
          <WeatherIcon icon="CLEAR_DAY" color="#C7EEFF" size="150" />
        </div>

        <div>
          <WeatherData city="Tokyo"/>
        </div>
    
    </div>
   
    <div>
        Coded by Nike
    </div>
    </div>
  );
}

export default App;
