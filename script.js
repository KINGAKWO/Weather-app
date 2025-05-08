document.getElementById("searchBtn").addEventListener("click", ()=> {
    const city = document.getElementById("cityField").value.trim();
    if(city) {
        getCoordinates(city);
    }else {
        showError("Please enter a city name");
    }
});
async function getCoordinates(city) {
    showError("");
    try {
        const response = await fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${city}&count=1`
    );

    if (!response.ok) {
        throw new Error("City not found");
    }
    const data = await response.json();
    if(data.results || data.results.length === 0) {
        throw new Error("City not found");
    }

    const { latitude, longitude , name ,country } = data.results[0];
    getWeather(latitude, longitude , name, country);
    } catch (error) {
        showError(error.message);
    }
    
}