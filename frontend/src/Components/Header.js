import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import Avatar from '@mui/material/Avatar';
import logo_with_text from '../Images/logo_with_text.png'
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';

export default function Header(props) {

    const [anchorElUser, setAnchorElUser] = React.useState(null);

    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    return (

        <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            spacing={1}
            sx={{ backgroundColor: "#FFF4EF", height: "16vh" }}
        >
            <IconButton disabled>
                <img src={logo_with_text} width="96" height="auto" />
            </IconButton>
            <IconButton disabled>
                <h1>{props.name}</h1>
            </IconButton>
            <IconButton onClick={handleOpenUserMenu}>
                <Avatar sx={{ height: '70px', width: '70px' }} style={{ fontSize: '2rem' }} alt="Remy Sharp" src="gigi.png" />
            </IconButton>
            <Menu
                sx={{ mt: '45px' }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
            >
                <MenuItem key='Mon profil' component={Link} to="/user-profile">
                    <Typography textAlign="center">Mon profil</Typography>
                </MenuItem>
                <MenuItem key='Partager mon code QR' component={Link} to="/share">
                    <Typography textAlign="center">Partager mon code QR</Typography>
                </MenuItem>
                <MenuItem key='Lire un code QR' onClick={handleCloseUserMenu}>
                    <Typography textAlign="center">Lire un code QR</Typography>
                </MenuItem>
                <MenuItem key='Se déconnecter' onClick={handleCloseUserMenu}>
                    <Typography textAlign="center">Se déconnecter</Typography>
                </MenuItem>
                <MenuItem key='Aide' onClick={handleCloseUserMenu}>
                    <Typography textAlign="center">Aide</Typography>
                </MenuItem>
            </Menu>
        </Stack>

    );
}