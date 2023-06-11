import { Box } from '@mui/material';
import React from 'react';
import Footer from './layout/Footer';
import Header from './layout/Header';
import Sidebar from './layout/Sidebar';
import { Grid, Typography, makeStyles } from '@mui/material';

// const useStyles = makeStyles({
//   mainContainer: {

//   }
// })

function App() {
  // const classes = useStyles();

  return (
    <>
      <Header />
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={8}>
            <Typography>Abc</Typography>
          </Grid>
          <Grid item xs={4}>
            <Sidebar />
          </Grid>
        </Grid>
      </Box>
      <Footer />
    </>
  );
}

export default App;
