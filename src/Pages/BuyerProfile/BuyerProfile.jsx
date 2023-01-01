import React, { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import { Grid, Box, Divider, Container } from '@mui/material';
import './BuyerProfile.css';
import { FaPencilAlt } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

function BuyerProfile() {
  const { user } = useSelector((state) => state.auth);
  return (
    <div
      className="app"
      style={{ backgroundImage: `url('./img/pesawat.jpg')` }}>
      <Container maxWidth="sm" sx={{ pt: 15, pb: 10 }}>
        <div className="box">
          <Box
            className="plane-img3 prof-head"
            sx={{
              backgroundImage: `url('./img/pesawat.jpg')`,
            }}>
            <h1>Profile User</h1>
          </Box>
          <br></br>

          <Box sx={{ px: 5, pb: 3 }}>
            <h4>Full Name </h4>
            <Divider />
            <p>{user?.name || 'Data Not Found'}</p>
            <br></br>

            <h4>Email </h4>
            <Divider />
            <p>{user?.email || 'Data Not Found'}</p>
            <br></br>

            <h4>Phone Number </h4>
            <Divider />
            <p>{user?.phone || 'Data Not Found'}</p>
            <br></br>

            <h4>Gender </h4>
            <Divider />
            <p>{user?.gender || 'Data Not Found'}</p>
            <br></br>
            <Link to={`/edit-profile`}>
              <Button variant="contained" fullWidth>
                Edit Data <FaPencilAlt style={{ paddingLeft: '10px' }} />
              </Button>
            </Link>
          </Box>
        </div>
      </Container>
    </div>
  );
}

export default BuyerProfile;
