const fetchWeatherData = async () => {
    const apiKey = 'F6ZWV6YHGNEMWY2KRHHPR336W';
    const location = 'Medan';
    const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${encodeURIComponent(location)}?unitGroup=metric&contentType=json&key=${apiKey}`;

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }
        const weatherData = await response.json();
        console.log('Weather data for Medan:', weatherData);
    } catch (error) {
        console.error('Error fetching weather data:', error);
    }
};

// Call the function to fetch weather data
fetchWeatherData();

function processWeatherData(data) {
  return {
    address: data.resolvedAddress,
    description: data.currentConditions.conditions,
    temperature: data.currentConditions.temp,
    icon: data.currentConditions.icon,
  };
}

export { fetchWeather, processWeatherData };
