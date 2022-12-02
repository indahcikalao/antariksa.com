import React from 'react';
import './HomeStyles.css';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import dayjs from 'dayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker';
import Box from '@mui/material/Box';

const tesdata = ['Option 1', 'Option 2'];

const theme = createTheme({
  palette: {
    primary: { main: '#fff' }
  },
});

const theme1 = createTheme({
  palette: {
    primary: { main: '#2E2E2E' }
  },
});

const datetheme = createTheme({
  components: {
    MuiInputBase: {
      styleOverrides: {
        root: {
          backgroundColor: "white",
        },
      },
    },
  },
});

function Home() {
  const [value, setValue] = React.useState(dayjs('2022-12-02T21:11:54'));
  const [value1] = React.useState(dayjs('2023-01-05T21:11:54'));

  const handleChange = (newValue) => {
    setValue(newValue);
  };

  return (
    <div>
      <div class="container">
        <video src="./img/bg.mp4" muted autoPlay loop type="video/mp4" id="glass" width="100%"></video>
        <div className='hero-text'>
          <h1>Find Your Ticket Now</h1>
        </div>

        <div className='chooseticket'>
          <div className='radio'>
            <ThemeProvider theme={theme}>
              <FormControl>
                <RadioGroup
                  row
                  aria-labelledby="demo-row-radio-buttons-group-label"
                  name="row-radio-buttons-group"
                  defaultValue="Return"
                >
                <FormControlLabel color="primary" value="Return" control={<Radio />} label="Return" />
                  <FormControlLabel color="primary" value="One Way" control={<Radio />} label="One Way" />
                </RadioGroup>
              </FormControl>
            </ThemeProvider>
          </div>

          <ThemeProvider theme={theme1}>
            <Autocomplete
              disablePortal
              id="combo-box-demo"
              options={tesdata}
              sx={{ display : 'inline-block', width: 200 }}
              renderInput={(params) => <TextField {...params} label="From" />}
              className="jarakbox"
            />
            <Autocomplete
              disablePortal
              id="combo-box-demo"
              options={tesdata}
              sx={{ display : 'inline-block', width: 200 }}
              renderInput={(params) => <TextField {...params} label="To" />}
              className="jarakbox"
            />

            <ThemeProvider theme={datetheme}>
              <Box sx={{display: 'inline-block', marginRight: 1}}>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <MobileDatePicker
                    label="Depart"
                    inputFormat="MM/DD/YYYY"
                    value={value}
                    onChange={handleChange}
                    renderInput={(params) => <TextField {...params} />}
                  />
                </LocalizationProvider>
              </Box>
              <Box sx={{display: 'inline-block', marginRight: 1}}>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <MobileDatePicker
                    label="Return"
                    inputFormat="MM/DD/YYYY"
                    value={value1}
                    onChange={handleChange}
                    renderInput={(params) => <TextField {...params} />}
                  />
                </LocalizationProvider>
              </Box>
            </ThemeProvider>

            <Autocomplete
              disablePortal
              id="combo-box-demo"
              options={tesdata}
              sx={{ display : 'inline-block', width: 200 }}
              renderInput={(params) => <TextField {...params} label="No. of Passengers" />}
              className="jarakbox"
            />
            <Autocomplete
              disablePortal
              id="combo-box-demo"
              options={tesdata}
              sx={{ display : 'inline-block', width: 200 }}
              renderInput={(params) => <TextField {...params} label="Seat Class" />}
              className="jarakbox"
            />
          </ThemeProvider>
          <br></br><br></br>
          <button type='submit' className='searchButton'>Search Flight</button>
        </div>
      </div>
      <div className='grid-container'>
        <div class="grid-item">
          <img src="./img/fast.jpg" width={450} alt='Fast'></img>
          <h2>Fast</h2>
          <br></br>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloremque aut ad amet maiores voluptates voluptas illum? Quidem expedita explicabo, enim soluta rem, delectus sequi, aliquid quas ab libero esse odit.</p>
        </div>
        <div class="grid-item">
          <img src="./img/cheap.jpg" width={400} alt='Cheap'></img>
          <br></br><br></br><br></br>
          <h2>Cheap</h2>
          <br></br>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur facilis libero sit dolores quibusdam voluptas rerum, aliquam labore nulla laborum illo iure veniam numquam ipsam magnam culpa consequatur neque delectus.</p>
        </div>
        <div class="grid-item">
          <img src="./img/simple.jpg" width={440} alt='Simple'></img>
          <h2>Simple</h2>
          <br></br>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum sint natus veritatis quasi eligendi illum quod ullam accusantium a! Cupiditate adipisci optio in officia inventore sequi? Asperiores sunt incidunt ratione.</p>
        </div>
      </div>
    </div>
  )
}

export default Home;
