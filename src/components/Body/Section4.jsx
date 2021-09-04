import React from 'react';
import { history } from '../../assets/images';

function Section4() {
  return (
    <div className='section-text'>
      <h2>A framework built for the long term</h2>
      <p>
        Childcare is for the long term. And you need a framework you can count
        on that gives your share long term viability and success. That’s why
        we’ve defined Hapu around our three tribal principles; clearly defined
        process, transparency over money and equality of participation.
      </p>
      <a href='/'>Read how Hapu’s tribal background defines our app </a>
      <img src={history} alt='Nany history demonstration' />
    </div>
  );
}

export default Section4;
