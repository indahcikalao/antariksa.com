import React from 'react';
import { Grid, Container, Box, Divider } from '@mui/material';
import { RiPlaneFill } from 'react-icons/ri';
import { HiOutlineArrowNarrowRight } from 'react-icons/hi';
import './TransactionTicket.scss';
import plane4 from '../../img/plane4.jpg';
import moment from 'moment/moment';

export default function TransactionTicket({ ticket, p, listAirport }) {
  const depDate = moment(ticket.depature_date, 'DD-MM-YYYY').format(
    'DD MMM YYYY'
  );

  function currencyFormat(num) {
    return num
      .toFixed(2)
      .replace('.', ',')
      .replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.');
  }

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
          backgroundImage: `url(${plane4})`,
        }}>
        <h2>Your Tickets</h2>
      </Box>
      <Container className="tickets">
        <Box>
          <div style={{ display: 'flex' }}>
            <RiPlaneFill style={{ fontSize: '30px', paddingRight: '10px' }} />
            {listAirport.map(
              (item, i) =>
                ticket.origin_airport === item.code && (
                  <h3 key={i}>{item.region}</h3>
                )
            )}
            <HiOutlineArrowNarrowRight
              style={{ fontSize: '30px', padding: '0 10px' }}
            />
            {listAirport.map(
              (item, i) =>
                ticket.destination_airport === item.code && (
                  <h3 key={i}>{item.region}</h3>
                )
            )}
          </div>
          <p>
            {ticket.airlines} · {depDate} · {ticket.depature_time}
          </p>
        </Box>

        <Divider />

        <Box className="total">
          <p className="span">Total</p>
          <p>
            <span className="span">IDR</span> {currencyFormat(p * ticket.price)}
          </p>
        </Box>
      </Container>
    </Grid>
  );
}
