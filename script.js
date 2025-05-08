document.getElementById("searchBtn").addEventListener("click", () => {
    const city = document.getElementById("cityField").value.trim();
    if(!city) {
        showError("Please enter a city name");
        return;
    }
    if(!/^[a-zA-Z\s-]+$/.test(city)) {
        showError("Please enter a valid city name");
        return;
    }
    getCoordinates(city);
});
async function getCoordinates(city) {
    showError("");
    try {
        const response = await fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(city)}&count=1`);

        if (!response.ok) {
            throw new Error("City not found");
        }
    const data = await response.json();
    if(!data.results || data.results.length === 0) {
        throw new Error("City not found");
    }

    const { latitude, longitude , name ,country } = data.results[0];
    getWeather(latitude, longitude , name, country);
    } catch (error) {
        showError(error.message);
    }
}
async function getWeather(latitude, longitude, name, country) {
    try {
        const response = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`     
        );

        if(!response.ok) {
            throw new Error("Failed to fetch weather data");
        }
        const data = await response.json();
        displayWeather(data.current_weather, city, country);
    } catch (error) {
        showError(error.message);
    }
}
document.getElementById("cityField").addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
        document.getElementById("searchBtn").click();
    }
});
const weatherDescription = {
    0: "Clear sky",
    1: "Mainly clear",
    2: "Partly cloudy",
    3: "Overcast",
    45: "Foggy",
    48: "Depositing rime fog",
    51: "Light drizzle",
    53: "Moderate drizzle",
    55: "Dense drizzle",
    61: "Slight rain",
    63: "Moderate rain",
    65: "Heavy rain",
    71: "Slight snow fall",
    73: "Moderate snow fall",
    75: "Heavy snow fall",
    95: "Thunderstorm"
};
function displayWeather(weather, city, country) {
    const weatherContainer = document.getElementById("weatherContainer");
    const cityHeader = document.getElementById("cityName");
    const temp = document.getElementById("temperature");
    const condition = document.getElementById("condition");  
    const windSpeed = document.getElementById("windSpeed");

    const weatherCondition = weatherDescription[weather.weathercode] || "Unknown";

    weatherContainer.style.display = "block";
    cityHeader.textContent = `${city}, ${country}`;
    temp.textContent = `${weather.temperature}°C`;
    condition.textContent = weatherCondition;
    windSpeed.textContent = `${weather.windspeed} km/h`;
}

function showError(message) {
    const weatherContainer = document.getElementById("weatherContainer");
    weatherContainer.style.display = "none";
    const errorPara = document.getElementById("errorMessage");
    errorPara.textContent = message;
    errorPara.style.display = message ? "block" : "none";
}