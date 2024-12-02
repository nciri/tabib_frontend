import React from 'react';
import { useNavigate } from "react-router-dom";

import { Box, Typography, Button, IconButton } from '@mui/material';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';


const DoctorCard = ({ doctor }) => {
  const { id, name, specialty, address, sector, slots } = doctor;
  // Fonction utilitaire pour extraire la date
  const extractDate = (dayString) => {
    const parts = dayString.split(' '); // Sépare la chaîne en ["jeudi", "19", "déc."]
    return `${parts[1]} ${parts[2]}`; // Concatène uniquement "19 déc."
  };

  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/practitioner/${id}`);
  };

  const handleTimeSlotClick = (doctor, day, time) => {
    navigate("/appointment-details", {
      state: {
        doctor,
        appointmentDetails: {
          date: day, // Exemple
          time: time,
          address: doctor.address
        },
      },
    });
  };


  return (
    <Box className="doctor-card">
      {/* Bloc des informations du médecin */}
      <Box className="doctor-info">
        <Typography variant="h6" className="doctor-name">{name}</Typography>
        <Typography variant="body2" className="doctor-specialty">{specialty}</Typography>
        <Typography variant="body2" className="doctor-address">
          <span role="img" aria-label="location">📍</span> {address}
        </Typography>
        <Typography variant="body2" className="doctor-sector">
          <span role="img" aria-label="currency">💶</span> {sector}
        </Typography>
        <Button variant="contained" className="appointment-button" onClick={handleClick}>
          Prendre Rendez-vous
        </Button>
      </Box>

      {/* Bloc des créneaux horaires */}
      <Box className="doctor-slots">
        <Box className="slots-header">
          <IconButton>
            <ArrowBackIosIcon />
          </IconButton>
          <Typography variant="body2">Horaires disponibles</Typography>
          <IconButton>
            <ArrowForwardIosIcon />
          </IconButton>
        </Box>
        <Box className="slots-grid">
          {Object.keys(slots).map((day, index) => (
            <Box key={index} className="slot-day">
              <Typography className="day-name">{day.split(' ')[0]}</Typography>
              <Typography className="slot-date">{extractDate(day)}</Typography>
              {slots[day].map((time, idx) => (
                <Button
                    key={idx}
                    className="slot-time"
                    onClick={() => handleTimeSlotClick(doctor, day, time)}
                  >
                    {time}
                  </Button>
              ))}
            </Box>
          ))}
        </Box>
        <Button variant="text" className="view-more">
          Voir plus d'horaires
        </Button>
      </Box>
    </Box>
  );
};

export default DoctorCard;
