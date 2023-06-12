import * as React from 'react';
import { Container, Box, Typography, Stack } from '@mui/material';

function Sidebar() {
  return (
    <Container
      sx={{
        borderLeft: 1,
        borderColor: 'divider',
        display: 'flex',
        flexDirection: 'column',
        padding: 0,
      }}
    >
      <Box sx={{ height: '300px' }}>
        <Typography
          variant="h6"
          gutterBottom
          sx={{
            border: 1,
            borderColor: 'divider',
            backgroundColor: '#777',
            color: '#fff',
            padding: '0 10px',
          }}
        >
          Recent Posts
        </Typography>
        <Stack
          sx={{
            padding: '0 10px',
          }}
        >
          <Typography>hgghghgh</Typography>
        </Stack>
      </Box>
      <Box sx={{ height: '300px' }}>
        <Typography
          variant="h6"
          gutterBottom
          sx={{
            border: 1,
            borderColor: 'divider',
            backgroundColor: '#777',
            color: '#fff',
            padding: '0 10px',
          }}
        >
          Archives
        </Typography>
        <Stack
          sx={{
            padding: '0 10px',
          }}
        >
          <Typography>hgghghgh</Typography>
        </Stack>
      </Box>
      <Box sx={{ height: '200px' }}>
        <Typography
          variant="h6"
          gutterBottom
          sx={{
            border: 1,
            borderColor: 'divider',
            backgroundColor: '#777',
            color: '#fff',
            padding: '0 10px',
          }}
        >
          Social
        </Typography>
        <Stack
          sx={{
            padding: '0 10px',
          }}
        >
          <Typography>hgghghgh</Typography>
        </Stack>
      </Box>
    </Container>
  );
}

export default Sidebar;
