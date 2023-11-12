import React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import bronzeCup from "../Images/bronzeCup.png";
import goldCup from "../Images/goldCup.png";
import silverCup from "../Images/silverCup.png";

const Achievement = ({ name, description, level }) => {
    const styles = [
        { width: 30, height: 30, marginBottom: "20px", },
        { width: 30, height: 30, filter: "grayscale(100%)", marginBottom: "20px", },
        { width: 40, height: 40, marginBottom: "20px", },
        { width: 40, height: 40, filter: "grayscale(100%)", marginBottom: "20px", },
    ];
    let cupStyle;

    if (level == 1) {
        cupStyle = [styles[0], styles[2], styles[0]];
    }
    if (level == 2) {
        cupStyle = [styles[0], styles[2], styles[1]];
    }
    if (level == 3) {
        cupStyle = [styles[0], styles[3], styles[1]];
    }
    if (level == 0) {
        cupStyle = [styles[1], styles[3], styles[1]];
    }

    return (
        <div>
            <Box display="flex" alignItems="center" justifyContent="space-between" style={{
                marginLeft: "10vw", marginRight: "5vw"
            }}>
                <Box display="flex" alignItems="center">
                    <img src={silverCup} style={cupStyle[0]} alt="Silver Cup" />
                    <img src={goldCup} style={cupStyle[1]} alt="Gold Cup" />
                    <img src={bronzeCup} style={cupStyle[2]} alt="Bronze Cup" />
                </Box>
                <Stack direction="column" justifyContent="flex-start" alignItems="flex-start" spacing={2} style={{ width: "75%" }}>
                    <Typography variant='h5' style={{ margin: "0", padding: "0", marginRight: "8px" }}>{name}</Typography>
                    <Typography variant='h6' style={{ margin: "0", padding: "0" }}>{description}</Typography>
                </Stack>
            </Box>
        </div >

    )
};

export default Achievement;