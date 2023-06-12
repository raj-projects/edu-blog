import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <AppBar sx={{ marginBottom: '10px' }}>
      <Box position="static">
        <Toolbar>
          <Container
            sx={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}
          >
            <Typography variant="h6" component="div">
              EduBlogs
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'row' }}>
              <Link to="/" style={{padding: '0 10px', textDecoration: 'none', color: '#fff', cursor: 'pointer'}}>Home</Link>
              <Link to="/about" style={{padding: '0 10px', textDecoration: 'none', color: '#fff', cursor: 'pointer'}}>About</Link>
              <Link to="/category" style={{padding: '0 10px', textDecoration: 'none', color: '#fff', cursor: 'pointer'}}>Categories</Link>
              <Link to="/contact" style={{padding: '0 10px', textDecoration: 'none', color: '#fff', cursor: 'pointer'}}>Contact</Link>
            </Box>
          </Container>
        </Toolbar>
      </Box>
    </AppBar>
  );
}
export default Header;
