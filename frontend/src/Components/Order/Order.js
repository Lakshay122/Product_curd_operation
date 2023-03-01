import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Grid from '@mui/material/Unstable_Grid2';
import Tab from '@mui/material/Tab';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Image from 'mui-image';
import { createTheme } from '@mui/material/styles';
import AllOrders from './AllOrders/AllOrders';
import Table from './Table/Table';

const theme = createTheme({
  palette: {
      custom: {
          main: '#53B175',
          green: '#56B378',
          light_green: '#0dc44f7d'
      }
  },
});

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(4),
  textAlign: 'flex-start',
  color: theme.palette.text.secondary,
  borderRadius: 15
}));


export default function Order() {

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <>
      <Box className='d-flex align-items-center justify-content-between card-header' mb={2} sx={{ bgcolor: '#53B175' }}>
                <Typography
                    component="h1"
                    variant="h6"
                    color="#fff"
                    noWrap
                    
                    sx={{ flexGrow: 1 }}
                >
                    Orders
                </Typography>
      </Box>
      
      <Box sx={{ flexGrow: 1 }}>
        <Grid container m={4}  sx={{display:"flex",justifyContent:'space-around',alignItems:'center'}}>
          <Grid xs={2}>
            <Item>
              <Typography >Active Orders</Typography>
              <Typography variant="h6">1046</Typography>
              <Image  src ="https://giitsolutions.com/wp-content/uploads/2020/10/stock-graph.png"/>
            </Item>
          </Grid>

          <Grid xs={2}>
            <Item>
              <Typography >Unfulfilled</Typography>
              <Typography variant="h6">1046</Typography>
              <Image src ="https://giitsolutions.com/wp-content/uploads/2020/10/stock-graph.png"/>
            </Item>
          </Grid>

          <Grid xs={2}>
            <Item>
              <Typography>Pending</Typography>
              <Typography variant="h6">1046</Typography>
              <Image src ="https://giitsolutions.com/wp-content/uploads/2020/10/stock-graph.png"/>
            </Item>
          </Grid>

          <Grid xs={2}>
            <Item>
              <Typography>fulfilled</Typography>
              <Typography variant="h6">1046</Typography>
              <Image src ="https://giitsolutions.com/wp-content/uploads/2020/10/stock-graph.png"/>
            </Item>
          </Grid>
        </Grid>
    </Box>
     


      <Box sx={{ width: '100%' }}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <Tabs TabIndicatorProps={{style: {background:'green'}}} sx={{
            '& .MuiTab-root': { color: 'Secondary'  },
            '& .Mui-selected': { color: theme.palette.custom.main  },
          }} value={value} onChange={handleChange} aria-label="basic tabs example">
            <Tab label="All Orders" {...a11yProps(0)} />
            <Tab label="Completed" {...a11yProps(1)} />
            <Tab label="Pending" {...a11yProps(2)} />
            <Tab label="Cancelled" {...a11yProps(3)} />
          </Tabs>
        </Box>
        <TabPanel value={value} index={0}>
        <Table show="Delivered"/>
        </TabPanel>
        <TabPanel value={value} index={1}>
          <Table show="Delivered"/>
        </TabPanel>
        <TabPanel value={value} index={2}>
          <Table show="Pending"/>
        </TabPanel>
        <TabPanel value={value} index={3}>
          <Table show="Cancelled"/>
        </TabPanel>
    </Box>
    </>
  )
}
