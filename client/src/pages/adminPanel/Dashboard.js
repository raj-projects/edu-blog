import React from 'react';
import { Grid, Box } from '@mui/material';
import { Outlet, useLocation } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import DashboardHeader from '../../comonents/layout/DashboardHeader';
import DashboardSidebar from '../../comonents/layout/DashboardSidebar';
import Footer from '../../comonents/layout/Footer';
// import { GET_CURRENT_USER } from '../../queries/queries';

function Dashboard() {
  const location = useLocation();
  // const { loading, error, data } = useQuery(GET_CURRENT_USER);

  // if (loading) return <p>It's Loading </p>;
  // if (error) return <p>There is an error : {error.message} </p>;

  return (
    <>
      {/* <DashboardHeader data={data} /> */}
      <DashboardHeader location={location} />
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
