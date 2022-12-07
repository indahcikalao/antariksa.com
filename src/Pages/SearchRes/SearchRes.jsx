import React from 'react';
import {TextField, Button, Card}  from '@mui/material';
import "./SearchRes.css";

function SearchRes() {
  return (
    <div className="searchTicket">
    <div className="searchTicketContainer">
      <div className="searchTicketCard">
        <div className="formLeft">
                <h2>Lion Air</h2>
                  <table style={{ width: "100%", tableLayout: "fixed", justifyContent: "center" }}>
                    <tbody>
                      <tr>
                        <td style={{ fontSize: "1.2rem" }}>Jakarta<br></br>14.00</td>
                        <td>
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
                        </td>
                        <td style={{ fontSize: "1.2rem" }}>Bali<br></br>18.00</td>
                        <td style={{ fontSize: "1.2rem" }}>
                          {/* <span style={{ float: "right" }}> */}
                          &#8377;140.000
                          {/* </span> */}
                        </td>
                        <td>
                          <Button
                            variant="contained"
                            // onClick={() => this.bookNow(flight._id)}
                            // href={"/book/" + flight._id}
                          >
                            Choose
                          </Button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <span style={{ textAlign: "start" }}></span>
          </div>
          </div>
          </div>
          </div>
  )
}

export default SearchRes;
