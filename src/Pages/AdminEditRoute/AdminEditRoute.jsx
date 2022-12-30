import React, { useState, useEffect, forwardRef } from "react";
import { useParams } from "react-router-dom";
import { Container, Grid, Box, TextField, Button } from "@mui/material";
import { BsPlusCircleFill } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { NumericFormat } from "react-number-format";
import { getListAirport } from "../../redux/actions/listairportAction";
import { useNavigate } from "react-router-dom";
import { getEditRouteId } from "../../redux/actions/editrouteAction";
import { putEditRoute } from "../../redux/actions/editrouteAction";

const NumberFormatCustom = forwardRef(function NumberFormatCustom(props, ref) {
  const { inputRef, onChange, ...other } = props;

  return (
    <NumericFormat
      {...other}
      getInputRef={inputRef}
      onValueChange={(values) => {
        onChange({
          target: {
            name: props.name,
            value: values.value,
          },
        });
      }}
      thousandSeparator="."
      decimalSeparator=","
      prefix={"IDR "}
    />
  );
});

export default function AdminEditRoute() {
  const { editRouteId } = useSelector((state) => state.editRouteId);
  const [price, setPrice] = useState(null);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const params = useParams();
  const id = params.id;

  useEffect(() => {
    dispatch(getListAirport());
  }, [dispatch]);

  useEffect(() => {
    dispatch(getEditRouteId(params.id));
  }, [params, dispatch]);

  useEffect(() => {
    if (editRouteId) {
      setPrice(editRouteId.price);
    }
  }, [editRouteId]);

  const handleEdit = async (e) => {
    e.preventDefault();
    const data = {
      price,
    };
    dispatch(
      putEditRoute(data, id, (status) => {
        if (status === 201) {
          navigate("/admin-list-routes");
        }
      })
    );
  };

  return (
    <div
      className="bg"
      style={{ backgroundImage: `url('../img/bg-gradient.png')` }}
    >
      <Container sx={{ py: 15 }} maxWidth="md">
        <div className="box-auth">
          <Grid container justifyContent="center">
            <Grid
              className="plane-img"
              item
              md={4}
              xs={12}
              sx={{
                backgroundImage: `url('../img/plane15.jpg')`,
              }}
            />
            <Grid item md={8} xs={12} sx={{ p: 3 }}>
              <div style={{ textAlign: "center" }}>
                <h1>Edit Route</h1>
                <p>Edit and display new route!</p>
              </div>
              <Box component="form">
                <Grid container justifyContent="center">
                  <Grid item xs={12} sx={{ mx: 4, mt: 3 }}>
                    <TextField
                      fullWidth
                      label="Price"
                      value={price}
                      onChange={(e) => setPrice(parseInt(e.target.value))}
                      name="numberformat"
                      id="formatted-numberformat-input"
                      InputProps={{
                        inputComponent: NumberFormatCustom,
                      }}
                    />
                  </Grid>
                </Grid>
                <Button
                  onClick={handleEdit}
                  disabled={!price}
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2, py: 1 }}
                >
                  <BsPlusCircleFill
                    style={{ marginRight: "10px", fontSize: "18px" }}
                  />
                  Submit Edit
                </Button>
              </Box>
            </Grid>
          </Grid>
        </div>
      </Container>
    </div>
  );
}
