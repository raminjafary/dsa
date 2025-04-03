// The Memento pattern is used to capture and externalize an object's internal state so that it can be restored later without violating encapsulation. This is useful for implementing features like undo/redo functionality.

class Memento {
  constructor(state) {
    this.state = state;
  }

  getState() {
    return this.state;
  }
}

class Originator {
  constructor() {
    this.state = null;
  }

  setState(state) {
    this.state = state;
    console.log(`State set to: ${this.state}`);
  }

  saveStateToMemento() {
    return new Memento(this.state);
  }

  restoreFromMemento(memento) {
    this.state = memento.getState();
    console.log(`State restored to: ${this.state}`);
  }
}

class Caretaker {
  constructor() {
    this.mementos = [];
  }

  add(memento) {
    this.mementos.push(memento);
  }

  get(index) {
    return this.mementos[index];
  }
}

const originator = new Originator();
const caretaker = new Caretaker();

originator.setState("State #1");
originator.setState("State #2");
caretaker.add(originator.saveStateToMemento());

originator.setState("State #3");
caretaker.add(originator.saveStateToMemento());

originator.setState("State #4");

console.log("Current State:", originator.state);
originator.restoreFromMemento(caretaker.get(0));
console.log("First saved State:", originator.state);
originator.restoreFromMemento(caretaker.get(1));
console.log("Second saved State:", originator.state);
