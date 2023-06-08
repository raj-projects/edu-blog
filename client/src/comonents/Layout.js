import { Box, Container } from '@mui/material';
import React from 'react';
import Footer from './layout/Footer';
import Header from './layout/Header';
import Sidebar from './layout/Sidebar';
import { Grid, Typography, makeStyles } from '@mui/material';

// const useStyles = makeStyles({
//   mainContainer: {
    
//   }
// })

// const Item = styled(Paper)(({ theme }) => ({
//   backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
//   ...theme.typography.body2,
//   padding: theme.spacing(1),
//   textAlign: 'center',
//   color: theme.palette.text.secondary,
// }));

function Layout() {
  // const classes = useStyles();

  return (
    <>
      <Header />
      {/* <Container
        style={{
          height: '80%',
          display: 'flex',
                  justifyContent: 'space-between',
        padding: 0
        }}
      >
        <box style={{ width: '70%' }}>abc</box>
        <box style={{ width: '30%' }}>
          <Sidebar />
        </box>
      </Container> */}
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

export default Layout;
