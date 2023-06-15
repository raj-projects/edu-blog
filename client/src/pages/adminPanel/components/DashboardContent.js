import { Box, Card, CardContent } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

const DashboardContent = () => {
  return (
    <>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          gap: '20px',
        }}
      >
        <Card
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: '400px',
            height: '100px',
            fontSize: '20px',
          }}
        >
          <CardContent>
            <Link to="/dashboard/postlist">POSTS</Link>
          </CardContent>
        </Card>
        <Card
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: '400px',
            height: '100px',
            fontSize: '20px',
          }}
        >
          <CardContent>
            <Link to="/dashboard/categorieslist">CATEGORYS</Link>
          </CardContent>
        </Card>
        <Card
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: '400px',
            height: '100px',
            fontSize: '20px',
          }}
        >
          <CardContent>
            <Link to="/dashboard/userlist">USERS</Link>
          </CardContent>
        </Card>
      </Box>
    </>
  );
};

export default DashboardContent;
