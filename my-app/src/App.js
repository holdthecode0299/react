import React, { Component } from 'react';
import Current from "./pages/Current";
import Forecast from "./pages/Forecast";
import Navtab from "./components/Navtab";

import axios from "axios";
import './App.css';


class App extends React.Component {
  constructor(){
    super()
    this.state = {};
    this.getWeather();
    this.getForecast();
    // this.weathericon = {
    //   Thunderstorm: "wi-thunderstorm",
    //   Drizzle: "wi-sleet",
    //   Rain: "wi-storm-showers",
    //   Snow: "wi-snow",
    //   Fog: "wi-fog",
    //   Clear:"wi-day-sunny",
    //   Clouds:"wi-day-fog"

    // }

  }

  calCelsius(temp){
    let cell = Math.floor(temp-239.71);
    return cell;
  }

  // getWeatherIcon(icons, reangelID){
  //   switch(true){
  //     case rangeId >= 200 && rangeId <= 232:
  //       this.setState({icon: this.weathericon.Clear})
  //       break
  //       case rangeId >= 200 && rangeId <= 232:
  //           this.setState({icon: this.weathericon.Clear})
  //           break
  //   }
  // }

  getWeather = async() => {
    const api_call = await fetch("https://api.openweathermap.org/data/2.5/weather?zip=20001,us&appid=5735b3e048f694014a7f656569a5b4d4")
    const response = await api_call.json();

    console.log(response)

    this.setState({
      city: response.name,
      icon:undefined,
      main:undefined,
      celsius: this.calCelsius(response.main.temp),
      temp_max: this.calCelsius(response.main.temp_max),
      temp_min:this.calCelsius(response.main.temp_min),
      description:response.weather[0].description,
      // icon: this.weathericon.Thunderstorm,
      error:false

    })
    
  }

  getForecast = async() => {
    const forecast_api = await fetch("https://api.openweathermap.org/data/2.5/forecast?zip=20001&appid=5735b3e048f694014a7f656569a5b4d4")
    const response = await forecast_api.json();

    console.log(response)
  }
 
  render() {
    return (
      <div className="App">
        < Navtab /> 
        < Forecast 
        city={this.state.city}
        temp_celsius={this.state.celsius}
        temp_max={this.state.temp_max}
        temp_min={this.state.temp_min}
        description={this.state.description}
        weathericon={this.state.icon}
        />

        < Current 
            city={this.state.city}
            temp_celsius={this.state.celsius}
            temp_max={this.state.temp_max}
            temp_min={this.state.temp_min}
            description={this.state.description}
            weathericon={this.state.icon}
        />
      </div>
    )
  }
}

export default App;
