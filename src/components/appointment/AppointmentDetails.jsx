import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Box, Typography, Button } from "@mui/material";

const AppointmentDetails = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { doctor, appointmentDetails } = location.state || {};

  if (!doctor || !appointmentDetails) {
    return <Typography>Erreur : Aucune donnée disponible.</Typography>;
  }

  const consultationReasons = [
    "Consultation de suivi d'acupuncture",
    "Première consultation d'acupuncture",
    "Sevrage tabagique",
    "Accompagnement de chimiothérapie",
    "Accompagnement radiothérapie",
    "Bouffées de chaleurs et ménopause",
  ];

  return (
    <Box className="appointment-details-container">
      <Typography variant="h4" className="appointment-title">
        Prenez votre rendez-vous en ligne
      </Typography>
      <Typography variant="subtitle1" className="appointment-subtitle">
        Renseignez les informations suivantes
      </Typography>

      <Box className="appointment-details-content">
        <Box className="appointment-main">
          <Button className="back-button" onClick={() => navigate(-1)}>
            ← Étape précédente
          </Button>
          <Typography variant="h6" className="consultation-title">
            Choisissez votre motif de consultation
          </Typography>
          <Box className="consultation-reasons">
            {consultationReasons.map((reason, index) => (
              <Button key={index} className="consultation-reason">
                {reason}
              </Button>
            ))}
          </Box>
        </Box>

        <Box className="appointment-sidebar">
          <Box className="doctor-card">
            <img
              src={doctor.image}
              alt={doctor.name}
              className="doctor-image"
            />
            <Typography variant="h6" className="doctor-name">
              {doctor.name}
            </Typography>
            <Typography variant="body2" className="doctor-specialty">
              {doctor.specialty}
            </Typography>
          </Box>
          <Box className="appointment-summary">
            <Typography variant="h6" className="summary-title">
              Votre rendez-vous en détail
            </Typography>
            <ul className="summary-list">
              <li>{appointmentDetails.address}</li>
              <li>
                {appointmentDetails.date} · {appointmentDetails.time}
              </li>
            </ul>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default AppointmentDetails;
