import React from 'react';
import { Grid, Divider, Box } from '@mui/material';
import { RiPlaneFill } from 'react-icons/ri';
import { HiOutlineArrowNarrowRight } from 'react-icons/hi';
import './HistoryCard.scss';
import { Link } from 'react-router-dom';
import moment from 'moment/moment';

export default function HistoryCard({ item, listAirport, p }) {
  let i = 0;
  const depDate = moment(item.flight.depature_date, 'DD-MM-YYYY').format(
    'Do MMM YYYY'
  );

  function currencyFormat(num) {
    return num
      .toFixed(2)
      .replace('.', ',')
      .replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.');
  }

  return (
    <Grid item xs={12} sx={{ mx: 5, mb: 1 }} className="his-grid">
      <Link to={`/detail-history/${item.id}`}>
        <Divider variant="middle" />

        <Grid container sx={{ pt: 2 }} justifyContent="center" className="coba">
          <Grid item sm={9} xs={12} className="grid-i-his-card">
            <span>Booking id</span> {item.id}
          </Grid>
          <Grid item sm={3} xs={12} className="grid-i-his-card">
            <Box className="payment">Paid</Box>
            {/* <Box className="payment not">Not Paid</Box> */}
          </Grid>
        </Grid>
        <Grid container sx={{ pb: 2 }} justifyContent="center" className="coba">
          <Grid item sm={9} xs={12}>
            <div className="grid-i-his-card">
              <RiPlaneFill style={{ fontSize: '30px', paddingRight: '10px' }} />
              {listAirport.map(
                (airport, i) =>
                  item.flight.origin_airport === airport.code && (
                    <h3 key={i}>{airport.region}</h3>
                  )
              )}
              <HiOutlineArrowNarrowRight
                style={{ fontSize: '30px', padding: '0 10px' }}
              />
              {listAirport.map(
                (airport, i) =>
                  item.flight.destination_airport === airport.code && (
                    <h3 key={i}>{airport.region}</h3>
                  )
              )}
            </div>
            <p className="dateandtime">
              {depDate} · {item.flight.depature_time}
              <HiOutlineArrowNarrowRight
                style={{ padding: '0 5px', fontSize: '20px' }}
              />
              {item.flight.arrival_time}
            </p>
          </Grid>
          <Grid item sm={3} xs={12} className="grid-i-his-card">
            <span>IDR</span>
            {p.map(
              (pass) =>
                pass.TransactionId === item.id && console.log((i = i + 1))
            )}
            {i !== 0
              ? currencyFormat(parseInt(item.flight.price) * i)
              : currencyFormat(parseInt(item.flight.price))}
          </Grid>
        </Grid>
      </Link>
    </Grid>
  );
}
