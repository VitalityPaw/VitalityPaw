import AddIcon from '@mui/icons-material/Add';
import DirectionsWalkIcon from '@mui/icons-material/DirectionsWalk';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import IconButton from '@mui/material/IconButton';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import MenuAppBar from "./Components/MenuAppBar";
import oneDog from "./Images/oneDog.svg";
import PeopleIcon from '@mui/icons-material/People';
import Stack from '@mui/material/Stack';
import logo from './logo.png';

function App() {
  return (
    <>
      <MenuAppBar />
      <div style={{
        minHeight: "100vh", backgroundColor: "#FFF4EF"
      }}>
        <img src={oneDog} alt="logo" style={{
          maxHeight: "40vh", display: "block", marginLeft: "auto", marginRight: "auto"
        }}
        />
      </div>
      <Stack
        direction="row"
        justifyContent="space-around"
        alignItems="stretch"
        spacing={2}
        sx={{ backgroundColor: "#C6EAA5", borderRadius: "20px", margin: "10vw", position: "absolute", bottom: "0", left: "0", right: "0", textAlign: "center" }}

      >
        <IconButton aria-label="walk" size="large">
          <DirectionsWalkIcon fontSize="inherit" />
        </IconButton>
        <IconButton aria-label="vet" size="large">
          <LocalHospitalIcon fontSize="inherit" />
        </IconButton>
        <IconButton aria-label="people" size="large">
          <PeopleIcon fontSize="inherit" />
        </IconButton>
        <IconButton aria-label="events" size="large">
          <EmojiEventsIcon fontSize="inherit" />
        </IconButton>
        <IconButton aria-label="add" size="large">
          <AddIcon fontSize="inherit" />
        </IconButton>

      </Stack>
    </>
  );
}

export default App;
