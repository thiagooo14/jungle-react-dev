import React from 'react';
import { badge } from '../../assets/images';
import './scss/Section1.scss';

function Section1() {
  return (
    <div>
      <section className='section1'>
        <div className='section-text'>
          <h1>
            Share your home,
            <br />
            nanny and costs
          </h1>
          <p>
            You have a fantastic home, a fantastic nanny and wouldn’t cutting
            your costs in half be, well, fantastic?! If only it was easy to
            connect with other parents to share your costs? Well now it is, with
            Hapu.
            <a href='/'>Hapu means tribe </a>
            and it’s our foundational 3 tribal principles that empowers you to
            create and manage your own tribe. A tribe that together has the
            power to create new affordable solutions in childcare that work for
            you and your community.
          </p>
          <a href='/'>Ready to get started?</a>
        </div>
        <img src={badge} alt='aplication example' />
      </section>
      <div className='divider' />
    </div>
  );
}

export default Section1;
