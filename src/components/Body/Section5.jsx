import React from 'react';
import { diary } from '../../assets/images';
import './scss/Section5.scss';

function Section5() {
  return (
    <div >
      <section className='section5'>
        <img src={diary} alt='diary' className='diary icon' />
        <div className='section-text'>
          <h1>Coming soon: Nanny Share Daily Diary!</h1>
          <p>
            With the Hapu daily diary your nanny will be able to update you and
            your sharers with photos and commentary of the day. You and sharers
            will receive notifications and you’ll be able to login to view the
            daily adventures fo your little ones. We can’t wait!
          </p>
        </div>
      </section>
    </div>
  );
}

export default Section5;
