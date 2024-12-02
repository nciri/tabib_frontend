import React, { useState } from 'react';
import { TextField, Button, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const SearchBar = () => {
  const [specialty, setSpecialty] = useState('');
  const [location, setLocation] = useState('');
  const navigate = useNavigate();

  const handleSearch = () => {
    if (specialty && location) {
      navigate(`/results?specialty=${encodeURIComponent(specialty)}&location=${encodeURIComponent(location)}`);
    } else {
      alert('Veuillez remplir tous les champs de recherche.');
    }
  };

  return (
    <Box className="search-bar">
      <TextField
        placeholder="Spécialité, établissement..."
        variant="outlined"
        size="small"
        value={specialty}
        onChange={(e) => setSpecialty(e.target.value)}
        className="search-input"
      />
      <TextField
        placeholder="Localisation"
        variant="outlined"
        size="small"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        className="search-input"
      />
      <Button
        variant="contained"
        onClick={handleSearch}
        className="search-button"
      >
        Rechercher
      </Button>
    </Box>
  );
};

export default SearchBar;
