import React, { Component } from "react"; 
// import API from "../utils/API";

<<<<<<< HEAD
const Forecast = (props) => {
    return (
        <div>
            <h1>Current Forecast</h1>
            <h1>{props.city}</h1>
            <i className={`wi ${props.weathericon} display-1`}></i>
            <h1 className="py-2">{props.temp_celsius}&deg;</h1>
    
            {/* show max/min temp */}
            {minmaxTemp(props.temp_min, props.temp_max)}
=======
class Forecast extends React.Component  {


//    getWeather = (e) => {
//        e.preventDefault();
//     const getWeather = async () => {
//         const call = await fetch("https://api.openweathermap.org/data/2.5/weather?zip=20001,us&appid=5735b3e048f694014a7f656569a5b4d4");
//         // .then(res => res.json())
//         const data = await call.json();
//         console.log(data)
//         // .then(data => console.log("Data List Loaded", data.list))
//     } 

    componentDidMount(){
        fetch("https://api.openweathermap.org/data/2.5/weather?zip=19124,us&appid=5735b3e048f694014a7f656569a5b4d4")
        .then(response => response.json())
        .then(response => {
            console.log(response)
        })
    }
    
    render() {
        return (
        <div>
            <h1>Weather Application</h1>
        </div>
        )
    
    };
      
}



>>>>>>> 48a1e7fbd93e61108e22bf9bf2a06b8308d9ba21
    
            <h4 className="py-3">{props.description}</h4>
        </div>
        )




function minmaxTemp(min, max){
    return(
        <h3>
            <span className="px-4">{min}&deg;</span>
            <span className="px-4">{max}&deg;</span>
        </h3>
    )

}

export default Forecast;