// Inside the Friend component

import React from 'react';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import bronzeCup from "../Images/bronzeCup.png";
import silverCup from "../Images/silverCup.png";
import goldCup from "../Images/goldCup.png";
import pup1 from "../Images/rsc/bernese_2.png";
import pup2 from "../Images/rsc/bernese.png";
import pup3 from "../Images/rsc/labrador_2.png";
import pup4 from "../Images/rsc/smiley_dog.png";
import pup5 from "../Images/rsc/terrier.png";
import pup6 from "../Images/rocky.png";
import pup7 from "../Images/rsc/labrador.png";
import pup8 from "../Images/rsc/smiley_dog.png";
import pup9 from "../Images/rsc/bernese.png";
import pup10 from "../Images/rsc/bernese_2.png";

const Friend = ({ number, name, xp }) => {
  let cupImage;
  let pupAvatar;

  if (number === 1) {
    cupImage = goldCup;
  } else if (number === 2) {
    cupImage = silverCup;
  } else if (number === 3) {
    cupImage = bronzeCup;
  } else {
    // You can provide a default image or handle other cases here
    cupImage = { number };
  }

  switch (number) {
    case 1:
      pupAvatar = pup1;
      break;
    case 2:
      pupAvatar = pup2;
      break;
    case 3:
      pupAvatar = pup3;
      break;
    case 4:
      pupAvatar = pup4;
      break;
    case 5:
      pupAvatar = pup5;
      break;
    case 6:
      pupAvatar = pup6;
      break;
    case 7:
      pupAvatar = pup7;
      break;
    case 8:
      pupAvatar = pup8;
      break;
    case 9:
      pupAvatar = pup9;
      break;
    case 10:
      pupAvatar = pup10;
      break;
  }

  const avatarStyle = number === 6 ? { transform: 'scale(2)' } : {};

  return (
    <Box display="flex" alignItems="center" marginBottom={2}>
      <div style={{ left: 150, width: "64px" }}>
        {/* Display the cup image */}
        <img src={cupImage} alt={` `} style={{ width: '32px', height: '32px' }} />
      </div>
      <Avatar alt={name} src={pupAvatar} style={{ width: '64px', height: '64px' }} />
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
