import React from 'react';
import { useQuery } from '@apollo/client';
import {
  Grid,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from '@mui/material';
import { GET_CATEGORIES } from '../../../../queries/queries';
import AddCategory from './AddCategory';
import CategoriesRow from './CategoriesRow';

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
          <AddCategory />
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
              return <CategoriesRow key={category.id} category={category} />;
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default CategoryList;
