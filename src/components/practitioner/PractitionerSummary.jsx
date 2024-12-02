import React from "react";
import { Card, CardContent, Typography, Button } from "@mui/material";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";


const PractitionerSummary = ({ address }) => {
  return (
    <Card className="practitioner-summary">
      <CardContent>
        <Typography variant="h6" sx={{ fontWeight: "bold", marginBottom: "10px" }}>
          En résumé
        </Typography>
        <Typography variant="body1" sx={{ marginBottom: "10px" }}>
          Accepte les nouveaux patients sur Doctolib
        </Typography>
        <Typography variant="body1" sx={{ marginBottom: "10px" }}>
          {address}
        </Typography>
        <Button
          variant="contained"
          sx={{
            backgroundColor: "#1d5f0d",
            color: "#fff",
            textTransform: "none",
            fontWeight: "bold",
            marginTop: "20px",
            ":hover": {
              backgroundColor: "#14360b",
            },
          }}
          fullWidth
          startIcon={<CalendarTodayIcon />}
        >
          PRENDRE RENDEZ-VOUS
        </Button>
      </CardContent>
    </Card>
  );
};

export default PractitionerSummary;
