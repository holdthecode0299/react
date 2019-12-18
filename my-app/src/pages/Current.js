import React, { Component } from "react";

// import API from "../utils/API";

const Current = (props) => {
    return (
    <div>
        <h1>5-Day Forecast</h1>
        <h1>{props.city}</h1>
 
        <div className="fiveDay">
            <i className={`wi ${props.weathericon} display-1`}></i>
            <h1 className="py-2">{props.temp_celsius}&deg;</h1>
            <i className="wi wi-day-sunny display-1"></i>
            {/* show max/min temp */}
            {minmaxTemp(props.temp_min,props.temp_max)}
            <h4 className="py-3">{props.description}</h4>
        </div>
{/* I would code HERE to loop through the array for the weather parameters ran out of time 
PSUEDO CODE */}
        <div className="fiveDay">
            <i className={`wi ${props.weathericon} display-1`}></i>
            <h1 className="py-2">{props.temp_celsius}&deg;</h1>
            
            <i className="wi wi-day-sunny display-1"></i>
            {/* show max/min temp */}
            {minmaxTemp(props.temp_min,props.temp_max)}
            <h4 className="py-3">{props.description}</h4>
        </div>

        <div className="fiveDay">
            <i className={`wi ${props.weathericon} display-1`}></i>
            <h1 className="py-2">{props.temp_celsius}&deg;</h1>
            <i className="wi wi-day-sunny display-1"></i>
            {/* show max/min temp */}
            {minmaxTemp(props.temp_min,props.temp_max)}
            <h4 className="py-3">{props.description}</h4>
        </div>

        <div className="fiveDay">
            <i className={`wi ${props.weathericon} display-1`}></i>
            <h1 className="py-2">{props.temp_celsius}&deg;</h1>
            <i className="wi wi-day-sunny display-1"></i>
            {/* show max/min temp */}
            {minmaxTemp(props.temp_min,props.temp_max)}
            <h4 className="py-3">{props.description}</h4>
        </div>

        <div className="fiveDay">
            <i className={`wi ${props.weathericon} display-1`}></i>
            <h1 className="py-2">{props.temp_celsius}&deg;</h1>
            <i className="wi wi-day-sunny display-1"></i>
            {/* show max/min temp */}
            {minmaxTemp(props.temp_min,props.temp_max)}
            <h4 className="py-3">{props.description}</h4>
        </div>
    </div>  

        

    )
}
// update min/max temp
function minmaxTemp(min, max){
    return(
        <h3>
            <span className="px-4">{min}&deg;</span>
            <span className="px-4">{max}&deg;</span>
        </h3>
    )

}


export default Current;