import React, { Component } from "react"; 
// import API from "../utils/API";

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



    





   



export default Forecast;