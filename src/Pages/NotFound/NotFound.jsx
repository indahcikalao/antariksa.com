import { Container, Grid, Button } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './NotFound.scss';

export default function NotFound() {
  const navigate = useNavigate();

  return (
    <div style={{ backgroundColor: '#faf4f4' }}>
      <Container sx={{ pt: 15, pb: 7 }}>
        <Grid container justifyContent="center">
          <Grid
            item
            md={6}
            sm={12}
            xs={12}
            sx={{ textAlign: 'center' }}
            className="grid-404">
            <img src="./img/notfound.png" alt="" style={{ height: '450px' }} />
          </Grid>
          <Grid item md={4} sm={12} xs={12} className="grid-404">
            <h1>WHOOPS!</h1>
            <h3>Seems like you've got lost up in the sky!</h3>
            <p>
              We're sorry about that! Let's fly back to our Home Page instead.
            </p>

            <Button
              onClick={() => navigate('/')}
              variant="contained"
              sx={{ width: '100px', mt: 3, mb: 2 }}>
              Home
            </Button>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
