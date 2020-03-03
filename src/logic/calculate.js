import operate from './operate';

function calculate(obj, btn){
  let {total, next, operation} = obj;
  
  if (btn === 'AC'){
    return {total: '', next: '', operation: false};
  }
  if (btn === '+/-'){
    const isNext = next ? true: false;
    const result = isNext ? parseFloat(next) * -1 : parseFloat(total) * -1;
    if (isNaN(result)) { return {total: '0', next: '0', operation: false}}
    if (isNext){return {total, next: result.toString(), operation}}
    else{return {total: result.toString(), next, operation}}
  }
  if (btn === '+' || btn === '-' || btn === 'x' || btn === '÷' || btn === '%' ){
    return {total: operate(total, next, operation), next: '' , operation: btn};
  }
  if (btn === '.'){
    const patt = new RegExp("[.]");
    const isNext = next ? true: false;
    
    if (isNext){
      const alreadyUsed = patt.test(next);
      if (alreadyUsed) {return {total, next, operation};}
      return {total: total, next: (next || '0') + '.', operation};}
    else{
      const alreadyUsed = patt.test(total);
      if (operation) { return {total, next: (next || '0') + '.', operation};}

      if (alreadyUsed) {return {total, next, operation};}  
      return {total: (total || '0') + '.', next: next, operation};}
  }
  if (btn === '='){
    return {total: operate(total, next, operation), next: '' , operation: null};
  }
}

export default calculate;