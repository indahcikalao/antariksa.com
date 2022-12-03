import React from 'react';
import { AiFillInstagram } from 'react-icons/ai';
import { AiFillFacebook } from 'react-icons/ai';
import { AiFillTwitterSquare } from 'react-icons/ai';
import './FooterStyles.css';

const style = { color: "#fff"}

function Footer() {
  return (
    <div className='footer'>
      <div className='top'>
        <h2>&copy; antariksa</h2>
        <p>Find your ticket now.</p>
      </div>
      <div className='medsos'>
        <a href='https://www.instagram.com/'>
          <AiFillInstagram style={style} size={30}/>
        </a>
        <a href='https://www.facebook.com/'>
          <AiFillFacebook style={style} size={30}/>
        </a>
        <a href='https://www.twitter.com/'>
          <AiFillTwitterSquare style={style} size={30}/>
        </a>
      </div>
    </div>
  )
}

export default Footer;
