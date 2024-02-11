const fs = require('fs');

const cities = [
  { name: 'New York', lat: 40.7128, lng: -74.0060 },
  { name: 'London', lat: 51.5074, lng: -0.1278 },
  { name: 'Paris', lat: 48.8566, lng: 2.3522 },
  { name: 'Tokyo', lat: 35.6895, lng: 139.6917 },
  { name: 'Sydney', lat: -33.8651, lng: 151.2099 },
  { name: 'Rome', lat: 41.9028, lng: 12.4964 },
  { name: 'Cairo', lat: 30.0444, lng: 31.2357 },
  { name: 'Rio de Janeiro', lat: -22.9068, lng: -43.1729 },
  { name: 'Dubai', lat: 25.2048, lng: 55.2708 },
  { name: 'Rabat', lat: 34.0209, lng: -6.8416 }
];

function selectRandomCity(cities) {
  const randomIndex = Math.floor(Math.random() * cities.length);
  return cities[randomIndex];
}

async function fetchData(city) {
  try {
    const response = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${city.lat}&longitude=${city.lng}&current_weather=true`);
    const data = await response.json();
    return data.current_weather.temperature;
  } catch (error) {
    throw new Error(`Failed to fetch weather data for ${city.name}: ${error}`);
  }
}

async function main() {
  try {
    // Read city name from input.txt
    const cityName = await fs.readFile('input.txt', 'utf-8');

    // Find city object by name
    const city = cities.find(c => c.name === cityName.trim());
    if (!city) {
      throw new Error(`City "${cityName.trim()}" not found in the list.`);
    }

    // Fetch temperature for the chosen city
    const temperature = await fetchData(city);

    // Delete existing file for the chosen city (if exists)
    await fs.unlink(`${city.name}.txt`).catch(() => {});

    // Write temperature result into a new file
    await fs.writeFile(`${city.name}.txt`, `${temperature} °C`);

    console.log(`Temperature for ${city.name}: ${temperature} °C`);
    console.log(`Temperature result written to ${city.name}.txt`);
  } catch (error) {
    console.error(error.message);
  }
}

main();

