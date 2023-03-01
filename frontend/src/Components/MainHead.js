import * as React from 'react';
import { styled, createTheme, ThemeProvider, alpha } from '@mui/material/styles';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import { List, Toolbar, Typography, Divider, Badge, Button , Avatar, CssBaseline, Box, Menu, MenuItem, Tooltip, InputBase } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import NotificationsIcon from '@mui/icons-material/Notifications';
import ListItemIcon from '@mui/material/ListItemIcon';
import PersonAdd from '@mui/icons-material/PersonAdd';
import Settings from '@mui/icons-material/Settings';
import SvgIcon from '@mui/material/SvgIcon';
import Logout from '@mui/icons-material/Logout';
import SearchIcon from '@mui/icons-material/Search';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PeopleIcon from '@mui/icons-material/People';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import ContentFile from './ContentFile';
import {  useState } from "react";
import { Dashboard } from '@mui/icons-material';

const drawerWidth = 240;
const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(1),
        width: 'auto',
    },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            width: '12ch',
            '&:focus': {
                width: '20ch',
            },
        },
    },
}));


const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
        '& .MuiDrawer-paper': {
            position: 'relative',
            whiteSpace: 'nowrap',
            width: drawerWidth,
            transition: theme.transitions.create('width', {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.enteringScreen,
            }),
            boxSizing: 'border-box',
            ...(!open && {
                overflowX: 'hidden',
                transition: theme.transitions.create('width', {
                    easing: theme.transitions.easing.sharp,
                    duration: theme.transitions.duration.leavingScreen,
                }),
                width: theme.spacing(7),
                [theme.breakpoints.up('sm')]: {
                    width: theme.spacing(9),
                },
            }),
        },
    }),
);

const mdTheme = createTheme();

