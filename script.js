
const showdate = new Date();

document.querySelector("#set-date-time").innerHTML = showdate;



document.getElementById('search').addEventListener('click', async () => {
    const city = document.getElementById('input-data').value || 'Delhi';
    const apiKey = 'f00c38e0279b7bc85480c3fe775d518c';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
    
    try {
        const response = await fetch(url);
        const data = await response.json();

        if (data.cod === 200) {
            document.getElementById('City').textContent = data.name;
            document.getElementById('temperature').textContent = `${data.main.temp} °C`;
            document.getElementById('sky-condition').textContent = data.weather[0].description;
            document.getElementById('wind-speed').textContent = `Wind Speed: ${data.wind.speed} m/s`;
           } else {
            alert('City not found!');
        }
    } catch (error) {
        console.error('Error fetching weather data:', error);
        alert('Unable to fetch weather data. Please try again later.');
    }
});
