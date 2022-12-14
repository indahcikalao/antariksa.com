import React from 'react';
import {TextField, Button, Card, Grid}  from '@mui/material';
import { BiTimer } from 'react-icons/bi';
import "./SearchRes.css";

function SearchCard() {
    return (
        <div className="searchTicketCard">
          <div className="formLeft">
                  <h2>Lion Air</h2>
                  <br></br>
      <Grid container spacing={2}>
    <Grid item xs={2.2} sx={{ p: 3 }} justifyContent="center" style={{ fontSize: "1rem" }}>
    JKT<br></br>14.00
    </Grid>
    <Grid item xs={2.2} sx={{ p: 3 }} justifyContent="center">
    <span class="plane">
                              <svg
                                clip-rule="evenodd"
                                fill-rule="evenodd"
                                height="30"
                                width="30"
                                image-rendering="optimizeQuality"
                                shape-rendering="geometricPrecision"
                                text-rendering="geometricPrecision"
                                viewBox="0 0 500 500"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <g stroke="#222">
                                  <line
                                    fill="none"
                                    stroke-linecap="round"
                                    stroke-width="30"
                                    x1="300"
                                    x2="55"
                                    y1="390"
                                    y2="390"
                                    
                                  />
                                  <path
                                    d="M98 325c-9 10 10 16 25 6l311-156c24-17 35-25 42-50 2-15-46-11-78-7-15 1-34 10-42 16l-56 35 1-1-169-31c-14-3-24-5-37-1-10 5-18 10-27 18l122 72c4 3 5 7 1 9l-44 27-75-15c-10-2-18-4-28 0-8 4-14 9-20 15l74 63z"
                                    fill="#222"
                                    stroke-linejoin="round"
                                    stroke-width="10"
                                  />
                                  
                                </g>
                              </svg>
                              
                            </span>
    </Grid>
    <Grid item xs={2.2} sx={{ p: 3 }} style={{ fontSize: "1rem" }}>
    MLG<br></br>18.00
    </Grid>
    <Grid item xs={2.2} sx={{ p: 6 }} style={{ fontSize: "0.8rem" }}>
     <BiTimer/> 2j 30m
    </Grid>
    <Grid item xs={2.2} justifyContent="center" sx={{ p: 6 }} style={{ fontSize: "1rem" }}>
    &#8377;140.000
                            {/* </span> */}
                          <br></br>
                         
                            <Button
                              variant="contained"
                              // onClick={() => this.bookNow(flight._id)}
                              // href={"/book/" + flight._id}
                            >
                              Pilih
                            </Button>
    </Grid>
  </Grid>
  </div>
  </div>
  );
  }
  
            

export default SearchCard;
