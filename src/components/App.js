// import PropTypes from 'prop-types';
import React from 'react';
import logo from '../css/logo.svg';
import '../css/App.css';

// const Big = require('big.js');

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit
          {' '}
          <code>src/App.js</code>
          {' '}
          and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

// Specifies the default values for props:
// App.defaultProps = {
//  onClick: null,
// };
//
// App.propTypes = {
//  onClick: PropTypes.func,
// };

export default App;
