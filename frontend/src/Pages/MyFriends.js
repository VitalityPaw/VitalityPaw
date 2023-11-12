import * as React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import Stack from '@mui/material/Stack';
import Friend from "../Components/Friend";
import { Box } from '@mui/system';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

export default function MyFriends() {
    const friendsData = [
        { number: 1, name: 'Pépite', xp: 2000 },
        { number: 2, name: 'Milo', xp: 1800 },
        { number: 3, name: 'Anino', xp: 1600 },
        { number: 4, name: 'Spot', xp: 1400 },
        { number: 5, name: 'Mittens', xp: 1200 },
        { number: 6, name: 'Rocky', xp: 1000 },
        { number: 7, name: 'Coco', xp: 800 },
        { number: 8, name: 'Luna', xp: 600 },
        { number: 9, name: 'Max', xp: 400 },
        { number: 10, name: 'Charlie', xp: 200 },
    ];

    const globalLeaderboardData = [
        { number: 1, name: 'Hunter', xp: 3432 },
        { number: 2, name: 'Hachi', xp: 3200 },
        { number: 3, name: 'Sasha', xp: 3104 },
        { number: 4, name: 'Ollie', xp: 3065 },
        { number: 5, name: 'Rio', xp: 3064 },
        { number: 6, name: 'Pépite', xp: 2000 },
        { number: 7, name: 'Frida', xp: 1924 },
        { number: 8, name: 'Zara', xp: 1910 },
        { number: 9, name: 'Rex', xp: 1874 },
        { number: 10, name: 'Tobi', xp: 1843 },
    ];

    const [tabValue, setTabValue] = React.useState(0);

    const handleChangeTab = (event, newValue) => {
        setTabValue(newValue);
    };

    return (
        <>
            <Header name="Classement" />
            <div style={{
                minHeight: "64vh", backgroundColor: "#FFF4EF"
            }}>
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
                    <Tabs
                        value={tabValue}
                        onChange={handleChangeTab}
                        aria-label="leaderboard tabs"
                        sx={{ margin: "auto", marginBottom: "10px" }}  // Center the tabs
                    >
                        <Tab label="Amis" />
                        <Tab label="Classement Global" />
                    </Tabs>

                    <Stack
                        direction="column"
                        justifyContent="center"
                        alignItems="center"
                        spacing={3}
                    >
                        {tabValue === 0 && (
                            friendsData.map((friend) => (
                                <Friend key={friend.number} number={friend.number} name={friend.name} xp={friend.xp} />
                            ))
                        )}
                        {tabValue === 1 && (
                            globalLeaderboardData.map((player) => (
                                <Friend key={player.number} number={player.number} name={player.name} xp={player.xp} />
                            ))
                        )}
                    </Stack>
                </Box>
            </div>
            <Footer />
        </>
    );
}
