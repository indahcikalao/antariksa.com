import React, { useEffect, useState } from 'react';
import { Grid, Container, Box, Divider } from '@mui/material';
import { RiPlaneFill } from 'react-icons/ri';
import { HiOutlineArrowNarrowRight } from 'react-icons/hi';
import './DetailHistoryStyles.scss';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getDetailHistory } from '../../redux/actions/transactionAction';
import { getListAirport } from '../../redux/actions/listairportAction';
import bg from '../../img/bg-gradient.png';
import plane11 from '../../img/plane11.jpg';
import moment from 'moment/moment';

function Payment() {
  const params = useParams();
  const dispatch = useDispatch();
  const id = params.id;
  const { detailHistory } = useSelector((state) => state.transaction);
  const { listAirport } = useSelector((state) => state.listAirport);
  const [passengers, setPassengers] = useState([]);
  const [flight, setFlight] = useState(null);

  useEffect(() => {
    dispatch(getDetailHistory(id));
    dispatch(getListAirport());
  }, [dispatch, id]);

  useEffect(() => {
    if (detailHistory) {
      setPassengers(detailHistory[1]);
      setFlight(detailHistory[0]);
    }
  }, [detailHistory]);

  function currencyFormat(num) {
    return num
      .toFixed(2)
      .replace('.', ',')
      .replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.');
  }

  return (
    <div
      className="bg"
      style={{
        backgroundImage: `url(${bg})`,
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
              backgroundImage: `url(${plane11})`,
              backgroundPositionY: -150,
            }}>
            <h1> Your Flight Details</h1>
            <p>Here is your flight details that you've booked!</p>
          </div>
          {passengers && flight && (
            <div>
              <Grid container justifyContent="center">
                <Container className="tickets">
                  <Box>
                    <p className="detailTujuan">
                      <RiPlaneFill
                        style={{
                          fontSize: '30px',
                          paddingRight: '10px',
                          marginBottom: -7,
                        }}
                      />
                      <b>
                        {listAirport.map(
                          (item) =>
                            flight[0].flight.origin_airport === item.code &&
                            item.region
                        )}
                      </b>
                      <HiOutlineArrowNarrowRight
                        style={{
                          fontSize: '30px',
                          padding: '0 10px',
                          marginBottom: -8,
                        }}
                      />
                      <b>
                        {listAirport.map(
                          (item) =>
                            flight[0].flight.destination_airport ===
                              item.code && item.region
                        )}
                      </b>
                    </p>
                    <p className="detailOrderid">Order ID : {flight[0]?.id}</p>
                  </Box>

                  <Box sx={{ border: 1, borderColor: 'grey.400' }}>
                    <Grid container spacing={5}>
                      <Grid item xs={12} md={7}>
                        <h3 className="detailPassenger">Departure - Arrival</h3>
                        <Divider />
                        <Box className="detailAirport">
                          <p>
                            <b>{flight[0].flight.depature_time}</b>
                            <br />
                            {moment(
                              flight[0]?.flight.depature_date,
                              'DD-MM-YYYY'
                            ).format('MMM DD')}
                          </p>
                          <p style={{ marginLeft: 25 }}>
                            {listAirport.map(
                              (item) =>
                                flight[0].flight.origin_airport === item.code &&
                                item.name
                            )}
                            <br />({flight[0].flight.origin_airport})
                          </p>
                        </Box>
                        <Box className="detailDuration">
                          <p
                            style={{
                              color: 'grey',
                              maxWidth: '60px',
                              textAlign: 'center',
                            }}>
                            {flight[0].flight.duration_time}
                          </p>
                          <p
                            style={{
                              marginLeft: 15,
                              display: 'flex',
                              alignItems: 'center',
                            }}>
                            {flight[0].flight.airlines}
                          </p>
                        </Box>
                        <Box className="detailAirport">
                          <p>
                            <b>{flight[0].flight.arrival_time}</b>
                            <br />
                            {moment(
                              flight[0]?.flight.depature_date,
                              'DD-MM-YYYY'
                            ).format('MMM DD')}
                          </p>
                          <p style={{ marginLeft: 25 }}>
                            {listAirport.map(
                              (item) =>
                                flight[0].flight.destination_airport ===
                                  item.code && item.name
                            )}
                            <br />({flight[0].flight.destination_airport})
                          </p>
                        </Box>
                      </Grid>
                      <Grid item xs={12} md={5}>
                        <h3 className="detailPassenger">Passenger</h3>
                        <Divider />
                        {passengers.map((item, idx) => (
                          <div key={idx} className="detailPassengerName">
                            <h4>Passenger {idx + 1}</h4>
                            <p>Name : {item.passenger.name_passenger}</p>
                            <p>Nationality : {item.passenger.nationality}</p>
                            <p>Id Number : {item.passenger.identity_number}</p>
                            {item.passenger.identity_type === 'Passport' && (
                              <p>
                                Passport ExpireDate :
                                {item.passenger.identity_exp_date}
                              </p>
                            )}
                          </div>
                        ))}
                        <br />
                      </Grid>
                    </Grid>
                  </Box>

                  <Box className="detailTotal">
                    <p>
                      <b>Total IDR</b>
                      <span>
                        {currencyFormat(
                          parseInt(passengers.length) *
                            parseInt(flight[0].flight.price)
                        )}
                      </span>
                    </p>
                  </Box>
                </Container>
              </Grid>
            </div>
          )}
        </div>
      </Container>
    </div>
  );
}

export default Payment;
