const display = document.getElementById("weather-display");

function renderWeather(weather) {
  display.innerHTML = `
    <h2>${weather.address}</h2>
    <p>${weather.description}</p>
    <p>${weather.temperature}°</p>
  `;

  changeBackground(weather.icon);
}

function changeBackground(icon) {
  document.body.className = "";
  document.body.classList.add(icon);
}

export { renderWeather };
