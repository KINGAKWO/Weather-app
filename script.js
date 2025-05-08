document.getElementById("searchBtn").addEventListener("click", ()=> {
    const city = document.getElementById("cityField").value.trim();
    if(city) {
        getCoordinates(city);
    }else {
        showError("Please enter a city name");
    }
});