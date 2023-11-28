const express = require('express');
const axios = require('axios');

const app = express();
const PORT = 3000;

app.get('/weather', async (req, res) => {
    const location = req.query.location;
    if (!location) {
        return res.status(400).json({ error: 'Location parameter is required' });
    }

    // Use OpenWeatherMap API for weather data (replace with your API key)
    const apiKey = '544f972fe666e20c2fa142dc3eab6abe';
    const apiUrl = `http://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}`;

    try {
        const response = await axios.get(apiUrl);
        const data = response.data;
        res.json(data);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch weather data' });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
