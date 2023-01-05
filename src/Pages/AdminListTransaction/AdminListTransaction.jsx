import React, { useEffect } from 'react';
import { Grid, Container } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { getListTransaction } from '../../redux/actions/listAction';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';

function AdminListTransaction() {
  const dispatch = useDispatch();
  const { listTransaction } = useSelector((state) => state.list);

  const columnsTransaction = [
    {
      id: 'user',
      label: 'Name',
      minWidth: 100,
      format: (value) => value?.name || 'Data Not Found',
    },
    {
      id: 'flight',
      label: 'Origin Airport',
      minWidth: 100,
      format: (value) => value?.origin_airport || 'Data Not Found',
    },
    {
      id: 'flight',
      label: 'Destination Airport',
      minWidth: 100,
      format: (value) => value?.destination_airport || 'Data Not Found',
    },
    {
      id: 'flight',
      label: 'Departure Date',
      minWidth: 100,
      format: (value) => value?.depature_date || 'Data Not Found',
    },
    {
      id: 'flight',
      label: 'Departure Time',
      minWidth: 100,
      format: (value) => value?.depature_time || 'Data Not Found',
    },
    {
      id: 'flight',
      label: 'Arrival Time',
      minWidth: 100,
      format: (value) => value?.arrival_time || 'Data Not Found',
    },
  ];
  useEffect(() => {
    dispatch(getListTransaction());
  }, [dispatch]);

  const [page1, setPage1] = React.useState(0);
  const [rowsPerPage1, setRowsPerPage1] = React.useState(10);

  const handleChangePage1 = (event, newPage) => {
    setPage1(newPage);
  };

  const handleChangeRowsPerPage1 = (event) => {
    setRowsPerPage1(+event.target.value);
    setPage1(0);
  };

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
        <div className="boxdetail" style={{ minHeight: '400px' }}>
          <div
            className="bg-hero-history"
            style={{
              backgroundImage: `url('./img/plane13.jpg')`,
              backgroundPositionY: -250,
            }}>
            <h1>List Transaction</h1>
            <p>Here is list of transaction on Antariksa!</p>
          </div>

          <div>
            <Grid container justifyContent="center">
              <Container className="tickets">
                <Paper sx={{ width: '100%', overflow: 'hidden' }}>
                  <TableContainer sx={{ maxHeight: 440 }}>
                    <Table stickyHeader aria-label="sticky table">
                      <TableHead>
                        <TableRow>
                          {columnsTransaction.map((clm, idx) => (
                            <TableCell
                              key={idx}
                              align={clm.align}
                              style={{ minWidth: clm.minWidth }}>
                              {clm.label}
                            </TableCell>
                          ))}
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {listTransaction
                          .slice(
                            page1 * rowsPerPage1,
                            page1 * rowsPerPage1 + rowsPerPage1
                          )
                          .map((row1, x) => {
                            return (
                              <TableRow
                                hover
                                role="checkbox"
                                tabIndex={-1}
                                key={x}>
                                {columnsTransaction.map((clm, z) => {
                                  const value = row1[clm.id];
                                  return (
                                    <TableCell key={z} align={clm.align}>
                                      {clm.format ? clm.format(value) : value}
                                    </TableCell>
                                  );
                                })}
                              </TableRow>
                            );
                          })}
                      </TableBody>
                    </Table>
                  </TableContainer>
                  <TablePagination
                    rowsPerPageOptions={[10, 25, 100]}
                    component="div"
                    count={listTransaction.length}
                    rowsPerPage={rowsPerPage1}
                    page={page1}
                    onPageChange={handleChangePage1}
                    onRowsPerPageChange={handleChangeRowsPerPage1}
                  />
                </Paper>
              </Container>
            </Grid>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default AdminListTransaction;
