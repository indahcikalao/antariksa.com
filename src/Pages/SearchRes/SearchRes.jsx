import React from 'react';
import {TextField, Button, Card, Grid}  from '@mui/material';
import { BiTimer } from 'react-icons/bi';
import "./SearchRes.css";
import SearchCard from './SearchCard';

function SearchRes() {
    return (
      <>
      <div className="searchTicket" style={{ backgroundImage: `url('./img/pesawat.jpg')` }}>
      <div className="searchTicketContainer">
      <SearchCard/>
      <br></br>
      <SearchCard/>
      <br></br>
      <SearchCard/>
      <br></br>
      <SearchCard/>
      </div>
      </div>
      </>
  );
  }
  
            

export default SearchRes;
