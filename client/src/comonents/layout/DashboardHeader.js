import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import Logout from '../../pages/userPanel/auth/AuthButton';

function DashboardHeader({ location }) {
  return (
    <AppBar sx={{ marginBottom: '10px' }}>
      <Box position="static">
        <Toolbar>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              width: '100%',
            }}
          >
            <Link
              to="/dashboard"
              style={{
                textDecoration: 'none',
                color: '#fff',
                fontSize: '20px',
                fontWeight: 'bold',
              }}
            >
              EduBlogs
            </Link>
            <Box>
              {/* <Typography>{location.state.id}</Typography> */}
              <Link
                to="/"
                style={{
                  padding: '0 10px',
                  textDecoration: 'none',
                  color: '#fff',
                  cursor: 'pointer',
                }}
              >
                Logout
              </Link>
            </Box>
          </Box>
        </Toolbar>
      </Box>
    </AppBar>
  );
}
export default DashboardHeader;
