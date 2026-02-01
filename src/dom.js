const display = document.getElementById("weather-display");

function renderWeather(weather) {
  const display = document.getElementById("weather-display");
  if (!display) return;
  display.innerHTML = `
    <h2>${weather.address}</h2>
    <p>${weather.description}</p>
    <p>${weather.temperature}°</p>
  `;
}

function changeBackground(icon) {
  document.body.className = "";
  document.body.classList.add(icon);
}

export { renderWeather };
