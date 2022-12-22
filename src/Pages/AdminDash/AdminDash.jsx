import React from 'react';
import { Link } from 'react-router-dom';
import { Grid, Container } from '@mui/material';
import { FaPaperPlane, FaUserAlt } from 'react-icons/fa';
import { TbReportMoney } from 'react-icons/tb';

import './AdminDash.scss';

function AdminDash() {
  return (
    <div>
      <section
        className="bg"
        style={{ backgroundImage: `url('./img/plane4.jpg')` }}>
        <Container
          sx={{
            pt: 20,
            pb: 10,
            textAlign: 'center',
          }}
          className="adm-hero">
          <h1> Hello Admin!</h1>
          <p>looks what's new in antariksa today!</p>
        </Container>
      </section>

      <section className="adm-hero-sect2">
        <Container sx={{ py: 10 }}>
          <Grid container justifyContent="center">
            <Grid item lg={3} md={4} s={8} sx={{ m: 2 }} className="box-info">
              <Link to="/admin-list-user">
                <Grid container>
                  <Grid item md={3} sx={{ mr: 2 }} className="grid">
                    <FaUserAlt style={{ fontSize: '50px' }} />
                  </Grid>
                  <Grid item md={8}>
                    <h2>Users</h2>
                    <p>100</p>
                  </Grid>
                </Grid>
              </Link>
            </Grid>

            <Grid item lg={3} md={4} s={8} sx={{ m: 2 }} className="box-info">
              <Link to="/admin-list-routes">
                <Grid container>
                  <Grid item md={3} sx={{ mr: 2 }} className="grid">
                    <FaPaperPlane style={{ fontSize: '45px' }} />
                  </Grid>
                  <Grid item md={8}>
                    <h2>Routes</h2>
                    <p>100</p>
                  </Grid>
                </Grid>
              </Link>
            </Grid>

            <Grid item lg={3} md={4} s={8} sx={{ m: 2 }} className="box-info">
              <Link to="/admin-list-transaction">
                <Grid container>
                  <Grid item md={3} sx={{ mr: 2 }} className="grid">
                    <TbReportMoney style={{ fontSize: '60px' }} />
                  </Grid>
                  <Grid item md={8}>
                    <h2>Transactions</h2>
                    <p>100</p>
                  </Grid>
                </Grid>
              </Link>
            </Grid>
          </Grid>
        </Container>
      </section>
    </div>
  );
}

export default AdminDash;
