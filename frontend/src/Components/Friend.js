// Inside the Friend component

import React from 'react';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import bronzeCup from "../Images/bronzeCup.png";
import silverCup from "../Images/silverCup.png";
import goldCup from "../Images/goldCup.png";

const Friend = ({ number, name, xp }) => {
  let cupImage;

  if (number === 1) {
    cupImage = goldCup;
  } else if (number === 2) {
    cupImage = silverCup;
  } else if (number === 3) {
    cupImage = bronzeCup;
  } else {
    // You can provide a default image or handle other cases here
    cupImage = {number};
  }

  return (
    <Box display="flex" alignItems="center" marginBottom={2}>
        <div style={{ left: 150, width: "64px" }}>
            {/* Display the cup image */}
            <img src={cupImage} alt={` `} style={{ width: '32px', height: '32px' }} />
        </div>
        <Avatar alt={name} src="/path-to-your-image.jpg" />
        <Box marginLeft={2}>
          <div>
              <Typography variant="h6" style={{ left: 200, width: "96px" }}>{name}</Typography>
              <Typography variant="body2">XP: {xp}</Typography>
          </div>
        </Box>
    </Box>
  );
};

export default Friend;
