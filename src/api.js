const fetchWeatherData = async (location) => {
    const apiKey = 'F6ZWV6YHGNEMWY2KRHHPR336W';
    const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${encodeURIComponent(location)}?unitGroup=metric&contentType=json&key=${apiKey}`;

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }
        const weatherData = await response.json();
        console.log('Weather data for', location, weatherData);
        return weatherData;
    } catch (error) {
        console.error('Error fetching weather data:', error);
    }
};

function processWeatherData(data) {
  return {
    address: data.resolvedAddress,
    description: data.currentConditions.conditions,
    temperature: data.currentConditions.temp,
    icon: data.currentConditions.icon,
  };
}

export { fetchWeatherData, processWeatherData };
