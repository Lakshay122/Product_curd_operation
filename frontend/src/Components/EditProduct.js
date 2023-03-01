import React from 'react';
// import Grid from '@mui/material/Grid';
// import '../App';
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2
import {Typography, MenuItem, Button } from '@mui/material';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import { Image } from 'mui-image';
import Switch from '@mui/material/Switch';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import ChipInput from 'material-ui-chip-input';
import Chip from '@mui/material/Chip';
import Paper from '@mui/material/Paper';
import { alpha, styled } from '@mui/material/styles';
import TagFacesIcon from '@mui/icons-material/TagFaces';
import IconButton from '@mui/material/IconButton';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { Container, CssBaseline, Card, CardContent, CardHeader  } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import Table from '@mui/material/Table';
import Autocomplete from '@mui/material/Autocomplete';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MoreVertIcon from '@mui/icons-material/MoreVert';

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Collapse from '@mui/material/Collapse';
import { makeStyles } from '@mui/styles';


const useStyles= makeStyles({
    btn: {
        color: '#53B175',
        backgroundColor: '#fff',
        '&:hover':{
            color: '#fff',
            backgroundColor: '#53B175'
        }
      },
    btn2: {
        color: '#fff',
        backgroundColor: '#53B175',
        '&:hover':{
            color: '#fff',
            backgroundColor: '#53B175'
        }
      }
    // btn:hover :{
    //     color: #fff,
    //     background-color: #53B175
    //   }
})

const CssTextField = styled(TextField)({
    '& label.Mui-focused': {
      color: '#53B175',
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: '#53B175',
    },
    '& .MuiOutlinedInput-root': {
      '&.Mui-focused fieldset': {
        borderColor: '#53B175',
      },
    },
  });


