import {useState} from "react";
import axios from "axios";
import Form from "./Form";


export default function WeatherData(props) {
  const [ready, setReady]=useState(false);
  const [data, setData] = useState({});

  function showTemperature(response) {
      console.log(response.data)
    setData({temp: response.data.main.temp,
      humidity: response.data.main.humidity,
      sky: response.data.weather[0].description,
      tempMin: response.data.main.temp_min,
      tempMax: response.data.main.temp_max,
      wind: response.data.wind.speed,
      city: response.data.name
      

    });

    setReady(true);
  }

  if (ready) {
    return (  
        <div>
        <div className="Info">
        {Math.round(data.temp)} °C 
        <br/>
        {data.city}
        </div>
         <Form/>
        <div className="Info">
        <ul>
          <li>Last Updated</li>
          <li className="text-capitalize">{data.sky}</li>
          <li>Humidity: {data.humidity}%</li>
          <li>Wind:  {Math.round(data.wind)} km/h</li>
          <li>Lowest: {Math.round(data.tempMin)} °C</li>
          <li>Highest: {Math.round(data.tempMax)} °C</li>
        </ul> 
        </div>
        </div>
    );
  } else {
  const apiKey = `8e829c86fcad97d52771623e3da2a60f`;
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(showTemperature);
    return `Loading ...`;
  }
}