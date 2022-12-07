import React, { useState } from 'react';
import { Container, Typography, Grid, TextField, Button } from '@mui/material';
import { FaPlane } from 'react-icons/fa';
import './ForgotPw.scss';

function ForgotPw() {
  const [email, setEmail] = useState('');

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
                Forgot your password?
              </Typography>
              <Typography component="h5">
                No problem, we got you! · · · <FaPlane />
              </Typography>

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

              <Button
                disabled={!email}
                type="submit"
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

export default ForgotPw;
