import React, { Component } from 'react';
import Current from "./pages/Current";
import "weather-icons/css/weather-icons.css";
import Forecast from "./pages/Forecast";
import Navtab from "./components/Navtab";

import axios from "axios";
import './App.css';


class App extends React.Component {
  constructor(){
    super();
    this.state = {
      city:"",
    };

    this.getForecast();
    this.weathericon = {
      // Thunderstorm: "wi-thunderstorm",
      // Drizzle: "wi-sleet",
      // Rain: "wi-storm-showers",
      // Snow: "wi-snow",
      // Fog: "wi-fog",
      // Clear:"wi-day-sunny",
      // Clouds:"wi-day-fog"

    }

  }
// Temperature conversion
  calCelsius(temp){
    let cell = Math.floor(temp-239.71);
    return cell;
  }

  //  Create Association with icon id & Weather Icon HERE
  // getWeatherIcon(icons, rangeId){
  //   switch(true){
  //     case rangeId >= 200 && rangeId <= 232:
  //       this.setState({icon: this.weathericon.Clear})
  //       break
  //       case rangeId >= 200 && rangeId <= 232:
  //           this.setState({icon: this.weathericon.Clear})
  //       break
  //   }
  // }

// API CALL - CURRENT WEATHER 
  getWeather = async() => {
    const api_call = await fetch("https://api.openweathermap.org/data/2.5/weather?zip=20001,us&appid=5735b3e048f694014a7f656569a5b4d4")
    const response = await api_call.json();

    console.log(response)

    this.setState({
      city: response.name,
      icon:undefined,
      main:undefined,
      celsius: this.calCelsius(response.main.temp),
      description:response.weather[0].description,
      icon: this.weathericon.Thunderstorm,
      error:false

    })
    
  }

  // API Call Forecast
  getForecast = async() => {

    const forecast_api = await fetch("https://api.openweathermap.org/data/2.5/forecast?zip=20001&appid=5735b3e048f694014a7f656569a5b4d4")
    const response = await forecast_api.json();

    console.log(response)
   
    // PSUEDO CODE HERE loop through the array
    // display corresponding Weather DATA
    // for the weather parameters ran out of time 
    
    // Iterate through OpenWeatherData Array 
    // const results = response.daily.data;
    // for (const i = 0; i < 5; i++) {
    //   const forecast = dailyWeather[i];
    //   forecast.append( "" + Math.round(result[i].temp_celsius) + 
    //   (response.list[i].main.temp) +
    //   (response.list[i].main.temp_max) + 
    //   (response.list[i].main.temp_min) + 
    //   (response.list[i].main.temp) + 
    //   (response.list[i].weather[i].description)

    //   )
    // }


    this.setState({
      city: (response.city.name),
      icon:undefined,
      main:undefined,
      celsius: this.calCelsius(response.list[0].main.temp),
      temp_max: this.calCelsius(response.list[0].main.temp_max),
      temp_min:this.calCelsius(response.list[0].main.temp_min),
      description:(response.list[0].weather[0].description),
      error:false

    })
  }
//  Items to be rendered
  render() {
    return (
      <div className="App">
        < Navtab /> 
        {/* < Form loadweather={this.getWeather}/> */}
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
