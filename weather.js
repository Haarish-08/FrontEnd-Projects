document.addEventListener('DOMContentLoaded', () => {
    const apiKey = 'YOUR_API_KEY'; // Replace with your API key from OpenWeatherMap or other weather API
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=London&appid=${apiKey}&units=metric`;

    const cityElement = document.querySelector('.city');
    const dateElement = document.querySelector('.date');
    const tempElement = document.querySelector('.temp');
    const descElement = document.querySelector('.description');
    const humidityElement = document.querySelector('.humidity');
    const windElement = document.querySelector('.wind');

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            console.log(data);

            const { name, main, weather, wind } = data;

            cityElement.textContent = name;
            dateElement.textContent = new Date().toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
            tempElement.textContent = `${Math.round(main.temp)}°C`;
            descElement.textContent = weather[0].description;
            humidityElement.textContent = `${main.humidity}%`;
            windElement.textContent = `${wind.speed} m/s`;
        })
        .catch(error => {
            console.log('Error fetching weather data:', error);
        });
});
