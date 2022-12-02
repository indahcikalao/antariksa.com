import React from 'react';
import "./HeaderStyles.css";
import { BsBellFill } from 'react-icons/bs';

function Header() {
  return (
    <div>
      <nav className='navbarItems'>
        <h1 className='navbarLogo'><a href='/' className='navbarLogo'>antariksa</a></h1>
        <ul className='navbarMenu'>
          <li>
            <a href='/'><BsBellFill className='notif'/></a>
          </li>
          <li>
            <a href='/login' className='nav-links-login'>Login</a>
          </li>
          <li>
            <a href='/register' className='nav-links-regis'>Register</a>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Header;
