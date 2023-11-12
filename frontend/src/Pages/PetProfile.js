import * as React from "react";
import { useState } from "react";
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import SkinItem from "../Components/SkinItem";
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material';
import TextField from '@mui/material/TextField';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import bowtie from "../Images/bowtie.png";
import hat from "../Images/hat.png";
import sunglasses from "../Images/sunglasses.png";
import dogfood from "../Images/dog_food.png";

export default function PetProfile() {
    const handleDownloadPDF = async () => {
        try {
            const response = await fetch("/fiche-medicale.pdf");
            const blob = await response.blob();

            // Crée un lien temporaire pour le téléchargement du fichier
            const url = window.URL.createObjectURL(new Blob([blob]));
            const link = document.createElement('a');
            link.href = url;
            link.setAttribute('download', 'fiche-medicale.pdf');

            // Ajoute le lien au document
            document.body.appendChild(link);

            // Déclenche le téléchargement
            link.click();

            // Nettoie les ressources
            window.URL.revokeObjectURL(url);
            document.body.removeChild(link);
        } catch (error) {
            console.error('Erreur lors du téléchargement du fichier PDF', error);
        }
    };

    const [formData, setFormData] = useState({
        name: "",
        age: "",
        breed: "",
    });

    const [isDialogOpen, setDialogOpen] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        // Add logic to handle form submission, for example, sending data to an API
        console.log("Form submitted:", formData);
        toast.success(`Informations ajoutées au dossier médical !`); // Display a success toast
        setDialogOpen(false); // Close the dialog after submitting
    };

    const handleOpen = () => {
        setDialogOpen(true);
    };

    const handleClose = () => {
        setDialogOpen(false);
    };

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
                    justifyContent="center"
                    alignItems="center"
                    spacing={2}
                >
                    <SkinItem image={dogfood} name="-10% chez Royal Canin" price="1500" />
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
                        <p>Temps passé à marcher: 24h 12m</p>
                        <p>A été promené par:</p>
                        <ul>
                            <li>John Doe</li>
                            <li>Jane Doe</li>
                            <li>John Smith</li>
                        </ul>
                    </Stack>
                </Stack>
                <Stack
                    direction="row"
                    justifyContent="space-around"
                    alignItems="center"
                    spacing={2}
                    marginBottom={2}
                >

                    <Button variant="contained" color="primary" size="small" onClick={handleOpen} style={{ marginTop: '20px', display: 'inline-block' }}>
                        Ajouter une donnée médicale
                    </Button>
                    {/* Dialog for the popup */}
                    <Dialog open={isDialogOpen} onClose={handleClose}>
                        <DialogTitle>Ajouter une donnée médicale</DialogTitle>
                        <DialogContent>
                            {/* Content for your popup */}
                            <TextField
                                variant="outlined"
                                margin="normal"
                                fullWidth
                                id="medical-data"
                                label="Donnée médicale"
                                name="medicalData"
                                // Add appropriate value and onChange
                            />
                        </DialogContent>
                        <DialogActions>
                            <Button onClick={handleClose}>Annuler</Button>
                            <Button onClick={handleSubmit} color="primary">
                                Ajouter
                            </Button>
                        </DialogActions>
                    </Dialog>
                    <Button variant="contained" color="primary" size="small" onClick={handleDownloadPDF} style={{ marginTop: '20px', display: 'inline-block' }}>
                        Télécharger la fiche médicale
                    </Button>
                </Stack>
            </Box >
            {/* Toast container for react-toastify */}
            <ToastContainer position="top-left" autoClose={3000} hideProgressBar />
            <Footer />
        </>
    );
}