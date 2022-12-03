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
import { BsEyeFill, BsEyeSlashFill, BsGoogle } from 'react-icons/bs';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { register } from '../../redux/actions/authActions';
import LogSuccess from '../../Components/LogSuccess/LogSuccess';

export default function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [success, setSuccess] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const dispatch = useDispatch();

  const { token } = useSelector((state) => state.auth);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name) {
      toast.error('Name is required');
      return;
    }
    if (!email) {
      toast.error('Email is required');
      return;
    }
    if (!password) {
      toast.error('Password is required');
      return;
    }
    if (email && password && name) {
      const data = {
        email,
        password,
        name,
      };
      dispatch(
        register(data, (status) => {
          if (status === 201) {
            setSuccess(true);
          }
        })
      );
    }
  };

  return (
    <Container sx={{ paddingTop: 15 }} maxWidth="md">
      {token ? (
        <LogSuccess
          navi="/"
          navLabel="Home"
          h1="You already Logged in!"
          h4="Get Ready To fly with us"
        />
      ) : success ? (
        <LogSuccess
          navi="/login"
          navLabel="Login"
          h1="You are Registered!"
          h4="Get Ready for your first"
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
                Hello There!
              </Typography>
              <Typography component="h5">
                Are you ready for your first flight?
              </Typography>
              <Box
                component="form"
                noValidate
                onSubmit={handleSubmit}
                sx={{ mt: 3 }}>
                <TextField
                  margin="dense"
                  autoComplete="given-name"
                  name="name"
                  required
                  fullWidth
                  id="name"
                  label="Full Name"
                  autoFocus
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />

                <TextField
                  margin="dense"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />

                <TextField
                  margin="dense"
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

                {/* <TextField
                  margin="dense"
                  autoComplete="tel"
                  name="tel"
                  required
                  fullWidth
                  label="Phone Number"
                  autoFocus
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                /> */}

                <Button
                  disabled={!email || !name || !password}
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}>
                  Register
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
                    <Link href="/login" variant="body2">
                      Already have an account? Login
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
