import React, { useState } from 'react';
import { TextField, Button, Grid } from '@mui/material';

interface SearchFormProps {
  onSearch: (city: string) => void;
}

const SearchForm: React.FC<SearchFormProps> = ({ onSearch }) => {
  const [city, setCity] = useState('');

  const handleSearch = () => {
    onSearch(city);
  };

  return (
    <Grid container spacing={2} alignItems="center">
      <Grid item>
        <TextField
          label="Enter city"
          variant="outlined"
          placeholder='eg. New York'
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
      </Grid>
      <Grid item>
        <Button variant="contained" color="primary" onClick={handleSearch}>
          Search
        </Button>
      </Grid>
    </Grid>
  );
};

export default SearchForm;
