import React from 'react';
import { Grid, Box } from '@mui/material';
import { Outlet } from 'react-router-dom';
import DashboardHeader from '../../comonents/layout/DashboardHeader';
import DashboardSidebar from '../../comonents/layout/DashboardSidebar';
import Footer from '../../comonents/layout/Footer';

function Dashboard() {
  return (
    <>
      <DashboardHeader />
      <Box sx={{ marginTop: '65px', minHeight: '85vh' }}>
        <Grid container spacing={2}>
          <Grid item xs={3}>
            <DashboardSidebar />
          </Grid>
          <Grid item xs={8} sx={{ marginTop: '40px', marginBottom: '20px' }}>
            <Outlet />
          </Grid>
        </Grid>
      </Box>
      <Footer />
    </>
  );
}

export default Dashboard;
