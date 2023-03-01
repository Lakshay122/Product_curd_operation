import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import Badge from '@mui/material/Badge';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import { useNavigate } from 'react-router-dom';
import SvgIcon from '@mui/material/SvgIcon';
import AddIcon from '@mui/icons-material/Add';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MoreIcon from '@mui/icons-material/MoreVert';
import FormatAlignLeftIcon from '@mui/icons-material/FormatAlignLeft';
import FormatAlignCenterIcon from '@mui/icons-material/FormatAlignCenter';
import FormatAlignRightIcon from '@mui/icons-material/FormatAlignRight';
import FormatAlignJustifyIcon from '@mui/icons-material/FormatAlignJustify';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { CssBaseline, Grid, Card, CardContent, Container, CardHeader, Avatar, TableBody, Table, TableRow, TableCell, Button, CardActions } from '@mui/material';
import { blue } from '@mui/material/colors'
import axios from 'axios';
import { createTheme } from '@mui/material/styles';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import CircleIcon from '@mui/icons-material/Circle';
import { LineChart, Line, XAxis, CartesianGrid, Tooltip, } from 'recharts';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Rating from '@mui/material/Rating';
import GridViewSharpIcon from '@mui/icons-material/GridViewSharp';
import SearchBar from "material-ui-search-bar";

const theme = createTheme({
    palette: {
        custom: {
            main: '#53B175',
            green: '#56B378',
            light_green: '#0dc44f7d'
        }
    },
});

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(3),
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
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: '20ch',
        },
    },
}));

