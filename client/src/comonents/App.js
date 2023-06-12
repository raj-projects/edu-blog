import { Container } from '@mui/material';
import React from 'react';
import Footer from './layout/Footer';
import Header from './layout/Header';
import Sidebar from './layout/Sidebar';
import { Grid, makeStyles } from '@mui/material';
import { Route, Routes } from 'react-router-dom';
import About from '../pages/userPanel/About';
import PageNotFound from '../pages/userPanel/PageNotFound';
import Home from '../pages/userPanel/Home';
import Categories from '../pages/userPanel/Categories';
import Contact from '../pages/userPanel/Contact';

// const useStyles = makeStyles({
//   mainContainer: {

//   }
// })

function App() {
  // const classes = useStyles();

  return (
    <>
      <Header />
      <Container sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={8}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="about" element={<About />} />
              <Route path="category" element={<Categories />} />
              <Route path="contact" element={<Contact />} />
              <Route path="*" element={<PageNotFound />} />
            </Routes>
          </Grid>
          <Grid item xs={4}>
            <Sidebar />
          </Grid>
        </Grid>
      </Container>
      <Footer />
    </>
  );
}

export default App;
