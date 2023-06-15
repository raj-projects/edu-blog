import React from 'react';
import { useQuery } from '@apollo/client';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';
import { GET_CURRENT_USER } from '../../../queries/queries';

const Logout = () => {
  const { user, data } = useQuery(GET_CURRENT_USER);

  // Reset Apollo and local store on logout
  const logout = () => {
    window.localStorage.clear();
    user.resetStore();
  };

  if (data && data.currentUser) {
    return (
      <Button onClick={logout} color="inherit">
        Logout
      </Button>
    );
  }
  return (
    <Link to="/login">
      <Button color="inherit">Login</Button>
    </Link>
  );
};

export default Logout;
