import React from 'react';
import { price } from '../../assets/images';
import './scss/Section3.scss';

function Section3() {
  return (
    <div>
      <section className='section3'>
        <img src={price} alt='payment sample' />
        <div className='section-text'>
          <h1>Shared payments made simple</h1>
          <p>
            Sometimes it’s hard enough just sharing a restaurant bill. Try
            sharing that bill week in, week out and you might encounter more
            than a few snares. But not with Hapu. Simply set your rates and our
            automated payment system takes care of the rest. You need never talk
            money or who owes what.
          </p>
          <a href='/'>Read how Bridget’s share (without Hapu) ended over $15</a>
        </div>
      </section>

      <div className='divider' />
    </div>
  );
}

export default Section3;
