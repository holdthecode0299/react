import axios from "axios";
const BASEURL = "api.openweathermap.org/data/2.5/weather?zip=20001,us";
const APIKEY = "5735b3e048f694014a7f656569a5b4d4";

export default {
    function(temp) {
        return axios.get(BASEURL + temp + APIKEY);
    },
    current: function() {
        return axios.get("https://samples.openweathermap.org/data/2.5/weather?zip=20001,us&appid=5735b3e048f694014a7f656569a5b4d4");
    },
    fiveDay: function (){
        return axios.get("https://samples.openweathermap.org/data/2.5/forecast?zip=20001&appid=5735b3e048f694014a7f656569a5b4d4")
    }
};

const api = {
    baseUrl: "https://samples.openweathermap.org/data/2.5/",
    daily: "forecase/daily",
    current: "weather",

    key: "5735b3e048f694014a7f656569a5b4d4",
    getDaily: function() {
        return this.baseUrl+ this.daily;
    },
    getCurrent: function(){
        return this.baseUrl+ this.current;
    }
}