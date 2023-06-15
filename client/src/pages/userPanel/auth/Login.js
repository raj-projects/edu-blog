import React from 'react';
import { Paper, Typography, TextField, Button } from '@mui/material';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const history = useNavigate();
  const [email, setEmail] = React.useState('abc@gmail.com');
  const [password, setPassword] = React.useState('admin@123');

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Login page');
    try {
      await axios
        .post('http://localhost:5000/login', {
          email,
          password,
        })
        .then((res) => {
          if ((res.data === 'exist')) {
            history('/dashboard', {
              state: { id: email },
            });
          } else if ((res.data === 'notexist')) {
            alert('User have not account');
          }
        });
    } catch {
      console.log(e);
    }
  };

  return (
    <Paper
      sx={{
        width: '70%',
        height: '300px',
        padding: '50px',
        margin: '0 auto',
      }}
    >
      <Typography variant="h3" component="h1">
        Login
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="email"
          name="email"
          label="Email Address"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          autoFocus
        />
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="password"
          name="password"
          label="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button type="submit" variant="contained" color="primary">
          Sign in
        </Button>
      </form>
    </Paper>
  );
};

export default Login;
