// The Composite pattern allows you to compose objects into tree structures to represent part-whole hierarchies. It lets clients treat individual objects and compositions of objects uniformly.

class Component {
  constructor(name) {
    this.name = name;
  }

  add(component) {
    throw new Error("This method is not implemented");
  }

  remove(component) {
    throw new Error("This method is not implemented");
  }

  display(depth) {
    throw new Error("Method not implemented");
  }
}

class Leaf extends Component {
  add() {
    throw new Error("Leaf cannot add component");
  }

  remove() {
    throw new Error("Leaf cannot remove component");
  }

  display(depth) {
    console.log("-".repeat(depth) + this.name);
  }
}

class Composite extends Component {
  constructor(name) {
    super(name);
    this.children = [];
  }

  add(component) {
    this.children.push(component);
  }

  remove(component) {
    const index = this.children.indexOf(component);
    if (index !== -1) {
      this.children.splice(index, 1);
    }
  }

  display(depth) {
    console.log("-".repeat(depth) + this.name);
    for (const child of this.children) {
      child.display(depth + 2);
    }
  }
}

const root = new Composite("Root");
const branch1 = new Composite("Branch 1");
const branch2 = new Composite("Branch 2");
const leaf1 = new Leaf("Leaf 1");
const leaf2 = new Leaf("Leaf 2");
const leaf3 = new Leaf("Leaf 3");

root.add(branch1);
root.add(branch2);

branch1.add(leaf1);
branch1.add(leaf2);
branch2.add(leaf3);

root.display(1);
branch1.display(2);
branch2.display(2);
