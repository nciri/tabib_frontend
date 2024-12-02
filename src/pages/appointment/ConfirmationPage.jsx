import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Box, Typography, Button } from "@mui/material";
import DoneIcon from '@mui/icons-material/Done';

import SimpleDoctorCard from '../../components/SimpleDoctorCard';

const ConfirmationPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { doctor, appointmentDetails } = location.state || {}; // Données passées via React Router

  if (!doctor || !appointmentDetails) {
    return (
      <Box className="error-container">
        <Typography variant="h6" className="error-message">
          Erreur : Les informations sur le médecin ou le rendez-vous sont manquantes.
        </Typography>
        <Button onClick={() => navigate(-1)} className="back-button">
          Retour
        </Button>
      </Box>
    );
  }

  return (
    <Box className="appointment-details-container">
      {/* Titre principal */}
      <Typography variant="h4" className="appointment-title">
        Prenez votre rendez-vous en ligne
      </Typography>
      <Typography variant="subtitle1" className="appointment-subtitle">
        Renseignez les informations suivantes
      </Typography>

      <Box className="appointment-details-content">
        {/* Section principale */}
        <Box className="confirmation-main">
          <Button className="back-button" onClick={() => navigate(-1)}>
            ← Étape précédente
          </Button>
          <Typography variant="h6" className="consultation-title">
            Confirmez l'heure du rendez-vous
          </Typography>
          <Typography className="confirmation-details">
            Vous avez sélectionné le <strong>{appointmentDetails.date}</strong> à <strong>{appointmentDetails.time}</strong>.
          </Typography>
          <br /><br />
          <Button
            variant="contained"
            color="primary"
            className="confirm-button"
            onClick={() => console.log("Rendez-vous confirmé")}
          >
            CONTINUER
          </Button>
        </Box>

        {/* Sidebar */}
        <Box className="appointment-sidebar">
            <SimpleDoctorCard {...doctor} />
            <Box className="appointment-summary">
                <Typography variant="h6" className="summary-title">
                Votre rendez-vous en détail
                </Typography>
                <ul className="summary-list">
                  <li>
                    <DoneIcon color="success" fontSize="small" style={{ marginRight: 5 }} />
                    {appointmentDetails.address}
                  </li>
                  <li>
                    <DoneIcon color="success" fontSize="small" style={{ marginRight: 5 }} />
                    {appointmentDetails.consultationReason}
                  </li>
                  <li>
                    <DoneIcon color="success" fontSize="small" style={{ marginRight: 5 }} />
                    {appointmentDetails.date} · {appointmentDetails.time}
                  </li>
                </ul>
            </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default ConfirmationPage;
