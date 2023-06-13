import {
  List,
  ListItem,
  ListItemButton,
  //   ListItemIcon,
  ListItemText,
} from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

const DashboardSidebar = () => {
  return (
    <>
      <List sx={{ minHeight: '82vh', width: '300px', background: '#777', color: '#fff', }}>
        <ListItem
          disablePadding
          sx={{ display: 'flex', flexDirection: 'column', alignItems: 'start', padding: '10px' }}
        >
          <ListItemButton>
            <Link to="Dashboard" width="100%"/>
          </ListItemButton>
          <ListItemButton>
            <Link to="postlist" style={{ textDecoration: 'none', color: '#fff', width: '100%' }}>
                Posts
              </Link>
          </ListItemButton>
          <ListItemButton>
            <Link to="categorieslist" style={{ textDecoration: 'none', color: '#fff', width: '100%' }}>Categories</Link>
          </ListItemButton>
          <ListItemButton>
            <Link to="userlist" style={{ textDecoration: 'none', color: '#fff', width: '100%' }}>Users</Link>
          </ListItemButton>
          <ListItemButton>
            <ListItemText style={{ textDecoration: 'none', color: '#fff', width: '100%' }}>Tags</ListItemText>
          </ListItemButton>
        </ListItem>
      </List>
    </>
  );
};

export default DashboardSidebar;
