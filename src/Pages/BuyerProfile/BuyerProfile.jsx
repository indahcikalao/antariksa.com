import React, { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import {
  TextField,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
  Grid,
  Box,
  Divider,
  Container
} from '@mui/material';
import './BuyerProfile.css';
import {BiEdit} from'react-icons/bi';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function BuyerProfile() {
  const { user } = useSelector((state) => state.auth);

  // const navigate = useNavigate()
  // const [task, setTask] = useState('');
  // const [complete, setComplete] = useState(false);

  const [name, setName] = useState(null);
  const [email, setEmail] = useState(null);
  const [phone, setPhone] = useState(null);
  const [gender, setGender] = useState('');

  useEffect(() => {
    if (user) {
      setName(user.name);
      setEmail(user.email);
      setPhone(user.phone);
      setGender(user.gender);
    }
  }, [user]);

  // const handleEdit = (e) => {
  //       e.preventDefault();
  //       axios.put(`${process.env.REACT_APP_BASE_URL}/auth/editProfile`, {
  //           task: task,
  //           complete: complete,
  //       }).then(navigate("/"));
  //     }

  return (
    <div
      className="app"
      style={{ backgroundImage: `url('./img/pesawat.jpg')` }}>
      {/* {user && setName(user.name)} */}
      <div className="container prof">
      <Grid
      item
      lg={4}
      sm={7}
      xs={12}
      sx={{ mx: 2, mb: 3 }}
      className="app-wrapper">
      <Box
        className="plane-img3"
        md={12}
        sx={{
          backgroundImage: `url('./img/pesawat.jpg')`,
        }}>
        <h1>Profile User</h1>
      </Box>
      <br></br>
      <Container>
        <Box>
        <h4>Full Name  </h4>
        <Divider />
            <p>{name}</p>
             <br></br>
             
             <h4>Email </h4>
             <Divider />   
             <p>{email}</p>
             <br></br>
             
             <h4>Phone Number </h4>
             <Divider />
             <p>{phone}</p>
             <br></br>
             
             <h4>Gender </h4>
             <Divider />
             <p>{gender}</p>
             <br></br>
             <br></br>
        </Box>
        
      </Container>
    </Grid>
      </div>
    </div>
  );
}

export default BuyerProfile;
