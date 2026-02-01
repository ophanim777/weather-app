import { fetchWeatherData, processWeatherData } from "./api";
import { renderWeather } from "./dom";
import "./style.css";

const form = document.getElementById("weather-form");
const input = document.getElementById("location-input");
const toggleBtn = document.getElementById("toggle-unit");

let unit = "metric";


form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const data = await fetchWeatherData(input.value, unit);
  const weather = processWeatherData(data);
  console.log(weather);
    renderWeather(weather);
});

toggleBtn.addEventListener("click", async () => {
  unit = unit === "metric" ? "us" : "metric";
  if (input.value) {
    const data = await fetchWeatherData(input.value, unit);
    const weather = processWeatherData(data);
    renderWeather(weather);
  }
});

