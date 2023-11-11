import * as React from "react";
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import SkinItem from "../Components/SkinItem";
import Stack from '@mui/material/Stack';

import bowtie from "../Images/bowtie.png";
import hat from "../Images/hat.png";
import sunglasses from "../Images/sunglasses.png";

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
                <div style={{ marginLeft: "20vw", marginRight: "20vw", marginTop: "2vh", marginBottom: "2vh" }}>
                    <Divider />
                </div>
                <Stack
                    direction="row"
                    justifyContent="center"
                    alignItems="center"
                    spacing={2}
                >
                    <KeyboardArrowLeftIcon />
                    <SkinItem image={bowtie} name="Noeud papillon" price="100" />
                    <SkinItem image={hat} name="Chapeau" price="200" />
                    <SkinItem image={sunglasses} name="Lunettes" price="300" />
                    <KeyboardArrowRightIcon />
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
                        <p>Temps passé à marcher: 24h12m</p>
                        <p>A été promené par:</p>
                        <ul>
                            <li>John Doe</li>
                            <li>Jane Doe</li>
                            <li>John Smith</li>
                        </ul>
                    </Stack>
                </Stack>
            </Box >
            <Footer />
        </>
    );
}