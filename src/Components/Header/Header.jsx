import React, { useState } from 'react';
import './HeaderStyles.css';
import { BsBellFill } from 'react-icons/bs';
import { FaBars } from 'react-icons/fa';
import { FaTimes } from 'react-icons/fa';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';

function Header() {
  const [clicked, setClicked] = useState(false);
  const handleClick = () => {
    setClicked(!clicked);
  };

  return (
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
            <a href="/login" className="nav-links-login">
              Login
            </a>
          </li>
          <li>
            <a href="/register" className="nav-links-regis">
              Register
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
