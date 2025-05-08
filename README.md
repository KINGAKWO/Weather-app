# Weather App

A simple and responsive weather application that allows users to check weather conditions for different cities using the Open-Meteo API.

## Features

- Real-time weather information
- City-based weather search
- Display of temperature, weather condition, and wind speed
- Error handling for invalid inputs or failed API requests
- Clean and responsive user interface

## Technologies Used

- HTML5
- CSS3
- JavaScript (Vanilla)
- Open-Meteo API for weather data
- Open-Meteo Geocoding API for city coordinates

## Project Structure

```plaintext
Weather app/
├── index.html        # Main HTML file
├── style.css         # Styling file
├── script.js         # JavaScript logic

```

## How to Use

1. Open `index.html` in your web browser
2. Enter a city name in the search field
3. Click the "Search" button or press Enter
4. View the weather information for the selected city

## API Integration

The app uses two APIs from Open-Meteo:
- Geocoding API to convert city names to coordinates
- Weather API to fetch current weather data using coordinates

## Features in Detail

- **Search Functionality**: Users can search for any city worldwide
- **Weather Display**: Shows:
  - City name and country
  - Current temperature in Celsius
  - Weather condition
  - Wind speed in km/h
- **Error Handling**: Displays user-friendly error messages for:
  - Empty search fields
  - City not found
  - API request failures

## Styling

The app features a clean, modern design with:
- Responsive layout
- Card-based weather information display
- User-friendly input field and button
- Clear error message display
- Custom background image

## Snap
![image](https://github.com/user-attachments/assets/5f41b475-c1ce-4e6e-8bd8-9df9110cf494)


## Future Improvements

- Add weather forecast functionality
- Include more weather details (humidity, precipitation, etc.)
- Add unit conversion (Celsius/Fahrenheit)
- Implement automatic location detection
- Add weather icons for different conditions

## License

This project is open source and available for personal and educational use.

        
