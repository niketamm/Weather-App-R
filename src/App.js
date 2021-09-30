import 'bootstrap/dist/css/bootstrap.css';
import React from "react";
import "./App.css";
import WeatherIcon from "./WeatherIcon";


function App() {
  return (
    <div className="Body">
    <div className="App">

        <div className="Icon">
          <WeatherIcon icon="CLEAR_DAY" color="#C7EEFF" size="150" />
        </div>

        <div className="Info">
          It is 25℃
          Tokyo, Japan
        </div>

        <div className="Form">
          <form>
            <input type="text" placeholder="enter city and press enter"  className="search"/>
            <input type="submit" value="Search" className="SearchButton"/>
         </form>
        </div>


        <div className="Info"> 
         <ul>
          <li>Last Updated</li>
          <li>Humidity:</li>
          <li>Wind:</li>
          <li>Lowest:</li>
          <li>Highest:</li>
          </ul>
        </div>
    
    </div>

    <div>
        Coded by Nike
    </div>
    </div>
  );
}

export default App;
