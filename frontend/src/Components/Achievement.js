import React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import bronzeCup from "../Images/bronzeCup.png";
import goldCup from "../Images/goldCup.png";
import silverCup from "../Images/silverCup.png";

const Achievement = ({ name, level}) => {
    const styles = [
        { width: 30, height: 30, marginBottom:"20px",},
        { width: 30, height: 30, filter: "grayscale(100%)", marginBottom:"20px",}
    ];
    let cupStyle;

    if (level == 1) {
        cupStyle = [styles[0], styles[0], styles[0]];
    }
    if (level == 2) {
        cupStyle = [styles[0], styles[0], styles[1]];
    }
    if (level == 3) {
        cupStyle = [styles[0], styles[1], styles[1]];
    }
    if (level == 0) {
        cupStyle = [styles[1], styles[1], styles[1]];
    }

    return (
        <Box display="flex" alignItems="center" justifyContent="center" marginBottom="3px">
            <Typography variant='h5' style={{ textAlign: "center", margin: "0", padding: "0", marginRight: "8px", marginBottom:"20px"}}>{name}</Typography>
            <img src={bronzeCup} style={cupStyle[0]} alt="Bronze Cup" />
            <img src={silverCup} style={cupStyle[1]} alt="Silver Cup" />
            <img src={goldCup} style={cupStyle[2]} alt="Gold Cup" />
        </Box>
    
    )
};

export default Achievement;