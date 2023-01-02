import React, { useState, useEffect } from 'react';
import './HeaderStyles.css';
import { BsBellFill } from 'react-icons/bs';
import { FaBars } from 'react-icons/fa';
import { FaTimes } from 'react-icons/fa';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { editisRead, getNotif } from '../../redux/actions/notifAction';
import { logout } from '../../redux/actions/authActions';

function Header({ setToken }) {
  const [clicked, setClicked] = useState(false);
  const handleClick = () => {
    setClicked(!clicked);
  };
  const dispatch = useDispatch();
  const { notif } = useSelector((state) => state.notif);
  const { token } = useSelector((state) => state.auth);

  useEffect(() => {
    if (token) {
      dispatch(getNotif());
    }
  }, [dispatch, token]);

  return (
    <div>
      {!localStorage.getItem('token') ? (
        <>
          <nav className="navbarItems">
            <Link to="/">
              <h1 className="navbarLogo">antariksa</h1>
            </Link>
            <div className="menu-icons" onClick={handleClick}>
              {clicked ? (
                <FaTimes style={{ cursor: 'pointer' }}></FaTimes>
              ) : (
                <FaBars style={{ cursor: 'pointer' }}></FaBars>
              )}
            </div>
            <ul className={clicked ? 'navbarMenu active' : 'navbarMenu'}>
              <li>
                <Link to="/login">
                  <button className="nav-links-login">Login</button>
                </Link>
              </li>
              <li>
                <Link to="/register">
                  <button className="nav-links-regis">Register</button>
                </Link>
              </li>
            </ul>
          </nav>
        </>
      ) : (
        <>
          <div>
            <nav className="navbarItems">
              <h1 className="navbarLogo">
                <a href="/" className="navbarLogo">
                  antariksa
                </a>
              </h1>
              <div className="menu-icons" onClick={handleClick}>
                {clicked ? (
                  <FaTimes style={{ cursor: 'pointer' }}></FaTimes>
                ) : (
                  <FaBars style={{ cursor: 'pointer' }}></FaBars>
                )}
              </div>
              <ul className={clicked ? 'navbarMenu active' : 'navbarMenu'}>
                <li>
                  <PopupState variant="popover">
                    {(popupState) => (
                      <React.Fragment>
                        <BsBellFill
                          className="notif"
                          {...bindTrigger(popupState)}
                        />
                        <Menu
                          {...bindMenu(popupState)}
                          sx={{ zIndex: 10000 }}
                          className="notifBox">
                          {notif.length !== 0 ? (
                            notif.map((item, i) => (
                              <MenuItem
                                sx={
                                  !item.isRead
                                    ? { backgroundColor: '#DEF2FF' }
                                    : { backgroundColor: '#F0F0F0' }
                                }
                                onClick={() => {
                                  popupState.close();
                                  const id = item.id;
                                  dispatch(editisRead(id));
                                  dispatch(getNotif());
                                }}
                                key={i}>
                                <Link
                                  to={`/detail-history/${item.transaction_id}`}>
                                  <div className="notifDetail">
                                    <b>{item.tittle}</b>
                                    <br />
                                    <p>
                                      Your transaction (Booking ID:
                                      {item.transaction_id}) success! Go check
                                      your email to get your tickets or click
                                      here to get to ticket's details!
                                    </p>
                                  </div>
                                </Link>
                              </MenuItem>
                            ))
                          ) : (
                            <MenuItem disabled>No Transation Yet!</MenuItem>
                          )}
                        </Menu>
                      </React.Fragment>
                    )}
                  </PopupState>
                </li>
                <li>
                  <Link to="/">
                    <button
                      className="nav-links-logout"
                      onClick={() => dispatch(logout())}>
                      Logout
                    </button>
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </>
      )}
    </div>
  );
}

export default Header;
