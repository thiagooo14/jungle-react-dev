// IMPORTANTE
// FAZER TRATAMENTO DO ESTADO

import React from 'react';
import './scss/Section2.scss';

function Section2() {
  return (
    <div>
      <section className='section2'>
        <div className='section-text'>
          <h2>Are you a parent without a nanny and looking to share?</h2>
          <p>
            Leave us your name and email and we’ll update you as soon as a share
            becomes available in your area!
          </p>
          <form className='forms'>
            <input placeholder='Your name' required />
            <input type='email' placeholder='Your email' required />
            <button type='submit' className='submit'>
              Send
            </button>
          </form>
        </div>
      </section>

      <div className='divider' />
    </div>
  );
}

export default Section2;
