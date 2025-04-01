// The Adapter pattern allows incompatible interfaces to work together by providing a wrapper that translates calls from one interface to another.

class OldCalculator {
  constructor() {
    this.operations = function (term, a, b) {
      switch (term) {
        case "add":
          return a + b;
        case "sub":
          return a - b;
        default:
          return NaN;
      }
    };
  }
}

class NewCalculator {
  constructor() {}

  add(a, b) {
    return a + b;
  }

  sub(a, b) {
    return a - b;
  }
}

class CalculatorAdapter {
  constructor() {
    this.calculator = new NewCalculator();
  }

  operations(term, a, b) {
    switch (term) {
      case "add":
        return this.calculator.add(a, b);
      case "sub":
        return this.calculator.sub(a, b);
    }
  }
}

const oldCalc = new OldCalculator();
const newCalc = new NewCalculator();
const adapter = new CalculatorAdapter();

console.log(oldCalc.operations("add", 10, 20));
console.log(oldCalc.operations("sub", 20, 10));
console.log(newCalc.add(10, 10));
console.log(adapter.operations("sub", 10, 20));
console.log(adapter.operations("add", 10, 20));
