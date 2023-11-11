import * as React from "react";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import PauseIcon from '@mui/icons-material/Pause';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import Stack from '@mui/material/Stack';
import StopIcon from '@mui/icons-material/Stop';

export default function NewWalk() {
    return (
        <>
            <Stack
                direction="column"
                justifyContent="space-around"
                alignItems="center"
                spacing={2}
            >
                <h1>NewWalk</h1>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d265.58858347425195!2d2.3630302756011115!3d48.81522187677354!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e6734c47442d81%3A0xb02baea855959098!2sL&#39;Under!5e0!3m2!1sfr!2sfr!4v1699710498416!5m2!1sfr!2sfr" width="600" height="450" style={{ border: 0 }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
                <ButtonGroup variant="contained" aria-label="outlined primary button group">
                    <Button><PlayArrowIcon /></Button>
                    <Button><PauseIcon /></Button>
                    <Button><StopIcon /></Button>
                </ButtonGroup>
                {/* have the footer once it will be done instead of the button*/}
                <Button variant="contained" href="/"><ArrowBackIcon /></Button>
            </Stack>

        </>
    );
}