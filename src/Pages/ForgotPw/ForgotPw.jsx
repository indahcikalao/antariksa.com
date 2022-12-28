import React, { useState } from 'react';
import { Container, Typography, Grid, TextField, Button } from '@mui/material';
import { FaPlane } from 'react-icons/fa';
import './ForgotPw.scss';
import { forogtPw } from '../../redux/actions/authActions';
import { useDispatch } from 'react-redux';

function ForgotPw() {
  const [email, setEmail] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = { email: email };
    dispatch(forogtPw(data));
  };

  return (
    <div
      className="bg"
      style={{ backgroundImage: `url('./img/bg-gradient.png')` }}>
      <Container sx={{ pt: 25, pb: 15 }} maxWidth="sm">
        <div className="box">
          <Grid container justifyContent="center" sx={{ textAlign: 'center' }}>
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
                fullWidth
                variant="contained"
                sx={{ mt: 1, mb: 2 }}
                onClick={handleSubmit}>
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
