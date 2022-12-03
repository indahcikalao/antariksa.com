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

function NewPw() {
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState(false);
  return (
    <Container sx={{ paddingTop: 15 }} maxWidth="sm">
      <Grid Container justifyContent="center" sx={{ textAlign: 'center' }}>
        <Grid item sm={12}>
          <Typography component="h1" variant="h4">
            Input your new password
          </Typography>
          <Typography component="h5">
            No worries, take your time · · · <FaPlane />
          </Typography>
        </Grid>

        <TextField
          sx={{ mt: 5 }}
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

        <Button
          disabled={!password}
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
          onClick={() => {
            setError(false);
          }}>
          Submit
        </Button>
      </Grid>
    </Container>
  );
}

export default NewPw;
