class Stack {
  constructor(maxSize) {
    this.maxSize = maxSize;
    this.stack = [];
  }

  isFull() {
    return this.stack.length >= this.maxSize;
  }

  isEmpty() {
    return this.stack.length === 0;
  }

  push(item) {
    if (this.isFull()) {
      console.warn("stack is full");
      return;
    }
    this.stack.push(item);
    return this.stack;
  }
  pop() {
    if (this.isEmpty()) {
      console.warn("stack is empty");
      return;
    }
    return this.stack.pop();
  }
  size() {
    return this.stack.length;
  }
  print() {
    console.log(this.stack.toString());
  }
}
// 후위표기식 계산 알고리즘

const operator = ["+", "-", "*", "/"];

function evalPostfix(exp) {
  const stack = new Stack(100);

  for (let symbol of exp) {
    if (operator.includes(symbol)) {
      let oper2 = stack.pop();
      let oper1 = stack.pop();
      if (symbol === "+") stack.push(oper1 + oper2);
      if (symbol === "-") stack.push(oper1 - oper2);
      if (symbol === "*") stack.push(oper1 * oper2);
      if (symbol === "/") stack.push(oper1 / oper2);
    } else {
      const numberSymbol = Number(symbol);
      stack.push(numberSymbol);
    }
  }
  return stack.pop();
}

// 2+3*4 = 234*+ === 14
console.log(evalPostfix("234*+"));
// 1+5*2 = 152*+ === 11
console.log(evalPostfix("152*+"));
// 1+5*2+1/2 = 152*12/++ === 11.5
console.log(evalPostfix("152*12/++"));
