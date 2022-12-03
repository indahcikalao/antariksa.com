import React, { useState } from 'react';
import { Container, Typography, Grid, TextField, Button } from '@mui/material';
import { FaPlane } from 'react-icons/fa';

function ForgotPw() {
  const [email, setEmail] = useState('');
  const [error, setError] = useState(false);

  return (
    <Container sx={{ paddingTop: 15 }} maxWidth="sm">
      <Grid Container justifyContent="center" sx={{ textAlign: 'center' }}>
        <Grid item sm={12}>
          <Typography component="h1" variant="h4">
            Forgot your password?
          </Typography>
          <Typography component="h5">
            No problem, we got you! · · · <FaPlane />
          </Typography>
        </Grid>

        <TextField
          sx={{ mt: 5 }}
          required
          fullWidth
          label="Email Address"
          name="email"
          autoComplete="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          autoFocus
        />

        <Button
          disabled={!email}
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

export default ForgotPw;
