import React from 'react';
import '../css/App.css';
import Display from './display';
import ButtonPanel from './buttonPanel';
import calculate from '../logic/calculate';

class App extends React.Component {
  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      result: '',
      history: '',
      calculation: { total: '', next: '', operation: null },
    };
  }

  handleState(calc, result, history) {
    let newCalc;
    let newHistory;
    if (result === 'Cannot divide by Zero') {
      newCalc = { total: '', next: '', operation: null }; newHistory = '';
    }
    this.setState({
      calculation: newCalc || calc,
      result,
      history: newHistory || history,
    });
  }

  handleClick(event) {
    const btn = event.target.textContent;
    const { calculation, history, result } = this.state;
    const { total, next, operation } = calculation;
    const numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
    const functions = ['+', '-', 'x', '÷', '%'];
    if (btn === 'AC') {
      const calc = calculate(calculation, btn);
      this.handleState(calc, '0', '');
      return;
    }
    if (btn === '+/-' && total ) {
      const calcResult = calculate(calculation, btn);
      const result = calcResult.next || calcResult.total;
      this.handleState(calcResult, result, history);
      return;
    }
    if (btn === '.') {
      const calcResult = calculate(calculation, btn);
      const result = calcResult.next || calcResult.total;
      this.handleState(calcResult, result, history);
      return;
    }
    if (btn === '=') {
      const calcResult = calculate(calculation, btn);
      const result = calcResult.total;
      calcResult.total = '';
      const hist = `${history + next + btn + result} `;
      this.handleState(calcResult, result, hist);
      return;
    }
    if (!operation && numbers.indexOf(btn) !== -1) {
      const calc = { total: total + btn, next, operation };
      this.handleState(calc, total + btn, history);
    } else if (operation && numbers.indexOf(btn) !== -1) {
      const calc = { total, next: next + btn, operation };
      this.handleState(calc, next + btn, history);
    } else if (!operation && functions.indexOf(btn) !== -1) {
      const calc = { total, next, operation: btn };
      const historyNew = total ? history + total + btn : `0${btn}`;
      this.handleState(calc, result, historyNew);
    } else if (operation && total && next) {
      const calcResult = calculate(calculation, btn);
      const result = calcResult.total;
      this.handleState(calcResult, result, history + next + btn);
    }
  }

  render() {
    const { result, history } = this.state;
    return (
      <div className="calculator">
        <header>
          <Display value={result} history={history} />
        </header>
        <ButtonPanel onClick={this.handleClick} />
      </div>
    );
  }
}

export default App;
