import React from 'react';
import { TextField, Button, Typography, Container, Box, Link, Avatar } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined'; // Icon import

const Signin = () => {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        minHeight: '100vh',
        background: 'linear-gradient(to right, #0f2027, #203a43, #2c5364)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Box
        sx={{
          width: 350,
          padding: 4,
          borderRadius: 4,
          background: 'rgba(255, 255, 255, 0.1)',
          boxShadow: '0 8px 32px 0 rgba( 31, 38, 135, 0.37 )',
          backdropFilter: 'blur(10px)',
          WebkitBackdropFilter: 'blur(10px)',
          border: '1px solid rgba(255, 255, 255, 0.18)',
          color: 'white',
          textAlign: 'center',
        }}
      >
        <Avatar sx={{ bgcolor: '#ffffff33', margin: '0 auto', mb: 2 }}>
          <LockOutlinedIcon sx={{ color: 'white' }} />
        </Avatar>
        <Typography variant="h5" gutterBottom>
          Sign In
        </Typography>

        <Box component="form">
          <TextField
            fullWidth
            label="Email"
            variant="outlined"
            margin="normal"
            InputLabelProps={{ style: { color: '#fff' } }}
            InputProps={{ style: { color: '#fff' } }}
          />
          <TextField
            fullWidth
            label="Password"
            type="password"
            variant="outlined"
            margin="normal"
            InputLabelProps={{ style: { color: '#fff' } }}
            InputProps={{ style: { color: '#fff' } }}
          />
          <Button variant="contained" fullWidth sx={{ mt: 2 }}>
            Sign In
          </Button>
          <Typography variant="body2" sx={{ mt: 2, color: '#ccc' }}>
            Don’t have an account?{' '}
            <Link onClick={() => navigate('/signup')} sx={{ color: '#90caf9', cursor: 'pointer' }}>
              Sign Up
            </Link>
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Signin;
