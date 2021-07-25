import { API_KEY_WEATHER } from "../Service/Keys";
import { useState } from "react";

const Weather = (props) => {
  const [weather, setWeather] = useState("");

  const API = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${API_KEY_WEATHER}`;

  fetch(API)
    .then((response) => response.json())
    .then((data) => {
      return getData(data);
    });

  const getData = (data) => {
    setWeather(data.weather[0].main);
  };

  return <label>{props.city}: {weather}</label>;
};

export default Weather;
