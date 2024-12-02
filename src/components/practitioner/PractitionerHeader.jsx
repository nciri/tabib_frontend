import React from "react";
import { Box, Typography } from "@mui/material";

const PractitionerHeader = ({ name, specialty }) => {
  return (
    <Box className="practitioner-header">
      <Typography variant="h4" className="practitioner-name">
        {name}
      </Typography>
      <Typography variant="h6" className="practitioner-specialty">
        {specialty}
      </Typography>
    </Box>
  );
};

export default PractitionerHeader;
