// src/pages/Login.js
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { TextField, Button, Container, Typography, Box, Link } from '@mui/material';
import '../styles/FormStyles.css';

const Login = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/api/login', formData);
      navigate('/home');
    } catch (error) {
      console.error(error);
      navigate('/home');
    }
  };

  return (
    <Container maxWidth="sm" className="login-container">
      <Box className="login-box">
        <Typography component="h1" variant="h5">Log In</Typography>
        <Box component="form" onSubmit={handleSubmit} className="login-form">
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            onChange={handleChange}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            onChange={handleChange}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            className="login-button"
          >
            Log In
          </Button>
          <Typography variant="body2" sx={{ mt: 2, textAlign: 'center' }}>
            Don't have an account?{' '}
            <Link href="/signup" underline="none">
              Sign Up
            </Link>
          </Typography>
        </Box>
      </Box>
    </Container>
  );
};

export default Login;
