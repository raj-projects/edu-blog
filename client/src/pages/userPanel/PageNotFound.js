import { Container, Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

const PageNotFound = () => {
  return (
    <Container align='center'>
      <Typography varient='h1'>404</Typography>
      <Typography varient='h2'>Sorry, Page not found</Typography>

      <Link to='/' component='button'>Back to home</Link>
    </Container>
  )
}

export default PageNotFound;