import * as React from "react";
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import Stack from '@mui/material/Stack';
import rocky from "../Images/rocky.png";

export default function UserProfile() {
    return (
        <>
            <Header name="Gigi" />
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
                <div style={{ marginLeft: "20vw", marginRight: "20vw", marginTop: "2vh", marginBottom: "2vh" }}>
                    <Divider />
                </div>
                <Stack
                    direction="row"
                    justifyContent="center"
                    alignItems="center"
                    spacing={2}
                >
                    <Stack
                        direction="column"
                        justifyContent="space-around"
                        alignItems="center"
                        spacing={2}>
                        <h2>Informations</h2>
                        <p>Prénom: Georgia</p>
                        <p>Nom: Bjarstal</p>
                        <p>Age: 24 ans</p>
                        <p>Adresse mail: georgia.bjarstal@epita.fr</p>
                    </Stack>
                </Stack>
                <div style={{ marginLeft: "20vw", marginRight: "20vw", marginTop: "2vh", marginBottom: "2vh" }}>
                    <Divider />
                </div>
                <Stack
                    direction="row"
                    justifyContent="space-around"
                    alignItems="center"
                    spacing={2}
                >
                    <Stack
                        direction="column"
                        justifyContent="space-around"
                        alignItems="center"
                        spacing={2}
                    >
                        <h2>Chiens</h2>
                        <p>Rocky</p>
                        <img src={rocky} alt="logo" style={{
                            maxHeight: "15vh", display: "block", marginLeft: "auto", marginRight: "auto"
                        }} onClick={() => { window.location.href = "/pet-profile" }}
                        />
                    </Stack>
                </Stack>
            </Box >
            <Footer />
        </>
    );
}