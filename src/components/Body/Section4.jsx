import React from 'react';
import { history } from '../../assets/images';
import './scss/Section4.scss';

function Section4() {
  return (
    <div>
      <section className='section4'>
        <div className='section-text'>
          <h1>A framework built for the long term</h1>
          <p>
            Childcare is for the long term. And you need a framework you can
            count on that gives your share long term viability and success.
            That’s why we’ve defined Hapu around our three tribal principles;
            clearly defined process, transparency over money and equality of
            participation.
          </p>
        </div>
        <a href='/'>Read how Hapu’s tribal background defines our app </a>
        <img src={history} alt='Nany history demonstration' />
      </section>

      <div className='divider' />
    </div>
  );
}

export default Section4;
