import * as React from 'react';
import {
  Grid,
  IconButton,
  InputLabel,
  TextField,
  Button,
  Typography,
  Modal,
  Box,
} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import { useMutation } from '@apollo/client';
import { GET_CATEGORY, UPDATE_CATEGORY } from '../../../../queries/queries';

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

export default function EditCategory({ categoryinfo }) {
  const [open, setOpen] = React.useState(false);
  const [name, setName] = React.useState(categoryinfo.name);
  const [status, setStatus] = React.useState(categoryinfo.status);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [updateCategory] = useMutation(UPDATE_CATEGORY, {
    variables: {
      id: categoryinfo.id,
      name,
      status,
    },
    refetchQueries: [
      { query: GET_CATEGORY, variables: { id: categoryinfo.id } },
    ],
  });

  const handleUpdate = (e) => {
    e.preventDefault();
    if (!name || !status) {
      return alert('Please fill all fields');
    }
    updateCategory(name, status);
  };

  return (
    <div>
      <IconButton
        aria-label="edit"
        size="small"
        color="success"
        onClick={handleOpen}
      >
        <EditIcon fontSize="small" />
      </IconButton>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Grid container spacing={2} sx={{ marginBottom: '20px' }}>
            <Grid item xs={8}>
              <Typography variant="h5">Update Category</Typography>
            </Grid>
            <Grid item xs={4} sx={{ display: 'flex', justifyContent: 'right' }}>
              <Button onClick={handleClose}>X</Button>
            </Grid>
          </Grid>
          <form
            sx={{ display: 'flex', justifyContent: 'center' }}
            onClick={handleUpdate}
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
                  value={name}
                  onChange={(e) => setName(e.target.value)}
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
                  value={status}
                  onChange={(e) => setStatus(e.target.value)}
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
