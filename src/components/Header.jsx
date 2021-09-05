import React from 'react';
import { badge } from '../assets/vectors';
import './scss/Header.scss';

function Header() {
  return (
    <header>
      <div className='left-header'>
        <img src={badge} alt='logo hapu' />
        <nav className='btns'>
          <ul className='nav-list'>
            <li>
              <a href='/'> Create Your Nanny Share</a>
            </li>
            <li>
              <a href='/'>Browse Shares</a>
            </li>
            <li>
              <a href='/'>Our Story</a>
            </li>
          </ul>
        </nav>
      </div>
      <div className='rigth-header'>
        <button type='button' className='btn-share-host'>
          Become a Nanny Share Host
        </button>
        <a href='/' className='btn-sing-in'>
          {' '}
          Sing In
        </a>
      </div>
    </header>
  );
}

export default Header;
