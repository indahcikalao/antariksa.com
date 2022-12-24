import React, { useState } from 'react';
import {
  Container,
  Typography,
  Grid,
  TextField,
  Button,
  IconButton,
  InputAdornment,
} from '@mui/material';
import { FaPlane } from 'react-icons/fa';
import { BsEyeFill, BsEyeSlashFill } from 'react-icons/bs';
import { resetPw } from '../../redux/actions/authActions';
import { useDispatch } from 'react-redux';

function NewPw() {
  const dispatch = useDispatch();
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showPassword2, setShowPassword2] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      new_password: password,
      confirm_new_password: passwordConfirm,
    };
    console.log(data)
    dispatch(resetPw(data));
  };

  return (
    <div
      className="bg"
      style={{ backgroundImage: `url('./img/bg-gradient.png')` }}>
      <Container sx={{ py: 20 }} maxWidth="sm">
        <div className="box">
          <Grid Container justifyContent="center" sx={{ textAlign: 'center' }}>
            <Grid
              className="plane-img2"
              item
              md={12}
              sx={{
                backgroundImage: `url('./img/plane2-cropped.jpg')`,
              }}
            />

            <Grid item sm={12} sx={{ p: 3 }}>
              <Typography component="h1" variant="h4">
                Input your new password
              </Typography>
              <Typography component="h5">
                No worries, take your time · · · <FaPlane />
              </Typography>

              <TextField
                sx={{ mt: 3 }}
                required
                fullWidth
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

              <TextField
                margin="dense"
                required
                fullWidth
                label="Confirm Password"
                type={showPassword2 ? 'text' : 'password'}
                value={passwordConfirm}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={() => setShowPassword2(!showPassword2)}>
                        {!showPassword2 ? <BsEyeFill /> : <BsEyeSlashFill />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
                onChange={(e) => setPasswordConfirm(e.target.value)}
                autoComplete="current-password"
              />

              <Button
                disabled={!password || !passwordConfirm}
                onClick={handleSubmit}
                fullWidth
                variant="contained"
                sx={{ mt: 1, mb: 2 }}>
                Submit
              </Button>
            </Grid>
          </Grid>
        </div>
      </Container>
    </div>
  );
}

export default NewPw;
