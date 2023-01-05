import React, { useState, useEffect } from "react";
import {
  Box,
  TextField,
  Grid,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { MobileDatePicker } from "@mui/x-date-pickers/MobileDatePicker";
import moment from "moment/moment";
import plane9 from "../../img/plane9.jpg";

export default function TransactionPassanger({ i, data, setData }) {
  const [idType, setIdType] = useState("");
  const [expDate, setExpDate] = useState("");
  const [expDateVal, setExpDateVal] = useState(null);
  const [name, setName] = useState("");
  const [nationality, setNationality] = useState("");
  const [idNum, setIdNum] = useState("");

  const passangers = data.passangers;

  useEffect(() => {
    const coba = {
      name_passenger: name,
      identity_number: idNum,
      nationality,
      identity_type: idType,
      identity_exp_date: expDate,
    };
    passangers[i] = coba;
    setData({
      ...data,
      passangers,
    });
  }, [name, nationality, idNum, idType, expDate, i]);

  return (
    <Grid container className="box" sx={{ mb: 3, pb: 2 }}>
      <Box
        className="plane-img3"
        sx={{
          backgroundImage: `url(${plane9})`,
        }}
      />
      <Grid item xs={12} sx={{ p: 3 }}>
        <div className="box-title">
          <h1>Passenger Details</h1>
          <p>Let's go! Pack your things and get ready to fly with us!</p>
        </div>

        <Box component="form" sx={{ px: 3, pt: 2 }}>
          <h3>Passenger {i + 1}</h3>
          <TextField
            margin="normal"
            required
            fullWidth
            label="Full Name"
            autoFocus
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <TextField
            margin="normal"
            required
            fullWidth
            label="Nationality"
            autoFocus
            value={nationality}
            onChange={(e) => setNationality(e.target.value)}
          />

          <FormControl sx={{ width: 200 }} margin="normal">
            <InputLabel id="identitiy-type">Identitiy Type</InputLabel>
            <Select
              labelId="identitiy-type"
              value={idType}
              label="Identitiy Type"
              onChange={(e) => setIdType(e.target.value)}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value="KTP">KTP</MenuItem>
              <MenuItem value="Passport">Passport</MenuItem>
            </Select>
          </FormControl>

          <TextField
            margin="normal"
            required
            fullWidth
            label="Identity Number"
            autoFocus
            value={idNum}
            onChange={(e) => setIdNum(e.target.value)}
          />
          <Box sx={idType === "Passport" ? { mt: 2 } : { display: "none" }}>
            <LocalizationProvider
              dateAdapter={AdapterDayjs}
              sx={{ borderRadius: "13px" }}
            >
              <MobileDatePicker
                disablePast
                disabled={idType !== "Passport"}
                label="Identitiy Expire Date"
                inputFormat="DD/MM/YYYY"
                value={expDateVal}
                onChange={(e) => {
                  setExpDateVal(e);
                  setExpDate(moment(e.$d).format("DD-MM-YYYY"));
                }}
                renderInput={(params) => <TextField {...params} />}
              />
            </LocalizationProvider>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
}
