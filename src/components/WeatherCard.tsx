import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';

interface WeatherCardProps {
  temperature: number;
  windSpeed: number;
  conditions: string;
}

const WeatherCard: React.FC<WeatherCardProps> = ({ temperature, windSpeed, conditions }) => {
  return (
    <Card variant="outlined">
      <CardContent>
        <Typography variant="h6" gutterBottom>
          Weather Information
        </Typography>
        <Typography>Temperature: {temperature}°C</Typography>
        <Typography>Wind Speed: {windSpeed} m/s</Typography>
        <Typography>Conditions: {conditions}</Typography>
      </CardContent>
    </Card>
  );
};

export default WeatherCard;