const EditProduct = () => {




    const [open, setOpen] = React.useState(false);
    const [image, setImage] = React.useState("");
    const [openSaveChanges, setOpenSaveChanges] = React.useState(false);
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open3dot = Boolean(anchorEl);
    

    

    const classes = useStyles()

    const handleClick3dot = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose3dot = (e) => {
        console.dir(e)
        // {e.target.innerText==='Change Image'? <input className="hidden" type='file' onChange={handleImage} /> : console.log('else')}
        setAnchorEl(null);
    };
    
    const top100Films = [
        { title: 'Allium', year: 1994 },
        { title: 'Marrow', year: 1972 },
        { title: 'Root Vegetables', year: 1974 },
        { title: 'Fruits', year: 2008 },

    ];
    
    // const fixedOptions = [top100Films[1]];
    // const [value, setValue] = React.useState([...fixedOptions, top100Films[1]]);
    const [value, setValue] = React.useState([ top100Films[2]]);

    // const theme = createTheme({
    //     palette: {
    //         custom: {
    //             main: '#53B175',
    //             green: '#56B378',
    //             light_green: '#0dc44f7d'
    //         }
    //     },
    // });

    const options = [
        'Change Image',
        'Delete image'
      ];

    const handleImage = (e) => {
        console.dir(e)
        const data = e.target.files[0]
        setImage(data)
    }
    
    const handleClickOpen = () => {
        setOpen(true);
      };
    
    const handleClose = () => {
        setOpen(false);
        const {addStock } = input;
        console.log(result)
        setResult(result + Number(addStock));
    };



    const handleClickOpenSaveChanges = () => {
        setOpenSaveChanges(true);
      };
    
    const handleCloseSaveChanges = () => {
        setOpenSaveChanges(false);
    };

    const QuantityType = [
        {
            value: 'kg',
            label: 'Kg',
        },
        {
            value: 'gm',
            label: 'Gm',
        },
        {
            value: 'piece',
            label: 'Pieces',
        },
    
    ];

    const ExpandMore = styled((props) => {
        const { expand, ...other } = props;
        return <IconButton {...other} />;
    })(({ theme, expand }) => ({
        transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    }));

    function createCard(Vegetable_Name, Rating, items_left, img) {
        return { Vegetable_Name, Rating, items_left, img };
    }

    const cards = [
        createCard('Awesome Product', 4, 3, 'https://cdn-icons-png.flaticon.com/512/4128/4128176.png', true),
        createCard('Great!', 3, 1, 'https://cdn-icons-png.flaticon.com/512/4128/4128176.png'),
    ]

    const [expandedId, setExpandedId] = useState(false);
    const ids = [{ _id: "1" }, { _id: "2" }, { _id: "3" }, { _id: "4" }, { _id: "5" }, { _id: "6" }];
    const handleExpandClick = (i) => {
        setExpandedId(expandedId === i ? false : i);
    };

    const [chipData, setChipData] = React.useState([
        { key: 0, label: 'Allium' },
        { key: 1, label: 'marrow' },
        { key: 2, label: 'Fresh Fruits' },
        { key: 4, label: 'root vegetables' },
      ]);
    
    const handleDelete = (chipToDelete) => () => {
    setChipData((chips) => chips.filter((chip) => chip.key !== chipToDelete.key));
    };

    const addTags = (e) => {
        console.dir(e.target.value)
        if(e.key==='Enter'){
            setChipData([...chipData, {key:5, label: e.target.value}])
            console.log(...chipData)
            e.target.value=""
        }
    };

    const ListItem = styled('li')(({ theme }) => ({
    margin: theme.spacing(0.5),
    }));

    const [input, setInput] = React.useState({
        addStock: "",
        originalPrice: "",
        discount:""
    });

    const [result, setResult] = React.useState(0)
    const [totalPrice, setTotalPrice] = React.useState(0)

    const handleInput = function(e){
        setInput({
            ...input, 
            [e.target.name]: e.target.value
        });
        console.dir(e)
    };


 

    
  return (
    <>
        <Grid container m={1} spacing={2} wrap='wrap'  disableEqualOverflow>
            <Grid item direction = 'column' md={4}  >
                <Grid item sx={{display:'flex', alignSelf:'center', justifyContent: 'center'}}>
                    <Image
                        src = "https://hips.hearstapps.com/del.h-cdn.co/assets/17/25/980x735/sd-aspect-1497987605-strawberry-bowl.jpg?resize=1200:*"
                        alt={'product image'}
                        width={350}
                        height={270}
                        style={{borderRadius:10,border:'2px solid white'}}
                        cover='true'
                    />
                      <IconButton
                          aria-label="more"
                          id="long-button"
                          aria-controls={open ? 'long-menu' : undefined}
                          aria-expanded={open ? 'true' : undefined}
                          bgcolor='white'
                          className='Card'
                          m={1}
                          sx={{display: 'flex', justifyContent: 'flex-end', alignSelf:'flex-start',position:'relative',right:45,top:5, background: 'white'}}
                          aria-haspopup="true"
                          onClick={handleClick3dot}
                      >
                          <MoreVertIcon />
                      </IconButton>
                          
                      <Menu
                          id="long-menu"
                          MenuListProps={{
                              'aria-labelledby': 'long-button',
                          }}
                          anchorEl={anchorEl}
                          open={open3dot}
                          onClose={handleClose3dot}
                          PaperProps={{
                              style: {
                                  maxHeight: 48 * 4.5,
                                  width: '20ch',
                              },
                          }}
                      >
                          {options.map((option) => (
                              <MenuItem key={option} onClick={handleClose3dot}>
                                { option==="Change Image"
                                    ?<label aria-label="upload picture" component="label">
                                        <input hidden accept="image/*" type="file" />
                                        {option}
                                    </label>
                                    :<label component="label">
                                        {option}
                                    </label>
                                }
                                
                                  
                              </MenuItem>
                          ))}
                      </Menu>
                </Grid>
            </Grid>
            <Grid container md={8} direction="column">
                <Grid container md={12} direction="row">
                    <Grid item md={3}>
                        <CssTextField
                            id="outlined-read-only-input"
                            label="Product Id"
                            defaultValue="#03943929"
                            InputProps={{
                                readOnly: true,
                            }}
                        />
                    </Grid>
                    <Grid item md={3}>
                        <CssTextField 
                            id="outlined-basic" 
                            placeholder='Enter Product Name'
                            label="Product Name" 
                            variant="outlined" 
                        />
                    </Grid>
                    <Grid item md={3}>
                        <FormControlLabel
                            value="top"
                            control={<Switch color="primary" />}
                            label="Hide This Item"
                            labelPlacement="top"
                        />
                    </Grid>
                    <Grid item md={3}>
                        <FormControlLabel
                            value="top"
                            control={<Switch color="primary" />}
                            label="Out Of Stock"
                            labelPlacement="top"
                        />
                    </Grid>
                </Grid>

                <Grid container md={12} direction='row'>
                    <Grid md={2} direction="row"  >
                        <Grid>
                           <Typography>Rating</Typography>
                           <Rating name="read-only" value={2.5} readOnly/>
                        </Grid>     
                    </Grid>
                    <Grid container md={10} sx={{ display:'flex',justifyContent:"center",alignItems: 'center'}} direction={'rows'}>
                            <Grid><Typography>Category</Typography></Grid>
                                {/* <ChipInput
                                    label="Video Tags"
                                    defaultValue={['clown fish', 'whale', 'shark']}
                                    value={this.state.tags}
                                    onAdd={(chip) => this.handleAddChip(chip)}
                                    onDelete={(chip, index) => this.handleDeleteChip(chip, index)}
                                />     */}
                            <Grid>
                                {/* <Paper
                                    sx={{
                                        display: 'flex',
                                        justifyContent: 'center',
                                        flexWrap: 'wrap',
                                        listStyle: 'none',
                                        p: 0.5,
                                        m: 0,
                                        width: 420
                                    }}
                                    component="ul"
                                >
                                    {chipData.map((data) => {
                                        let icon;
                                        return (
                                            <ListItem key={data.key}>
                                                <Chip
                                                    icon={icon}
                                                    label={data.label}
                                                    onDelete={handleDelete(data)}
                                                />
                                                
                                            </ListItem>
                                        );
                                    })}
                                    <input type='text' placeholder="enter to add category" onKeyUp={addTags} style={{border:'none', outline:'none'}} />
                                </Paper> */}

                              <Autocomplete
                                  multiple
                                  limitTags={2}
                                  id="fixed-tags-demo"
                                  value={value}
                                  onChange={(event, newValue) => {
                                      setValue([
                                        //   ...fixedOptions,
                                          ...newValue.filter((option) => option),
                                      ]);
                                  }}
                                  options={top100Films}
                                  getOptionLabel={(option) => option.title}
                                  renderTags={(tagValue, getTagProps) =>
                                      tagValue.map((option, index) => (
                                          <Chip
                                              label={option.title}
                                              {...getTagProps({ index })}
                                            //   disabled={fixedOptions.indexOf(option) !== -1}
                                          />
                                      ))
                                  }
                                  style={{ width: 500 }}
                                  renderInput={(params) => (
                                      <CssTextField {...params} label="Category tags" placeholder="enter to add categories" />
                                  )}
                              />
                            </Grid>
                       
                    </Grid>
                </Grid>

                <Grid item md={12}>
                      <CssTextField
                          id="outlined-multiline-static"
                          label="Description"
                          placeholder='Enter Product Description'
                          multiline
                          rows={3}
                          fullWidth
                      />
                </Grid>
            </Grid>
        </Grid>

        <Grid container  mr={1} ml={1} mt={1} spacing={1.5}  wrap='wrap' disableEqualOverflow>
            <Grid item md={4} >
                  <Card >
                      <CardHeader

                          title={
                              <Typography variant="h6">Reviews</Typography>
                          }
                          border="1px solid black"
                          sx={{ bgcolor: "#53B175", color: "#fff", height: 30 }}
                          align="center"
                      />
                      <CardContent className='Scroll-bar' sx={{height:220}}
                      >
                          {cards.map((card, i) => (
                              <Card sx={{ mt: 1, bgcolor: '#f5f5f5' }} key={card.taskName}>
                                  <CardHeader
                                      avatar={
                                          <Avatar aria-label="recipe" src={card.img}>
                                          </Avatar>
                                      }
                                      action={
                                          <ExpandMore

                                              aria-expanded={expandedId === i}
                                              aria-label="show more"
                                              onClick={() => { handleExpandClick(i) }}
                                          >
                                              <ExpandMoreIcon />
                                          </ExpandMore>
                                        //   <>
                                        //       {(() => {
                                        //           if (card.items_left < 1) {
                                        //               return (
                                        //                   <Typography variant="h7" sx={{ color: "gray" }} gutterBottom>Out of Stock</Typography>
                                        //               )
                                        //           }

                                        //           return (<Typography variant="h7" sx={{ color: "gray" }} gutterBottom>only {card.items_left} kg left</Typography>);
                                        //       })()}
                                        //   </>

                                      }
                                      title={
                                          <Typography variant="subtitle2" sx={{ fontSize: 18 }} gutterBottom  >
                                              {card.Vegetable_Name}
                                          </Typography>
                                      }
                                      subheader={
                                        //   <Typography sx={{ fontSize: 16 }} gutterBottom  >
                                        //       Category : {card.Category_Name}
                                        //   </Typography>
                                            <Rating name="read-only" value={card.Rating} readOnly/>
                                      }
                                  />
                                <Collapse in={expandedId === i} timeout="auto" unmountOnExit >
                                    <CardContent>
                                        <Typography variant='body' component='div'>Posted on 15 Dec, 2020 by </Typography>
                                        <Typography variant='h6' >
                                            Mohit Soni
                                        </Typography>
                                    </CardContent>
                                </Collapse>
                              </Card>
                          ))}
                      </CardContent>
                  </Card>



            </Grid>
            <Grid container md={8} direction="column">
                <Grid container md={12} direction="row">
                    <Grid item md={3}>
                    <CssTextField
                        id="outlined-select-quantity-type"
                        select
                        label="Quantity Type"
                        variant="outlined"
                        // placeholder="Enter Gender"
                        fullWidth
                        margin="normal"
                        // value={initialValues.QuantityType}
                        // onChange={(event) => {
                        //     setInitialValues({ ...initialValues, QuantityType: event.target.value })
                        // }}
                        // error={formErrors.QuantityType}
                        // helperText={formErrors.QuantityType}
                    >
                        {QuantityType.map((option) => (
                            <MenuItem key={option.value} value={option.value}>
                                {option.label}
                            </MenuItem>
                        ))}
                    </CssTextField>


                    </Grid>
                    <Grid item md={3}>
                        <CssTextField
                            id="stock-limit"
                            // label="Mobile"
                            label="Stock Limit"
                            type='number'
                            placeholder="Enter Amount"
                            fullWidth
                            margin="normal"
                            // value={initialValues.sellingPrice}
                            // onChange={(event) => {
                            //     setInitialValues({ ...initialValues, sellingPrice: event.target.value })
                            // }}
                            // error={formErrors.sellingPrice}
                            // helperText={formErrors.sellingPrice}
                        />
                    </Grid>
                    <Grid item md={3}>
                        <CssTextField
                            id="total-stock"
                            // label="Mobile"
                            label="Total Stock"
                            name='totalStock'
                            value={result}
                            type='number'
                            placeholder="Enter Amount"
                            fullWidth
                            margin="normal"
                            onChange={handleInput}
                            InputProps={{
                                readOnly: true,
                            }}
                            // value={initialValues.sellingPrice}
                            // onChange={(event) => {
                            //     setInitialValues({ ...initialValues, sellingPrice: event.target.value })
                            // }}
                            // error={formErrors.sellingPrice}
                            // helperText={formErrors.sellingPrice}
                        />
                    </Grid>
                    <Grid item md={3} margin="normal" sx={{display:'flex',justifyContent:'center', alignItems: 'center'}}>
                        <Button variant="contained" className={classes.btn2} onClick={handleClickOpen}>Add Stock +</Button>
                          <Dialog open={open} onClose={handleClose}>
                              <DialogTitle>Upgrade Stock</DialogTitle>
                              <DialogContent>
                                  
                                  <CssTextField
                                      autoFocus
                                      margin="dense"
                                      id=" add-stock"
                                      name='addStock'
                                      value={input.addStock}
                                      label="Add Stock"
                                      placeholder="Enter Value"
                                      type="number"
                                      onChange={handleInput}
                                      fullWidth
                                      variant="standard"
                                  />

                                  <CssTextField
                                      autoFocus
                                      margin="dense"
                                      id="password"
                                      label="password"
                                      placeholder='Enter Password'
                                      type="Password"
                                      fullWidth
                                      variant="standard"
                                  />
                              </DialogContent>
                              <DialogActions>
                                  <Button className={classes.btn} onClick={handleClose}>Cancel</Button>
                                  <Button className={classes.btn} onClick={handleClose}>Save</Button>
                              </DialogActions>
                          </Dialog>
                    </Grid>
                </Grid>
                <Grid container md={12} direction="row">
                    <Grid item md={3}>
                        <CssTextField
                            id="quantity"
                            // label="Mobile"
                            label="Quantity"
                            type='number'
                            placeholder="Enter Amount"
                            fullWidth
                            margin="normal"
                            // value={initialValues.sellingPrice}
                            // onChange={(event) => {
                            //     setInitialValues({ ...initialValues, sellingPrice: event.target.value })
                            // }}
                            // error={formErrors.sellingPrice}
                            // helperText={formErrors.sellingPrice}
                        />
                    </Grid>
                    <Grid item md={3}>
                        <CssTextField
                            id="original price"
                            // label="Mobile"
                            label="Original Price"
                            type='number'
                            name='originalPrice'
                            value={input.originalPrice}
                            onChange={handleInput}
                            placeholder="Enter Amount"
                            fullWidth
                            margin="normal"
                            // value={initialValues.sellingPrice}
                            // onChange={(event) => {
                            //     setInitialValues({ ...initialValues, sellingPrice: event.target.value })
                            // }}
                            // error={formErrors.sellingPrice}
                            // helperText={formErrors.sellingPrice}
                        />
                    </Grid>
                    <Grid item md={3}>
                        <CssTextField
                            id="discount"
                            // label="Mobile"
                            label="Discount(%)"
                            type='number'
                            name ="discount"
                            value={input.discount}
                            onChange={handleInput}
                            placeholder="Enter discount in percentage"
                            fullWidth
                            margin="normal"
                            // value={initialValues.sellingPrice}
                            // onChange={(event) => {
                            //     setInitialValues({ ...initialValues, sellingPrice: event.target.value })
                            // }}
                            // error={formErrors.sellingPrice}
                            // helperText={formErrors.sellingPrice}
                        />
                    </Grid>
                    <Grid item md={3}>
                        <CssTextField
                            id="outlined-read-only-input"
                            label="Total Price (Rs)"
                            value={(Number(input.originalPrice) * Number(input.discount))/100}
                            name='totalPrice'
                            fullWidth
                            // onChange= {handleTotalPrice}
                            margin="normal"
                            InputProps={{
                                readOnly: true,
                            }}
                        />
                    </Grid>
                </Grid>

                <Grid container md={12} direction="row" sx={{justifyContent:"flex-end"}}>
                    <Grid item md={2}>
                        <Button variant="contained" className={classes.btn2} onClick={handleClickOpenSaveChanges}>Save</Button>
                          <Dialog open={openSaveChanges} onClose={handleCloseSaveChanges}>
                              <DialogTitle>Verification</DialogTitle>
                              <DialogContent>
                                  <DialogContentText>
                                      Do You Want To Save Changes?
                                  </DialogContentText>
                                  <CssTextField
                                      autoFocus
                                      margin="dense"
                                      id="password"
                                      label="Password"
                                      placeholder='Enter your password'
                                      type="password"
                                      fullWidth
                                      variant="standard"
                                  />
                              </DialogContent>
                              <DialogActions>
                                  <Button className={classes.btn} onClick={handleCloseSaveChanges}>Cancel</Button>
                                  <Button className={classes.btn} onClick={handleCloseSaveChanges}>Save</Button>
                              </DialogActions>
                          </Dialog>
                    </Grid>
                    <Grid item md={2}>
                        <Button className={classes.btn2} variant="contained">Cancel</Button>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    </>
  )
}

export default EditProduct