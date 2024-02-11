const express = require('express');
const axios = require('axios');

const app = express();
const PORT = 3000;

// Existing route
app.get('/', (req, res) => {
    res.send('Hello, this is your existing route!');
});

// New route for weather endpoint
app.get('/weather', async (req, res) => {
    try {
        // Extract city name from query parameter
        const cityName = req.query.city;

        if (!cityName) {
            return res.status(400).json({ error: 'City parameter is missing in the request.' });
        }

        // Make a request to the weather API (replace API_KEY with your actual API key)
        const apiKey = 'your_api_key';
        const weatherResponse = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`);

        // Extract temperature from the API response
        const temperature = weatherResponse.data.main.temp;

        // Send the temperature in the response
        res.json({ temperature });
    } catch (error) {
        if (error.response && error.response.status === 404) {
            return res.status(404).json({ error: 'City not found.' });
        } else {
            return res.status(500).json({ error: 'Internal server error.' });
        }
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
