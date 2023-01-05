import React, { useState, useEffect } from "react";
import "./HomeStyles.css";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { MobileDatePicker } from "@mui/x-date-pickers/MobileDatePicker";
import Box from "@mui/material/Box";
import { Button } from "@mui/material";
import ButtonGroup from "@mui/material/ButtonGroup";
import { StyledEngineProvider } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getListAirport } from "../../redux/actions/listairportAction";
import moment from "moment/moment";
import { getNotif } from "../../redux/actions/notifAction";

const theme = createTheme({
  palette: {
    primary: { main: "#252C35" },
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
    MuiPaper: {
      styleOverrides: {
        root: {
          width: 300,
          height: 495,
          transform: "translate(0%, 10%)",
        },
      },
    },
  },
});

function Home() {
  const [value, setValue] = useState(null);
  const [depDate, setDepDate] = useState(null);
  const [value1, setValue1] = useState(null);
  const [disabled, setDisabled] = useState(true);
  const [airportFrom, setAirportFrom] = useState(null);
  const [airportTo, setAirportTo] = useState(null);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { listAirport } = useSelector((state) => state.listAirport);
  const { token } = useSelector((state) => state.auth);

  const handleChangeDepart = (newValue) => {
    setValue(newValue);
    setDepDate(moment(newValue.$d).format("DD-MM-YYYY"));
  };

  const handleChangeReturn = (newValue1) => {
    setValue1(newValue1);
  };

  const [counter, setCounter] = useState(1);

  const disabledButton = () => {
    setDisabled(true);
  };

  const normalButton = () => {
    setDisabled(false);
  };

  useEffect(() => {
    dispatch(getListAirport());
    if (token) {
      dispatch(getNotif());
    }
  }, [dispatch, token]);

  return (
    <div>
      <div className="container">
        <img
          src="./img/bg.jpg"
          className="planeLP"
          width="100%"
          alt="Plane"
        ></img>
        <div className="hero-text">
          <h1>Find Your Ticket Now</h1>
        </div>

        <div className="chooseticket">
          <div className="radio">
            <ThemeProvider theme={theme}>
              <FormControl>
                <RadioGroup
                  row
                  aria-labelledby="demo-row-radio-buttons-group-label"
                  name="row-radio-buttons-group"
                  defaultValue="Return"
                >
                  <FormControlLabel
                    color="primary"
                    value="Return"
                    control={<Radio />}
                    label="One Way"
                    onClick={disabledButton}
                  />
                  <FormControlLabel
                    color="primary"
                    value="One Way"
                    control={<Radio />}
                    label="Return"
                    onClick={normalButton}
                  />
                </RadioGroup>
              </FormControl>
            </ThemeProvider>
          </div>
          <p className="smallLabel">No. of Passenger</p>
          <ThemeProvider theme={theme}>
            <StyledEngineProvider injectFirst>
              <Autocomplete
                options={listAirport}
                getOptionLabel={(list) =>
                  list.name + " (" + list.code + ") - " + list.region
                }
                componentsProps={{
                  paper: {
                    sx: {
                      width: "700px",
                      height: "315px",
                      "@media (max-width: 1024px)": {
                        width: "300px",
                        height: "320px",
                      },
                    },
                  },
                }}
                sx={{ display: "inline-block", width: 200 }}
                renderInput={(params) => <TextField {...params} label="From" />}
                onChange={(event, value) => setAirportFrom(value.code)}
                isOptionEqualToValue={(option, value) => option.id === value.id}
                className="jarakbox"
              />
              <Autocomplete
                options={listAirport}
                getOptionLabel={(list) =>
                  list.name + " (" + list.code + ") - " + list.region
                }
                componentsProps={{
                  paper: {
                    sx: {
                      width: "700px",
                      height: "315px",
                      "@media (max-width: 1024px)": {
                        width: "300px",
                        height: "320px",
                      },
                    },
                  },
                }}
                sx={{ display: "inline-block", width: 200 }}
                renderInput={(params) => <TextField {...params} label="To" />}
                onChange={(event, value) => setAirportTo(value.code)}
                isOptionEqualToValue={(option, value) => option.id === value.id}
                className="jarakbox"
              />
            </StyledEngineProvider>

            <ThemeProvider theme={datetheme}>
              <Box
                className="departreturn"
                sx={{ display: "inline-block", marginRight: 1 }}
              >
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <MobileDatePicker
                    disablePast
                    label="Depart Date"
                    inputFormat="MM/DD/YYYY"
                    value={value}
                    onChange={handleChangeDepart}
                    renderInput={(params) => <TextField {...params} />}
                  />
                </LocalizationProvider>
              </Box>
              <Box
                className="departreturn"
                sx={{ display: "inline-block", marginRight: 1 }}
              >
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <MobileDatePicker
                    disablePast
                    label="Return Date"
                    inputFormat="MM/DD/YYYY"
                    value={value1}
                    onChange={handleChangeReturn}
                    renderInput={(params) => <TextField {...params} />}
                    disabled={disabled}
                  />
                </LocalizationProvider>
              </Box>
            </ThemeProvider>
            <div className="incredecre">
              <ButtonGroup style={{ height: 55 }}>
                <Button
                  disabled={counter <= 0}
                  onClick={() => {
                    setCounter(counter - 1);
                  }}
                >
                  -
                </Button>
                {<Button disabled>{counter}</Button>}
                <Button
                  disabled={counter >= 20}
                  onClick={() => {
                    setCounter(counter + 1);
                  }}
                >
                  +
                </Button>
              </ButtonGroup>
            </div>
          </ThemeProvider>
          <br></br>
          <br></br>
          <StyledEngineProvider injectFirst>
            <Button
              className="searchflight"
              type="submit"
              fullWidth
              variant="contained"
              sx={{ width: 180, height: 50, fontSize: 17, float: "right" }}
              onClick={(e) => {
                e.preventDefault();
                airportFrom &&
                  airportTo &&
                  depDate &&
                  counter &&
                  navigate(
                    `/search-result?oa=${airportFrom}&da=${airportTo}&dd=${depDate}&p=${counter}`
                  );
              }}
            >
              Search Flight
            </Button>
          </StyledEngineProvider>
        </div>
      </div>
      <div className="grid-container">
        <div className="grid-item">
          <img src="./img/fast.jpg" width={350} alt="Fast"></img>
          <h2 style={{ paddingTop: 10 }}>Fast</h2>
          <br></br>
          <p>
            The good news is you can make transactions from anywhere quickly. Be
            as fast as plane that will fly to Antariksa!
          </p>
        </div>
        <div className="grid-item">
          <img src="./img/cheap.jpg" width={350} alt="Cheap"></img>
          <br></br>
          <br></br>
          <h2>Cheap</h2>
          <br></br>
          <p>
            The most important reason that our services are competitively priced
            is because we choose to be affordable.
          </p>
        </div>
        <div className="grid-item">
          <img
            src="./img/simple.jpg"
            width={350}
            alt="Simple"
            className="simple"
          ></img>
          <h2 style={{ paddingTop: 10 }}>Simple</h2>
          <br></br>
          <p>
            We have developed an easy transaction for you, the customer. Your
            convenience is our priority. <br />
            “The greatest ideas are the simplest.”
          </p>
        </div>
      </div>
    </div>
  );
}

export default Home;
