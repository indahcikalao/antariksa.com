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
  const [arrTime, setArrTime] = useState(null);
  const [depTime, setDepTime] = useState(null);
  const [price, setPrice] = useState(null);

  const dispatch = useDispatch();
  const { listAirport } = useSelector((state) => state.listAirport);

  useEffect(() => {
    dispatch(getListAirport());
  }, [dispatch]);

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
                      options={listAirport?.map(
                        (list) =>
                          list.name + ' (' + list.code + ') - ' + list.region
                      )}
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
                        <TextField
                          {...params}
                          label="From"
                          // onChange={(e) => console.log(e.target.value)}
                        />
                      )}
                      onChange={(e) => console.log(e.target.value)}
                    />
                  </Grid>
                  <Grid item sm={5} xs={12} sx={{ mx: 2, mt: 3 }}>
                    <Autocomplete
                      options={listAirport?.map(
                        (list) =>
                          list.name + ' (' + list.code + ') - ' + list.region
                      )}
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
                    />
                  </Grid>

                  <Grid item xs={12} sx={{ mx: 4, mt: 3 }}>
                    <Box>
                      <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <MobileDatePicker
                          label="Departure Date"
                          inputFormat="MM/DD/YYYY"
                          value={depDate}
                          onChange={(e) => setDepDate(e)}
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
                          value={depTime}
                          onChange={(e) => setDepTime(e)}
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
                          value={arrTime}
                          onChange={(e) => setArrTime(e)}
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
                      label="Total Passanger"
                      type="number"
                      inputProps={{
                        max: 300,
                        min: 0,
                      }}
                    />
                  </Grid>

                  <Grid item xs={12} sx={{ mx: 4, mt: 3 }}>
                    {/* <TextField
                      // required
                      fullWidth
                      label="Price"
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">IDR</InputAdornment>
                        ),
                      }}
                      autoFocus
                    /> */}
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
              </Box>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2, py: 1 }}>
                <BsPlusCircleFill
                  style={{ marginRight: '10px', fontSize: '18px' }}
                />
                Submit New Routes
              </Button>
            </Grid>
          </Grid>
        </div>
      </Container>
    </div>
  );
}
