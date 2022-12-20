import React, { useEffect } from 'react';
import { Container, Button } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useSearchParams } from 'react-router-dom';
import {
  getSearchAirport,
  getListAirport,
} from '../../redux/actions/listairportAction';
import './SearchRes.css';
import SearchCard from './SearchCard';
import { HiOutlineArrowNarrowRight } from 'react-icons/hi';
import moment from 'moment/moment';

function SearchRes() {
  const [searchParams] = useSearchParams();
  const oa = searchParams.get('oa');
  const da = searchParams.get('da');
  const dd = searchParams.get('dd');
  const p = searchParams.get('p');

  const dispatch = useDispatch();
  const { search, listAirport } = useSelector((state) => state.listAirport);
  const depDate = moment(dd, 'DD-MM-YYYY').format('DD MMMM YYYY');

  useEffect(() => {
    dispatch(getSearchAirport(oa, da, dd));
    dispatch(getListAirport());
  }, [oa, da, dd, dispatch]);

  return (
    <div
      className="searchTicket"
      style={{ backgroundImage: `url('./img/pesawat.jpg')` }}>
      <Container maxWidth="md" sx={{ py: 17 }}>
        <div className="box">
          <div
            className="bg-hero-history"
            style={{
              backgroundImage: `url('./img/plane12.jpg')`,
              borderRadius: '13px',
              padding: '15px',
              minHeight: '250px',
            }}>
            <h1>Search Result</h1>
            <p>Here are the flights that you're Looking for! </p>
            <div className="route">
              {listAirport.map(
                (item, i) =>
                  oa === item.code && (
                    <p key={i}>
                      {item.region} ({oa})
                    </p>
                  )
              )}
              <HiOutlineArrowNarrowRight
                style={{ fontSize: '30px', padding: '0 20px' }}
              />
              {listAirport.map(
                (item, i) =>
                  da === item.code && (
                    <p key={i}>
                      {item.region}({da})
                    </p>
                  )
              )}
            </div>
            <p>{depDate}</p>
          </div>
        </div>
        <br></br>
        {search.length !== 0 ? (
          search.map((item, idx) => (
            <div key={idx}>
              <SearchCard item={item} p={p} />
              <br></br>
            </div>
          ))
        ) : (
          <div
            className="box route"
            style={{
              padding: '30px',
              textAlign: 'center',
              flexDirection: 'column',
              letterSpacing: '3px',
            }}>
            <h1>Oopsies!</h1>
            <h3>No Flights Available Right Now!</h3>
            <p>Let's look for the other schedule! </p>
            <Link to={`/`}>
              <Button variant="contained" sx={{ my: 1, width: '210px', py: 1 }}>
                Search a New Schedule
              </Button>
            </Link>
          </div>
        )}
      </Container>
    </div>
  );
}

export default SearchRes;
