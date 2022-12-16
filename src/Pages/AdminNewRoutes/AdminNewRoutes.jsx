import React, { useState, useEffect, forwardRef } from 'react';
import {
  Container,
  Grid,
  Box,
  TextField,
  Button,
  Autocomplete,
} from '@mui/material';
import { BsPlusCircleFill } from 'react-icons/bs';
import {
  MobileDatePicker,
  MobileTimePicker,
  LocalizationProvider,
} from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { useDispatch, useSelector } from 'react-redux';
import { NumericFormat } from 'react-number-format';
import { getListAirport } from '../../redux/actions/listairportAction';
import { adminAddRoute } from '../../redux/actions/adminAction';
import moment from 'moment/moment';
import { useNavigate } from 'react-router-dom';

const NumberFormatCustom = forwardRef(function NumberFormatCustom(props, ref) {
  const { inputRef, onChange, ...other } = props;

  return (
    <NumericFormat
      {...other}
      getInputRef={inputRef}
      onValueChange={(values) => {
        onChange({
          target: {
            name: props.name,
            value: values.value,
          },
        });
      }}
      thousandSeparator="."
      decimalSeparator=","
      prefix={'IDR '}
    />
  );
});

export default function AdminNewRoutes() {
  const [depDate, setDepDate] = useState(null);
  const [depDateVal, setDepDateVal] = useState(null);
  const [arrTime, setArrTime] = useState(null);
  const [arrTimeVal, setArrTimeVal] = useState(null);
  const [depTime, setDepTime] = useState(null);
  const [depTimeVal, setDepTimeVal] = useState(null);
  const [price, setPrice] = useState(null);
  const [totalPassenger, setTotalPassenger] = useState(null);
  const [airportFrom, setAirportFrom] = useState([]);
  const [airportTo, setAirportTo] = useState([]);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { listAirport } = useSelector((state) => state.listAirport);

  useEffect(() => {
    dispatch(getListAirport());
  }, [dispatch]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
      depature_date: depDate,
      arrival_time: arrTime,
      depature_time: depTime,
      price,
      total_passenger: totalPassenger,
      origin_airport: airportFrom,
      destination_airport: airportTo,
    };
    dispatch(
      adminAddRoute(data, (status) => {
        if (status === 201) {
          navigate('/admin-dashboard');
        }
      })
    );
  };

  return (
    <div
      className="bg"
      style={{ backgroundImage: `url('./img/bg-gradient.png')` }}>
      <Container sx={{ py: 15 }} maxWidth="md">
        <div className="box-auth">
          <Grid container justifyContent="center">
            <Grid
              className="plane-img"
              item
              md={4}
              xs={12}
              sx={{
                backgroundImage: `url('./img/plane6.jpg')`,
              }}
            />
            <Grid item md={8} xs={12} sx={{ p: 3 }}>
              <div style={{ textAlign: 'center' }}>
                <h1>Add New Routes</h1>
                <p>Hola Admin! Adding new routes?</p>
              </div>
              <Box component="form">
                <Grid container justifyContent="center">
                  <Grid item sm={5} xs={12} sx={{ mx: 2, mt: 3 }}>
                    <Autocomplete
                      options={listAirport}
                      getOptionLabel={(list) =>
                        list.name + ' (' + list.code + ') - ' + list.region
                      }
                      componentsProps={{
                        paper: {
                          sx: {
                            width: '700px',
                            height: '298px',
                            '@media (max-width: 1024px)': {
                              width: '300px',
                              height: '320px',
                            },
                          },
                        },
                      }}
                      renderInput={(params) => (
                        <TextField {...params} label="From" />
                      )}
                      onChange={(event, value) => setAirportFrom(value.code)}
                      isOptionEqualToValue={(option, value) =>
                        option.id === value.id
                      }
                    />
                  </Grid>
                  <Grid item sm={5} xs={12} sx={{ mx: 2, mt: 3 }}>
                    <Autocomplete
                      options={listAirport}
                      getOptionLabel={(list) =>
                        list.name + ' (' + list.code + ') - ' + list.region
                      }
                      componentsProps={{
                        paper: {
                          sx: {
                            width: '700px',
                            height: '298px',
                            '@media (max-width: 1024px)': {
                              width: '300px',
                              height: '320px',
                            },
                          },
                        },
                      }}
                      renderInput={(params) => (
                        <TextField {...params} label="To" />
                      )}
                      onChange={(event, value) => setAirportTo(value.code)}
                      isOptionEqualToValue={(option, value) =>
                        option.id === value.id
                      }
                    />
                  </Grid>

                  <Grid item xs={12} sx={{ mx: 4, mt: 3 }}>
                    <Box>
                      <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <MobileDatePicker
                          label="Departure Date"
                          inputFormat="MM/DD/YYYY"
                          value={depDateVal}
                          onChange={(e) => {
                            setDepDateVal(e);
                            setDepDate(moment(e.$d).format('DD-MM-YYYY'));
                          }}
                          renderInput={(params) => (
                            <TextField {...params} fullWidth />
                          )}
                        />
                      </LocalizationProvider>
                    </Box>
                  </Grid>

                  <Grid item sm={5} xs={12} sx={{ mx: 2, mt: 3 }}>
                    <Box>
                      <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <MobileTimePicker
                          label="Departure Time"
                          ampm={false}
                          value={depTimeVal}
                          onChange={(e) => {
                            setDepTimeVal(e);
                            setDepTime(moment(e.$d).format('hh:mm'));
                          }}
                          renderInput={(params) => (
                            <TextField {...params} fullWidth />
                          )}
                        />
                      </LocalizationProvider>
                    </Box>
                  </Grid>

                  <Grid item sm={5} xs={12} sx={{ mx: 2, mt: 3 }}>
                    <Box>
                      <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <MobileTimePicker
                          ampm={false}
                          label="Arrival Time"
                          value={arrTimeVal}
                          onChange={(e) => {
                            setArrTimeVal(e);
                            setArrTime(moment(e.$d).format('hh:mm'));
                          }}
                          renderInput={(params) => (
                            <TextField {...params} fullWidth />
                          )}
                        />
                      </LocalizationProvider>
                    </Box>
                  </Grid>

                  <Grid item xs={12} sx={{ mx: 4, mt: 3 }}>
                    <TextField
                      fullWidth
                      label="Total Passenger"
                      type="number"
                      inputProps={{ min: 0 }}
                      onChange={(e) =>
                        setTotalPassenger(parseInt(e.target.value))
                      }
                    />
                  </Grid>

                  <Grid item xs={12} sx={{ mx: 4, mt: 3 }}>
                    <TextField
                      fullWidth
                      label="Price"
                      value={price}
                      onChange={(e) => setPrice(parseInt(e.target.value))}
                      name="numberformat"
                      id="formatted-numberformat-input"
                      InputProps={{
                        inputComponent: NumberFormatCustom,
                      }}
                    />
                  </Grid>
                </Grid>
                <Button
                  onClick={handleSubmit}
                  disabled={
                    !depDate ||
                    !arrTime ||
                    !depTime ||
                    !price ||
                    !totalPassenger ||
                    !airportFrom ||
                    !airportTo
                  }
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2, py: 1 }}>
                  <BsPlusCircleFill
                    style={{ marginRight: '10px', fontSize: '18px' }}
                  />
                  Submit New Routes
                </Button>
              </Box>
            </Grid>
          </Grid>
        </div>
      </Container>
    </div>
  );
}
