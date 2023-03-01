import React from 'react';
import { useState, useEffect } from 'react';
import MaterialTable from 'material-table';
import {Typography, MenuItem, Button } from '@mui/material';
// import { makeStyles } from '@mui/styles';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2
import DialogContent from '@mui/material/DialogContent';
import Box from '@mui/material/Box';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { alpha, styled } from '@mui/material/styles';

function Table(props) {

  const [open, setOpen] = React.useState(false);
  
  async function handleClickOpen() {
    setOpen(true)
  };

  const handleClose = () => {
    setOpen(false);
  };


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

    // const useStyles= makeStyles({
    //     btn: {
    //         color: '#53B175',
    //         backgroundColor: '#fff',
    //         '&:hover':{
    //             color: '#fff',
    //             backgroundColor: '#53B175'
    //         }
    //       },
    //     btn2: {
    //         color: '#fff',
    //         backgroundColor: '#53B175',
    //         '&:hover':{
    //             color: '#fff',
    //             backgroundColor: '#53B175'
    //         }
    //       }
    //     // btn:hover :{
    //     //     color: #fff,
    //     //     background-color: #53B175
    //     //   }
    // })


    // const classes= useStyles();

    const columns = [
      { title: "Product Id", field: "productId" },
      { title: "Product Name", field: "productName" },
      { title: "Weight Unit", field: "unit" },
      { title: "Quantity", field: "qty" },
      { title: "Stock Alert",
        field: "stockAlert",
        render: (rowData)=>(
          <>
            {rowData.stockAlert==="YES"?<Typography color= "green">yes</Typography>:<Typography color= "red">no</Typography>}
          </>
        ) },
      { title: "Alert Limit", field: "alertLimit", filtering: false },
      {
        title: "Add Stock",
        field: "addStock",
        filtering: false,
        render: (rowData) => (
          <>
            <Button sx={{ background: "#53B175",'&:hover':{ color: '#fff',backgroundColor: '#53B175' }}} onClick = {handleClickOpen} variant="contained">Add Stock</Button>
          </>
        ),
      },
    ];

    const data = [
      { productId: 'A472U8370', productName: 'Apples', unit: 'kg', qty: 12,stockAlert: 'NO', alertLimit:7,addStock:'btn' },
      { productId: 'B472U8370', productName: 'Lemons', unit: 'gm', qty: 200,stockAlert: 'NO', alertLimit:50,addStock:'btn' },
      { productId: 'C472U8370', productName: 'Strawberry', unit: 'kg', qty: 58,stockAlert: 'YES', alertLimit:23,addStock:'btn' },
      { productId: 'D472U8370', productName: 'Banana', unit: 'gm', qty: 200,stockAlert: 'NO', alertLimit:29,addStock:'btn' },
      { productId: 'E472U8370', productName: 'Mango', unit: 'pcs', qty: 250,stockAlert: 'YES', alertLimit:100,addStock:'btn' },
      { productId: 'F472U8370', productName: 'Tomato', unit: 'kg', qty: 2020,stockAlert: 'YES', alertLimit:'Delivered',addStock:'btn' },
      { productId: 'G472U8370', productName: 'Apples', unit: 'pcs', qty: 90,stockAlert: 'NO', alertLimit:10,addStock:'btn' },
      { productId: 'H472U8370', productName: 'Apples', unit: 'gm', qty: 100,stockAlert: 'YES', alertLimit:20,addStock:'btn' },
      { productId: 'I472U8370', productName: 'Strawberry', unit: 'kg', qty: 8,stockAlert: 'NO', alertLimit:4,addStock:'btn' },
      
    ]  

    return (
      <>
        <MaterialTable
          title="Stocks"
          columns={columns}
          data= {data}  
          options={{
            headerStyle:{backgroundColor:'#53B175', color:'white'},
            exportButton: true,
            filtering: true,
            searchFieldStyle: {outline: 'none'}
          }}

        />
        {/* <Dialog open={open} onClose={handleClose}>
          <DialogTitle>Subscribe</DialogTitle>
          <DialogContent>
            <DialogContentText>
              To subscribe to this website, please enter your email address here. We
              will send updates occasionally.
            </DialogContentText>
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Email Address"
              type="email"
              fullWidth
              variant="standard"
            />
          </DialogContent>
        </Dialog> */}


        <Dialog open={open} onClose={handleClose}>
          <DialogTitle>Upgrade Stock</DialogTitle>
          <DialogContent>
            <Box
              component="form"
              sx={{
                '& > :not(style)': { m: 1, width: '25ch' },
              }}
              noValidate
              autoComplete="off"
            >

              <CssTextField
                autoFocus
                margin="normal"
                id=" add-stock"
                name='addStock'
                // value={0}
                label="Add Stock"
                placeholder="Enter Value"
                type="number"
                // onChange={}
                variant="standard"
              />

              <CssTextField
                autoFocus
                margin="normal"
                id="Alert Limit"
                name='addStock'
                // value={}
                label="Alert Limit"
                placeholder="Enter Value"
                type="number"
                // onChange={}
                variant="standard"
              />
            </Box>

            

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
            <Button sx={{ color: '#53B175','&:hover':{ color: '#53B175',backgroundColor: '#fff' }}}  onClick={handleClose}>Cancel</Button>
            <Button sx={{ color: '#53B175','&:hover':{ color: '#53B175',backgroundColor: '#53B175' }}}  onClick={handleClose}>Update</Button>
          </DialogActions>
        </Dialog>
      </>
      )
}

export default Table