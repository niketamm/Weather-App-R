import {useState} from "react";
import 'bootstrap/dist/css/bootstrap.css';
import axios from "axios";
import FormatDate from "./FormatDate";
import WeatherIcon from "./WeatherIcon";
import WeatherForecast from "./WeatherForecast";



export default function WeatherData(props) {
  const [data, setData] = useState({ready: false});
  const [city, setCity]= useState(props.defaultCity);

  function showTemperature(response) {
    console.log(response.data);
    setData({
      ready: true,
      temp: response.data.main.temp,
      humidity: response.data.main.humidity,
      sky: response.data.weather[0].description,
      tempMin: response.data.main.temp_min,
      tempMax: response.data.main.temp_max,
      wind: response.data.wind.speed,
      datatime: new Date(response.data.dt*1000),
      city: response.data.name,
      iconCode: response.data.weather[0].icon,
      coordinates: response.data.coord
    })
    ;}

function citySubmit(event) {
    setCity(event.target.value);
  }

function formInput(event) {
    event.preventDefault();
    api();
}

function api() {const apiKey = `8e829c86fcad97d52771623e3da2a60f`;
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(showTemperature)};

let form= (
            <form className="Form" onSubmit={formInput}>
            <input
              type="text"
              placeholder="enter city and press enter"
              className="search"
              onChange={citySubmit}/>
            <input 
                type="submit" 
                value="Search" 
                className="SearchButton" />
          </form>
          );

  if (data.ready) {
    return (  
        <div>
        <div className="Icon">
          <WeatherIcon code={data.iconCode} size={100}/>
        </div>
        <div className="Info">
    
        {Math.round(data.temp)} °C 
        <br/>
        {data.city}
        <ul><li>Last Updated <FormatDate date={data.datatime}/></li></ul>
        </div>

        <div className="Info">
        <ul>
          <li className="text-capitalize">{data.sky}</li>
          <li>Humidity: {data.humidity}%</li>
          <li>Wind:  {Math.round(data.wind)} km/h</li>
          <li>Lowest: {Math.round(data.tempMin)} °C</li>
          <li>Highest: {Math.round(data.tempMax)} °C</li>
        </ul> 
        </div>
        {form}
        <div className="weatherForecast">
        <WeatherForecast coordinates={data.coordinates}/>
        </div>
        </div>
    );
  } else {
   api();
    return `Loading ...`
   
;
  }
}