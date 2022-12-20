import React from 'react';
import { Button, Grid } from '@mui/material';
import { BiTimer } from 'react-icons/bi';
import { BsArrowRight } from 'react-icons/bs';
import { FaPlane, FaPaperPlane } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './SearchRes.css';

function SearchCard({ item, p }) {
  function currencyFormat(num) {
    return num
      .toFixed(2)
      .replace('.', ',')
      .replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.');
  }

  return (
    <div className="box" style={{ padding: '30px 50px' }}>
      <h2 className="airlines">
        <FaPaperPlane style={{ paddingRight: '10px' }} />
        {item.airlines}
      </h2>
      <br></br>
      <Grid container justifyContent="center">
        <Grid
          item
          className="gridcenter"
          sm={2}
          xs={4}
          sx={{
            flexDirection: 'column',
          }}>
          <h3>{item.origin_airport}</h3>
          {item.depature_time}
        </Grid>
        <Grid item sm={5} xs={4}>
          <div className="gridcenter exceptXs">
            <p>
              <FaPlane style={{ fontSize: '20px' }} />
            </p>
            <p
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <BiTimer style={{ fontSize: '30px', paddingRight: '5px' }} />
              {item.duration_time}
            </p>
          </div>
          <div className="gridcenter onlyXs">
            <BsArrowRight />
          </div>
        </Grid>
        <Grid
          item
          className="gridcenter"
          sm={2}
          xs={4}
          sx={{
            flexDirection: 'column',
          }}>
          <h3>{item.destination_airport}</h3>
          {item.arrival_time}
        </Grid>
        <Grid
          item
          className="gridcenter"
          sm={3}
          xs={12}
          sx={{
            flexDirection: 'column',
          }}>
          <p>
            <strong style={{ paddingRight: '5px' }}>IDR</strong>
            {currencyFormat(parseInt(item.price))}
          </p>
          <Link to={`/transaction?flightId=${item.id}&passengers=${p}`}>
            <Button variant="contained" sx={{ width: '100px' }}>
              Choose
            </Button>
          </Link>
        </Grid>
      </Grid>
    </div>
  );
}

export default SearchCard;
