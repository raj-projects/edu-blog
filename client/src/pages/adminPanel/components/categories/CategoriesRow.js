import React from 'react';
import { useMutation } from '@apollo/client';
import { IconButton, TableCell, TableRow } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { DELETE_CATEGORY, GET_CATEGORIES } from '../../../../queries/queries';

const CategoriesRow = ({ category }) => {
  const [deleteCategory] = useMutation(DELETE_CATEGORY, {
    variables: { id: category.id },
    refetchQueries: [{ query: GET_CATEGORIES }], //Refresh post list after delete data
  });

  return (
    <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
      <TableCell>{category.id}</TableCell>
      <TableCell>{category.name}</TableCell>
      <TableCell>{category.status}</TableCell>
      <TableCell align="right">
        <IconButton aria-label="edit" size="small" sx={{ marginRight: '20px' }}>
          <EditIcon fontSize="small" />
        </IconButton>
        <IconButton aria-label="delete" size="small">
          <DeleteIcon fontSize="small" color="error" onClick={deleteCategory} />
        </IconButton>
      </TableCell>
    </TableRow>
  );
};

export default CategoriesRow;
