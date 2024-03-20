function getWeather() {
    const city = document.getElementById('city').value;
    const apiKey = 'YOUR_API_KEY'; // Replace 'YOUR_API_KEY' with your actual API key from a weather API provider
    
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
        .then(response => response.json())
        .then(data => {
            const weatherResults = document.getElementById('weather-results');
            weatherResults.innerHTML = `Temperature: ${data.main.temp}°C, ${data.weather[0].description}`;
        })
        .catch(error => {
            console.error('Error fetching weather data:', error);
            const weatherResults = document.getElementById('weather-results');
            weatherResults.innerHTML = 'Error fetching weather data. Please try again.';
        });
}
