import React from 'react';
import { Grid, Container, Box, Divider } from '@mui/material';
import { RiPlaneFill } from 'react-icons/ri';
import { HiOutlineArrowNarrowRight } from 'react-icons/hi';
import './TransactionTicket.scss';

export default function TransactionTicket() {
  return (
    <Grid
      item
      lg={4}
      sm={7}
      xs={12}
      sx={{ mx: 2, mb: 3 }}
      className="box tick-item">
      <Box
        className="plane-img3"
        md={12}
        sx={{
          backgroundImage: `url('./img/plane4.jpg')`,
        }}>
        <h2>Your Tickets</h2>
      </Box>
      <Container className="tickets">
        <Box>
          <h3>
            <RiPlaneFill style={{ fontSize: '30px', paddingRight: '10px' }} />
            Jakarta
            <HiOutlineArrowNarrowRight
              style={{ fontSize: '30px', padding: '0 10px' }}
            />
            Tokyo
          </h3>
          <p>Garuda AirLines · 21 Mei 2001 · 20.00</p>
        </Box>
        <Divider />

        <Box className="total">
          <p className="span">Total</p>
          <p>
            <span className="span">IDR</span> 1.500.000
          </p>
        </Box>
      </Container>
    </Grid>
  );
}
