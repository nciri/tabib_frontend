import React from 'react';
import { Card, CardContent, Typography, Button, Box } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EuroIcon from '@mui/icons-material/Euro';

const DoctorCard = ({ name, specialty, address, sector, nextAppointment, replacement }) => {
  return (
    <Card className="doctor-card">
      <CardContent>
        {/* Doctor Information */}
        <Typography variant="h6" className="doctor-name">{name}</Typography>
        <Typography variant="body2" className="doctor-specialty">{specialty}</Typography>
        <Box display="flex" alignItems="center" className="doctor-address">
          <LocationOnIcon fontSize="small" />
          <Typography variant="body2">{address}</Typography>
        </Box>
        <Box display="flex" alignItems="center" className="doctor-sector">
          <EuroIcon fontSize="small" />
          <Typography variant="body2">{sector}</Typography>
        </Box>

        {/* Appointment Information */}
        {nextAppointment ? (
          <Typography variant="body2" className="appointment-info">
            Prochain RDV le <strong>{nextAppointment}</strong>
          </Typography>
        ) : (
          <Typography variant="body2" className="appointment-info">
            Indique une consultation assurée par un remplaçant : <strong>{replacement}</strong>
          </Typography>
        )}

        {/* Appointment Button */}
        <Button variant="contained" className="appointment-button">Prendre Rendez-vous</Button>
      </CardContent>
    </Card>
  );
};

export default DoctorCard;