export default function MainHead() {
    const [title , setTitle] = useState("dashboard");
    const [anchorEl, setAnchorEl] = React.useState(null);
    const openi = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    const [open, setOpen] = React.useState(false);
    const toggleDrawer = () => {
        setOpen(!open);
    };

    const handleProfile = ()=>{
        navigate('/profile')
    }

    const handleLogout = () => {

        sessionStorage.clear();
        localStorage.clear();
        navigate('Sign')
            

    }
    const addUser = () => {
        navigate('/new_user')
    }

    const navigate = useNavigate();
    return (
        <ThemeProvider theme={mdTheme}>
            <Box className='d-flex'>
                <CssBaseline />
                <AppBar position="absolute" open={open}>
                    <Toolbar sx={{bgcolor: '#53B175'}}>
                        <IconButton
                            edge="start"
                            color="inherit"
                            onClick={toggleDrawer}
                            sx={{
                                marginRight: '36px',
                                ...(open && { display: 'none' }),
                            }}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography
                            component="h1"
                            variant="h6"
                            color="inherit"
                            noWrap
                            sx={{ flexGrow: 1 }}
                        >
                           VegAllOver
                        </Typography>
                        <LocationOnIcon/>
                        <Typography>jaipur</Typography>
                        <Typography sx={{ml: '10px', fontSize: 15}}>335001</Typography>
                        <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
                            <Tooltip title="Account settings">
                                <IconButton
                                    onClick={handleClick}
                                    size="small"
                                    sx={{ ml: 2 }}
                                    aria-controls={open ? 'account-menu' : undefined}
                                    aria-haspopup="true"
                                    aria-expanded={open ? 'true' : undefined}
                                >
                                    <Avatar sx={{ width: 32, height: 32 }}>M</Avatar>
                                </IconButton>
                            </Tooltip>
                        </Box>
                        <Menu
                            anchorEl={anchorEl}
                            id="account-menu"
                            open={openi}
                            onClose={handleClose}
                            onClick={handleClose}
                            PaperProps={{
                                elevation: 0,
                                sx: {
                                    overflow: 'visible',
                                    filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                                    mt: 1.5,
                                    '& .MuiAvatar-root': {
                                        width: 32,
                                        height: 32,
                                        ml: -0.5,
                                        mr: 1,
                                    },
                                    '&:before': {
                                        content: '""',
                                        display: 'block',
                                        position: 'absolute',
                                        top: 0,
                                        right: 14,
                                        width: 10,
                                        height: 10,
                                        bgcolor: 'background.paper',
                                        transform: 'translateY(-50%) rotate(45deg)',
                                        zIndex: 0,
                                    },
                                },
                            }}
                            transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                            anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                        >
                            <MenuItem onClick={handleProfile}>
                                <Avatar /> Profile
                            </MenuItem>
                            <MenuItem>
                                <Avatar /> My account
                            </MenuItem>
                            <Divider />
                            <MenuItem>
                                <ListItemIcon>
                                    <PersonAdd fontSize="small" />
                                </ListItemIcon>
                                Add another account
                            </MenuItem>
                            <MenuItem>
                                <ListItemIcon>
                                    <Settings fontSize="small" />
                                </ListItemIcon>
                                Settings
                            </MenuItem>
                            <MenuItem>
                                <IconButton size='small' onClick={handleLogout}>
                                    <ListItemIcon>
                                        <Logout fontSize="small" />
                                    </ListItemIcon>
                                    Logout
                                </IconButton>

                            </MenuItem>
                        </Menu>

                    </Toolbar>
                </AppBar>
                <Drawer color= "success" variant="permanent" open={open}>
                    <Toolbar
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'flex-end',
                            px: [1],
                        }}
                    >
                        <IconButton onClick={toggleDrawer}>
                            <ChevronLeftIcon />
                        </IconButton>
                    </Toolbar>
                    <Divider />
                    <List component="nav">
                        <Link className='Decoration' to='/'>
                            <ListItemButton>
                                <ListItemIcon>
                                    <DashboardIcon />
                                </ListItemIcon>
                                <ListItemText primary="Dashboard" className='change' />
                            </ListItemButton>
                        </Link>
                        <Link className='Decoration' to='/inventory' >
                            <ListItemButton>
                                <ListItemIcon>


                                    
                                    <SvgIcon width="10" height="10" viewBox="0 0 64 64">
                                        <path d="M 20.974609 11.960938 A 1 1 0 0 0 20.269531 12.300781 L 17 16 L 13.75 12.349609 A 1 1 0 0 0 12.560547 12.109375 A 1 1 0 0 0 12 13.169922 L 12.519531 16.169922 L 10.689453 14.330078 A 1 1 0 0 0 9 15.199219 L 10.779297 24 A 9 9 0 0 0 2 33 L 2 53 A 9 9 0 0 0 11 62 L 16 62 A 1 1 0 0 0 16 60 L 11 60 A 7 7 0 0 1 4 53 L 4 50.109375 A 1 1 0 0 0 4.2890625 50.710938 A 1 1 0 0 0 5.7109375 50.710938 L 7 49.410156 L 8.2890625 50.710938 A 1 1 0 0 0 9.7109375 50.710938 A 1 1 0 0 0 9.7109375 49.289062 L 7.7109375 47.289062 A 1 1 0 0 0 6.2890625 47.289062 L 4.2890625 49.289062 A 1 1 0 0 0 4 49.896484 L 4 38.109375 A 1 1 0 0 0 4.2890625 38.710938 A 1 1 0 0 0 5.7109375 38.710938 L 7 37.410156 L 8.2890625 38.710938 A 1 1 0 0 0 9.7109375 38.710938 A 1 1 0 0 0 9.7109375 37.289062 L 7.7109375 35.289062 A 1 1 0 0 0 6.2890625 35.289062 L 4.2890625 37.289062 A 1 1 0 0 0 4 37.896484 L 4 33 A 7 7 0 0 1 11 26 L 23 26 A 7 7 0 0 1 28.910156 29.25 A 1 1 0 0 0 30.289062 29.560547 A 1 1 0 0 0 30.599609 28.179688 A 9 9 0 0 0 23.220703 24 L 25 15.199219 A 1 1 0 0 0 23.310547 14.289062 L 21.480469 16.130859 L 22 13.130859 A 1 1 0 0 0 21.460938 12.060547 A 1 1 0 0 0 20.974609 11.960938 z M 14.589844 16.310547 L 16.240234 18.160156 L 17.730469 19.839844 L 16.990234 20.589844 L 15 18.599609 L 14.589844 16.310547 z M 19.400391 16.310547 L 19.039062 18.310547 L 18.339844 17.519531 L 19.400391 16.310547 z M 11.630859 18 L 17.589844 24 L 12.820312 24 L 11.630859 18 z M 22.410156 18 L 21.179688 24 L 20.410156 24 L 18.410156 22 L 22.410156 18 z M 34.470703 27.884766 A 1 1 0 0 0 33.759766 28.169922 L 30.230469 31.710938 A 1 1 0 0 0 30.230469 33.119141 L 33.300781 36.189453 A 3.8 3.8 0 0 0 33.550781 39.599609 A 8 8 0 0 1 22 50.230469 A 14.91 14.91 0 0 0 18 48.230469 L 17.580078 48.089844 A 3 3 0 0 0 14.509766 48.820312 L 12.669922 50.660156 A 1.24 1.24 0 0 0 12.369141 51.939453 A 14.16 14.16 0 0 0 18 59.359375 A 1.0013116 1.0013116 0 0 0 19.089844 57.679688 A 12 12 0 0 1 14.429688 51.769531 L 15.939453 50.259766 A 1 1 0 0 1 16.939453 50.019531 L 17.359375 50.160156 A 13.12 13.12 0 0 1 20.859375 51.849609 A 10 10 0 0 0 35.259766 38.570312 A 1.94 1.94 0 0 1 35.609375 36.220703 L 37.070312 34.769531 A 2 2 0 0 1 38.710938 34.189453 A 1.92 1.92 0 0 1 40.150391 35.070312 A 16 16 0 0 1 23.630859 59.439453 A 1.01789 1.01789 0 0 0 23.25 61.439453 A 18.3 18.3 0 0 0 26.689453 61.769531 A 18 18 0 0 0 41.830078 34 A 3.94 3.94 0 0 0 38.919922 32.210938 A 4.06 4.06 0 0 0 35.650391 33.359375 L 34.470703 34.550781 L 32.349609 32.429688 L 34.349609 30.429688 L 35.089844 31.529297 A 1 1 0 0 0 36.480469 31.810547 A 1 1 0 0 0 36.75 30.429688 L 35.300781 28.330078 A 1 1 0 0 0 34.570312 27.890625 A 1 1 0 0 0 34.470703 27.884766 z M 10.990234 28.994141 A 1 1 0 0 0 10.289062 29.289062 L 8.2890625 31.289062 A 1.0040916 1.0040916 0 0 0 9.7109375 32.710938 L 11 31.410156 L 12.289062 32.710938 A 1 1 0 0 0 13.710938 32.710938 A 1 1 0 0 0 13.710938 31.289062 L 11.710938 29.289062 A 1 1 0 0 0 10.990234 28.994141 z M 18.990234 28.994141 A 1 1 0 0 0 18.289062 29.289062 L 16.289062 31.289062 A 1.0040916 1.0040916 0 0 0 17.710938 32.710938 L 19 31.410156 L 20.289062 32.710938 A 1 1 0 0 0 21.710938 32.710938 A 1 1 0 0 0 21.710938 31.289062 L 19.710938 29.289062 A 1 1 0 0 0 18.990234 28.994141 z M 26.955078 28.996094 A 1.0040916 1.0040916 0 0 0 26.289062 29.289062 L 24.289062 31.289062 A 1 1 0 0 0 24.289062 32.710938 A 1 1 0 0 0 25.710938 32.710938 L 27.710938 30.710938 A 1.0040916 1.0040916 0 0 0 26.955078 28.996094 z M 22.980469 33.96875 A 1 1 0 0 0 22.289062 34.289062 L 21.289062 35.289062 A 1 1 0 0 0 21.289062 36.710938 A 1 1 0 0 0 22.710938 36.710938 L 23 36.410156 L 23.240234 36.660156 A 1.0040916 1.0040916 0 0 0 24.660156 35.240234 L 23.710938 34.240234 A 1 1 0 0 0 22.980469 33.96875 z M 14.990234 34.994141 A 1 1 0 0 0 14.289062 35.289062 L 12.289062 37.289062 A 1 1 0 0 0 12.289062 38.710938 A 1 1 0 0 0 13.710938 38.710938 L 15.710938 36.710938 A 1 1 0 0 0 15.710938 35.289062 A 1 1 0 0 0 14.990234 34.994141 z M 38.240234 36.892578 A 1 1 0 0 0 37.839844 37 A 1 1 0 0 0 37.580078 37.189453 A 1 1 0 0 0 37.410156 38.349609 A 6.28 6.28 0 0 0 37.779297 39 A 1 1 0 0 0 39.390625 37.869141 C 39.320625 37.709141 39.240156 37.550625 39.160156 37.390625 A 1 1 0 0 0 38.240234 36.892578 z M 17 38 A 1 1 0 0 0 16 39 A 23.06 23.06 0 0 0 16.910156 45.390625 A 1 1 0 0 0 17.910156 46.119141 A 1.35 1.35 0 0 0 18.189453 46.119141 A 1 1 0 0 0 18.869141 44.880859 A 21 21 0 0 1 18 40 L 20 40 A 18.66 18.66 0 0 0 22.130859 47.779297 A 1 1 0 0 0 23.900391 46.849609 A 16.69 16.69 0 0 1 22 40 L 30.130859 40 A 1 1 0 0 0 30.160156 38 L 17 38 z M 47.140625 38 A 1 1 0 0 0 47.140625 40 L 56 40 A 17 17 0 0 1 43.140625 55.470703 A 1.0071743 1.0071743 0 0 0 43.380859 57.470703 A 1 1 0 0 0 43.619141 57.470703 A 19 19 0 0 0 58 40 L 60 40 A 21 21 0 0 1 39 60 L 38.640625 60 A 1 1 0 0 0 38.640625 62 L 39 62 A 23 23 0 0 0 62 39 A 1 1 0 0 0 61 38 L 47.140625 38 z M 10.990234 40.994141 A 1 1 0 0 0 10.289062 41.289062 L 8.2890625 43.289062 A 1.0040916 1.0040916 0 0 0 9.7109375 44.710938 L 11 43.410156 L 12.289062 44.710938 A 1 1 0 0 0 13 45 A 1 1 0 0 0 13.710938 44.710938 A 1 1 0 0 0 13.710938 43.289062 L 11.710938 41.289062 A 1 1 0 0 0 10.990234 40.994141 z M 31.970703 41 A 1 1 0 0 0 31 42 L 31 44 A 1 1 0 0 0 32 45 A 1 1 0 0 0 33 44 L 33 42 A 1 1 0 0 0 31.970703 41 z M 47.970703 41 A 1 1 0 0 0 47 42 L 47 44 A 1 1 0 0 0 48 45 A 1 1 0 0 0 49 44 L 49 42 A 1 1 0 0 0 47.970703 41 z M 25.970703 42 A 1 1 0 0 0 25 43 L 25 45 A 1 1 0 0 0 27 45 L 27 43 A 1 1 0 0 0 25.970703 42 z M 51.970703 42 A 1 1 0 0 0 51 43 L 51 45 A 1 1 0 0 0 53 45 L 53 43 A 1 1 0 0 0 51.970703 42 z M 30 46 A 1 1 0 0 0 29 47 L 29 48 A 1 1 0 0 0 31 48 L 31 47 A 1 1 0 0 0 30 46 z M 47.970703 47 A 1 1 0 0 0 47 48 L 47 50 A 1 1 0 0 0 49 50 L 49 48 A 1 1 0 0 0 47.970703 47 z M 35.789062 52.023438 A 1 1 0 0 0 35.089844 52.320312 L 34.810547 52.589844 A 12.1 12.1 0 0 1 30.419922 55.189453 A 1 1 0 0 0 29.789062 56.449219 A 0.92 0.92 0 0 0 30.029297 56.839844 A 1 1 0 0 0 31.060547 57.050781 A 13.85 13.85 0 0 0 36.220703 54 L 36.509766 53.730469 A 1 1 0 0 0 36.509766 52.320312 A 1 1 0 0 0 35.789062 52.023438 z M 9.9902344 52.994141 A 1 1 0 0 0 9.2890625 53.289062 L 7.2890625 55.289062 A 1.0040916 1.0040916 0 0 0 8.7109375 56.710938 L 10 55.410156 L 11.289062 56.710938 A 1 1 0 0 0 12.710938 56.710938 A 1 1 0 0 0 12.710938 55.289062 L 10.710938 53.289062 A 1 1 0 0 0 9.9902344 52.994141 z" />
                                    </SvgIcon>
                                </ListItemIcon>
                                <ListItemText primary="Inventory" className='change' />
                            </ListItemButton>
                        </Link>
                        <Link to='/order' className='Decoration'>
                            <ListItemButton>
                                <ListItemIcon>
                                    {/* <CalendarMonthIcon /> */}
                                    
                                    <SvgIcon width="100" height="100" viewBox="0 0 30 30">
                                        <path d="M 4 3 L 4 15 L 2 15 L 2 18 C 2 19.654 3.346 21 5 21 L 13 21 L 13 19 L 5 19 C 4.449 19 4 18.551 4 18 L 4 17 L 15 17 L 13 15 L 6 15 L 6 5 L 19 5 L 19 9 L 21 9 L 21 3 L 4 3 z M 8 7 L 8 9 L 10 9 L 10 7 L 8 7 z M 12 7 L 12 9 L 17 9 L 17 7 L 12 7 z M 8 11 L 8 13 L 10 13 L 10 11 L 8 11 z M 15 11 L 15 13 L 16 13 L 16 14.914062 L 18.085938 17 L 16 19.085938 L 16 21 L 15 21 L 15 23 L 24 23 L 24 21 L 23 21 L 23 19.085938 L 20.914062 17 L 23 14.914062 L 23 13 L 24 13 L 24 11 L 15 11 z M 18 13 L 21 13 L 21 14.085938 L 19.5 15.585938 L 18 14.085938 L 18 13 z M 19.5 18.414062 L 21 19.914062 L 21 21 L 18 21 L 18 19.914062 L 19.5 18.414062 z" />
                                    </SvgIcon>
                                </ListItemIcon>
                                <ListItemText primary="Order" className='change' />
                            </ListItemButton>
                        </Link>
                        <Link to='/order' className='Decoration'>
                            <ListItemButton>
                                <ListItemIcon>
                                    {/* <CalendarMonthIcon /> */}
                                    
                                    <SvgIcon width="100" height="100" viewBox="0 0 30 30">
                                        <path d="M15,3C8.373,3,3,8.373,3,15c0,6.627,5.373,12,12,12s12-5.373,12-12C27,8.373,21.627,3,15,3z M18.704,11.296h-2.772v0.125 c0.374,0.243,0.645,0.651,0.714,1.088h2.058v1.324h-2.003c-0.132,1.303-1.268,2.301-2.73,2.419h-0.09L16.992,20h-2.377l-3.319-4.068 v-0.915h1.635c1.012,0,1.753-0.478,1.871-1.185H11.31v-1.324h3.479c-0.111-0.679-0.755-1.13-1.629-1.13h-1.857V10h7.401V11.296z" />
                                    </SvgIcon>
                                </ListItemIcon>
                                <ListItemText primary="Revenue" className='change' />
                            </ListItemButton>
                        </Link>
                        <Link to='/order' className='Decoration'>
                            <ListItemButton>
                                <ListItemIcon>
                                    {/* <CalendarMonthIcon /> */}
                                    
                                    <SvgIcon width="100" height="100" viewBox="0 0 30 30">
                                        <path d="M 6 3 L 6 5 L 8 5 L 8 3 L 6 3 z M 16 3 L 16 5 L 18 5 L 18 3 L 16 3 z M 20.292969 4.2929688 L 17 7.5859375 L 14 4.5859375 L 10 8.5859375 L 7 5.5859375 L 3.2929688 9.2929688 L 4.7070312 10.707031 L 7 8.4140625 L 10 11.414062 L 14 7.4140625 L 17 10.414062 L 21.707031 5.7070312 L 20.292969 4.2929688 z M 6 11 L 6 13 L 8 13 L 8 11 L 6 11 z M 16 11 L 16 13 L 18 13 L 18 11 L 16 11 z M 6 15 L 6 17 L 8 17 L 8 15 L 6 15 z M 16 15 L 16 17 L 18 17 L 18 15 L 16 15 z M 3 19 L 3 21 L 21 21 L 21 19 L 3 19 z"></path>
                                    </SvgIcon>
                                </ListItemIcon>
                                <ListItemText primary="Stock" className='change' />
                            </ListItemButton>
                        </Link>
                        <Link to='/order' className='Decoration'>
                            <ListItemButton>
                                <ListItemIcon>
                                    {/* <CalendarMonthIcon /> */}
                                    
                                    <SvgIcon width="100" height="100" viewBox="0 0 50 50">
                                        <path d="M 26.90625 5 C 18.039063 5 14.746094 11.851563 17.28125 17.65625 C 16.964844 17.867188 16.457031 18.527344 16.5625 19.6875 C 16.773438 21.796875 17.722656 22.300781 18.25 22.40625 C 18.460938 24.410156 19.730469 26.746094 20.46875 27.0625 C 20.46875 28.433594 20.449219 29.582031 20.34375 31.0625 C 18.726563 35.308594 8.390625 34.324219 7.0625 41.9375 C 7.003906 42.269531 7.347656 43 8.03125 43 L 42 43 C 43.015625 43 42.996094 42.25 42.9375 41.90625 C 41.585938 34.324219 31.273438 35.304688 29.65625 31.0625 C 29.550781 29.476563 29.53125 28.433594 29.53125 27.0625 C 30.269531 26.746094 31.445313 24.304688 31.65625 22.40625 C 32.183594 22.40625 33.027344 21.769531 33.34375 19.65625 C 33.449219 18.496094 33.015625 17.761719 32.59375 17.65625 C 34.28125 15.546875 33.976563 6.90625 27.75 6.90625 Z M 15.15625 10 C 8.480469 10.113281 5.554688 15.425781 7.5625 19.96875 C 7.347656 20.074219 6.925781 20.632813 7.03125 21.59375 C 7.246094 23.304688 7.882813 23.71875 8.3125 23.71875 C 8.523438 25.320313 9.46875 27.117188 10 27.4375 C 10 28.503906 10.011719 28.472656 9.90625 29.75 C 9.039063 32.484375 0 32.28125 0 39 C 0 39 0 40 1 40 L 5.53125 40 C 7.058594 35.679688 11.210938 34.015625 14.34375 32.78125 C 16.070313 32.101563 17.839844 31.414063 18.375 30.5625 C 18.433594 29.632813 18.464844 28.84375 18.46875 27.96875 C 17.519531 26.882813 16.8125 25.191406 16.46875 23.75 C 15.65625 23.148438 14.777344 21.992188 14.5625 19.84375 C 14.46875 18.824219 14.683594 17.976563 15.03125 17.3125 C 14.238281 14.847656 14.289063 12.273438 15.15625 10 Z M 38 10 C 37.042969 10 35.914063 10.078125 34.84375 10.25 C 35.644531 12.597656 35.675781 15.402344 34.96875 17.40625 C 35.28125 18.09375 35.425781 18.929688 35.34375 19.84375 L 35.3125 19.90625 L 35.3125 19.96875 C 35.015625 21.933594 34.292969 23.128906 33.4375 23.78125 C 33.113281 25.132813 32.453125 26.839844 31.53125 27.9375 C 31.535156 28.796875 31.566406 29.570313 31.625 30.5625 C 32.160156 31.414063 33.933594 32.101563 35.65625 32.78125 C 38.785156 34.011719 42.9375 35.679688 44.46875 40 L 49 40 C 50 40 50 39.03125 50 39.03125 C 50.003906 31.296875 41.441406 33.128906 40.15625 29.59375 C 40.046875 28.414063 40.03125 28.523438 40.03125 27.34375 C 40.566406 27.023438 41.550781 25.222656 41.65625 23.71875 C 42.085938 23.71875 42.722656 23.277344 42.9375 21.5625 C 43.042969 20.707031 42.726563 20.074219 42.40625 19.96875 C 43.695313 18.253906 43.484375 11.5 38.65625 11.5 Z" />
                                    </SvgIcon>
                                </ListItemIcon>
                                <ListItemText primary="Users" className='change' />
                            </ListItemButton>
                        </Link>
                        <Link to='/admin_dashboard' className='Decoration'>
                            <ListItemButton>
                                <ListItemIcon>
                                    
                                    <SvgIcon width="100" height="100" viewBox="0 0 512 512">
                                        <path d="M 21.515625 11.320312 C 15.887625 11.320312 11.324219 15.883625 11.324219 21.515625 L 11.324219 490.48047 C 11.324219 496.11847 15.888625 500.67969 21.515625 500.67969 L 490.48047 500.67969 C 496.11347 500.67969 500.67578 496.11747 500.67578 490.48047 L 500.67578 21.517578 C 500.67678 15.884578 496.11347 11.320313 490.48047 11.320312 L 21.515625 11.320312 z M 31.714844 31.710938 L 480.28906 31.710938 L 480.28906 92.880859 L 31.714844 92.880859 L 31.714844 31.710938 z M 62.294922 52.101562 L 62.294922 72.492188 L 82.685547 72.492188 L 82.685547 52.101562 L 62.294922 52.101562 z M 113.27344 52.101562 L 113.27344 72.492188 L 133.66406 72.492188 L 133.66406 52.101562 L 113.27344 52.101562 z M 164.24414 52.101562 L 164.24414 72.492188 L 184.63477 72.492188 L 184.63477 52.101562 L 164.24414 52.101562 z M 368.14648 52.101562 L 368.14648 72.492188 L 388.53516 72.492188 L 388.53516 52.101562 L 368.14648 52.101562 z M 419.11914 52.101562 L 419.11914 72.492188 L 449.70508 72.492188 L 449.70508 52.101562 L 419.11914 52.101562 z M 31.714844 113.27148 L 480.28906 113.27148 L 480.28906 480.28906 L 31.714844 480.28906 L 31.714844 113.27148 z M 72.494141 143.85742 C 66.861141 143.85742 62.294922 148.41973 62.294922 154.05273 L 62.294922 439.50977 C 62.294922 445.13777 66.861141 449.69922 72.494141 449.69922 L 439.51172 449.69922 C 445.13972 449.69922 449.70508 445.13677 449.70508 439.50977 L 449.70508 154.05273 C 449.70508 148.41973 445.13972 143.85742 439.51172 143.85742 L 72.494141 143.85742 z M 82.685547 164.24609 L 429.31445 164.24609 L 429.31445 215.22266 L 82.685547 215.22266 L 82.685547 164.24609 z M 82.685547 235.61133 L 245.80469 235.61133 L 245.80469 337.56055 L 82.685547 337.56055 L 82.685547 235.61133 z M 266.19531 235.61133 L 429.31445 235.61133 L 429.31445 337.56055 L 266.19531 337.56055 L 266.19531 235.61133 z M 82.685547 357.94922 L 245.80469 357.94922 L 245.80469 429.30859 L 82.685547 429.30859 L 82.685547 357.94922 z M 266.19531 357.94922 L 429.31445 357.94922 L 429.31445 429.31055 L 266.19531 429.31055 L 266.19531 357.94922 z" />
                                    </SvgIcon>
                                </ListItemIcon>
                                <ListItemText primary="Admin Dashboard" className='change' />
                            </ListItemButton>
                        </Link>

                    </List>
                </Drawer>
                <Box
                    component="main"
                    sx={{
                        backgroundColor: (theme) =>
                            theme.palette.mode === 'light'
                                ? theme.palette.grey[100]
                                : theme.palette.grey[900],
                        flexGrow: 1,
                        height: '100vh',
                        overflow: 'auto',
                    }}
                >
                    <Toolbar />
                    {/* <Box className = 'd-flex align-items-center justify-content-between card-header' sx={{bgcolor: 'primary.main'}}>
                    <Typography
                            component="h1"
                            variant="h6"
                            color="#fff"
                            noWrap
                            sx={{ flexGrow: 1 }}
                        >
                           {title}
                        </Typography>
                    <Button sx={{color : '#fff'}} onClick={addUser}>Add user</Button>
                    </Box> */}
                    <ContentFile/>
                </Box>
            </Box>
        </ThemeProvider >
    );
}





