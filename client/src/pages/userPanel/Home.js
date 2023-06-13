import React from 'react';
import { Grid, Box } from '@mui/material';
import { Outlet } from 'react-router-dom';
import Header from '../../comonents/layout/Header';
import Sidebar from '../../comonents/layout/Sidebar';
import Footer from '../../comonents/layout/Footer';

function Home() {
  return (
    <>
      <Header />
      <Box
        sx={{
          maxWidth: '1440px',
          width: '100%',
          margin: '0 auto',
          paddingTop: '80px',
          marginTop: '20px',
        }}
      >
        <Grid container spacing={2}>
          <Grid item xs={8}>
            <Outlet />
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

export default Home;
