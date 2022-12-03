import React from 'react';
import {TextField}  from '@mui/material';
import "./SearchRes.css";

function SearchRes() {
  return (
    <div className="searchTicket">
      <div className="searchTicketContainer">
        <div className="searchTicketCard">
          <div className="formLeft">
            <h1 className="searchTicketHeading">Bandung - Papua</h1>
            <form style={{ marginTop: '30px', textAlign: 'center' }}>
              <TextField name="pnr" label="Lion Air" />
              <TextField name="firstName" label="Berangkat: " />
              <TextField name="lastName" label="Sampai:" />
              <button className="searchTicketButton">Choose</button>
            </form>
              <div className="result">
                <div className="content">
                  <h4 className="ui sub header">Bandung-Papua</h4>
                  <div className="ui small feed ticket-info">
                    <div className="event">
                      <div className="content">
                        <div className="summary">
                          <span>Berangkat:</span>
                        </div>
                      </div>
                    </div>
                    <div className="event">
                      <div className="content">
                        <div className="summary">
                          <span>Sampai: </span>
                        </div>
                      </div>
                    </div>
                    <div className="event">
                      <div className="content">
                        <div className="summary">
                          <span>Lama Perjalanan:</span>
                          <hr />
                        </div>
                      </div>
                    </div>
                    <div className="event">
                      <div className="content">
                        <div className="summary">
                          Kelebihan:
                          
                          <i style={{ marginLeft: 20, marginRight: 20 }} className="fas fa-plane"></i>
                
                          <div>
                            <span>Hemat </span>
                            <div> Dan Sebagainya </div>

                            <hr />
                            
                              <div className="event">
                                <div className="content">
                                  <div className="summary">
                                    Thanks
                                    
                                    <i style={{ marginLeft: 20, marginRight: 20 }} className="fas fa-plane"></i>
                                    
                                    <div>
                                      {/* Khoang: {booking.tickets[1].type};   Ghế: {booking.tickets[1].seat} */}
                                    </div>
                                    <div>
                                      {/* <span>Khởi hành lúc: {booking.tickets[1].flightId.takeOffTime}</span>
                                      <div> Hạ cánh lúc: {booking.tickets[1].flightId.landingTime}</div> */}
                                    </div>
                                  </div>
                                </div>
                                <hr />
                              </div>
                            
                            <div className="ui content">
                              {/* Giá vé: <span className="ui header red">{booking.totalPrice.toLocaleString('it-IT', { style: 'currency', currency: 'VND' })}</span> */}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                  </div>
                </div>
              </div>
            
            {/* {
              booking && booking.error &&
              <div className="searchError">
                {booking.error}
              </div>
            }
          </div>
          <img className="searchImg" src={SearchImg} alt="searchImg" />
        </div> */}
      </div>
    </div>
    </div>
    </div>
  )
}

export default SearchRes;
