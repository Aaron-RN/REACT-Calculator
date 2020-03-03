import React from 'react';
import '../css/App.css';
import Display from './display';
import ButtonPanel from './buttonPanel';

// const Big = require('big.js');

class App extends React.Component {
  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      result: '',
    };
  }

  handleClick(event) {
    const btn = event.target.textContent;
    this.setState({
      result: btn,
    });
  }

  render() {
    const { result } = this.state;
    return (
      <div className="calculator">
        <header>
          <Display value={result} />
        </header>
        <ButtonPanel onClick={this.handleClick} />
      </div>
    );
  }
}

export default App;
