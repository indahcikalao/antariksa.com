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
  Select,
  MenuItem,
  InputLabel,
  FormControl,
} from '@mui/material';
import { BsEyeFill, BsEyeSlashFill } from 'react-icons/bs';
import { useDispatch, useSelector } from 'react-redux';
import { register } from '../../redux/actions/authActions';
import LogSuccess from '../../Components/LogSuccess/LogSuccess';
import '../Login/Login.scss';
import GoogleLogin from '../../Components/GoogleLogin/GoogleLogin';

export default function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('');
  const [gender, setGender] = useState('');
  const [success, setSuccess] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const dispatch = useDispatch();

  const { token } = useSelector((state) => state.auth);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      email,
      password,
      name,
      phone,
      gender,
    };
    dispatch(
      register(data, (status) => {
        if (status === 201) {
          setSuccess(true);
        }
      })
    );
  };

  return (
    <div
      className="bg"
      style={{ backgroundImage: `url('./img/bg-gradient.png')` }}>
      <Container sx={{ py: 20 }} maxWidth="md">
        <div className="box-auth">
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
                className="plane-img"
                item
                md={6}
                sm={12}
                xs={12}
                sx={{
                  backgroundImage: `url("./img/plane-log-reg-cropped.jpg")`,
                }}
              />
              <Grid item md={6} sm={12}>
                <Box
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    p: 5,
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
                              {!showPassword ? (
                                <BsEyeFill />
                              ) : (
                                <BsEyeSlashFill />
                              )}
                            </IconButton>
                          </InputAdornment>
                        ),
                      }}
                      onChange={(e) => setPassword(e.target.value)}
                      autoComplete="current-password"
                    />

                    <TextField
                      margin="dense"
                      autoComplete="tel"
                      name="tel"
                      required
                      fullWidth
                      label="Phone Number"
                      autoFocus
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                    />
                    <FormControl sx={{ width: 200 }} margin="dense">
                      <InputLabel id="gender">Gender</InputLabel>
                      <Select
                        labelId="gender"
                        value={gender}
                        label="Gender"
                        onChange={(e) => setGender(e.target.value)}>
                        <MenuItem value="">
                          <em>None</em>
                        </MenuItem>
                        <MenuItem value="Male">Male</MenuItem>
                        <MenuItem value="Female">Female</MenuItem>
                      </Select>
                    </FormControl>
                    <Button
                      disabled={
                        !email || !name || !password || !phone || !gender
                      }
                      type="submit"
                      fullWidth
                      variant="contained"
                      sx={{ mt: 3, mb: 2 }}>
                      Register
                    </Button>

                    <Divider>or continue with</Divider>
                    <GoogleLogin />

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
        </div>
      </Container>
    </div>
  );
}
