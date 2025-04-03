// The Visitor pattern allows you to add further operations to objects without having to modify them. It separates an algorithm from the object structure on which it operates.

class Visitor {
  visitElementA(elementA) {
    throw new Error("You have to implement the method visitElementA!");
  }

  visitElementB(elementB) {
    throw new Error("You have to implement the method visitElementB!");
  }
}

class ConcreteVisitor extends Visitor {
  visitElementA(element) {
    console.log(`ConcreteVisitor1: ${element.operationA()}`);
  }

  visitElementB(element) {
    console.log(`ConcreteVisitor1: ${element.operationB()}`);
  }
}

class ConcreteVisitor2 extends Visitor {
  visitElementA(element) {
    console.log(`ConcreteVisitor2: ${element.operationA()}`);
  }

  visitElementB(element) {
    console.log(`ConcreteVisitor2: ${element.operationB()}`);
  }
}

class Element {
  constructor() {}

  accept(visitor) {
    throw new Error("You have to implement the method accept!");
  }
}

class ElementA extends Element {
  accept(visitor) {
    visitor.visitElementA(this);
  }

  operationA() {
    return "ElementA operationA";
  }
}

class ElementB extends Element {
  accept(visitor) {
    visitor.visitElementB(this);
  }

  operationB() {
    return "ElementB operationB";
  }
}

const elements = [new ElementA(), new ElementB()];
const visitor1 = new ConcreteVisitor();
const visitor2 = new ConcreteVisitor2();

elements.forEach((element) => {
  element.accept(visitor1);
});
