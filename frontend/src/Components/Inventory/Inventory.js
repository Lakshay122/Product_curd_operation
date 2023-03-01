import React from 'react';
import { CssBaseline, Grid, Card, CardContent, Container, Avatar, TableBody, Table, TableRow, CardActions, Box, Button, Badge, Typography, Stack } from '@mui/material';
import { blue } from '@mui/material/colors';
import axios from "axios";
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import CircleIcon from '@mui/icons-material/Circle';
import { createTheme } from '@mui/material/styles';
import { styled } from '@mui/material/styles';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ManageSearchIcon from '@mui/icons-material/ManageSearch';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import CategoryImg from '../../Img/category.png';
import AllItems from '../../Img/all_products.png';
import Home from '../../Img/home.png';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';



const theme = createTheme({
  palette: {
    custom:{
        main: '#53B175',
        green: '#56B378',
        light_green: '#0dc44f7d'
      }
  },
});


export default function Inventory() 
{
    const [userData, setUserData] = useState([]);
    const [clicked, setClicked] = useState('');

    const navigate = useNavigate();

    const handleCategory = () => {
        navigate(`category`)
    }
    
    const handleAllProducts = () => {
        navigate(`products`)
    }
    
    function createCard(img, header,subheader, value, onclick_function) {
        return {img, header,subheader, value , onclick_function};
    }

    const cards = [
        createCard( Home,'Home', 'Total Category', 6,handleCategory),
        createCard( 'https://aheadworks.com/media/catalog/product/r/i/rich_banner_slider__1.png','Slider', 'Total Images', 2,handleCategory),
        createCard( CategoryImg,'Category', 'Total_Items', 6,handleCategory),
        createCard( AllItems,'All Product','Total_Items', 136,handleAllProducts),
    ]


    const getData = () => {
        axios.get("/user_list")
            .then((resp) => {
                console.log("data", resp.data)
                setUserData(resp.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }
    useEffect(() => {
        getData();
    }, []);

    return (
        <>
            <Box className = 'd-flex align-items-center justify-content-between card-header' sx={{bgcolor: theme.palette.custom.main}}>
                <ArrowBackIcon onClick={()=> navigate(-1)} sx={{color : '#fff', marginRight: '10px'}}/>
                <Typography
                        component="h1"
                        variant="h6"
                        color="#fff"
                        noWrap
                        sx={{ flexGrow: 1 }}
                    >
                    Inventory Management
                </Typography>
            </Box> 
            <CssBaseline />

            {/* <ThemeProvider theme={mdTheme}> */}
                <Container maxWidth="lg" sx={{ mt: 3, mb: 3 }}>
                    <Grid container spacing={3} >
                        {cards.map((card, i) => (
                            <Grid item xs={12} md={4} lg={3} key= '1' >
                                <Card className='Card' sx={{ mt: 1, borderRadius: 5  }} id='1' >
                                    <CardContent className='d-flex-head' >
                                        {/* <Badge
                                            overlap="circular"
                                            anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                                            badgeContent={
                                               
                                                <CircleIcon sx={{ backgroundColor: '#FF0000', color: '#FF0000', border: '2px solid #fff', borderRadius: '50%', width: 20, height: 20 }} >
                                                </CircleIcon>
                                            }

                                        > */}
                                            <Avatar src={card.img} className='pic' size={100} sx={{backgroundSize: 'contain', width: 120, height: 120,padding: '15px' ,bgcolor:'#EEEEEE'}}>
                                            </Avatar>
                                        {/* </Badge> */}


                                    </CardContent>

                                    <CardContent sx={{ bgcolor: '#fff' }} className='d-flex-head text-center'>
                                        <Box className='text-center'>
                                            <Typography variant='h6'>{card.header}</Typography>
                                        </Box>
                                        <Table >
                                            <TableBody >
                                                <TableRow>
                                                    <td>{card.subheader}: {card.value}</td>
                                                </TableRow> 
                                            </TableBody>

                                        </Table>

                                    </CardContent>
                                    <CardActions className='button'>
                                        <Button size='small' sx={{color: theme.palette.custom.green, borderRadius: 5, '&:hover': {background: '#0dc44f36'}}}  onClick={card.onclick_function} fullWidth>Details</Button>
                                    </CardActions>
                                </Card>
                            </Grid>
                        ))}

                    </Grid>
                </Container>
        </>
    );
}