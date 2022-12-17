import React, { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import {
  TextField,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
} from '@mui/material';
import './BuyerProfile.css';
import { useDispatch, useSelector } from 'react-redux';

function BuyerProfile() {
  const { user } = useSelector((state) => state.auth);

  const [name, setName] = useState(null);
  const [email, setEmail] = useState(null);
  const [phone, setPhone] = useState(null);
  const [gender, setGender] = useState('');

  useEffect(() => {
    if (user) {
      setName(user.name);
      setEmail(user.email);
      if (phone) {
        setPhone(user.phone);
      }
      if (gender) {
        setGender(user.gender);
      }
    }
  }, [user]);

  return (
    <div
      className="app"
      style={{ backgroundImage: `url('./img/pesawat.jpg')` }}>
      {/* {user && setName(user.name)} */}
      <div className="container prof">
        <div className="app-wrapper">
          <h1 className="text-center">Profile User</h1>
          <form className="px-3 py-4">
            {/* <div className="form-group"> */}
            {/* <label htmlFor="">Name</label> */}
            {/* <input type="text" className="form-control"placeholder="Search..." /> */}

            <TextField
              fullWidth
              label="Full Name"
              id="fullWidth"
              margin="normal"
              value={name}
            />

            <TextField
              fullWidth
              label="Email"
              id="fullWidth"
              margin="normal"
              value={email}
            />

            <TextField
              fullWidth
              label="Phone Number"
              id="fullWidth"
              margin="normal"
              value={phone}
            />

            {/* <TextField id="select" value="10" select>
          <MenuItem value="10">Male</MenuItem>
          <MenuItem value="20">Female</MenuItem>
          </TextField> */}
            <FormControl sx={{ width: 200 }} margin="dense">
              <InputLabel id="gender">Gender</InputLabel>
              <Select
                labelId="gender"
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
            <Button type="submit" variant="contained">
              save
            </Button>
            {/* </div> */}
          </form>
          {/* <Form.Group controlId="name">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                ></Form.Control>
              </Form.Group>
              <Form.Group controlId="email">
                <Form.Label>Email Address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                ></Form.Control>
              </Form.Group> */}
        </div>
      </div>
    </div>
  );
}

export default BuyerProfile;
