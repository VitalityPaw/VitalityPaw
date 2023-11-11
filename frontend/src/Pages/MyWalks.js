import * as React from "react";
import Box from '@mui/material/Box';
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import PastWalk from "../Components/PastWalk";

import itinary1 from "../Images/itinary1.png";
import itinary2 from "../Images/itinary2.png";
import itinary3 from "../Images/itinary3.png";
import itinary4 from "../Images/itinary4.png";
import itinary5 from "../Images/itinary5.png";
import itinary6 from "../Images/itinary6.png";

export default function MyWalks() {
    let walks = [
        ["Rocky", "12 nov. 2023", "12:00", "13:37", "1:37", "7,3 km", itinary1, "Georgia"],
        ["Rocky", "11 nov. 2023", "08:30", "09:45", "1:15", "5,5 km", itinary2, "Stephane"],
        ["Rocky", "11 nov. 2023", "15:00", "16:30", "1:30", "15 km", itinary3, "Rianando"],
        ["Rocky", "11 nov. 2023", "07:00", "09:00", "2:00", "10 km", itinary4, "Rianando"],
        ["Rocky", "10 nov. 2023", "14:00", "15:30", "1:30", "8 km", itinary5, "Georgia"],
        ["Rocky", "10 nov. 2023", "18:45", "19:30", "0:45", "3,7 km", itinary6, "Eric"]
    ];

    return (
        <>
            <Header name="Mes balades" />
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    height: "64vh",
                    overflow: "hidden",
                    overflowY: "scroll",
                    backgroundColor: "#FFF4EF"
                }}
            >

                {walks.map((walk, index) => (
                    <PastWalk key={index} dogName={walk[0]} walkDate={walk[1]} startHour={walk[2]} endHour={walk[3]} walkDuration={walk[4]} walkDistance={walk[5]} itinary={walk[6]} walker={walk[7]}/>
                ))}
            </Box>
            <Footer />
        </>
    );
}