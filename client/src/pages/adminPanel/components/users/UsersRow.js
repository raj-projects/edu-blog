import React from 'react';
import { useMutation } from '@apollo/client';
import { IconButton, TableCell, TableRow } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
// import EditIcon from '@mui/icons-material/Edit';
import { DELETE_USER, GET_USERS } from '../../../../queries/queries';
import EditUser from './EditUser';

const UsersRow = ({ user }) => {
  const [deleteUser] = useMutation(DELETE_USER, {
    variables: { id: user.id },
    refetchQueries: [{ query: GET_USERS }], //Refresh User list after Delete data
  });

  return (
    <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
      <TableCell>{user.id}</TableCell>
      <TableCell>{user.name}</TableCell>
      <TableCell>{user.type}</TableCell>
      <TableCell>{user.status}</TableCell>
      <TableCell
        align="right"
        sx={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'right',
          alignItems: 'center',
          gap: '10px',
        }}
      >
        <EditUser userinfo={user} />
        <IconButton aria-label="delete" size="small">
          <DeleteIcon fontSize="small" color="error" onClick={deleteUser} />
        </IconButton>
      </TableCell>
    </TableRow>
  );
};

export default UsersRow;
