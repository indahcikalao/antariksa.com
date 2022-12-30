import React from 'react';
import { useState, useEffect } from "react";
import Button from "@mui/material/Button"
import { TextField, MenuItem, InputLabel, FormControl, Select, Divider} from "@mui/material";
import "./BuyerProfile.css";
import { useDispatch, useSelector } from "react-redux"
import { editUser } from '../../redux/actions/authActions'

function FormEdit() {

const dispatch= useDispatch()
const [name, setName] = useState(null);
const [email, setEmail] = useState(null);
const [phone, setPhone] = useState(null);
const [gender, setGender] = useState('');

const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      name, email, gender, phone
    };
    dispatch(editUser(data));
  };

  return (
    <div
      className="app"
      style= {{ backgroundImage: `url('./img/pesawat.jpg')` }}>
      <div className="container prof">
        <div className="app-wrapper2">
          <h1 className="text-center" >Edit Profile</h1>
          <Divider/>
          <form className="px-3 py-4">

            <TextField
              fullWidth
              label="Full Name"
              id="fullWidth"
              margin="normal"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />

            <TextField
              fullWidth
              label="Email"
              id="fullWidth"
              margin="normal"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <TextField
              fullWidth
              label="Phone Number"
              id="fullWidth"
              margin="normal"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />

            {/* <TextField id="select" value="10" select>
          <MenuItem value="10">Male</MenuItem>
          <MenuItem value="20">Female</MenuItem>
          </TextField> */}
            <FormControl sx={{ width: 200 }} margin="dense">
              <InputLabel id="gender">Gender</InputLabel>
              <Select
                labelId="gender"
                id="fullWidth"
                value={gender}
                label="Gender"
                onChange={(e) => setGender(e.target.value)}>
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value="Male">Male</MenuItem>
                <MenuItem value="Female">Female</MenuItem>
              </Select>
            </FormControl>
            <br></br>
            <br></br>
            <Button type="submit" variant="contained" onClick={handleSubmit}>
              save
            </Button>
            {/* </div> */}
          </form>
        </div>
      </div>
    </div>
  );
};

export default FormEdit;