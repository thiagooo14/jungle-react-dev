import React, { useState } from 'react';
import PropTypes from 'prop-types';
import JungleContext from './JungleContext';
import post from '../service/jungleApi';

function Provider({ children }) {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');

  const handleSubmit = async (name, email) => {
    const data = { name, email };
    console.log(data);
    const response = await post(data);
    console.log(response);
  };

  const data = {
    handleSubmit,
    setEmail,
    setName,
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
