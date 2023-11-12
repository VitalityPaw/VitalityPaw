import React from "react";
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
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import FriendList from '../Components/FriendList';

import pup1 from '../Images/rsc/bernese_2.png';

const NewWalk = () => {
    let startTime;
    let endTime;
    let walkDuration;
  
    const [openSummary, setOpenSummary] = React.useState(false);
    const [openHello, setOpenHello] = React.useState(false);
    const [openStartWalk, setOpenStartWalk] = React.useState(false);
  
    const convertTimeToDate = (time) => {
      let date = new Date(time);
      return date;
    };
  
    const convertTime = (time) => {
      let hours = Math.floor(time / 3600000);
      let minutes = Math.floor((time - hours * 3600000) / 60000);
      return `${hours}h ${minutes}m`;
    };
  
    const friendsDataWithAvatars = [
      { number: 1, name: 'Fluffy', xp: 2000, avatar: pup1 },
      // ... other friends with avatars ...
    ];
  
    const handleStartClick = () => {
      startTime = Date.now();
      console.log(convertTimeToDate(startTime).toString());
      setOpenStartWalk(true); // Open the "Start Walk" box
    };
  
    const handleStopClick = () => {
      endTime = Date.now();
      console.log(convertTimeToDate(endTime).toString());
      walkDuration = endTime - startTime;
      console.log(convertTime(walkDuration));
      setOpenSummary(true); // Open the detailed summary dialog
    };
  
    const handleClose = () => {
      setOpenSummary(false);
      setOpenHello(false);
      setOpenStartWalk(false);
    };
  
    const handleNotifyFriend = () => {
      // Logic to notify a specific friend
      console.log('Notifier un ami');
      // Display a dialog with the friend list
      setOpenHello(true);
    };
  
    const handleFriendClick = (friend) => {
      // Logic to send the notification to the selected friend
      console.log(`Notifying ${friend.name}`);
      toast.success(`${friend.name} a été notifié, bonne balade !`); // Display a success toast
      handleClose(); // Close the dialog
    };
  
    const handleNotifyAllFriends = () => {
      // Logic to notify all friends
      console.log('Notifying all friends');
      toast.success('Tous vos amis ont été notifiés, bonne balade !'); // Display a success toast
      handleClose(); // Close the box
    };
  
    const handleStartWalk = () => {
        // Logic to start the walk
        console.log('Starting the walk');
        toast.success('Votre promenade a commencé !'); // Display an info toast
        handleClose(); // Close the box
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
                                Récompense: 166 XP <br />
                                Bonus météo: 33 XP <br />
                                Total: 199XP <br />
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
      <>
        <Header name="Nouvelle balade" />
        <div style={{ minHeight: '64vh', backgroundColor: '#FFF4EF' }}>
          <Stack direction="column" justifyContent="space-around" alignItems="center" spacing={2}>
            <SimpleMap />
            <ButtonGroup variant="contained" aria-label="outlined primary button group">
              <Button onClick={handleStartClick}>
                <PlayArrowIcon />
              </Button>
              <Button onClick={handleStopClick}>
                <StopIcon />
              </Button>
            </ButtonGroup>
  
            {/* "Hello" box with friend list */}
            <Dialog open={openHello} onClose={handleClose}>
              <DialogTitle>Notifier un ami</DialogTitle>
              <DialogContent>
                <DialogContentText>Choisissez un ami à notifier:</DialogContentText>
                <FriendList friends={friendsDataWithAvatars} onFriendClick={handleFriendClick} />
              </DialogContent>
              <DialogActions>
                <Button onClick={handleClose} color="primary">
                  Annuler
                </Button>
              </DialogActions>
            </Dialog>
  
            {/* "Start Walk" box */}
            <Dialog open={openStartWalk} onClose={handleClose}>
              <DialogTitle>Commencer une promenade</DialogTitle>
              <DialogContent>
                <DialogContentText>Souhaitez-vous notifier vos amis ?</DialogContentText>
              </DialogContent>
              <DialogActions>
                <Button onClick={handleNotifyFriend} color="primary">
                  Notifier un ami
                </Button>
                <Button onClick={handleNotifyAllFriends} color="primary">
                  Notifier tous mes amis
                </Button>
                <Button onClick={handleStartWalk} color="primary">
                  Commencer
                </Button>
              </DialogActions>
            </Dialog>
  
            {/* Detailed summary dialog */}
            <Dialog open={openSummary} onClose={handleClose}>
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
  
            {/* Toast container for react-toastify */}
            <ToastContainer position="top-left" autoClose={3000} hideProgressBar />
          </Stack>
        </div>
        <Footer />
      </>
    );
  };
  
  export default NewWalk;