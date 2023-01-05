import React, { useState, useEffect } from "react";
import { Grid, Container, Modal, Button, Box } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { getListRoute } from "../../redux/actions/listAction";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import { AiFillDelete } from "react-icons/ai";
import { MdEdit } from "react-icons/md";
import { deleteListRoute } from "../../redux/actions/adminAction";
import { useNavigate, Link } from "react-router-dom";

const columns = [
  { id: "id", label: "ID", minWidth: 30 },
  { id: "origin_airport", label: "Origin Airport", minWidth: 100 },
  { id: "destination_airport", label: "Destination Airport", minWidth: 150 },
  { id: "depature_date", label: "Departure Date", minWidth: 150 },
  { id: "depature_time", label: "Departure Time", minWidth: 150 },
  { id: "arrival_time", label: "Arrival Time", minWidth: 100 },
  { id: "total_passenger", label: "Total Passenger", minWidth: 150 },
  { id: "price", label: "Price", minWidth: 100 },
];

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  maxWidth: 600,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
  textAlign: "center",
};

function AdminListRoute() {
  const { listRoute } = useSelector((state) => state.list);
  const [refetch, setRefetch] = useState(true);
  const [id, setId] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  useEffect(() => {
    if (refetch) {
      dispatch(getListRoute());
      setRefetch(false);
    }
  }, [refetch, dispatch]);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <div
      className="bg"
      style={{
        backgroundImage: `url('./img/bg-gradient.png')`,
      }}
    >
      <Container
        className="bg"
        maxWidth="md"
        sx={{
          pt: 20,
          pb: 10,
        }}
      >
        <div className="boxdetail" style={{ minHeight: "400px" }}>
          <div
            className="bg-hero-history"
            style={{
              backgroundImage: `url('./img/plane14.jpg')`,
            }}
          >
            <h1>List Routes</h1>
            <p>Here is list of route on Antariksa!</p>
          </div>

          <div>
            <Link to="/admin-add-new-routes">
              <Box textAlign="center">
                <Button
                  variant="contained"
                  style={{
                    paddingLeft: 30,
                    paddingRight: 30,
                    marginTop: 20,
                    fontSize: 17,
                  }}
                >
                  Add New Route
                </Button>
              </Box>
            </Link>
            <Grid container justifyContent="center">
              <Container className="tickets">
                <Paper sx={{ width: "100%", overflow: "hidden" }}>
                  <TableContainer sx={{ maxHeight: 440 }}>
                    <Table stickyHeader aria-label="sticky table">
                      <TableHead>
                        <TableRow>
                          {columns.map((column) => (
                            <TableCell
                              key={column.id}
                              align={column.align}
                              style={{
                                minWidth: column.minWidth,
                                textAlign: "center",
                              }}
                            >
                              {column.label}
                            </TableCell>
                          ))}
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {listRoute
                          .slice(
                            page * rowsPerPage,
                            page * rowsPerPage + rowsPerPage
                          )
                          .map((row, i) => {
                            return (
                              <TableRow
                                hover
                                role="checkbox"
                                tabIndex={-1}
                                key={i}
                              >
                                {columns.map((column) => {
                                  const value = row[column.id];
                                  return (
                                    <TableCell
                                      key={column.id}
                                      align={column.align}
                                      style={{ textAlign: "center" }}
                                    >
                                      {column.format &&
                                      typeof value === "number"
                                        ? column.format(value)
                                        : value}
                                    </TableCell>
                                  );
                                })}
                                <td style={{ display: "flex", marginTop: 15 }}>
                                  <AiFillDelete
                                    onClick={() => {
                                      handleOpen();
                                      setId(row.id);
                                    }}
                                    style={{
                                      cursor: "pointer",
                                      color: "#B40000",
                                      marginLeft: 20,
                                    }}
                                  />
                                  <MdEdit
                                    style={{
                                      cursor: "pointer",
                                      marginLeft: 20,
                                      marginRight: 25,
                                    }}
                                    onClick={(e) => {
                                      e.preventDefault();
                                      const id = row.id;
                                      navigate(`/admin-edit-route/${id}`);
                                    }}
                                  />
                                </td>
                              </TableRow>
                            );
                          })}
                      </TableBody>
                    </Table>
                  </TableContainer>
                  <TablePagination
                    rowsPerPageOptions={[10, 25, 100]}
                    component="div"
                    count={listRoute.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                  />
                </Paper>
              </Container>
            </Grid>
          </div>
        </div>
      </Container>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} style={{ borderRadius: "13px" }}>
          <h2>Delete This Route?</h2>
          <p>Are you really sure you want to delete this route?</p>
          <div>
            <Button
              variant="contained"
              color="secondary"
              sx={{ m: 0.5 }}
              onClick={handleClose}
            >
              No
            </Button>
            <Button
              variant="contained"
              sx={{ m: 0.5 }}
              onClick={() => {
                dispatch(
                  deleteListRoute(id, (status) => {
                    if (status === 201) {
                      setId(null);
                      navigate("/admin-dashboard");
                    }
                  })
                );
                setRefetch(true);
              }}
            >
              Yes
            </Button>
          </div>
        </Box>
      </Modal>
    </div>
  );
}

export default AdminListRoute;
