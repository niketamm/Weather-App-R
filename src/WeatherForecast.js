import WeatherIcon from "./WeatherIcon";

export default function WeatherForecast(){
    return <div className="col">
            <div className="forecastDay">Thu</div>
        <div className="forecastIcon"><WeatherIcon code="01d" size={52}/> </div>
        <div className="forecastTemp">    
            <span className="forecastTemp-max">25° </span>
            <span className="forecastTemp-min">18° </span>
        </div>          
</div>
        ;}