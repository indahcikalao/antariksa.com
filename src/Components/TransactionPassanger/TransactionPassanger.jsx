import React, { useState } from 'react';
import {
  Box,
  TextField,
  Grid,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
} from '@mui/material';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker';

export default function TransactionPassanger({ i }) {
  const [idType, setIdType] = useState('');
  const [expDate, setExpDate] = useState(null);

  return (
    <Grid container className="box" sx={{ mb: 3 }}>
      <Box
        className="plane-img3"
        sx={{
          backgroundImage: `url('./img/plane9.jpg')`,
        }}
      />
      <Grid item xs={12} sx={{ p: 3 }}>
        <div className="box-title">
          <h1>Passanger Details</h1>
          <p>Let's go! Pack your things and get ready to fly with us!</p>
        </div>

        <Box component="form" sx={{ px: 3, pt: 2 }}>
          <h3>Passanger {i + 1}</h3>
          <TextField
            margin="normal"
            required
            fullWidth
            label="Full Name"
            autoFocus
            // value={name}
            onChange={(e) => console.log(e.target.value)}
            // onChange={(e) => setName(e.target.value)}
          />

          <TextField
            margin="normal"
            required
            fullWidth
            label="Nationality"
            autoFocus
            // value={nationality}
            onChange={(e) => console.log(e.target.value)}
            // onChange={(e) => setName(e.target.value)}
          />

          <FormControl sx={{ width: 200 }} margin="normal">
            <InputLabel id="identitiy-type">Identitiy Type</InputLabel>
            <Select
              labelId="identitiy-type"
              value={idType}
              label="Identitiy Type"
              onChange={(e) => setIdType(e.target.value)}>
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
            // value={name}
            onChange={(e) => console.log(e.target.value)}
            // onChange={(e) => setName(e.target.value)}
          />

          <Box sx={idType === 'Passport' ? { mt: 2 } : { display: 'none' }}>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <MobileDatePicker
                disabled={idType !== 'Passport'}
                label="Identitiy Expire Date"
                inputFormat="MM/DD/YYYY"
                value={expDate}
                onChange={(e) => setExpDate(e)}
                renderInput={(params) => <TextField {...params} />}
              />
            </LocalizationProvider>
          </Box>
        </Box>

        <div className="button-save">
          <Button
            className="button-save"
            type="submit"
            variant="contained"
            sx={{ mr: 3, my: 2, py: 1, width: '100px' }}>
            Save
          </Button>
        </div>
      </Grid>
    </Grid>
  );
}
