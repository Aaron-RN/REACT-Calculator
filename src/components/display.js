import PropTypes from 'prop-types';
import React from 'react';
import logo from '../css/logo.svg';

const Display = ({ value }) => {
  return (
    <div className="display">
      {value}
      <img src={logo} className="App-logo" alt="logo" />
    </div>
  );
};

// Specifies the default values for props:
Display.defaultProps = {
  value: '0',
};

Display.propTypes = {
  value: PropTypes.string,
};

export default Display;
