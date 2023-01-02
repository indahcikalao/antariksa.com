import React, { useEffect } from 'react';
import { Button, Container, Grid } from '@mui/material';
import './History.scss';
import HistoryCard from '../../Components/HistoryCard/HistoryCard';
import { useDispatch, useSelector } from 'react-redux';
import { getAllHistory } from '../../redux/actions/transactionAction';
import { getListAirport } from '../../redux/actions/listairportAction';
import { Link } from 'react-router-dom';
import { getNotif } from '../../redux/actions/notifAction';

function History() {
  const dispatch = useDispatch();
  const { allHistory } = useSelector((state) => state.transaction);
  const { listAirport } = useSelector((state) => state.listAirport);
  const dataHis = allHistory[0];
  const coba = allHistory[1];

  useEffect(() => {
    dispatch(getAllHistory());
    dispatch(getListAirport());
    dispatch(getNotif());
  }, [dispatch]);

  return (
    <div
      className="bg"
      style={{
        backgroundImage: `url('./img/bg-gradient.png')`,
      }}>
      <Container
        className="bg"
        maxWidth="md"
        sx={{
          pt: 20,
          pb: 10,
        }}>
        <div className="box" style={{ minHeight: '400px' }}>
          <div
            className="bg-hero-history"
            style={{
              backgroundImage: `url('./img/plane5.jpg')`,
            }}>
            <h1> Your Transaction History</h1>
            <p>Here are some flights that you've booked!</p>
          </div>

          {dataHis?.length === 0 && coba?.length === 0 ? (
            <Container
              sx={{
                height: '200px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                color: 'inherit',
                letterSpacing: '3px',
              }}>
              <h2>No Flight History yet!</h2>
              <p>would like to order your first flight with us?</p>
              <Link to={'/'}>
                <Button
                  variant="contained"
                  sx={{ my: 1, width: '120px', py: 1 }}>
                  Book Now!
                </Button>
              </Link>
            </Container>
          ) : (
            <Grid container justifyContent="center">
              {dataHis?.map((item, i) => (
                <HistoryCard
                  key={i}
                  item={item}
                  listAirport={listAirport}
                  p={coba}
                />
              ))}
            </Grid>
          )}
        </div>
      </Container>
    </div>
  );
}

export default History;
