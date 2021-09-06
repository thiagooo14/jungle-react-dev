import React, { useState } from 'react';
import PropTypes from 'prop-types';
import JungleContext from './JungleContext';
import post from '../service/jungleApi';

function Provider({ children }) {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [invalidText, setInvalidText] = useState('');
  const [invalid, setInvalid] = useState(true);

  const errorHandling = (data) => {
    const { name, email } = data;
    if (name && email) {
      if (name[0] !== email[0]) {
        const nameWithoutDot = name[0].replace(".", "");
        setInvalidText(`${nameWithoutDot} and ${email}`);
      } else {
        setInvalidText("These field may not be blank");
      }
    } else if (email) {
      setInvalidText(email);
    } else if (name) {
      setInvalidText(name);
    }
  };

  const handleSubmit = async (name, email) => {
    const data = { name, email };
    await post(data, errorHandling, setInvalid);
  };

  const data = {
    setInvalidText,
    errorHandling,
    handleSubmit,
    invalidText,
    setEmail,
    setName,
    invalid,
    email,
    name,
  };

  return (
    <JungleContext.Provider value={data}>{children}</JungleContext.Provider>
  );
}

Provider.prototype = {
  children: PropTypes.node.isRequired,
};

export default Provider;
