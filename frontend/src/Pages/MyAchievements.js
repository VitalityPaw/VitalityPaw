import * as React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import Stack from '@mui/material/Stack';
import Achievement from "../Components/Achievement";
import { Box } from '@mui/system';

export default function MyAchievements() {
    const achievementData = [
        { name:"Chien de l'année", level: 1},
        { name:"Sage", level: 3},
        { name:"Conquérant", level: 2},
        { name:"Amicale", level: 1},
        { name:"Champion", level: 2},
        { name:"Noctambule", level: 0},
    ];

    return (
        <>
            <Header name="Achievements" />
            <div style={{
                minHeight: "64vh", backgroundColor: "#FFF4EF",
            }}>
                    <Stack direction="column"
                        justifyContent="center"
                        alignItems="center"
                        spacing={3}>
                    </Stack>
                        {achievementData.map((achievement) => (
                            <Achievement name={achievement.name} level={achievement.level}/>
                        ))}
            </div>
            <Footer />
        </>
    );
}