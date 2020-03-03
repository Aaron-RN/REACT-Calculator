const Big = require('big.js');

function operate(numOne, numTwo, operation){
  const x = numOne ? new Big(numOne) : new Big(0);
  const y = numTwo ? new Big(numTwo) : new Big(0);
  
  if (!operation) return '0';
    
  if (operation === "+"){ return x.plus(y).toString();}
  if (operation === "-"){ return x.minus(y).toString();}
  if (operation === "x"){ return x.times(y).toString();}
  if (operation === "÷"){ 
    if (y.eq(0)){return 'Cannot divide by Zero';}
    return x.div(y).toString();}
  if (operation === "%"){ 
    if (y.eq(0)){return 'Cannot divide by Zero';}    
    return x.mod(y).toString();}
}

export default operate;