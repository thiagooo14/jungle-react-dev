import React from 'react';
import {
  calendar,
  hapu,
  facebook,
  twitter,
  instagram,
} from '../assets/vectors';
import './scss/Footer.scss';

function Footer() {
  return (
    <footer>
      <div className='footer-main'>
        <h1>Become a nanny share host</h1>
        <p>Takes less than 5 minutes to get started</p>
        <button className='footer-btn'>
          <img src={calendar} alt='calendar icon' />
          <div>
            <span>Create Your Nanny Share</span>
            <span>Takes less than 5 minutes</span>
          </div>
        </button>
        <a href='/'>Or browse local nanny-shares</a>
      </div>
      <div className='footer-nav'>
        <div className='logo'>
          <img src={hapu} alt='hapu logo' />
        </div>
        <nav>
          <ul>
            <li>
              <a href='/'>Share Your Nanny</a>
            </li>
            <li>
              <a href='/'>Our Story</a>
            </li>
            <li>
              <a href='/'>Blog</a>
            </li>
            <li>
              <a href='/'>Terms &amp; Privacy</a>
            </li>
          </ul>
        </nav>
        <div className='social'>
          <a href='https://www.facebook.com/' target='_blank' rel='noreferrer'>
            <img src={facebook} alt='Facebook logo' />
          </a>
          <a href='https://www.twitter.com/' target='_blank' rel='noreferrer'>
            <img src={twitter} alt='Twitter logo' />
          </a>
          <a href='https://www.instagram.com/' target='_blank' rel='noreferrer'>
            <img src={instagram} alt='Instagram logo' />
          </a>
        </div>
      </div>
      <div className='divider' />
      <div className='footer-copy'>
        <p>Copyright &copy; 2017 Hapu PTY Limited All rights reserved</p>
      </div>
    </footer>
  );
}

export default Footer;
