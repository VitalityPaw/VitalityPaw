import AddIcon from '@mui/icons-material/Add';
import DirectionsWalkIcon from '@mui/icons-material/DirectionsWalk';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import IconButton from '@mui/material/IconButton';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import PeopleIcon from '@mui/icons-material/People';
import Stack from '@mui/material/Stack';


export default function Footer() {

    return (
            <Stack
                direction="row"
                justifyContent="center"
                alignItems="center"
                spacing={3}
                sx={{backgroundColor: "#C6EAA5", borderTopLeftRadius: "30px", borderTopRightRadius: "30px", height: "20vh"}}
            >
                <IconButton aria-label="walk" style={{ fontSize: '3rem' }}>
                    <DirectionsWalkIcon fontSize="inherit" />
                </IconButton>
                <IconButton aria-label="vet" style={{ fontSize: '3rem' }}>
                    <LocalHospitalIcon fontSize="inherit" />
                </IconButton>
                <IconButton aria-label="people" style={{ fontSize: '3rem' }}>
                    <PeopleIcon fontSize="inherit" />
                </IconButton>
                <IconButton aria-label="events" style={{ fontSize: '3rem' }}>
                    <EmojiEventsIcon fontSize="inherit" />
                </IconButton>
                <IconButton aria-label="add" style={{ fontSize: '3rem' }}>
                    <AddIcon fontSize="inherit" />
                </IconButton>
            </Stack>
    );
}