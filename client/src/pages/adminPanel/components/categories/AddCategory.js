import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Grid, InputLabel, TextField } from '@mui/material';
import { ApolloError, useMutation } from '@apollo/client';
import { ADD_CATEGORY, GET_CATEGORIES } from '../../../../queries/queries';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function AddCategory() {
  const [open, setOpen] = React.useState(false);
  const [formState, setFormState] = React.useState({
    name: 'Category 1',
    status: 'Active',
  });

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [createCategory] = useMutation(ADD_CATEGORY, {
    variables: {
      name: formState.name,
      status: formState.status,
    },
    update(cache, { data: { addCategory } }) {
      const { categories } = cache.readQuery({
        query: GET_CATEGORIES,
      });
      cache.writeQuery({
        query: GET_CATEGORIES,
        data: { categories: [...categories, addCategory] },
      });
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    createCategory();
  };

  const error = ApolloError; // from async try/catch, onError method, or a promise .catch
  console.log(error instanceof Error);

  return (
    <div>
      <Button variant="contained" color="success" onClick={handleOpen}>
        Add New Category
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Grid container spacing={2} sx={{ marginBottom: '20px' }}>
            <Grid item xs={8}>
              <Typography variant="h5">Add New Category</Typography>
            </Grid>
            <Grid item xs={4} sx={{ display: 'flex', justifyContent: 'right' }}>
              <Button onClick={handleClose}>X</Button>
            </Grid>
          </Grid>
          <form
            onSubmit={handleSubmit}
            sx={{ display: 'flex', justifyContent: 'center' }}
          >
            <Grid container spacing={3}>
              <Grid item xs={12} sm={2}>
                <InputLabel
                  sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItem: 'center',
                    fontWeight: 700,
                  }}
                >
                  Name
                </InputLabel>
              </Grid>
              <Grid item xs={12} sm={10}>
                <TextField
                  required
                  id="name"
                  name="name"
                  label="name"
                  fullWidth
                  size="small"
                  autoComplete="off"
                  variant="outlined"
                  value={formState.name}
                  onChange={(e) =>
                    setFormState({
                      ...formState,
                      name: e.target.value,
                    })
                  }
                />
              </Grid>
              <Grid item xs={12} sm={2}>
                <InputLabel
                  sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItem: 'center',
                    fontWeight: 700,
                  }}
                >
                  Status
                </InputLabel>
              </Grid>
              <Grid item xs={12} sm={10}>
                <TextField
                  required
                  id="status"
                  name="status"
                  label="status"
                  fullWidth
                  size="small"
                  autoComplete="off"
                  variant="outlined"
                  value={formState.status}
                  onChange={(e) =>
                    setFormState({
                      ...formState,
                      status: e.target.value,
                    })
                  }
                />
              </Grid>
            </Grid>

            <Button
              type="submit"
              variant="contained"
              color="primary"
              align="center"
              sx={{ marginTop: '20px', display: 'flex', justifySelf: 'center' }}
            >
              Submit
            </Button>
          </form>
        </Box>
      </Modal>
    </div>
  );
}
