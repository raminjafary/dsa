// The Chain-of-Responsibility pattern allows for flexible and scalable handling of requests. The following code implements a simple example of the pattern in JavaScript to simulate an ATM dispensing different denominations of bills

class Request {
  constructor(amount) {
    this.amount = amount;
  }

  get(bill) {
    let count = Math.floor(this.amount / bill);
    this.amount -= count * bill;
    console.log(`Dispensing ${count} ${bill} dollar bill`);
  }
}

class Dispenser {
  constructor(bill, nextHandler) {
    this.nextHandler = nextHandler;
    this.bill = bill;
  }

  handle(request) {
    request.get(this.bill);
    if (this.nextHandler) {
      this.nextHandler.handle(request);
    }
  }
}

const dispenser50 = new Dispenser(50, null);
const dispenser20 = new Dispenser(20, dispenser50);
const dispenser10 = new Dispenser(10, dispenser20);
const dispenser5 = new Dispenser(5, dispenser10);

const request = new Request(135);
dispenser5.handle(request);
