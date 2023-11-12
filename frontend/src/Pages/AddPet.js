import * as React from "react";
import { useState } from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';

export default function AddPet() {
    const [formData, setFormData] = useState({
        name: "",
        age: "",
        breed: "",
        sexe: "",
        chip: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Add logic to handle form submission, for example, sending data to an API
        console.log("Form submitted:", formData);
    };

    return (
        <div style={{
            minHeight: "100vh", backgroundColor: "#FFF4EF"
        }}>
            <Header name="Ajouter un chien" />

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
                <Container component="main" maxWidth="md">
                <Stack
                    direction="column"
                    justifyContent="space-around"
                    alignItems="center"
                    spacing={2}
                    sx={{ paddingTop: 2 }}
                >
                <form style={{ width: "100%" }} onSubmit={handleSubmit}>
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="name"
                        label="Nom du chien"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                    />

                    <TextField
                        variant="outlined"
                        margin="normal"
                        fullWidth
                        required
                        id="sexe"
                        label="Sexe du chien"
                        name="sexe"
                        value={formData.sexe}
                        onChange={handleChange}
                    />

                    <TextField
                        variant="outlined"
                        margin="normal"
                        fullWidth
                        id="age"
                        label="Âge du chien"
                        name="age"
                        value={formData.age}
                        onChange={handleChange}
                    />

                    <TextField
                        variant="outlined"
                        margin="normal"
                        fullWidth
                        id="breed"
                        label="Race du chien"
                        name="breed"
                        value={formData.breed}
                        onChange={handleChange}
                    />

                    <TextField
                        variant="outlined"
                        margin="normal"
                        fullWidth
                        id="chip"
                        label="Numéro de puce"
                        name="chip"
                        value={formData.chip}
                        onChange={handleChange}
                    />

                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        style={{ marginTop: "20px" }}
                        onClick={() => { window.location.href = "/user-profile-2" }}
                    >
                        Ajouter le chien
                    </Button>
                </form>
                </Stack>
                </Container>
            </Box>
            <Footer />
        </div>
    );
}