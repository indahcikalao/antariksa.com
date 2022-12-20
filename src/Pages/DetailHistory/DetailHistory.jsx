import React from 'react';
import { Grid, Container, Box, Divider } from '@mui/material';
import { RiPlaneFill } from 'react-icons/ri';
import { HiOutlineArrowNarrowRight } from 'react-icons/hi';
import './DetailHistoryStyles.css';

function Payment() {
  return (
    <div
      className="bg"
      style={{
        backgroundImage: `url('./img/bg-gradient.png')`,
    }}>
      <Container
        className="bg"
        maxWidth="md"
        sx={{
          pt: 20,
          pb: 10,
        }}>
        <div className="boxdetail" style={{ minHeight: '400px' }}>
          <div
            className="bg-hero-history"
            style={{
              backgroundImage: `url('./img/plane11.jpg')`,
              backgroundPositionY: -150
            }}>
            <h1> Your Flight Details</h1>
            <p>Here is your flight details that you've booked!</p>
          </div>

          <div>
            <Grid container justifyContent="center">
              <Container className="tickets">
                <Box>
                  <p className='detailTujuan'>
                    <RiPlaneFill style={{ fontSize: '30px', paddingRight: '10px', marginBottom: -7}} />
                    <b>Yogyakarta</b>
                    <HiOutlineArrowNarrowRight style={{ fontSize: '30px', padding: '0 10px', marginBottom: -8 }} />
                    <b>Surga</b>
                  </p>
                  <p className='detailOrderid'>Order ID : 123123123</p>
                </Box>

                <Box sx={{ border: 1, borderColor: 'grey.400'}}>
                  <Grid container spacing={5}>
                    <Grid item xs={12} md={7}>
                      <h3 className='detailPassenger'>Departure - Arrival</h3>
                      <Divider/>
                      <Box className='detailAirport'>
                        <p>
                          <b>16:10</b>
                          <br/>
                          Des 15
                        </p>
                        <p style={{marginLeft: 25}}>
                          Yogyakarta International Airport maksimal ya
                          <br/>
                          (YIA)
                        </p>
                      </Box>
                      <Box className='detailDuration'>
                        <p style={{color: 'grey'}}>1h20m</p>
                        <p style={{marginLeft: 25}}>Airline Name</p>
                      </Box>
                      <Box className='detailAirport'>
                        <p>
                          <b>23:10</b>
                          <br/>
                          Des 16
                        </p>
                        <p style={{marginLeft: 25}}>
                          Surga Airport
                          <br/>
                          (SRG)
                        </p>
                      </Box>
                    </Grid>
                    <Grid item xs={12} md={5}>
                      <h3 className='detailPassenger'>Passenger</h3>
                      <Divider/>
                      <p className='detailPassengerName'>Tim Antariksa</p>
                      <p className='detailPassengerName'>Wirda Basudara</p>
                      <br/>
                    </Grid>
                  </Grid>
                </Box>

                <Box className="detailTotal">
                  <p>
                    <b>Total IDR</b>
                    <span>1.150.000</span>
                  </p>
                </Box>
              </Container>
            </Grid>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Payment;
