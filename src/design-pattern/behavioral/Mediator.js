// The Mediator pattern is used to reduce the complexity of communication between multiple objects or classes. Instead of having objects communicate directly with each other, they communicate through a mediator object.

class Mediator {
  constructor() {
    this.users = [];
  }

  addUser(user) {
    this.users.push(user);
    user.setMediator(this);
  }

  sendMessage(message, sender) {
    this.users.forEach((user) => {
      if (user !== sender) {
        user.receiveMessage(message);
      }
    });
  }
}

class User {
  constructor(name) {
    this.name = name;
    this.mediator = null;
  }

  setMediator(mediator) {
    this.mediator = mediator;
  }

  receiveMessage(message) {
    console.log(`${this.name} received message: ${message}`);
  }

  sendMessage(message) {
    console.log(`${this.name} sending message: ${message}`);
    this.mediator.sendMessage(message, this);
  }
}

const mediator = new Mediator();
const user1 = new User("John");
const user2 = new User("Jane");

mediator.addUser(user1);
mediator.addUser(user2);

user1.sendMessage("Hello, how are you?");
user2.sendMessage("I'm fine, thank you!");
