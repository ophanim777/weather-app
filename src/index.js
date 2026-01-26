import { fetchWeather, processWeatherData } from "./api";
import { renderWeather } from "./dom";

const form = document.getElementById("weather-form");
const input = document.getElementById("location-input");
const toggleBtn = document.getElementById("toggle-unit");
