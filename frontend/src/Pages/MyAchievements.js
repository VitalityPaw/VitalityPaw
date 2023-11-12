import * as React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import Stack from '@mui/material/Stack';
import Achievement from "../Components/Achievement";

export default function MyAchievements() {
    const achievementData = [
        { name:"Chien de l'année", description:"Tu t'es fait des amis et a découvert de nouveaux lieux", level: 1},
        { name:"Sage... ou pas !", description:"Tu as fait 5 bêtises", level: 3},
        { name:"Conquérant", description:"Tu as découvert 5 nouveaux lieux", level: 2},
        { name:"Amical", description:"Tu t'es fait 10 amis en une semaine", level: 1},
        { name:"Champion", description:"Tu as appris 2 tricks ", level: 2},
        { name:"Noctambule", description:"Tu as fait 1 balade la nuit", level: 3},
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
                        spacing={5}>
                    </Stack>
                        {achievementData.map((achievement) => (
                            <Achievement name={achievement.name} description={achievement.description} level={achievement.level}/>
                        ))}
            </div>
            <Footer />
        </>
    );
}