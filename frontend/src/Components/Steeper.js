import axios from "axios";
import React from 'react';
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

  
  const theme = createTheme({
    palette: {
      primary: {
        // Purple and green play nicely together.
        main: '#53B175',
      }
    },
  });
  

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

const Category = [
    
    {
        value: 'vegetables',
        label: 'Vegetables',
    },
    {
        value: 'fruits',
        label: 'Fruits',
    },
    {
        value: 'other',
        label: 'Other',
    },

];


const designation = [
    {
        value: 'backend developer',
        label: 'Backend Developer',
    },
    {
        value: 'Forntend developer',
        label: 'Frontend Developer',
    },
    {
        value: 'Full Stack developer',
        label: 'Full Stack Developer',
    },
    {
        value: 'intern',
        label: 'intern',
    },
    {
        value: 'sofware developer',
        label: 'Software Developer',
    },

]
const BasicForm = ({ formErrors, setFormErrors, image, setImage, initialValues, setInitialValues }) => {

    const handleImage = (e) => {
        console.dir(e)
        const data = e.target.files[0]
        setImage(data)
    }
    const handlePic = () => {
        setImage("")
    }

    return (
        <>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6} lg={4} >

                    {

                        image ?
                            <div className="avatar">
                                <Avatar src={URL.createObjectURL(image)} sx={{ width: 200, height: 200 }}></Avatar>
                                {/* <Button variant='outlined' sx={{mt: 1 , color: '#000000'}} onClick={handlePic}>delete</Button> */}
                                <IconButton onClick={handlePic} aria-label="delete" size="large">
                                    <DeleteIcon />
                                </IconButton>
                            </div>
                            :
                            <label className="flex">
                                <UploadIcon sx={{ width: 100, height: 80, color: '#53B175' }} />
                                <input className="hidden" type='file' onChange={handleImage} />
                            </label>

                    }


                </Grid>
                <Grid item xs={12} md={6} lg={8}>
                    <CssTextField label="Custom CSS" id="custom-css-outlined-input" />
                    <CssTextField
                        id="product-name"
                        // label="Name"
                        label="Product Name"
                        variant="outlined"
                        placeholder="Enter Product Name"
                        fullWidth
                        margin="normal"
                        value={initialValues.productName}
                        onChange={(event) => {
                            setInitialValues({ ...initialValues, productName: event.target.value })
                        }}
                        error={formErrors.productName}
                        helperText={formErrors.productName}
                    />
                    <CssTextField
                        id="Description"
                        // label="Mobile"
                        label="Product Description"
                        type='text'
                        placeholder="Enter Description"
                        fullWidth
                        margin="normal"
                        value={initialValues.Description}
                        onChange={(event) => {
                            setInitialValues({ ...initialValues, Description: event.target.value })
                        }}
                        error={formErrors.Description}
                        helperText={formErrors.Description}
                    />
                    <CssTextField
                        id="outlined-select-category"
                        select
                        label="Category"
                        variant="outlined"
                        // placeholder="Enter Gender"
                        fullWidth
                        margin="normal"
                        value={initialValues.Category}
                        onChange={(event) => {
                            setInitialValues({ ...initialValues, Category: event.target.value })
                        }}
                        error={formErrors.Category}
                        helperText={formErrors.Category}
                    >
                        {Category.map((option) => (
                            <MenuItem key={option.value} value={option.value}>
                                {option.label}
                            </MenuItem>
                        ))}
                    </CssTextField>

                </Grid>

                <Grid item sx={12} md={6} lg={6}>
                <CssTextField
                        id="outlined-select-quantity-type"
                        select
                        label="Quantity Type"
                        variant="outlined"
                        // placeholder="Enter Gender"
                        fullWidth
                        margin="normal"
                        value={initialValues.QuantityType}
                        onChange={(event) => {
                            setInitialValues({ ...initialValues, QuantityType: event.target.value })
                        }}
                        error={formErrors.QuantityType}
                        helperText={formErrors.QuantityType}
                    >
                        {QuantityType.map((option) => (
                            <MenuItem key={option.value} value={option.value}>
                                {option.label}
                            </MenuItem>
                        ))}
                    </CssTextField>


                </Grid>
                <Grid item sx={12} md={6} lg={6}>

                    <CssTextField
                        id="quantity"
                        // label="Mobile"
                        label="Quantity"
                        type='number'
                        placeholder="Enter Quantity"
                        fullWidth
                        margin="normal"
                        value={initialValues.Quantity}
                        onChange={(event) => {
                            setInitialValues({ ...initialValues, Quantity: event.target.value })
                        }}
                        error={formErrors.Quantity}
                        helperText={formErrors.Quantity}
                    />
                </Grid>
            </Grid>

        </>
    );



};

