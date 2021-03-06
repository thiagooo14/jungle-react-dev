import React from 'react';
import Header from './Header';
import { banner } from '../assets/images';
import { play } from '../assets/vectors';
import './scss/Hero.scss';

function Hero() {
  const ABTest = +localStorage.getItem('AB');

  const ABCheck = () => {
    const ABValue = Math.floor(Math.random() * 2);
    localStorage.setItem('AB', ABValue);
  };

  ABCheck();

  return (
    <section className='hero'>
      <Header />
      <div className='hero-wrap'>
        <article>
          <h1>
            {ABTest
              ? 'Easily create or join a local nanny share with Hapu'
              : 'Create the childcare you need at a price you can afford'}
          </h1>
          <p>
            {ABTest
              ? 'Hapu is Airbnb for nanny share. Share your home, nanny and costs and create new flexible, affordable solutions in childcare.'
              : 'Connect with other local families to share a nanny from as low as $10.00/hr each. Create your family profile today to get started.'}
          </p>
          <div>
            <button type='button' className='play-button'>
              <img src={play} alt='play-buton' />
            </button>
            <a href='/'>See hapu in action (27 seconds)</a>
          </div>
        </article>
        <img className='hero-img' src={banner} alt='conection example' />
      </div>
    </section>
  );
}

export default Hero;
