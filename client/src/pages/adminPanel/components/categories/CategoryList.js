import React from 'react';
import { gql, useQuery } from '@apollo/client';
import {
  Button,
  Grid,
  IconButton,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { GET_CATEGORIES } from '../../../../queries/queries';

const CategoryList = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { loading, error, data } = useQuery(GET_CATEGORIES);

  if (loading) return <p>It's Loading </p>;
  if (error) return <p>There is an error : {error.message} </p>;

  return (
    <>
      <Grid container spacing={2} sx={{ marginBottom: '10px' }}>
        <Grid item xs={8}>
          <Typography variant="h4">Categories List</Typography>
        </Grid>
        <Grid item xs={4} sx={{ display: 'flex', justifyContent: 'right' }}>
          <Button variant="contained" color="success">
            Add New Category
          </Button>
        </Grid>
      </Grid>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead sx={{ background: '#333' }}>
            <TableRow>
              <TableCell
                sx={{ fontSize: '16px', fontWeight: 600, color: '#fff' }}
              >
                ID
              </TableCell>
              <TableCell
                sx={{ fontSize: '16px', fontWeight: 600, color: '#fff' }}
              >
                Name
              </TableCell>
              <TableCell
                sx={{ fontSize: '16px', fontWeight: 600, color: '#fff' }}
              >
                Status
              </TableCell>
              <TableCell></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.categories.map((category) => {
              return (
                <TableRow
                  key={category.id}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell>{category.id}</TableCell>
                  <TableCell>{category.name}</TableCell>
                  <TableCell>{category.status}</TableCell>
                  <TableCell align="right">
                    <IconButton
                      aria-label="edit"
                      size="small"
                      sx={{ marginRight: '20px' }}
                    >
                      <EditIcon fontSize="small" />
                    </IconButton>
                    <IconButton aria-label="delete" size="small">
                      <DeleteIcon fontSize="small" color="error" />
                    </IconButton>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default CategoryList;