export default function PrimarySearchAppBar() {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

    const isMenuOpen = Boolean(anchorEl);
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
    const [alignment, setAlignment] = React.useState('left');
    const [structure, setStructure] = React.useState('folder');
    const [age, setAge] = React.useState('');
    const [value, setValue] = React.useState('');
    const navigate = useNavigate();

    const handleFolder = () => {
        setStructure('folder')
    }

    const handleList = () => {
        setStructure('list')

    }

    const handleChange = (event) => {
        setAge(event.target.value);
    };

    const handleChangeInView = (event) => {
        setValue(event.target.value);
    };


    
    const handleEdit = () => {
        navigate('editproduct');
    };

    const handleAlignment = (event, newAlignment) => {
        setAlignment(newAlignment);
    };


    const handleProfileMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };
    
    const handleAddItem = (event) => {
        navigate("newproduct");
    };

    const handleMobileMenuClose = () => {
        setMobileMoreAnchorEl(null);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
        handleMobileMenuClose();
    };

    const handleMobileMenuOpen = (event) => {
        setMobileMoreAnchorEl(event.currentTarget);
    };

    function createCard(img, Product_Name, Price, InStock, Ratingval) {
        return { img, Product_Name, Price, InStock, Ratingval };
    }

    const cards = [
        createCard('https://media.istockphoto.com/id/1045495508/vector/red-apple-illustration-icon-vector.jpg?s=612x612&w=0&k=20&c=miHEE4W4VlC1D6VNFRe69v7WIvHiiMWMqG68sCjpT3E=', 'Apple', 300, 10,2.5, true),
        createCard('https://media.istockphoto.com/id/1045495508/vector/red-apple-illustration-icon-vector.jpg?s=612x612&w=0&k=20&c=miHEE4W4VlC1D6VNFRe69v7WIvHiiMWMqG68sCjpT3E=', 'Apple', 300, 10,2.5, true),
        createCard('https://media.istockphoto.com/id/1045495508/vector/red-apple-illustration-icon-vector.jpg?s=612x612&w=0&k=20&c=miHEE4W4VlC1D6VNFRe69v7WIvHiiMWMqG68sCjpT3E=', 'Apple', 300, 10,2.5, true),
        createCard('https://media.istockphoto.com/id/1045495508/vector/red-apple-illustration-icon-vector.jpg?s=612x612&w=0&k=20&c=miHEE4W4VlC1D6VNFRe69v7WIvHiiMWMqG68sCjpT3E=', 'Apple', 300, 10,2.5, true),
        createCard('https://media.istockphoto.com/id/1045495508/vector/red-apple-illustration-icon-vector.jpg?s=612x612&w=0&k=20&c=miHEE4W4VlC1D6VNFRe69v7WIvHiiMWMqG68sCjpT3E=', 'Apple', 300, 10,2.5, true),
        createCard('https://media.istockphoto.com/id/1045495508/vector/red-apple-illustration-icon-vector.jpg?s=612x612&w=0&k=20&c=miHEE4W4VlC1D6VNFRe69v7WIvHiiMWMqG68sCjpT3E=', 'Apple', 300, 10,2.5, true),
        createCard('https://media.istockphoto.com/id/1045495508/vector/red-apple-illustration-icon-vector.jpg?s=612x612&w=0&k=20&c=miHEE4W4VlC1D6VNFRe69v7WIvHiiMWMqG68sCjpT3E=', 'Apple', 300, 10,2.5, true),
        createCard('https://media.istockphoto.com/id/1045495508/vector/red-apple-illustration-icon-vector.jpg?s=612x612&w=0&k=20&c=miHEE4W4VlC1D6VNFRe69v7WIvHiiMWMqG68sCjpT3E=', 'Apple', 300, 10,2.5, true)
    ]

    function createList(img, Product_Name, Price) {
        return { img, Product_Name, Price};
    }

    const lists = [
        createList('https://media.istockphoto.com/id/1045495508/vector/red-apple-illustration-icon-vector.jpg?s=612x612&w=0&k=20&c=miHEE4W4VlC1D6VNFRe69v7WIvHiiMWMqG68sCjpT3E=', 'Apple', 300),
        createList('https://media.istockphoto.com/id/1045495508/vector/red-apple-illustration-icon-vector.jpg?s=612x612&w=0&k=20&c=miHEE4W4VlC1D6VNFRe69v7WIvHiiMWMqG68sCjpT3E=', 'Apple', 300),
        createList('https://media.istockphoto.com/id/1045495508/vector/red-apple-illustration-icon-vector.jpg?s=612x612&w=0&k=20&c=miHEE4W4VlC1D6VNFRe69v7WIvHiiMWMqG68sCjpT3E=', 'Apple', 300),
        createList('https://media.istockphoto.com/id/1045495508/vector/red-apple-illustration-icon-vector.jpg?s=612x612&w=0&k=20&c=miHEE4W4VlC1D6VNFRe69v7WIvHiiMWMqG68sCjpT3E=', 'Apple', 300),
        createList('https://media.istockphoto.com/id/1045495508/vector/red-apple-illustration-icon-vector.jpg?s=612x612&w=0&k=20&c=miHEE4W4VlC1D6VNFRe69v7WIvHiiMWMqG68sCjpT3E=', 'Apple', 300),
        createList('https://media.istockphoto.com/id/1045495508/vector/red-apple-illustration-icon-vector.jpg?s=612x612&w=0&k=20&c=miHEE4W4VlC1D6VNFRe69v7WIvHiiMWMqG68sCjpT3E=', 'Apple', 300),
        createList('https://media.istockphoto.com/id/1045495508/vector/red-apple-illustration-icon-vector.jpg?s=612x612&w=0&k=20&c=miHEE4W4VlC1D6VNFRe69v7WIvHiiMWMqG68sCjpT3E=', 'Apple', 300),
        createList('https://media.istockphoto.com/id/1045495508/vector/red-apple-illustration-icon-vector.jpg?s=612x612&w=0&k=20&c=miHEE4W4VlC1D6VNFRe69v7WIvHiiMWMqG68sCjpT3E=', 'Apple', 300),
        createList('https://media.istockphoto.com/id/1045495508/vector/red-apple-illustration-icon-vector.jpg?s=612x612&w=0&k=20&c=miHEE4W4VlC1D6VNFRe69v7WIvHiiMWMqG68sCjpT3E=', 'Apple', 300),
        createList('https://media.istockphoto.com/id/1045495508/vector/red-apple-illustration-icon-vector.jpg?s=612x612&w=0&k=20&c=miHEE4W4VlC1D6VNFRe69v7WIvHiiMWMqG68sCjpT3E=', 'Apple', 300),
        createList('https://media.istockphoto.com/id/1045495508/vector/red-apple-illustration-icon-vector.jpg?s=612x612&w=0&k=20&c=miHEE4W4VlC1D6VNFRe69v7WIvHiiMWMqG68sCjpT3E=', 'Apple', 300),
        createList('https://media.istockphoto.com/id/1045495508/vector/red-apple-illustration-icon-vector.jpg?s=612x612&w=0&k=20&c=miHEE4W4VlC1D6VNFRe69v7WIvHiiMWMqG68sCjpT3E=', 'Apple', 300),
        createList('https://media.istockphoto.com/id/1045495508/vector/red-apple-illustration-icon-vector.jpg?s=612x612&w=0&k=20&c=miHEE4W4VlC1D6VNFRe69v7WIvHiiMWMqG68sCjpT3E=', 'Apple', 300),
        createList('https://media.istockphoto.com/id/1045495508/vector/red-apple-illustration-icon-vector.jpg?s=612x612&w=0&k=20&c=miHEE4W4VlC1D6VNFRe69v7WIvHiiMWMqG68sCjpT3E=', 'Apple', 300),
        createList('https://media.istockphoto.com/id/1045495508/vector/red-apple-illustration-icon-vector.jpg?s=612x612&w=0&k=20&c=miHEE4W4VlC1D6VNFRe69v7WIvHiiMWMqG68sCjpT3E=', 'Apple', 300),
        createList('https://media.istockphoto.com/id/1045495508/vector/red-apple-illustration-icon-vector.jpg?s=612x612&w=0&k=20&c=miHEE4W4VlC1D6VNFRe69v7WIvHiiMWMqG68sCjpT3E=', 'Apple', 300),
        createList('https://media.istockphoto.com/id/1045495508/vector/red-apple-illustration-icon-vector.jpg?s=612x612&w=0&k=20&c=miHEE4W4VlC1D6VNFRe69v7WIvHiiMWMqG68sCjpT3E=', 'Apple', 300),
    ]

    const menuId = 'primary-search-account-menu';
    const renderMenu = (
        <Menu
            anchorEl={anchorEl}
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            id={menuId}
            keepMounted
            transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            open={isMenuOpen}
            onClose={handleMenuClose}
        >
            <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
            <MenuItem onClick={handleMenuClose}>My account</MenuItem>
        </Menu>
    );

    const mobileMenuId = 'primary-search-account-menu-mobile';
    const renderMobileMenu = (
        <Menu
            anchorEl={mobileMoreAnchorEl}
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            id={mobileMenuId}
            keepMounted
            transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            open={isMobileMenuOpen}
            onClose={handleMobileMenuClose}
        >
            <MenuItem>
                <IconButton size="large" aria-label="show 4 new mails" color="inherit">
                    <Badge badgeContent={4} color="error">
                        <MailIcon />
                    </Badge>
                </IconButton>
                <p>Messages</p>
            </MenuItem>
            <MenuItem>
                <IconButton
                    size="large"
                    aria-label="show 17 new notifications"
                    color="inherit"
                >
                    <Badge badgeContent={17} color="error">
                        <NotificationsIcon />
                    </Badge>
                </IconButton>
                <p>Notifications</p>
            </MenuItem>
            <MenuItem onClick={handleProfileMenuOpen}>
                <IconButton
                    size="large"
                    aria-label="account of current user"
                    aria-controls="primary-search-account-menu"
                    aria-haspopup="true"
                    color="inherit"
                >
                    <AccountCircle />
                </IconButton>
                <p>Profile</p>
            </MenuItem>
        </Menu>
    );

    return (
        <>
            <Box sx={{ flexGrow: 1 }}>
                {/* <AppBar position="static"> */}
                <AppBar position="static" elevation={0} sx={{ bgcolor: 'rgba(0,0,0,0)' }}>
                   
                </AppBar>
                {renderMobileMenu}
                {renderMenu}
            </Box>

            {
                structure === 'folder' ?
        
                    <Container maxWidth="lg" sx={{ mt: 1, mb: 3 }}>
                        <Grid container spacing={3} >

                            <Grid container item xs={12} md={4} lg={3} key='1' direction="column" >
                                <Card className='Card' onClick={handleAddItem} sx={{ mt:1, borderRadius: 5,height: 350,display:'flex',justifyContent:'center', alignItems:'center'}} id='1' >   
                                        <Grid direction="column">
                                            <Grid> 
                                                <AddIcon  sx={{ width: 150, height: 150, color: theme.palette.custom.main }} />
                                            </Grid>
                                            <Grid>
                                                <Typography sx={{m:1}} variant="button" >Add New Product</Typography>
                                            </Grid>
                                        </Grid>
                                        
                                </Card>
                            </Grid>


                            {cards.map((card, i) => (
                                <Grid item xs={12} md={4} lg={3} key='1' >
                                    <Card className='Card' sx={{ mt: 1, borderRadius: 5 }} id='1' >
                                            <CardContent className='d-flex-head'>
                                                <Badge
                                                    overlap="circular"
                                                    anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                                                    badgeContent={<CircleIcon sx={{ backgroundColor: theme.palette.custom.main, color: theme.palette.custom.main, border: '2px solid #fff', borderRadius: '50%', width: 20, height: 20 }}>
                                                    </CircleIcon>}

                                                >
                                                    <Avatar src={card.img} className='pic' sx={{ width: 120, height: 120, bgcolor: 'EEEEEE'}}>
                                                    </Avatar>
                                                </Badge>


                                            </CardContent><CardContent sx={{ bgcolor: '#fff' }} className='d-flex-head text-center'>
                                                    <Box className='text-center'>
                                                        <Typography variant='h6'>{card.Product_Name}</Typography>
                                                        {/* <Typography variant='h6'>{userData.Name}</Typography> */}
                                                    </Box>
                                                    <Table>
                                                        <TableBody>
                                                            <TableRow>
                                                                <td>Price: {card.Price}</td>
                                                                {/* <td>{userData.Designation}</td> */}
                                                            </TableRow>
                                                            <TableRow>
                                                                <td>In Stock: {card.InStock} Kg</td>
                                                                {/* <td>{userData.Designation}</td> */}
                                                            </TableRow>
                                                        </TableBody>

                                                    </Table>
                                                    <Rating name="half-rating-read" defaultValue={card.Ratingval} precision={0.5} readOnly />

                                                </CardContent><CardActions >
                                                    {/* <Button size='small' clicked={clicked === i} onClick={() => { handleNew(i) }} fullWidth>See All</Button> */}
                                                    <Button size='small' onClick={handleEdit} sx={{ color: theme.palette.custom.green, borderRadius: 5, '&:hover': { background: '#0dc44f36' } }} fullWidth>Edit</Button>
                                                </CardActions>
                                        
                                    </Card>
                                </Grid>
                            ))}
                        </Grid>

                    </Container>


                    : <Container maxWidth="lg" sx={{ mt: 3, mb: 3 }}>
                        <Grid container spacing={3}  >
                            <Grid item xs={12} md={4} lg={3} key='1' >
                                <Card className='Card' onClick={handleAddItem} sx={{ mt: 2, borderRadius: 5,height: 95,display:'flex',justifyContent:'center', alignItems:'center'}} id='1' >   
                                    <AddIcon sx={{ width: 80, height: 80, color: theme.palette.custom.main }} />
                                </Card>
                            </Grid>
                            {lists.map((list, i) => (
                                <Grid item xs={12} md={4} lg={3} key='1' >
                                    <Card onClick={handleEdit} className='Card' sx={{ mt: 2, bgcolor: '#fff', borderRadius: 3 }}>
                                        <CardHeader
                                            avatar={
                                                <Avatar src={list.img} className='pic' sx={{bgcolor:'#EEEEEE'}}>
                                                </Avatar>
                                            }

                                            title={
                                                <Typography variant="subtitle2" sx={{ fontSize: 18 }} gutterBottom  >
                                                    {list.Product_Name}
                                                </Typography>
                                            }
                                            subheader={
                                                <Typography sx={{ fontSize: 16 }} gutterBottom  >
                                                    Price: {list.Price}
                                                </Typography>
                                            }
                                        />

                                    </Card>
                                </Grid>
                            ))}
                        </Grid>
                    </Container>
            }
        </>
    );
}
