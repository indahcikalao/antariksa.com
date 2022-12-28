import React, { useEffect, useState } from 'react';
import { Container, Grid, Button, Box } from '@mui/material';
import './Transaction.scss';
import TransactionTicket from '../../Components/TransactionTicket/TransactionTicket';
import TransactionPassanger from '../../Components/TransactionPassanger/TransactionPassanger';
import bg from '../../img/bg-gradient.png';
import plane7 from '../../img/plane7.jpg';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  getTransactionTicket,
  transactionData,
} from '../../redux/actions/transactionAction';
import { getListAirport } from '../../redux/actions/listairportAction';

function Transaction() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const id = searchParams.get('flightId');
  const p = searchParams.get('passengers');

  const [requestData, setRequestData] = useState({
    id: 0,
    passangers: [],
  });

  const { ticket } = useSelector((state) => state.transaction);
  const { listAirport } = useSelector((state) => state.listAirport);

  useEffect(() => {
    dispatch(getTransactionTicket(id));
    dispatch(getListAirport());

    if (id) {
      setRequestData({
        ...requestData,
        id: id,
      });
    }
  }, [dispatch, id]);

  useEffect(() => {
    console.log(requestData);
  }, [requestData]);

  function handleBook(e) {
    e.preventDefault();
    dispatch(
      transactionData(requestData, (status) => {
        if (status === 201) {
          navigate('/history');
        }
      })
    );
  }

  return (
    <div className="bg" style={{ backgroundImage: `url(${bg})` }}>
      <Container sx={{ pt: 20, pb: 10 }}>
        <Grid container justifyContent="center">
          <TransactionTicket ticket={ticket} p={p} listAirport={listAirport} />

          <Grid item sm={7} xs={12} sx={{ mx: 1 }}>
            {[...Array(parseInt(p))].map((item, index) => {
              return (
                <TransactionPassanger
                  i={index}
                  key={index}
                  data={requestData}
                  setData={setRequestData}
                />
              );
            })}

            <Grid container className="box" sx={{ mb: 3 }}>
              <Box
                className="plane-img3"
                sx={{
                  backgroundImage: `url(${plane7})`,
                }}
              />
              <Grid item xs={12} sx={{ p: 3 }}>
                <div className="box-title">
                  <h1>Is all set?</h1>
                  <p>Please make sure that your data are valid!</p>
                </div>

                <Button
                  className="button-save"
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mr: 3, my: 2, py: 1 }}
                  onClick={handleBook}>
                  Book Now!
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default Transaction;
