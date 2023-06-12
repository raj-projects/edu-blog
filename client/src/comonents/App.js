import React from 'react';
import Footer from './layout/Footer';
import Header from './layout/Header';
import Sidebar from './layout/Sidebar';
import { Grid, Container } from '@mui/material';
import { Route, Routes } from 'react-router-dom';
import About from '../pages/userPanel/About';
import PageNotFound from '../pages/userPanel/PageNotFound';
import Home from '../pages/userPanel/Home';
import Categories from '../pages/userPanel/Categories';
import Contact from '../pages/userPanel/Contact';
import Dashboard from '../pages/adminPanel/Dashboard';
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: 'http://localhost:5000/graphql',
  cache: new InMemoryCache(),
});

function App() {
  return (
    <>
      <ApolloProvider client={client}>
        <Header />
        <Container sx={{ marginTop: '80px' }}>
          <Grid container spacing={2}>
            <Grid item xs={8}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="about" element={<About />} />
                <Route path="category" element={<Categories />} />
                <Route path="contact" element={<Contact />} />
                <Route path="dashboard" element={<Dashboard />} />
                <Route path="*" element={<PageNotFound />} />
              </Routes>
            </Grid>
            <Grid item xs={4}>
              <Sidebar />
            </Grid>
          </Grid>
        </Container>
        <Footer />
      </ApolloProvider>
    </>
  );
}

export default App;
