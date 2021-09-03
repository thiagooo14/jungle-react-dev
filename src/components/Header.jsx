import React from 'react';
import { badge } from '../assets/vectors';

function Header() {
  return (
    <header>
      <div className='left-header'>
        <img src={badge} alt='logo' />
        <nav className='btns'>
          <ul>
            <li><a href='/'>Create Your Nanny Share</a></li>
            <li><a href='/'>Browse Shares</a></li>
            <li><a href='/'>Our Story</a></li>
          </ul>
        </nav>
        <div className='rigth-header'>
          <button className='btn-share-host'>Become a Nany Share Host</button>
          <a href='/' className='btn-sing-in'>
            Sing In
          </a>
        </div>
      </div>
    </header>
  );
}

export default Header;
