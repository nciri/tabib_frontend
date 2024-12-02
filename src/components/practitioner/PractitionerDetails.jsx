import React from "react";
import { Card, CardContent, Typography } from "@mui/material";

const PractitionerDetails = ({ description, consultationInfo, schedule, tariffs }) => {
  return (
    <div className="practitioner-details">
      {/* Consultation Info */}
      <Card>
        <CardContent>
          <Typography variant="h6" sx={{ fontWeight: "bold", marginBottom: "10px" }}>
            Le praticien vous propose :
          </Typography>
          <ul style={{ paddingLeft: "20px" }}>
            {consultationInfo.map((info, index) => (
              <li key={index} style={{ marginBottom: "10px" }}>
                <Typography variant="body1">{info}</Typography>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>

      {/* Présentation */}
      <Card>
        <CardContent>
          <Typography variant="h6" sx={{ fontWeight: "bold", marginBottom: "10px" }}>
            Présentation
          </Typography>
          <Typography variant="body1">{description}</Typography>
        </CardContent>
      </Card>

      {/* Horaires */}
      <Card>
        <CardContent>
          <Typography variant="h6" sx={{ fontWeight: "bold", marginBottom: "10px" }}>
            Horaires et coordonnées
          </Typography>
          <Typography variant="body1" sx={{ marginBottom: "5px" }}>
            {schedule.days} de {schedule.hours}
          </Typography>
        </CardContent>
      </Card>

      {/* Tarifs */}
      <Card>
        <CardContent>
          <Typography variant="h6" sx={{ fontWeight: "bold", marginBottom: "10px" }}>
            Tarifs
          </Typography>
          <ul style={{ paddingLeft: "20px" }}>
            {tariffs.map((tariff, index) => (
              <li key={index} style={{ marginBottom: "10px" }}>
                <Typography variant="body1">
                  {tariff.type} : {tariff.price}
                </Typography>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </div>
  );
};

export default PractitionerDetails;
