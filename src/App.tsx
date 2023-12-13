import React, { useState } from 'react';
import axios from 'axios';
import { Container, Typography, CssBaseline, Paper } from '@mui/material';
import SearchForm from './components/SearchForm';
import WeatherCard from './components/WeatherCard';

const App: React.FC = () => {
  const [weatherData, setWeatherData] = useState<any | null>(null);

  const searchWeather = async (city: string) => {
    try {
      const apiKey = 'aed869c3ee1cfaf0cd92eae4b92b33df';
      const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
      const response = await axios.get(apiUrl);
      setWeatherData(response.data);
    } catch (error) {
      console.error('Error fetching weather data:', error);
      setWeatherData(null);
    }
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Paper elevation={3} style={{ padding: '20px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Typography variant="h4" gutterBottom>
          Weather App
        </Typography>
        <SearchForm onSearch={searchWeather} />
        {weatherData && (
          <WeatherCard
            temperature={weatherData.main.temp}
            windSpeed={weatherData.wind.speed}
            conditions={weatherData.weather[0].description}
          />
        )}
      </Paper>
    </Container>
  );
};

export default App;
