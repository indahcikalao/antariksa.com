import React, { useState, useEffect } from 'react';
import {
  Button,
  TextField,
  FormControlLabel,
  Checkbox,
  Link,
  Grid,
  Box,
  Typography,
  Container,
  Divider,
  InputAdornment,
  IconButton,
} from '@mui/material';
import { BsEyeFill, BsEyeSlashFill } from 'react-icons/bs';
import axios from 'axios';
// import GoogleLogin from '../../Components/GoogleLogin/GoogleLogin';
// import Success from '../../Components/Success/Success';
// import PopUp from '../../Components/PopUp/PopUp';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [token, setToken] = useState(null);
  const [error, setError] = useState(false);
  const [message, setMessage] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  useEffect(() => {
    const getToken = localStorage.getItem('token');
    setToken(getToken);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(false);

    if (email === '') {
      setMessage('Email is required');
      setError(true);
      return;
    }
    if (password === '') {
      setMessage('Password is required');
      setError(true);
      return;
    }
    if (email !== '' && password !== '') {
      const data = {
        email,
        password,
      };
      try {
        const result = await axios.post(
          `${process.env.REACT_APP_AUTH_API}/api/v1/auth/login`,
          data
        );
        console.log(result);
        if (result.data.token) {
          localStorage.setItem('token', result.data.token);
          setToken(result.data.token);
        }
      } catch (error) {
        setMessage(error.response.data.message);
        setError(true);
      }
    }
  };

  return (
    <Container sx={{ paddingTop: 15 }}>
      {/* {error ? <PopUp message={message} /> : ''} */}
      {token ? (
        // <Success setToken={setToken} label="Login" />
        <h2>yay</h2>
      ) : (
        <Grid container justifyContent="center">
          <Grid
            item
            sm={4}
            sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <img
              src="https://cdn-icons-png.flaticon.com/512/4221/4221419.png"
              alt="movie"
              style={{ maxWidth: '300px' }}
            />
          </Grid>
          <Grid item xs={4}>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}>
              <img
                src="https://cdn-icons-png.flaticon.com/512/1243/1243277.png"
                alt="movie"
                style={{ maxWidth: '40px' }}
              />
              <Typography component="h1" variant="h5">
                Login
              </Typography>
              <Box
                component="form"
                onSubmit={handleSubmit}
                noValidate
                sx={{ mt: 1 }}>
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  autoFocus
                />
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type={showPassword ? 'text' : 'password'}
                  id="password"
                  value={password}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={() => setShowPassword(!showPassword)}>
                          {!showPassword ? <BsEyeFill /> : <BsEyeSlashFill />}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                  onChange={(e) => setPassword(e.target.value)}
                  autoComplete="current-password"
                />
                <FormControlLabel
                  control={<Checkbox value="remember" color="primary" />}
                  label="Remember me"
                />
                <Button
                  disabled={!email || !password}
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                  onClick={() => {
                    setError(false);
                  }}>
                  Login
                </Button>

                <Divider>or continue with</Divider>
                {/* <GoogleLogin setToken={setToken} /> */}

                <Grid container justifyContent="flex-end">
                  <Grid item>
                    <Link href="/register" variant="body2">
                      {"Don't have an account? Register"}
                    </Link>
                  </Grid>
                </Grid>
              </Box>
            </Box>
          </Grid>
        </Grid>
      )}
    </Container>
  );
}
