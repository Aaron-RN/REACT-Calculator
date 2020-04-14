import React from 'react';
import '../css/App.css';
import Display from './display';
import ButtonPanel from './buttonPanel';
import calculate from '../logic/calculate';
import {
  isNumber, isNumpad, convertKeyToBtn, isDecimal, isEqualSign, isBackspace,
} from '../logic/keypress';

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

  componentDidMount() {
    document.addEventListener('keydown', event => this.handleKeyDown(event));
  }

  resetCalc(result) {
    const { calculation } = this.state;
    const calc = calculate(calculation, 'AC');
    if (!result) this.handleState(calc, '0', '');
    if (result) this.handleState(calc, result, '');
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

  handleKeyDown(event) {
    const { keyCode, shiftKey } = event;
    const { calculation, history, result } = this.state;
    const { total, next, operation } = calculation;
    const functions = [111, 106, 107, 109, 191, 189];
    const shiftFunctions = [53, 56, 187];
    let btn = String.fromCharCode(keyCode);
    if (!shiftKey) {
      if (isNumber(keyCode)) {
        if (isNumpad(keyCode)) { btn = String.fromCharCode(keyCode - 48); }
        if (!operation) {
          const calc = { total: total + btn, next, operation };
          this.handleState(calc, total + btn, history);
        } else if (operation) {
          // If an operation has already been chosen and a number button is pressed...
          const calc = { total, next: next + btn, operation };
          this.handleState(calc, next + btn, history);
        }
      }
      if (isBackspace(keyCode)) { this.resetCalc(); return; }
      if (isDecimal(keyCode)) {
        btn = '.';
        const calcResult = calculate(calculation, btn);
        const result = calcResult.next || calcResult.total;
        this.handleState(calcResult, result, history);
        return;
      }

      if (isEqualSign(keyCode)) {
        btn = '=';
        const calcResult = calculate(calculation, btn);
        const result = calcResult.total;
        if (result === 'Cannot divide by Zero') { this.resetCalc(result); return; }
        const hist = `${history + (next || calcResult.next) + btn + result} `;
        calcResult.total = '';
        calcResult.next = '';
        this.handleState(calcResult, result, hist);
        return;
      }
    }

    if ((shiftKey && shiftFunctions.indexOf(keyCode) !== -1) || functions.indexOf(keyCode) !== -1) {
      btn = convertKeyToBtn(keyCode);

      if (btn === '%') {
        const calcResult = calculate(calculation, btn);
        const result = calcResult.total;
        const hist = `${history + total + btn}=${result} `;
        this.handleState(calcResult, result, hist);
        return;
      }
      if (!operation) {
        // If no operation has been chosen and a non numeric button is pressed...
        const newTotal = total === '' ? result : total;
        const calc = { total: newTotal, next, operation: btn };
        const historyNew = newTotal ? history + newTotal + btn : `0${btn}`;
        this.handleState(calc, result, historyNew);
      } else if (operation && (total || next)) {
        // If the calculator already has values for total, next and operation states...
        if (!next) return;
        const calcResult = calculate(calculation, btn);
        const result = calcResult.total;
        if (result === 'Cannot divide by Zero') { this.resetCalc(result); return; }

        this.handleState(calcResult, result, history + next + btn);
      }
    }
  }

  handleClick(event) {
    event.target.blur(); // Removes focus from button after clicking
    const btn = event.target.textContent;
    const { calculation, history, result } = this.state;
    const { total, next, operation } = calculation;
    const numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
    const functions = ['+', '-', 'x', '÷'];
    if (btn === 'AC') {
      this.resetCalc();
      return;
    }
    if (btn === '+/-' && total) {
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
    if (btn === '%') {
      const calcResult = calculate(calculation, btn);
      const result = calcResult.total;
      const hist = `${history + total + btn}=${result} `;
      this.handleState(calcResult, result, hist);
      return;
    }
    if (btn === '=') {
      const calcResult = calculate(calculation, btn);
      const result = calcResult.total;
      if (result === 'Cannot divide by Zero') { this.resetCalc(result); return; }
      const hist = `${history + (next || calcResult.next) + btn + result} `;
      calcResult.total = '';
      calcResult.next = '';
      this.handleState(calcResult, result, hist);
      return;
    }
    // If no operation has been chosen and a number button is pressed
    // this number is selected as the total value
    if (!operation && numbers.indexOf(btn) !== -1) {
      const calc = { total: total + btn, next, operation };
      this.handleState(calc, total + btn, history);
    } else if (operation && numbers.indexOf(btn) !== -1) {
      // If an operation has already been chosen and a number button is pressed...
      const calc = { total, next: next + btn, operation };
      this.handleState(calc, next + btn, history);
    } else if (!operation && functions.indexOf(btn) !== -1) {
      // If no operation has been chosen and a non numeric button is pressed...
      const newTotal = total === '' ? result : total;
      const calc = { total: newTotal, next, operation: btn };
      const historyNew = newTotal ? history + newTotal + btn : `0${btn}`;
      this.handleState(calc, result, historyNew);
    } else if (operation && (total || next)) {
      // If the calculator already has values for total, next and operation states...
      if (!next) return;
      const calcResult = calculate(calculation, btn);
      const result = calcResult.total;
      if (result === 'Cannot divide by Zero') { this.resetCalc(result); return; }

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
