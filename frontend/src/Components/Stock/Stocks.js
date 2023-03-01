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
import Table from './Table/Table';


const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(4),
    textAlign: 'flex-start',
    color: theme.palette.text.secondary,
    borderRadius: 15
  }));

function Stocks() {
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
                  Stocks
              </Typography>
          </Box>

          <Box sx={{ flexGrow: 1 }}>
              <Grid container m={4} sx={{ display: "flex", justifyContent: 'space-around', alignItems: 'center' }}>
                  <Grid xs={2}>
                      <Item>
                          <Typography >All</Typography>
                          <Typography variant="h6">1046</Typography>
                          <Image src="https://giitsolutions.com/wp-content/uploads/2020/10/stock-graph.png" />
                      </Item>
                  </Grid>

                  <Grid xs={2}>
                      <Item>
                          <Typography >In Stock</Typography>
                          <Typography variant="h6">1046</Typography>
                          <Image src="https://giitsolutions.com/wp-content/uploads/2020/10/stock-graph.png" />
                      </Item>
                  </Grid>

                  <Grid xs={2}>
                      <Item>
                          <Typography>Out Of Stock</Typography>
                          <Typography variant="h6">1046</Typography>
                          <Image src="https://giitsolutions.com/wp-content/uploads/2020/10/stock-graph.png" />
                      </Item>
                  </Grid>

                  <Grid xs={2}>
                      <Item>
                          <Typography>Stock Alert</Typography>
                          <Typography variant="h6">1046</Typography>
                          <Image src="https://giitsolutions.com/wp-content/uploads/2020/10/stock-graph.png" />
                      </Item>
                  </Grid>
              </Grid>
          </Box>
          <Box p={6}>
            <Table/>
          </Box>
    </>
  )
}

export default Stocks