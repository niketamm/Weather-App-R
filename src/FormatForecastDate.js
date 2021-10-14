import React from "react";
import WeatherIcon from "./WeatherIcon";



export default function FormatForecastDate(props){
    function maxTemp(){
        let temp=Math.round(props.data.temp.max);
        return `${temp}°`;
    }

  function minTemp(){
        let temp=Math.round(props.data.temp.min);
        return `${temp}°`;
    }

function weekday(){
    let date= new Date(props.data.dt*1000)
    

    let dayList = 
        [`Sun`,
        `Mon`,
        `Tue`,
        `Wed`,
        `Thu`,
        `Fri`,
        `Sat`
        ];

        let day= dayList[date.getDay()]
        
        return day;
}


    return (
        <div>
        <div className="forecastDay">{weekday()}</div>
        <div className="forecastIcon"><WeatherIcon code={props.data.weather[0].icon} size={52}/> </div>
        <div className="forecastTemp">    
            <span className="forecastTemp-max">{maxTemp()} </span>
            <span className="forecastTemp-min">{minTemp()} </span>
        </div> </div>);}