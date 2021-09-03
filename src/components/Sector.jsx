import React from 'react';
import sarah from '../assets/images/ProfileImage.png';
import './scss/Sector.scss';

function Sector() {
  return (
    <section className='sector'>
      <img src={sarah} alt='Sarah Profile' />
      <div className='info'>
        <a href='/'>Sarah’s day care available now in North Sydney</a>
        <p>Wednesday, Thursday, Friday - 7:30 - 5:30</p>
      </div>
    </section>
  );
}

export default Sector;
