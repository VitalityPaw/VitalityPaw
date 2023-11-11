import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import Avatar from '@mui/material/Avatar';
import logo_with_text from '../Images/logo_with_text.png'
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Typography from '@mui/material/Typography';

const settings = ['Mon profil', 'Se déconnecter', 'Aide'];

export default function Header() {

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
        sx={{backgroundColor: "#FFF4EF", height: "16vh"}}
    >
        <IconButton disabled>
            <img src={logo_with_text} width="96" height="auto"/>
         </IconButton>
        <IconButton disabled>
            <h1>Rocky</h1>
        </IconButton>
        <IconButton onClick={handleOpenUserMenu}>
            <Avatar sx={{ height: '70px', width: '70px' }} style={{ fontSize: '2rem' }} alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
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
                            {settings.map((setting) => (
                                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                                    <Typography textAlign="center">{setting}</Typography>
                                </MenuItem>
                            ))}
                        </Menu>
    </Stack>

    );
}