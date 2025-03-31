// The Prototype pattern is used to create objects based on a template of an existing object through cloning. It's useful for defining methods and properties that should be shared across all instances of a particular type, promoting efficient memory usage and consistent behavior.

function Person(name, age) {
  this.name = name;
  this.age = age;
}

Person.prototype.greet = function () {
  console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
};

const person1 = new Person("John", 20);
const person2 = new Person("Jane", 21);

person1.greet();
person2.greet();