const ContactForm = ({ formErrors, setFormErrors, initialValues, setInitialValues }) => {

    return (
        <>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6} lg={6} >

                    <CssTextField
                        id="selling-price"
                        // label="Mobile"
                        label="Selling Price"
                        type='number'
                        placeholder="Enter Amount"
                        fullWidth
                        margin="normal"
                        value={initialValues.sellingPrice}
                        onChange={(event) => {
                            setInitialValues({ ...initialValues, sellingPrice: event.target.value })
                        }}
                        error={formErrors.sellingPrice}
                        helperText={formErrors.sellingPrice}
                    />

                    <CssTextField
                        label="Total Stock"
                        placeholder="Enter Stock amount"
                        type="number"
                        sx={{  width: '41ch',height: '10ch'}}
                        id="outlined-start-adornment"
                        InputProps={{
                            endAdornment:
                            <FormControl variant="filled" sx={{ m: 1, minWidth: 100}} size="small">
                            <InputLabel id="demo-simple-select-standard-label">Qty type</InputLabel>
                            <Select
                                labelId="demo-simple-select-standard-label"
                                id="demo-simple-select-standard"
                                value={10}
                                // onChange={handleChange}
                                label="Qty type"
                            >
                                <MenuItem value={10}>Kg</MenuItem>
                                <MenuItem value={20}>Gm</MenuItem>
                                <MenuItem value={30}>Pcs</MenuItem>
                            </Select>
                        </FormControl>
                             
                        }}
                    />

                </Grid>
                <Grid item xs={12} md={6} lg={6}>

                    <CssTextField
                        id="discount"
                        // label="Mobile"
                        label="Discount(%)"
                        type='number'
                        placeholder="Enter discount"
                        fullWidth
                        margin="normal"
                        value={initialValues.Discount}
                        onChange={(event) => {
                            setInitialValues({ ...initialValues, Discount: event.target.value })
                        }}
                        error={formErrors.Discount}
                        helperText={formErrors.Discount}
                    />

                    <CssTextField
                        label="Stock Alert"
                        type="number"
                        placeholder="Enter Stock amount"
                        sx={{  width: '41ch' }}
                        fullWidth
                        id="outlined-start-adornment"
                        InputProps={{
                            endAdornment:
                                <FormControl variant="filled" sx={{ m: 1, minWidth: 100}} size="small">
                                    <InputLabel id="demo-simple-select-standard-label">Qty type</InputLabel>
                                    <Select
                                        labelId="demo-simple-select-standard-label"
                                        id="demo-simple-select-standard"
                                        value={10}
                                        // onChange={handleChange}
                                        label="Qty type"
                                    >
                                        <MenuItem value={10}>Kg</MenuItem>
                                        <MenuItem value={20}>Gm</MenuItem>
                                        <MenuItem value={30}>Pcs</MenuItem>
                                    </Select>
                                </FormControl>
                             
                        }}
                    />

                </Grid>
            </Grid>
        </>
    );
};
// const PersonalForm = ({ formErrors, setFormErrors, initialValues, setInitialValues }) => {

//     return (
//         <>
//             <Grid container spacing={2}>
//                 <Grid item xs={12} md={12} lg={12} >

//                     <TextField
//                         id="address1"
//                         label="Address 1"
//                         variant="outlined"
//                         placeholder="Enter Your Address 1"
//                         fullWidth
//                         margin="normal"
//                         value={initialValues.address1}
//                         onChange={(event) => {
//                             setInitialValues({ ...initialValues, address1: event.target.value })
//                         }}
//                         error={formErrors.address1}
//                         helperText={formErrors.address1}

//                     />

//                 </Grid>
//                 <Grid item xs={12} md={6} lg={6}>

//                     <TextField
//                         id="city"
//                         label="City"
//                         variant="outlined"
//                         placeholder="Enter City"
//                         fullWidth
//                         margin="normal"
//                         value={initialValues.City}
//                         onChange={(event) => {
//                             setInitialValues({ ...initialValues, City: event.target.value })
//                         }}
//                         error={formErrors.City}
//                         helperText={formErrors.City}
//                     />
//                     <TextField
//                         id="State"
//                         label="State"
//                         variant="outlined"
//                         placeholder="Enter State"
//                         fullWidth
//                         margin="normal"
//                         value={initialValues.State}
//                         onChange={(event) => {
//                             setInitialValues({ ...initialValues, State: event.target.value })
//                         }}
//                         error={formErrors.State}
//                         helperText={formErrors.State}
//                     />


//                 </Grid>
//                 <Grid item xs={12} md={6} lg={6}>

//                     <TextField
//                         id="Name"
//                         label="Country"
//                         variant="outlined"
//                         placeholder="Enter Country"
//                         fullWidth
//                         margin="normal"
//                         value={initialValues.Country}
//                         onChange={(event) => {
//                             setInitialValues({ ...initialValues, Country: event.target.value })
//                         }}
//                         error={formErrors.Country}
//                         helperText={formErrors.Country}
//                     />


