import React from 'react';
import { Container, Grid, Button, Box, TextField } from '@mui/material';
import './Transaction.scss';
import TransactionTicket from '../../Components/TransactionTicket/TransactionTicket';
import TransactionPassanger from '../../Components/TransactionPassanger/TransactionPassanger';

function Transaction() {
  return (
    <div
      className="bg"
      style={{ backgroundImage: `url('./img/bg-gradient.png')` }}>
      <Container sx={{ pt: 20, pb: 10 }}>
        <Grid container justifyContent="center">
          <TransactionTicket />

          <Grid item sm={7} xs={12} sx={{ mx: 1 }}>
            <Grid container className="box" sx={{ mb: 3 }}>
              <Box
                className="plane-img3"
                sx={{
                  backgroundImage: `url('./img/plane8.jpg')`,
                }}
              />
              <Grid item xs={12} sx={{ p: 3 }}>
                <div className="box-title">
                  <h1>Contact Details</h1>
                  <p>Who order this flight? Oh it's you!</p>
                </div>

                <Box component="form" sx={{ px: 3 }} className="button-save">
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    label="Full Name"
                    autoFocus
                    // value={name}
                    onChange={(e) => console.log(e.target.value)}
                    // onChange={(e) => setName(e.target.value)}
                  />

                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    label="Email Address"
                    type="email"
                    // value={email}
                    onChange={(e) => console.log(e.target.value)}
                    autoFocus
                  />

                  <TextField
                    margin="normal"
                    autoComplete="tel"
                    required
                    fullWidth
                    label="Phone Number"
                    autoFocus
                    // value={phone}
                    // onChange={(e) => setPhone(e.target.value)}
                    onChange={(e) => console.log(e.target.value)}
                  />

                  <Button
                    className="button-save"
                    type="submit"
                    // fullWidth
                    variant="contained"
                    sx={{ my: 2, py: 1, width: '100px' }}>
                    Save
                  </Button>
                </Box>
              </Grid>
            </Grid>

            {[...Array(2)].map((item, index) => {
              return <TransactionPassanger i={index} key={index} />;
            })}

            <Grid container className="box" sx={{ mb: 3 }}>
              <Box
                className="plane-img3"
                sx={{
                  backgroundImage: `url('./img/plane7.jpg')`,
                }}
              />
              <Grid item xs={12} sx={{ p: 3 }}>
                <div className="box-title">
                  <h1>Is all set?</h1>
                  <p>Please make sure that your data are valid!</p>
                </div>

                <Button
                  className="button-save"
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mr: 3, my: 2, py: 1 }}>
                  Book Now!
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default Transaction;
<div className="box-title">
  <h1>Passanger Details</h1>
  <p>Let's go! Pack your things and get ready to fly with us!</p>
</div>;
