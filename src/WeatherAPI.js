import React, {useState} from "react";
import axios from "axios";

function WeatherData(props) {
   let [data, setData] = useState(null);

  function showTemperature(response) {
      console.log(response.data)
    setData(response.data.main.temp);
  }

  let apiKey = `8e829c86fcad97d52771623e3da2a60f`;
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(showTemperature);

  if (data) {
    return ( 
        `${Math.round(data)} °C`
    );
  } else {
    return `Loading ...`;
  }
}



    export default WeatherData;