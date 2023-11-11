import * as React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import Stack from '@mui/material/Stack';
import Friend from "../Components/Friend";
import { Box } from '@mui/system';


export default function MyFriends() {
    const friendsData = [
        { number: 1, name: 'Fluffy', xp: 2000 },
        { number: 2, name: 'Buddy', xp: 1800 },
        { number: 3, name: 'Whiskers', xp: 1600 },
        { number: 4, name: 'Spot', xp: 1400 },
        { number: 5, name: 'Mittens', xp: 1200 },
        { number: 6, name: 'Rocky', xp: 1000 },
        { number: 7, name: 'Coco', xp: 800 },
        { number: 8, name: 'Luna', xp: 600 },
        { number: 9, name: 'Max', xp: 400 },
        { number: 10, name: 'Charlie', xp: 200 },
    ];

    return (
        <>
            <Header name="My Friends" />
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
                    <Stack
                    direction="column"
                    justifyContent="center"
                    alignItems="center"
                    spacing={3}
                    >
                        
                        {friendsData.map((friend) => (
                            <Friend number={friend.number} name={friend.name} xp={friend.xp} />
                        ))}
                </Stack>
                </Box>
            </div>

            <Footer />
        </>
    );
}