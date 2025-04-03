// The Observer pattern is a behavioral design pattern where an object (the subject) maintains a list of its dependents (observers) and notifies them of any state changes, usually by calling one of their methods.

class Subject {
  constructor() {
    this.observers = [];
  }

  subscribe(observer) {
    this.observers.push(observer);
  }

  unsubscribe(observer) {
    const index = this.observers.indexOf(observer);
    if (index > -1) {
      this.observers.splice(index, 1);
    }
  }

  notify(message) {
    this.observers.forEach((observer) => observer.update(message));
  }
}

class Observer {
  update(data) {
    console.log(`Observer received data: ${data}`);
  }
}

const subject = new Subject();
const observer1 = new Observer();
const observer2 = new Observer();

subject.subscribe(observer1);
subject.subscribe(observer2);

subject.notify("Hello, world!");
subject.unsubscribe(observer1);
subject.notify("Hello, world!");
