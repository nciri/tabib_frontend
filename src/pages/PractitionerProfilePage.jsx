import React from "react";
import { Box } from "@mui/material";
import PractitionerHeader from "../components/practitioner/PractitionerHeader";
import PractitionerDetails from "../components/practitioner/PractitionerDetails";
import PractitionerSummary from "../components/practitioner/PractitionerSummary";

const PractitionerProfilePage = () => {
  const practitioner = {
    id: 2,
    name: "Dr Patrick Bitan",
    specialty: "Médecin généraliste",
    address: "123 Rue Ordener, 75018 Paris",
    description: "Dr Patrick Bitan est un médecin généraliste reconnu...",
    consultationInfo: [
      "Obtenez un rendez-vous rapidement",
      "Consultez en vidéo depuis chez vous",
      "Échangez des documents en toute sécurité",
    ],
    tariffs: [
      { type: "Consultation", price: "40 €" },
      { type: "Consultation vidéo", price: "40 €" },
    ],
    schedule: {
      days: "Du lundi au vendredi",
      hours: "9h00 - 19h00",
    },
  };
  
  return (
    <Box className="practitioner-profile">
      {/* Header */}
      <PractitionerHeader name={practitioner.name} specialty={practitioner.specialty} />

      {/* Content */}
      <Box className="practitioner-content">
        {/* Left Section */}
        <PractitionerDetails
          description={practitioner.description}
          consultationInfo={practitioner.consultationInfo}
          schedule={practitioner.schedule}
          tariffs={practitioner.tariffs}
        />

        {/* Right Section */}
        <PractitionerSummary address={practitioner.address} />
      </Box>
    </Box>
  );
};

export default PractitionerProfilePage;
