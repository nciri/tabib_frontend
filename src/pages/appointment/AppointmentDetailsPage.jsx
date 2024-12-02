import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Box, Typography, Button, List, ListItem, ListItemButton, ListItemText } from "@mui/material";

import SimpleDoctorCard from '../../components/SimpleDoctorCard';

const AppointmentDetailsPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { doctor, appointmentDetails } = location.state || {}; // Si state est null, cela évite une erreur

  const consultationReasons = [
    "Consultation de suivi d'acupuncture",
    "Première consultation d'acupuncture",
    "Sevrage tabagique",
    "Accompagnement de chimiothérapie",
    "Accompagnement radiothérapie",
    "Bouffées de chaleurs et ménopause",
  ];

  if (!doctor || !appointmentDetails) {
    // Gère le cas où les données sont manquantes
    return (
      <Box className="error-container">
        <Typography variant="h6" className="error-message">
          Erreur : Les informations sur le médecin ou le rendez-vous sont
          manquantes.
        </Typography>
        <Button onClick={() => navigate(-1)} className="back-button">
          Retour
        </Button>
      </Box>
    );
  }

  const handleConsultationReasonClick = (reason) => {
    navigate("/confirmation", {
      state: {
        doctor,
        appointmentDetails: {
          ...appointmentDetails,
          consultationReason: reason,
        },
      },
    });
  };
  
  return (
    <Box className="appointment-details-container">
      <Typography variant="h4" className="appointment-title">
        Prenez votre rendez-vous en ligne
      </Typography>
      <Typography variant="subtitle1" className="appointment-subtitle">
        Renseignez les informations suivantes
      </Typography>

      <Box className="appointment-details-content">
        {/* Section principale */}
        <Box className="appointment-main">
          <Button className="back-button" onClick={() => navigate(-1)}>
            ← Étape précédente
          </Button>
          <br />
          <Typography variant="h8" className="consultation-title">
            Choisissez votre motif de consultation
          </Typography>
          <br /><br />
          <List className="list-bordered">
            {consultationReasons.map((reason, index) => (
              <ListItem disablePadding key={index} className="list-item">
                <ListItemButton onClick={() => handleConsultationReasonClick(reason)}>
                  <ListItemText primary={reason} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>

        {/* Sidebar */}
        <Box className="appointment-sidebar">
          <SimpleDoctorCard {...doctor} />
          <Box className="appointment-summary">
            <Typography variant="h8" className="summary-title">
              Votre rendez-vous en détail
            </Typography>
            <ul className="summary-list">
              <li>{appointmentDetails.address}</li>
              <li>
                {appointmentDetails.date} à {appointmentDetails.time}
              </li>
            </ul>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default AppointmentDetailsPage;
