import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <AppBar sx={{ marginBottom: '10px' }}>
      <Box position="static">
        <Toolbar>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
              maxWidth: '1440px',
              width: '100%',
              margin: '0 auto',
            }}
          >
            <Typography to="/" variant="h5" component="div">
              <Link
                to="/"
                style={{
                  textDecoration: 'none',
                  color: '#fff',
                  fontWeight: 'bo;d',
                }}
              >
                EduBlogs
              </Link>
            </Typography>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
              }}
            >
              <Link
                to="/"
                style={{
                  padding: '0 10px',
                  textDecoration: 'none',
                  color: '#fff',
                  cursor: 'pointer',
                }}
              >
                Home
              </Link>
              <Link
                to="about"
                style={{
                  padding: '0 10px',
                  textDecoration: 'none',
                  color: '#fff',
                  cursor: 'pointer',
                }}
              >
                About
              </Link>
              <Link
                to="category"
                style={{
                  padding: '0 10px',
                  textDecoration: 'none',
                  color: '#fff',
                  cursor: 'pointer',
                }}
              >
                Categories
              </Link>
              <Link
                to="contact"
                style={{
                  padding: '0 10px',
                  textDecoration: 'none',
                  color: '#fff',
                  cursor: 'pointer',
                }}
              >
                Contact
              </Link>
              <>|</>
              <Link
                to="dashboard"
                style={{
                  padding: '0 10px',
                  textDecoration: 'none',
                  color: '#fff',
                  cursor: 'pointer',
                }}
              >
                Login
              </Link>
            </Box>
          </Box>
        </Toolbar>
      </Box>
    </AppBar>
  );
}
export default Header;
