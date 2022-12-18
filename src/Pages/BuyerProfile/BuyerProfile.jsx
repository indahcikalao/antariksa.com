import React, { useState, useEffect } from "react";
import Button from "@mui/material/Button"
import { TextField, Select,
  MenuItem,
  InputLabel,
  FormControl, } from "@mui/material";
import "./BuyerProfile.css";
import { useDispatch, useSelector } from "react-redux"

function BuyerProfile() {
  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.auth);
  const [gender, setGender] = useState('');

  return (
    <div className="app" style={{ backgroundImage: `url('./img/pesawat.jpg')` }}>
      <div className="container">
        <div className="app-wrapper">
        <h1 className="text-center">Profile User</h1>
          <form className="px-3 py-4">
        {/* <div className="form-group"> */}
          {/* <label htmlFor="">Name</label> */}
          {/* <input type="text" className="form-control"placeholder="Search..." /> */}
          <br></br>
          <br></br>
          Full Name:
          <br></br>
          <br></br>
          <br></br>
          Email:
          <br></br>
          <br></br>
          <br></br>
          Phone Number:
          <br></br>
          <br></br>
          <br></br>
          Gender:
          <br></br>
          <br></br>
          
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
};

export default BuyerProfile;