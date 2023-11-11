import * as React from "react";
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import Stack from '@mui/material/Stack';
import StopIcon from '@mui/icons-material/Stop';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogActions from '@mui/material/DialogActions';
import SimpleMap from "../Components/SimpleMap";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

export default function NewWalk() {

    let startTime;
    let endTime;
    let walkDuration;

    const [open, setOpen] = React.useState(false);

    const convertTimeToDate = (time) => {
        let date = new Date(time);
        return date;
    }

    const convertTime = (time) => {
        let hours = Math.floor(time / 3600000);
        let minutes = Math.floor((time - hours * 3600000) / 60000);
        return `${hours}h ${minutes}m`;
    };

    const handleStartClick = () => {
        startTime = Date.now();
        console.log(convertTimeToDate(startTime).toString());
    };

    const handleStopClick = () => {
        endTime = Date.now();
        console.log(convertTimeToDate(endTime).toString());
        walkDuration = endTime - startTime;
        console.log(convertTime(walkDuration));
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <>
            <Header name="Nouvelle balade" />
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
                        <Button onClick={handleStartClick}><PlayArrowIcon /></Button>
                        <Button onClick={handleStopClick}><StopIcon /></Button>
                    </ButtonGroup>

                    <Dialog open={open} onClose={handleClose}>
                        <DialogTitle>Résumé de la promenade</DialogTitle>
                        <DialogContent>
                            <DialogContentText>
                                Distance parcourue: 2,7km <br />
                                Durée de la promenade: {convertTime(10000000).toString()} <br />
                                Points obtenus: 1660 pts <br />
                                Bonus météo: 332 pts <br />
                            </DialogContentText>
                        </DialogContent>
                        <DialogActions>
                            <Button onClick={handleClose} color="primary">
                                Fermer
                            </Button>
                        </DialogActions>
                    </Dialog>
                </Stack>
            </div>
            <Footer />
        </>
    );
}
