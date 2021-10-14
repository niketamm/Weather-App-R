import {useState, useEffect} from "react";
import axios from "axios";
import FormatForecastDate from "./FormatForecastDate";

export default function WeatherForecast(props){

    let [loaded, setLoaded]=useState(false);
    let [forecast, setForecast]=useState(null);

    useEffect(()=>{
       setLoaded(false);
    }, [props.coordinates])

    function showForecast(response){
 setForecast(response.data.daily);
 setLoaded(true);
}

if (loaded){
     return (<div className="row">
                {forecast.map(function (dailyForecast, index) {
                if (index >3) {
                    return (
                    <div className="col" key={index}>
                        <FormatForecastDate data={dailyForecast} />
                    </div>  
                    );
                }
            })}
                </div>   
                );
    }
else {let apiKey=`8e829c86fcad97d52771623e3da2a60f`;
    let latitude=(props.coordinates.lat);
    let longitude=(props.coordinates.lon);
    let apiUrl=`https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

     axios.get(apiUrl).then(showForecast);
    
    return null;
}

;}