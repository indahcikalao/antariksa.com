import React, { useState } from 'react';
import './HeaderStyles.css';
import { BsBellFill } from 'react-icons/bs';
import { FaBars } from 'react-icons/fa';
import { FaTimes } from 'react-icons/fa';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';
import { Link } from 'react-router-dom';

function Header({ setToken }) {
  const [clicked, setClicked] = useState(false);
  const handleClick = () => {
    setClicked(!clicked);
  };
  const handleLogout = () => {
    window.location.reload();
    localStorage.removeItem("token");
    setToken(null);
  };

  return (
    <div>
      {!localStorage.getItem("token")? (
        <>
          <nav className="navbarItems">
            <Link to='/'>
              <h1 className="navbarLogo">
                  antariksa
              </h1>
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
                <PopupState variant="popover">
                  {(popupState) => (
                    <React.Fragment>
                      <BsBellFill className="notif" {...bindTrigger(popupState)} />
                      <Menu
                        {...bindMenu(popupState)}
                        sx={{ marginTop: 3, zIndex: 10000 }}>
                        <MenuItem onClick={popupState.close}>
                          Notification 1
                        </MenuItem>
                        <MenuItem onClick={popupState.close}>
                          Notification 2
                        </MenuItem>
                      </Menu>
                    </React.Fragment>
                  )}
                </PopupState>
              </li>
              <li>
                <Link to='/login'>
                  <button className="nav-links-login">
                    Login
                  </button>
                </Link>
              </li>
              <li>
                <Link to='/register'>
                  <button className="nav-links-regis">
                    Register
                  </button>
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
                      <BsBellFill className="notif" {...bindTrigger(popupState)} />
                      <Menu
                        {...bindMenu(popupState)}
                        sx={{ marginTop: 3, zIndex: 10000 }}>
                        <MenuItem onClick={popupState.close}>
                          Notification 1
                        </MenuItem>
                        <MenuItem onClick={popupState.close}>
                          Notification 2
                        </MenuItem>
                      </Menu>
                    </React.Fragment>
                  )}
                </PopupState>
              </li>
              <li>
                <Link to='/'>
                  <button className="nav-links-logout" onClick={handleLogout}>
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
  )
}

export default Header;
