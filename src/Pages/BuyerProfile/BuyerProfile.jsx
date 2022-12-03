import React, { useState, useEffect } from "react";
import Button from "@mui/material/Button"
import { TextField, MenuItem } from "@mui/material";
import "./BuyerProfile.css";
import { useDispatch, useSelector } from "react-redux"

function BuyerProfile() {
  return (
    <div className="app">
      <div className="container">
        <div className="app-wrapper">
        <h1 className="text-center">Profile User</h1>
          <form className="px-3 py-4">
        {/* <div className="form-group"> */}
          {/* <label htmlFor="">Name</label> */}
          {/* <input type="text" className="form-control"placeholder="Search..." /> */}
          
          <TextField fullWidth label="Full Name" id="fullWidth" />
          <br></br>
          <br></br>
          <TextField fullWidth label="Email" id="fullWidth" />
          <br></br>
          <br></br>
          <TextField fullWidth label="Phone Number" id="fullWidth" /> 
          <br></br>
          <br></br>
          <h5>Gender</h5>
          <TextField id="select" value="10" select>
          <MenuItem value="10">Male</MenuItem>
          <MenuItem value="20">Female</MenuItem>
          </TextField>
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
};

export default BuyerProfile;