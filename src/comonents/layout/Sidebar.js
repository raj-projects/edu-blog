import * as React from 'react';
import { Container, Box, Typography } from '@mui/material';
import { Padding } from '@mui/icons-material';

function Sidebar() {
  return (
    <Container
      sx={{
        borderLeft: 1,
        borderColor: 'divider',
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: '#eee',
        padding: 0
      }}
    >
      <Box sx={{ height: '200px' }}>
      <Typography variant="h6" gutterBottom sx={{ mt: 3, border: 1, borderColor: 'divider' }}>
        Recent Posts
        </Typography>
        <Typography>hgghghgh</Typography>
        </Box>
      <Box sx={{ height: '200px' }}>
        <Typography variant="h6" gutterBottom sx={{ mt: 3, border: 1, borderColor: 'divider' }}>
          Archives
        </Typography>
      </Box>
<Box sx={{ height: '200px' }}>
      <Typography variant="h6" gutterBottom sx={{ mt: 3, border: 1, borderColor: 'divider' }}>
        Social
      </Typography>
      </Box>
    </Container>
  );
}

export default Sidebar;