//                     <TextField
//                         id="Mobile"
//                         type='number'
//                         label="Zip Code"
//                         variant="outlined"
//                         placeholder="Enter Code"
//                         fullWidth
//                         margin="normal"
//                         value={initialValues.Zip}
//                         onChange={(event) => {
//                             setInitialValues({ ...initialValues, Zip: event.target.value })
//                         }}
//                         error={formErrors.Zip}
//                         helperText={formErrors.Zip}
//                     />

//                 </Grid>
//             </Grid>

//         </>
//     );
// };


const LinaerStepper = () => {
    const [activeStep, setActiveStep] = useState(0);
    const [image, setImage] = useState("");
    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);

    const [initialValues, setInitialValues] = useState({
        Name: "",
        Mobile: "8765434",
        Email: "",
        DOB: "",
        Gender: "female",
        Joining: "",
        Qualification: "bsc",
        Designation: "intern",
        RFID: "897865",
        address1: "jhj",
        City: "jnm",
        State: "njbnm",
        Country: "knjn",
        Zip: "0987",
    })

    function getSteps() {
        return [
            "Product information",
            "Additional information",
            // "Office Information",
            // "Address",
        ];
    }

    function getStepContent(step) {
        switch (step) {
            case 0:
                return <BasicForm formErrors={formErrors} setFormErrors={setFormErrors} initialValues={initialValues} setInitialValues={setInitialValues} image={image} setImage={setImage} />;
            case 1:
                return <ContactForm formErrors={formErrors} setFormErrors={setFormErrors} initialValues={initialValues} setInitialValues={setInitialValues} />;
            // case 2:
            //     return <PersonalForm formErrors={formErrors} setFormErrors={setFormErrors} initialValues={initialValues} setInitialValues={setInitialValues} />;
            default:
                return "unknown step";
        }
    }

    const steps = getSteps();
    const handleBack = () => {
        setActiveStep(activeStep - 1);
        
    };
    useEffect(() => {
        console.log(formErrors);
        if (Object.keys(formErrors).length === 0 && isSubmit) {
            console.log(initialValues);
        }
    }, [formErrors]);

    const validate = (values) => {
        const errors = {};
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
        if (!values.Email) {
            errors.Email = "Email is required!";
        } else if (!regex.test(values.email)) {
            errors.Email = "Email is not valid!";
        }

        return errors;
    };

    const handleNext = () => {
        if (activeStep == steps.length - 1) {
            setFormErrors(validate(initialValues));
            setIsSubmit(true);
            let formData = new FormData();
            formData.append("image", image)

            Object.keys(initialValues).forEach(key => {
                formData.append(`${key}`, initialValues[`${key}`])
            })
            for (var pair of formData.entries()) {
                console.log(pair[0] + ':- ' + pair[1]);
            }

            axios.post("/add_user", formData)
                .then((resp) => {
                    console.log(resp.data)
                    setActiveStep(activeStep + 1);
                })
                .catch((error) => {
                    console.log(error);
                });

        }
        else {
            setActiveStep(activeStep + 1);
        }

        



    }
    return (
        <>
            <CssBaseline />
            <Container component={Box} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }} p={4} >
                <Paper component={Box} p={3} sx={{ maxWidth: 800 }}>
                    <Stepper alternativeLabel activeStep={activeStep}>
                        {steps.map((step, index) => {
                            const labelProps = {};

                            return (
                                <Step key={index}
                                    sx={{
                                        '& .MuiStepLabel-root .Mui-active': {
                                        color: theme.palette.primary.main, // circle color (COMPLETED)
                                        },
                                        '& .MuiStepLabel-root .Mui-completed': {
                                            background:'white',
                                            

                                            color: 'gray', // circle color (COMPLETED)
                                        },
                                    }}

                                >
                                    <StepLabel {...labelProps}>{step}</StepLabel>
                                </Step>
                            );
                        })}
                    </Stepper>

                    {activeStep === steps.length ? (
                        <Typography>user added</Typography>
                    ) : (
                        <>

                            <Box component="form" className='form'>
                                {getStepContent(activeStep)}

                                <Button
                                    variant="contained"
                                    disabled={activeStep === 0}
                                    onClick={handleBack}
                                    sx={{
                                        "&.Mui-disabled": {
                                          background: "#eaeaea",
                                          color: "#c0c0c0"
                                        },
                                        '&:hover': {
                                            background: theme.palette.primary.main
                                        },
                                        background:theme.palette.primary.main,
                                        mt: 2, mx: 2
                                      }}   
                                >
                                    back
                                </Button>

                                <Button
                                    sx={{ mt: 2, mx: 2}}
                                    variant="contained"
                                    style={{backgroundColor:theme.palette.primary.main}}

                                    onClick={handleNext}
                                >
                                    {activeStep === steps.length - 1 ? "Finish" : "Next"}
                                </Button>
                            </Box>

                        </>
                    )}
                </Paper>
            </Container>
        </>
    );
};

export default LinaerStepper;



