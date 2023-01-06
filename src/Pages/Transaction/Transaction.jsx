import React, { useEffect, useState } from "react";
import { Container, Grid, Button, Box, Modal, Divider } from "@mui/material";
import "./Transaction.scss";
import TransactionTicket from "../../Components/TransactionTicket/TransactionTicket";
import TransactionPassanger from "../../Components/TransactionPassanger/TransactionPassanger";
import bg from "../../img/bg-gradient.png";
import plane7 from "../../img/plane7.jpg";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  getTransactionTicket,
  transactionData,
} from "../../redux/actions/transactionAction";
import { getListAirport } from "../../redux/actions/listairportAction";
import { getNotif } from "../../redux/actions/notifAction";
import { RiPlaneFill } from "react-icons/ri";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import moment from "moment/moment";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  maxWidth: 400,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
  textAlign: "center",
};

function Transaction() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const id = searchParams.get("flightId");
  const p = searchParams.get("passengers");
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

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

  // useEffect(() => {
  //   console.log(requestData);
  // }, [requestData]);

  const depDate = moment(ticket.depature_date, "DD-MM-YYYY").format(
    "DD MMM YYYY"
  );

  function currencyFormat(num) {
    return num
      .toFixed(2)
      .replace(".", ",")
      .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.");
  }

  function handleBook(e) {
    e.preventDefault();
    dispatch(
      transactionData(requestData, (status) => {
        if (status === 201) {
          navigate("/history");
        }
      })
    );
    dispatch(getNotif());
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
                  onClick={handleOpen}
                >
                  Book Now!
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} style={{ borderRadius: "13px" }}>
          <h2 style={{ letterSpacing: "2px", paddingBottom: "3px" }}>
            Proceed to Payment
          </h2>
          <Container className="tickets">
            <Box>
              <div style={{ display: "flex", justifyContent: "center" }}>
                <RiPlaneFill
                  style={{ fontSize: "30px", paddingRight: "10px" }}
                />
                {listAirport.map(
                  (item, i) =>
                    ticket.origin_airport === item.code && (
                      <h3 key={i}>{item.region}</h3>
                    )
                )}
                <HiOutlineArrowNarrowRight
                  style={{ fontSize: "30px", padding: "0 10px" }}
                />
                {listAirport.map(
                  (item, i) =>
                    ticket.destination_airport === item.code && (
                      <h3 key={i}>{item.region}</h3>
                    )
                )}
              </div>
              <p>
                {ticket.airlines} · {depDate} · {ticket.depature_time}
              </p>
            </Box>

            <Divider />

            <Box sx={{ py: 1 }}>
              <h4 style={{ paddingBottom: "10 px" }}>Pessenger Details</h4>
              {requestData.passangers?.map(
                (item, i) =>
                  item.name_passenger &&
                  item.identity_number && (
                    <p key={i} style={{ textAlign: "left", padding: "2px 0" }}>
                      {i + 1} . {item.name_passenger} ({item.identity_number})
                    </p>
                  )
              )}
            </Box>

            <Divider />
            <div style={{ padding: "15px 0" }}>
              <Box className="total" style={{ marginRight: 0, color: "grey" }}>
                {p > 1 ? (
                  <>
                    <p style={{ padding: 0 }}>Seats</p>
                    <p style={{ padding: 0 }}>{p} Seats</p>
                  </>
                ) : (
                  <>
                    <p style={{ padding: 0 }}>Seat</p>
                    <p style={{ padding: 0 }}>{p} Seat</p>
                  </>
                )}
              </Box>

              <Box className="total" style={{ marginRight: 0, color: "grey" }}>
                <p style={{ padding: 0 }}>Price</p>
                <p style={{ padding: 0 }}>
                  <span>IDR </span>
                  {currencyFormat(parseInt(ticket.price))}
                </p>
              </Box>

              <Box
                className="total"
                style={{ paddingTop: "10px", marginRight: 0, fontSize: "19px" }}
              >
                <p className="span" style={{ padding: 0 }}>
                  Total
                </p>
                <p style={{ padding: 0 }}>
                  <span className="span">IDR</span>{" "}
                  {currencyFormat(p * ticket.price)}
                </p>
              </Box>
            </div>
          </Container>

          <div>
            <Button
              variant="contained"
              color="secondary"
              sx={{ m: 0.5, width: "150px" }}
              onClick={handleClose}
            >
              Change Data
            </Button>
            <Button
              variant="contained"
              sx={{ m: 0.5, width: "150px" }}
              onClick={handleBook}
              // onClick={() => {
              //   dispatch(
              //     deleteListRoute(id, (status) => {
              //       if (status === 201) {
              //         setId(null);
              //         navigate("/admin-dashboard");
              //       }
              //     })
              //   );
              //   setRefetch(true);
              // }}
            >
              Pay
            </Button>
          </div>
        </Box>
      </Modal>
    </div>
  );
}

export default Transaction;
