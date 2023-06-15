import * as React from 'react';
import {
  Container,
  Box,
  Typography,
  Stack,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Chip,
} from '@mui/material';
import InboxIcon from '@mui/icons-material/Inbox';
import { useQuery } from '@apollo/client';
import { GET_CATEGORIES } from '../../queries/queries';

function Sidebar() {
  const { loading, error, data } = useQuery(GET_CATEGORIES);

  if (loading) return <p>It's Loading </p>;
  if (error) return <p>There is an error : {error.message} </p>;

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
            padding: '5px 10px',
            fontWeight: 600,
          }}
        >
          Recent Posts
        </Typography>
        <List sx={{ height: '220px', overflow: 'auto', paddingTop: 0 }}>
          {data.categories.map((category) => {
            return (
              <ListItem disablePadding key={category.id}>
                <ListItemButton>
                  <ListItemIcon>
                    <InboxIcon />
                  </ListItemIcon>
                  <ListItemText primary={category.name} />
                </ListItemButton>
              </ListItem>
            );
          })}
        </List>
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
            padding: '5px 10px',
            fontWeight: 600,
          }}
        >
          Categories
        </Typography>
        <List sx={{ height: '220px', overflow: 'auto', paddingTop: 0 }}>
          {data.categories.map((category) => {
            return (
              <ListItem disablePadding key={category.id}>
                <ListItemButton>
                  <ListItemIcon>
                    <InboxIcon />
                  </ListItemIcon>
                  <ListItemText primary={category.name} />
                </ListItemButton>
              </ListItem>
            );
          })}
        </List>
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
            padding: '5px 10px',
            fontWeight: 600,
          }}
        >
          Social
        </Typography>
        <Box sx={{ maxHeight: '150px', overflow: 'auto', paddingTop: '8px' }}>
          <Stack
            direction="row"
            sx={{
              flexWrap: 'wrap',
              gap: '7px',
            }}
          >
            {data.categories.map((category) => {
              return (
                <Chip
                  key={category.id}
                  label={category.name}
                  variant="outlined"
                />
              );
            })}
          </Stack>
        </Box>
      </Box>
    </Container>
  );
}

export default Sidebar;
