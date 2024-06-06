import React from "react";
import { Box, Typography } from "@mui/material";

const TopAgentCard = ({ ...props }) => {
  return (
    <Box className="top-agent-card">
      <Box className="card-img">
        <img src="/img/profile/asal.png" alt="agent" />
      </Box>
      <Box className="card-info">
        <Typography className="card-name">Martin</Typography>
        <Typography className="card-title">Agent</Typography>
      </Box>
    </Box>
  );
};

export default TopAgentCard;
