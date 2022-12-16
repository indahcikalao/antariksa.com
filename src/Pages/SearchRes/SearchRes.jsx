import React, { useEffect } from 'react';
import { Grid, Button } from '@mui/material';
import './SearchRes.css';
// import SearchCard from './SearchCard';

import { useDispatch, useSelector } from 'react-redux';

import { useSearchParams } from 'react-router-dom';
import { getSearchAirport } from '../../redux/actions/listairportAction';
import { BiTimer } from 'react-icons/bi';
import { FaPlane } from 'react-icons/fa';

function SearchRes() {
  const [searchParams] = useSearchParams();
  const oa = searchParams.get('oa');
  const da = searchParams.get('da');
  const dd = searchParams.get('dd');

  const dispatch = useDispatch();
  const { search } = useSelector((state) => state.listAirport);

  useEffect(() => {
    dispatch(getSearchAirport(oa, da, dd));
  }, [oa, da, dd, dispatch]);

  return (
    <div
      className="searchTicket"
      style={{ backgroundImage: `url('./img/pesawat.jpg')` }}>
      <div className="searchTicketContainer">
        {/* {search.map((item, idx) => (
          <>
            <h1>{item.origin_airport}</h1>
            <SearchCard key={idx} item={item} />
          </>
        ))} */}
        {search.map((item, idx) => (
          <div key={idx}>
            <div className="searchTicketCard">
              <div className="formLeft">
                <h2>{item.airlines}</h2>
                <br></br>
                <Grid container spacing={2}>
                  <Grid
                    item
                    xs={2.2}
                    sx={{ p: 3 }}
                    justifyContent="center"
                    style={{ fontSize: '1rem' }}>
                    {item.origin_airport}
                    <br></br>
                    {item.depature_time}
                  </Grid>
                  <Grid item xs={2.2} sx={{ p: 3 }} justifyContent="center">
                    <FaPlane style={{ fontSize: '20px' }} />
                    <br></br>
                    <BiTimer style={{ fontSize: '30px' }} /> 2j 30m
                  </Grid>
                  <Grid
                    item
                    xs={2.2}
                    sx={{ p: 3 }}
                    style={{ fontSize: '1rem' }}>
                    {item.destination_airport}
                    <br></br>
                    {item.arrival_time}
                  </Grid>
                  {/* <Grid
                    item
                    xs={2.2}
                    sx={{ p: 6 }}
                    style={{ fontSize: '0.8rem' }}>
                    <BiTimer /> 2j 30m
                  </Grid> */}
                  <Grid
                    item
                    xs={2.2}
                    justifyContent="center"
                    sx={{ p: 6 }}
                    style={{ fontSize: '1rem' }}>
                    IDR {item.price}
                    {/* </span> */}
                    <br></br>
                    <Button
                      variant="contained"
                      sx={{ mt: 1, width: '100px' }}
                      // onClick={() => this.bookNow(flight._id)}
                      // href={"/book/" + flight._id}
                    >
                      Choose
                    </Button>
                  </Grid>
                </Grid>
              </div>
            </div>
            <br></br>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SearchRes;
