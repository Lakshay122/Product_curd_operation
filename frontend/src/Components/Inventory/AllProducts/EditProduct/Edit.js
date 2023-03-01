import React from 'react'
import { CssBaseline, Box, Container, Paper, Typography, TextField, Button, Stepper, Avatar, Step, StepLabel, Grid, MenuItem, } from "@mui/material";
import { useState , useEffect} from "react";
import UploadIcon from '@mui/icons-material/Upload';
import 'react-phone-number-input/style.css';
import IconButton from '@mui/material/IconButton';
import { styled } from '@mui/material/styles';
import DeleteIcon from '@mui/icons-material/Delete';
import FormControl from '@mui/material/FormControl';
import { createTheme } from '@mui/material/styles';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import EditIcon from '@mui/icons-material/Edit';

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
 
const Edit = () => {
  return (
      <Container  sx={{display:'flex',justifyContent:'center',alignItems:'center', height:'80%'}}>
          <Paper component={Box} p={3} sx={{ maxWidth: 800 }}>
          <Grid container spacing={2}>
                <Grid item xs={12} sx={{display:'flex', justifyContent:'center'}}>
                    <Typography fontSize={20} fontWeight="medium" sx={{color: "#53B175"}}>Edit Product</Typography>
                </Grid>
                <Grid item xs={12} md={6} lg={4} >
                    <div className="avatar">
                        <Avatar src={"https://media.istockphoto.com/id/1045495508/vector/red-apple-illustration-icon-vector.jpg?s=612x612&w=0&k=20&c=miHEE4W4VlC1D6VNFRe69v7WIvHiiMWMqG68sCjpT3E="} variant="square" sx={{ width: 200, height: 200 }}></Avatar>

                        <IconButton aria-label="delete" size="large">
                            <DeleteIcon />
                        </IconButton>
                    </div>
                </Grid>
                <Grid item xs={12} md={6} lg={8}>
                    <CssTextField
                        id="product-name"
                        // label="Name"
                        label="Product Name"
                        variant="outlined"
                        placeholder="Enter Product Name"
                        fullWidth
                        margin="normal"
                        // value={initialValues.productName}
                        // onChange={(event) => {
                        //     setInitialValues({ ...initialValues, productName: event.target.value })
                        // }}
                        // error={formErrors.productName}
                        // helperText={formErrors.productName}
                    />
                    <CssTextField
                        id="Description"
                        // label="Mobile"
                        label="Product Description"
                        type='text'
                        placeholder="Enter Description"
                        fullWidth
                        margin="normal"
                        // value={initialValues.Description}
                        // onChange={(event) => {
                        //     setInitialValues({ ...initialValues, Description: event.target.value })
                        // }}
                        // error={formErrors.Description}
                        // helperText={formErrors.Description}
                    />
                    <CssTextField
                        id="Description"
                        // label="Mobile"
                        label="Price"
                        type='number'
                        placeholder="Enter amount"
                        fullWidth
                        margin="normal"
                        // value={initialValues.Description}
                        // onChange={(event) => {
                        //     setInitialValues({ ...initialValues, Description: event.target.value })
                        // }}
                        // error={formErrors.Description}
                        // helperText={formErrors.Description}
                    />

                </Grid>

                  <Grid item sx={12} md={6} lg={6}>
                      <CssTextField
                          id="Description"
                          // label="Mobile"
                          label="discount"
                          type='number'
                          placeholder="Enter discount (in %)"
                          fullWidth
                          margin="normal"
                      // value={initialValues.Description}
                      // onChange={(event) => {
                      //     setInitialValues({ ...initialValues, Description: event.target.value })
                      // }}
                      // error={formErrors.Description}
                      // helperText={formErrors.Description}
                      />
                  </Grid>
                <Grid item sx={12} md={6} lg={6}>

                    <CssTextField
                        id="quantity"
                        // label="Mobile"
                        label="category"
                        type='text'
                        placeholder="Enter category"
                        fullWidth
                        margin="normal"
                        // value={initialValues.Quantity}
                        // onChange={(event) => {
                        //     setInitialValues({ ...initialValues, Quantity: event.target.value })
                        // }}
                        // error={formErrors.Quantity}
                        // helperText={formErrors.Quantity}
                    />
                </Grid>
                <Grid item sx={12} md={12} lg={12}  sx={{display:'flex',justifyContent:'end'}}>
                    <Button sx={{bgcolor: '#53B175',color:'#fff',marginRight:'15px'}}>
                        Cancel
                    </Button>
                    <Button ml={3} sx={{bgcolor: '#53B175',color:'#fff'}}>
                        Save
                    </Button>
                </Grid>
            </Grid>
          </Paper>
      </Container>
  )
}

export default Edit
