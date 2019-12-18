import React, { Component } from "react"; 

const Forecast = (props) => {
    return (
        <div>
            <h1>Current Forecast</h1>
            <h1>{props.city}</h1>
         
            <i className={`wi ${props.weathericon} display-1`}></i>
            <h1 className="py-2">{props.temp_celsius}&deg;</h1>
            <i className="wi wi-day-sunny"></i>
            <h4 className="py-3">{props.description}</h4>
        </div>
        )
}

export default Forecast;