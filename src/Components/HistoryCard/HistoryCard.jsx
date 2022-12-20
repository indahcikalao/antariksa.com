import React from 'react';
import { Grid, Divider, Box } from '@mui/material';
import { RiPlaneFill } from 'react-icons/ri';
import { HiOutlineArrowNarrowRight } from 'react-icons/hi';
import './HistoryCard.scss';
import { Link } from 'react-router-dom';

export default function HistoryCard() {
  return (
    <Grid item md={12} sx={{ mx: 5, mb: 1 }} className="his-grid">
      <Link to={`/detail-history`}>
        <Divider variant="middle" />

        <Grid container sx={{ pt: 2 }} justifyContent="center" className="coba">
          <Grid item sm={9} xs={12} className="grid-i-his-card">
            <span>Booking id</span> 12345678
          </Grid>
          <Grid item sm={3} xs={12} className="grid-i-his-card">
            <Box className="payment">Paid</Box>
            {/* <Box className="payment not">Not Paid</Box> */}
          </Grid>
        </Grid>
        <Grid container sx={{ pb: 2 }} justifyContent="center" className="coba">
          <Grid item sm={9} xs={12} className="grid-i-his-card">
            <RiPlaneFill style={{ fontSize: '30px', paddingRight: '10px' }} />
            Jakarta
            <HiOutlineArrowNarrowRight
              style={{ fontSize: '30px', padding: '0 10px' }}
            />
            Tokyo
          </Grid>
          <Grid item sm={3} xs={12} className="grid-i-his-card">
            <span>IDR</span> 1.500.000
          </Grid>
        </Grid>
      </Link>
    </Grid>
  );
}
