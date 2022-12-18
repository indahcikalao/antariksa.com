import React, { useEffect } from "react";
import {TextField, Button, Card, Grid}  from '@mui/material';
import { BiTimer } from 'react-icons/bi';
import "./SearchRes.css";
import SearchCard from './SearchCard';
import { useDispatch, useSelector } from "react-redux";
import { Link, useSearchParams } from "react-router-dom";

function SearchRes() {
  // const [searchParams] = useSearchParams();
  // const query = searchParams.get("keywords");
  // const dispatch = useDispatch();
  // const { search } = useSelector((state) => state.search);

  // useEffect(() => {
  //   dispatch(getAllSearch(query));
  // }, [dispatch, query]);
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
