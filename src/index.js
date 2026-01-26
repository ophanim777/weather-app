import { fetchWeather, processWeatherData } from "./api";
import { renderWeather } from "./dom";

const form = document.getElementById("weather-form");
const input = document.getElementById("location-input");
const toggleBtn = document.getElementById("toggle-unit");

let unit = "metric";


form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const data = await fetchWeather(input.value, unit);
  const weather = processWeatherData(data);
  console.log(weather);
    renderWeather(weather);
});

toggleBtn.addEventListener("click", () => {
  unit = unit === "metric" ? "us" : "metric";
});
