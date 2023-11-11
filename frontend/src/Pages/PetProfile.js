import * as React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';

export default function PetProfile() {
    return (
        <>
            <Header name="Rocky" />
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
                    direction="row"
                    justifyContent="space-around"
                    alignItems="center"
                    spacing={2}
                >
                    <Stack
                        direction="column"
                        justifyContent="space-around"
                        alignItems="center"
                        spacing={2}>
                        <h2>Informations</h2>
                        <p>Age: 8 ans</p>
                        <p>Sexe: Mâle</p>
                        <p>Numéro de puce: JAOWJ12938HD</p>
                        <p>A rejoint le foyer: 12 mars 2017</p>
                        <p>Race: Berger des Shetland</p>
                    </Stack>
                    <Stack
                        direction="column"
                        justifyContent="space-around"
                        alignItems="center"
                        spacing={2}>
                        <h2>Statistiques</h2>
                        <p>Nombre de balades: 32</p>
                        <p>Distance parcourue: 123 km</p>
                        <p>Temps passé à marcher: 24h 12m</p>
                        <p>A été promené par:</p>
                        <ul>
                            <li>John Doe</li>
                            <li>Jane Doe</li>
                            <li>John Smith</li>
                        </ul>
                    </Stack>
                </Stack>
            </Box>
            <Footer />
        </>
    );
}