import React, { useState } from 'react';
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
import { Button } from '@mui/material';
import ButtonGroup from '@mui/material/ButtonGroup';
import { StyledEngineProvider } from '@mui/material/styles';

const tesdata = ['Option 1', 'Option 2'];

const theme = createTheme({
  palette: {
    primary: { main: '#252C35' }
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
  const [value1, setValue1] = React.useState(dayjs('2023-01-05T21:11:54'));
  const [disabled, setDisabled] = useState(true);

  const handleChangeDepart = (newValue) => {
    setValue(newValue);
  };

  const handleChangeReturn = (newValue1) => {
    setValue1(newValue1);
  };

  const [counter, setCounter] = useState(0);

  const disabledButton = () => {
    setDisabled(true)
  }

  const normalButton = () => {
    setDisabled(false)
  }

  return (
    <div>
      <div className="container">
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
                  <FormControlLabel color="primary" value="Return" control={<Radio />} label="One Way" onClick={disabledButton}/>
                  <FormControlLabel color="primary" value="One Way" control={<Radio />} label="Return" onClick={normalButton}/>
                </RadioGroup>
              </FormControl>
            </ThemeProvider>
          </div>
          <p className='smallLabel'>No. of Passenger</p>
          <ThemeProvider theme={theme}>
            <StyledEngineProvider injectFirst>
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
            </StyledEngineProvider>

            <ThemeProvider theme={datetheme}>
              <Box className='departreturn' sx={{display: 'inline-block', marginRight: 1}}>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <MobileDatePicker
                    label="Depart"
                    inputFormat="MM/DD/YYYY"
                    value={value}
                    onChange={handleChangeDepart}
                    renderInput={(params) => <TextField {...params} />}
                  />
                </LocalizationProvider>
              </Box>
              <Box className='departreturn' sx={{display: 'inline-block', marginRight: 1}}>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <MobileDatePicker
                    label="Return"
                    inputFormat="MM/DD/YYYY"
                    value={value1}
                    onChange={handleChangeReturn}
                    renderInput={(params) => <TextField {...params} />}
                    disabled={disabled}
                  />
                </LocalizationProvider>
              </Box>
            </ThemeProvider>
            <div className='incredecre'>
              <ButtonGroup style={{height: 55}}>
                <Button
                  disabled={counter <= 0}
                  onClick={() => {
                    setCounter(counter - 1)
                  }}>
                  -
                </Button>
                {<Button disabled>{counter}</Button>}
                <Button
                  disabled={counter >= 20}
                  onClick={()=> {
                    setCounter(counter+1)
                  }}>
                  +
                </Button>
              </ButtonGroup>
            </div>
          </ThemeProvider>
          <br></br><br></br>
          <StyledEngineProvider injectFirst>
            <Button
              className='searchflight'
              type="submit"
              fullWidth
              variant="contained"
              sx={{ width: 180, height: 50, fontSize: 17, float: 'right' }}>
              Search Flight
            </Button>
          </StyledEngineProvider>
        </div>
      </div>
      <div className='grid-container'>
        <div className="grid-item">
          <img src="./img/fast.jpg" width={350} alt='Fast'></img>
          <h2>Fast</h2>
          <br></br>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloremque aut ad amet maiores voluptates voluptas illum? Quidem expedita explicabo, enim soluta rem, delectus sequi, aliquid quas ab libero esse odit.</p>
        </div>
        <div className="grid-item">
          <img src="./img/cheap.jpg" width={350} alt='Cheap'></img>
          <br></br><br></br>
          <h2>Cheap</h2>
          <br></br>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur facilis libero sit dolores quibusdam voluptas rerum, aliquam labore nulla laborum illo iure veniam numquam ipsam magnam culpa consequatur neque delectus.</p>
        </div>
        <div className="grid-item">
          <img src="./img/simple.jpg" width={350} alt='Simple' className='simple'></img>
          <h2>Simple</h2>
          <br></br>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum sint natus veritatis quasi eligendi illum quod ullam accusantium a! Cupiditate adipisci optio in officia inventore sequi? Asperiores sunt incidunt ratione.</p>
        </div>
      </div>
    </div>
  )
}

export default Home;
