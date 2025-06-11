import {
  Box,
  Button,
  Container,
  Link,
  TextField,
  Typography,
} from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import HowToRegIcon from '@mui/icons-material/HowToReg';

const Signup = () => {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        minHeight: '100vh',
        background: 'linear-gradient(to right, #0f2027, #203a43, #2c5364)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 2,
      }}
    >
      <Container maxWidth="xs">
        <Box
          sx={{
            backdropFilter: 'blur(10px)',
            backgroundColor: 'rgba(255, 255, 255, 0.05)',
            borderRadius: 3,
            boxShadow: '0 8px 32px 0 rgba( 31, 38, 135, 0.37 )',
            border: '1px solid rgba(255, 255, 255, 0.18)',
            padding: 4,
            textAlign: 'center',
            color: 'white',
          }}
        >
          <HowToRegIcon sx={{ fontSize: 50, mb: 1 }} />
          <Typography variant="h5" gutterBottom>
            Sign Up
          </Typography>
          <Box component="form">
            <TextField
              fullWidth
              label="Name"
              variant="outlined"
              margin="normal"
              InputLabelProps={{ style: { color: '#ccc' } }}
              InputProps={{ style: { color: 'white' } }}
            />
            <TextField
              fullWidth
              label="Email"
              variant="outlined"
              margin="normal"
              InputLabelProps={{ style: { color: '#ccc' } }}
              InputProps={{ style: { color: 'white' } }}
            />
            <TextField
              fullWidth
              label="Password"
              type="password"
              variant="outlined"
              margin="normal"
              InputLabelProps={{ style: { color: '#ccc' } }}
              InputProps={{ style: { color: 'white' } }}
            />
            <Button
              variant="contained"
              fullWidth
              sx={{
                mt: 2,
                backgroundColor: 'primary',
              }}
            >
              Register
            </Button>
            <Typography variant="body2" sx={{ mt: 2, color: '#ccc' }}>
              Already have an account?{' '}
              <Link
                onClick={() => navigate('/login')}
                sx={{ cursor: 'pointer', color: '#1ABC9C' }}
              >
                Sign In
              </Link>
            </Typography>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Signup;
