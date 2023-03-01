import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import Badge from '@mui/material/Badge';
import { useNavigate } from 'react-router-dom';
import AddIcon from '@mui/icons-material/Add';

import { CssBaseline, Grid, Card, CardContent, Container, Avatar, TableBody, Table, TableRow, TableCell, Button, CardActions } from '@mui/material';
import axios from 'axios';
import { createTheme } from '@mui/material/styles';
import CircleIcon from '@mui/icons-material/Circle';
import Rating from '@mui/material/Rating';

const theme = createTheme({
    palette: {
        custom: {
            main: '#53B175',
            green: '#56B378',
            light_green: '#0dc44f7d'
        }
    },
});






export default function PrimarySearchAppBar() {
    const navigate = useNavigate();
    
    const handleEdit = () => {
        navigate('/products/edit');
    };

 
    const handleAddItem = (event) => {
        navigate("/products/newproduct");
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



   

    
    

    return (
      <>
        <Container maxWidth="lg" sx={{ mt: 1, mb: 3 }}>
          <Grid container spacing={3}>
            <Grid
              container
              item
              xs={12}
              md={4}
              lg={3}
              key="1"
              direction="column"
            >
              <Card
                className="Card"
                onClick={handleAddItem}
                sx={{
                  mt: 1,
                  borderRadius: 5,
                  height: 350,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
                id="1"
              >
                <Grid direction="column">
                  <Grid>
                    <AddIcon
                      sx={{
                        width: 150,
                        height: 150,
                        color: theme.palette.custom.main,
                      }}
                    />
                  </Grid>
                  <Grid>
                    <Typography sx={{ m: 1 }} variant="button">
                      Add New Product
                    </Typography>
                  </Grid>
                </Grid>
              </Card>
            </Grid>

            {cards.map((card, i) => (
              <Grid item xs={12} md={4} lg={3} key="1">
                <Card className="Card" sx={{ mt: 1, borderRadius: 5 }} id="1">
                  <CardContent className="d-flex-head">
                    <Badge
                      overlap="circular"
                      anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
                      badgeContent={
                        <CircleIcon
                          sx={{
                            backgroundColor: theme.palette.custom.main,
                            color: theme.palette.custom.main,
                            border: "2px solid #fff",
                            borderRadius: "50%",
                            width: 20,
                            height: 20,
                          }}
                        ></CircleIcon>
                      }
                    >
                      <Avatar
                        src={card.img}
                        className="pic"
                        sx={{ width: 120, height: 120, bgcolor: "EEEEEE" }}
                      ></Avatar>
                    </Badge>
                  </CardContent>
                  <CardContent
                    sx={{ bgcolor: "#fff" }}
                    className="d-flex-head text-center"
                  >
                    <Box className="text-center">
                      <Typography variant="h6">{card.Product_Name}</Typography>
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
                    <Rating
                      name="half-rating-read"
                      defaultValue={card.Ratingval}
                      precision={0.5}
                      readOnly
                    />
                  </CardContent>
                  <CardActions>
                    {/* <Button size='small' clicked={clicked === i} onClick={() => { handleNew(i) }} fullWidth>See All</Button> */}
                    <Button
                      size="small"
                      onClick={handleEdit}
                      sx={{
                        color: theme.palette.custom.green,
                        borderRadius: 5,
                        "&:hover": { background: "#0dc44f36" },
                      }}
                      fullWidth
                    >
                      Edit
                    </Button>
                    <Button
                      size="small"
                      onClick={handleEdit}
                      sx={{
                        color: theme.palette.custom.green,
                        borderRadius: 5,
                        "&:hover": { background: "#0dc44f36" },
                      }}
                      fullWidth
                    >
                      Delete
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </>
    );
}
