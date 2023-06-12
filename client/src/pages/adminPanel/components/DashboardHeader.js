import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';

function DashboardHeader() {
  return (
    <AppBar sx={{ marginBottom: '10px' }}>
      <Box position="static">
        <Toolbar>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}
          >
            <Typography variant="h6" component="div">
              EduBlogs
            </Typography>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
              }}
            >
              <Link
                to="/dashboard/posts"
                style={{
                  padding: '0 10px',
                  textDecoration: 'none',
                  color: '#fff',
                  cursor: 'pointer',
                }}
              >
                Posts
              </Link>
              <Link
                to="/dashboard/categories"
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
                to="/dashboard/users"
                style={{
                  padding: '0 10px',
                  textDecoration: 'none',
                  color: '#fff',
                  cursor: 'pointer',
                }}
              >
                Users
              </Link>
            </Box>
          </Box>
        </Toolbar>
      </Box>
    </AppBar>
  );
}
export default DashboardHeader;
