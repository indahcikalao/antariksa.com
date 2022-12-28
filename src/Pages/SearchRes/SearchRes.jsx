import React, { useEffect } from 'react';
import { Grid, Button, Container } from '@mui/material';
import './SearchRes.css';
// import SearchCard from './SearchCard';

import { useDispatch, useSelector } from 'react-redux';

import { useSearchParams } from 'react-router-dom';
import { getSearchAirport } from '../../redux/actions/listairportAction';
import { BiTimer } from 'react-icons/bi';
import { BsArrowRight } from 'react-icons/bs';
import { FaPlane, FaPaperPlane } from 'react-icons/fa';
// import { HiArrowLongRight } from 'react-icons/hi2';

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

  function currencyFormat(num) {
    return num
      .toFixed(2)
      .replace('.', ',')
      .replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.');
  }

  return (
    <div
      className="searchTicket"
      style={{ backgroundImage: `url('./img/pesawat.jpg')` }}>
      <Container maxWidth="md" sx={{ py: 17 }}>
        <div className="searchTicketContainer">
          {/* {search.map((item, idx) => (
          <>
            <h1>{item.origin_airport}</h1>
            <SearchCard key={idx} item={item} />
          </>
        ))} */}
          {search.map((item, idx) => (
            <div key={idx}>
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
                        <BiTimer
                          style={{ fontSize: '30px', paddingRight: '5px' }}
                        />
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
                    <Button
                      variant="contained"
                      sx={{ width: '100px' }}
                      // onClick={() => this.bookNow(flight._id)}
                      // href={"/book/" + flight._id}
                    >
                      Choose
                    </Button>
                  </Grid>
                </Grid>
              </div>
              <br></br>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}

export default SearchRes;
