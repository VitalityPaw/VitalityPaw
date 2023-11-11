import * as React from "react";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import Stack from '@mui/material/Stack';
import StopIcon from '@mui/icons-material/Stop';
import SimpleMap from "../Components/SimpleMap";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

export default function NewWalk() {

    let startTime;
    let endTime;
    let walkDuration;

    const convertTimeToDate = (time) => {
        let date = new Date(time);
        return date;
    }

    const convertTime = (time) => {
        let hours = Math.floor(time / 3600000);
        let minutes = Math.floor((time - hours * 3600000) / 60000);
        let seconds = Math.floor((time - hours * 3600000 - minutes * 60000) / 1000);
        let milliseconds = time - hours * 3600000 - minutes * 60000 - seconds * 1000;
        return `${hours}:${minutes}:${seconds}.${milliseconds}`;
    }

    return (
        <>
            <Header name="Nouvelle Balade" />
            <div style={{
                minHeight: "64vh", backgroundColor: "#FFF4EF"
            }}>
                <Stack
                    direction="column"
                    justifyContent="space-around"
                    alignItems="center"
                    spacing={2}
                >
                    <SimpleMap />
                    <ButtonGroup variant="contained" aria-label="outlined primary button group">
                        <Button
                            onClick={() => {
                                startTime = Date.now();
                                console.log(convertTimeToDate(startTime));
                            }}
                        ><PlayArrowIcon /></Button>
                        <Button
                            onClick={() => {
                                endTime = Date.now();
                                console.log(convertTimeToDate(endTime));
                                walkDuration = endTime - startTime;
                                console.log(convertTime(walkDuration));
                            }}
                        ><StopIcon /></Button>
                    </ButtonGroup>
                </Stack>
            </div>
            <Footer />
        </>
    );
}