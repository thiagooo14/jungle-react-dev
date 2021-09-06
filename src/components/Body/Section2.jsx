import React, { useContext, useEffect } from 'react';
import JungleContext from '../context/JungleContext';
import './scss/Section2.scss';

function Section2() {
  const {
    handleSubmit,
    setEmail,
    invalid,
    setName,
    setInvalidText,
    email,
    name,
    invalidText,
  } = useContext(JungleContext);

  useEffect(() => {
    if (invalid) setInvalidText('');
  }, [invalid, setInvalidText]);

  return (
    <div>
      <section className='section2'>
        <div className='section-text'>
          <h1>Are you a parent without a nanny and looking to share?</h1>
          <p>
            Leave us your name and email and we’ll update you as soon as a share
            becomes available in your area!
          </p>
          <span>{invalidText}</span>
        </div>
        <form className={invalidText ? 'forms alert' : 'forms'}>
          <input
            type='text'
            name='your name'
            id='your-name'
            placeholder='Your name'
            onChange={({ target }) => setName(target.value)}
            required
          />
          <input
            type='email'
            name='your email'
            id='your-email'
            placeholder='your email'
            onChange={({ target }) => setEmail(target.value)}
            required
          />
          <button
            type='submit'
            className='submit'
            onClick={(e) => {
              e.preventDefault();
              handleSubmit(name, email);
            }}
          >
            Send
          </button>
        </form>
      </section>

      <div className='divider' />
    </div>
  );
}

export default Section2;
