import PropTypes from 'prop-types';
import React from 'react';
import logo from '../css/logo.svg';

const Display = ({ value, history }) => (
  <div className="display">
    <div className="history">{history}</div>
    {value || '0'}
    <img src={logo} className="App-logo" alt="logo" />
  </div>
);

// Specifies the default values for props:
Display.defaultProps = {
  value: '0',
  history: '',
};

Display.propTypes = {
  value: PropTypes.string,
  history: PropTypes.string,
};

export default Display;
