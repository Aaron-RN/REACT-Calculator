import operate from './operate';

function calculate(obj, btn) {
  const { total, next, operation } = obj;
  const isNext = !!next; // Checks if the next variable has a value

  if (btn === 'AC') {
    return { total: '', next: '', operation: false };
  }
  if (btn === '+/-') {
    if (operation && !isNext) {
      return {
        total,
        next: (parseFloat(total) * -1).toString(),
        operation,
      };
    }

    const result = isNext ? parseFloat(next) * -1 : parseFloat(total) * -1;
    if (isNext) { return { total, next: result.toString(), operation }; }
    return { total: result.toString(), next, operation };
  }
  if (btn === '+' || btn === '-' || btn === 'x' || btn === '÷' || btn === '%') {
    return { total: operate(total, next, operation), next: '', operation: btn };
  }
  if (btn === '.') {
    const patt = new RegExp('[.]');

    if (isNext) {
      const alreadyUsed = patt.test(next); // Checks if a . was already used in the next variable
      if (alreadyUsed) { return { total, next, operation }; }
      return { total, next: `${next || '0'}.`, operation };
    }

    const alreadyUsed = patt.test(total); // Checks if a . was already used in the total variable
    if (operation) { return { total, next: `${next || '0'}.`, operation }; }

    if (alreadyUsed) { return { total, next, operation }; }
    return { total: `${total || '0'}.`, next, operation };
  }
  if (btn === '=') {
    const result = operate(total, next, operation);
    if (isNext) {
      return { total: result, next: '', operation: null };
    }

    return { total: result, next: total, operation: null };
  }

  return false;
}


export default calculate;
