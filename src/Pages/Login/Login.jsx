import React, { useState } from 'react';
import {
  Button,
  TextField,
  Link,
  Grid,
  Box,
  Typography,
  Container,
  Divider,
  InputAdornment,
  IconButton,
} from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { BsEyeFill, BsEyeSlashFill, BsGoogle } from 'react-icons/bs';

import { login } from '../../redux/actions/authActions';
import LogSuccess from '../../Components/LogSuccess/LogSuccess';

export default function Login() {
  const dispatch = useDispatch();

  const { token } = useSelector((state) => state.auth);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email) {
      toast.error('Email is required');
      return;
    }
    if (!password) {
      toast.error('Password is required');
      return;
    }

    if (email && password) {
      const data = {
        email,
        password,
      };
      dispatch(login(data));
    }
  };

  return (
    <Container sx={{ paddingTop: 15 }} maxWidth="md">
      {token ? (
        <LogSuccess
          navi="/"
          navLabel="Home"
          h1="You are Logged in!"
          h4="Get Ready To fly with us"
        />
      ) : (
        <Grid container justifyContent="center">
          <Grid
            item
            md={4}
            sm={12}
            sx={{
              mx: 5,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <img
              src="https://cdn-icons-png.flaticon.com/512/1254/1254750.png?w=740&t=st=1669340140~exp=1669340740~hmac=aa985c9762b2e2204ab325aaed95a79d25ac83e1209804973c4392f606cc24d3"
              alt="movie"
              style={{ maxWidth: '300px' }}
            />
          </Grid>
          <Grid item md={6} sm={12}>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}>
              <Typography component="h1" variant="h4">
                Welcome Back!
              </Typography>
              <Typography component="h5">
                Are you ready to fly with us?
              </Typography>
              <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
                <TextField
                  margin="dense"
                  required
                  fullWidth
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  autoFocus
                />
                <TextField
                  margin="dense"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type={showPassword ? 'text' : 'password'}
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
                <Link href="/forgot-pass" variant="body2">
                  {'Forgot Password'}
                </Link>
                <Button
                  disabled={!email || !password}
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}>
                  Login
                </Button>

                <Divider>or continue with</Divider>
                {/* <GoogleLogin setToken={setToken} /> */}
                <Button
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                  // onClick={googleLog}
                >
                  <BsGoogle style={{ marginRight: '10px' }} />
                  Google
                </Button>

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
