import React from 'react';
import { Container, Grid } from '@mui/material';
import './History.scss';
import HistoryCard from '../../Components/HistoryCard/HistoryCard';

function History() {
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

          <div>
            <Grid container justifyContent="center">
              <HistoryCard />
              <HistoryCard />
              <HistoryCard />
              <HistoryCard />
              <HistoryCard />
            </Grid>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default History;
