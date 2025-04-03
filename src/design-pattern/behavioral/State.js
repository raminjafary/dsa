// The State pattern allows an object to change its behavior when its internal state changes. It is particularly useful for implementing state machines or managing state-dependent behavior.

class State {
  handle(ctx) {
    throw new Error("This method must be overridden!");
  }
}

class ConcreteStateA extends State {
  handle(ctx) {
    console.log("ConcreteStateA handles request");
    ctx.setState(new ConcreteStateB());
  }
}

class ConcreteStateB extends State {
  handle(ctx) {
    console.log("ConcreteStateB handles request");
    ctx.setState(new ConcreteStateA());
  }
}

class Context {
  constructor(state) {
    this.state = state;
  }

  setState(state) {
    this.state = state;
  }

  request() {
    this.state.handle(this);
  }
}

const stateA = new ConcreteStateA();
const context = new Context(stateA);

context.request();
context.request();
