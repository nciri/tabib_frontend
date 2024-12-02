import React from 'react';
import { Box, Typography } from '@mui/material';
import DoctorCard from '../components/search/DoctorCard';
import MapSidebar from '../components/search/MapSidebar';

const SearchResultsPage = () => {
  const doctors = [
    {
      id: 2,
      name: 'Dr Fatiha Merzi',
      specialty: 'Médecin généraliste',
      address: '1 Ter Allée Paul Eluard 95100 Argenteuil',
      sector: 'Conventionné secteur 1',
      coordinates: [48.9472, 2.2417], // Coordonnées GPS pour Argenteuil
      slots: {
        'jeudi 19 déc.': ['10:50', '11:40', '12:10'],
        'vendredi 20 déc.': ['09:30', '10:20'],
      },
    },
    {
      id: 2,
      name: 'Dr Jacques Dubois',
      specialty: 'Cardiologue',
      address: '12 Avenue des Champs-Élysées 75008 Paris',
      sector: 'Conventionné secteur 2',
      coordinates: [48.8698, 2.3073], // Coordonnées GPS pour Champs-Élysées
      slots: {
        'jeudi 19 déc.': ['08:50', '09:40'],
        'vendredi 20 déc.': ['09:00', '09:30'],
      },
    },
  ];

  return (
    <div>
      {/* Titre en dehors de la boîte principale */}
      <Typography variant="h6" className="results-title">
      2 résultats
      </Typography>

      {/* Conteneur principal avec DoctorCards et Sidebar */}
      <Box className="search-results-container">
        {/* Bloc principal */}
        <Box className="results-main">
          {doctors.map((doctor, index) => (
            <DoctorCard key={index} doctor={doctor} />
          ))}
        </Box>

        {/* Sidebar avec la carte */}
        <Box className="results-sidebar">
          <Typography variant="h6">Localisation des médecins</Typography>
          <MapSidebar doctors={doctors} />
        </Box>
      </Box>
    </div>
  );
};

export default SearchResultsPage;
