function isNumber(keyCode){
  if ((keyCode >= 48 && keyCode <= 57) || (keyCode >= 96 && keyCode <= 105)) {
    return true;
  }
  
  return false;
}

function isNumpad(keyCode){
  if (keyCode >= 96 ) {
    return true;
  }
  
  return false;
}

function isDecimal(keyCode){
  if (keyCode === 110 || keyCode === 190){
    return true;
  }  
  return false;
}

function isEqualSign(keyCode){
  if (keyCode === 13){ return true; }
  return false;
}

function convertKeyToBtn(keyCode){
  let btn;
  
  if (keyCode === 53) { btn = '%'; }
  if (keyCode === 56 || keyCode === 106) { btn = 'x'; }
  if (keyCode === 187 || keyCode === 107) { btn = '+'; }
  if (keyCode === 191 || keyCode === 111) { btn = '÷'; }
  if (keyCode === 189 || keyCode === 109) { btn = '-'; }
  
  return btn;
}

export {isNumber, isNumpad, convertKeyToBtn, isDecimal, isEqualSign};