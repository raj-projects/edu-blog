import React from 'react';
import { useMutation } from '@apollo/client';
import { IconButton, TableCell, TableRow } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
// import EditIcon from '@mui/icons-material/Edit';
import { DELETE_POST, GET_POSTS } from '../../../../queries/queries';
import EditPost from './EditPost';

const PostsRow = ({ post }) => {
  const [deletePost] = useMutation(DELETE_POST, {
    variables: { id: post.id },
    refetchQueries: [{ query: GET_POSTS }], //Refresh post list after delete data
  });

  return (
    <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
      <TableCell>{post.id}</TableCell>
      <TableCell>{post.name}</TableCell>
      <TableCell>{post.description}</TableCell>
      <TableCell>{post.status}</TableCell>
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
        <EditPost postinfo={post} />
        <IconButton aria-label="delete" size="small">
          <DeleteIcon fontSize="small" color="error" onClick={deletePost} />
        </IconButton>
      </TableCell>
    </TableRow>
  );
};

export default PostsRow;
