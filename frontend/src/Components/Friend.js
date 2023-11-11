import React from 'react';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

const Friend = ({ number, name, xp }) => {
  return (
    <Box display="flex" alignItems="center" marginBottom={2}>
        <p style={{width: "96px"}} >
            {number}
        </p>
      <Avatar alt={name} src="/path-to-your-image.jpg" />
      <Box marginLeft={2}>
        <div >
            <Typography variant="h6" style={{width: "96px"}}>{name}</Typography>
            <Typography variant="body2">XP: {xp}</Typography>
        </div>
      </Box>
    </Box>
  );
};

export default Friend;
