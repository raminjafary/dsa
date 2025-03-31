// The Abstract Factory pattern provides an interface for creating families of related or dependent objects without specifying their concrete classes.

class AbstractButton {
  render() {
    throw new Error("not implemented!");
  }
}

class WindowsButton extends AbstractButton {
  render() {
    return "WindowsButton";
  }
}
class MacButton extends AbstractButton {
  render() {
    return "MacButton";
  }
}

class AbstractButtonFactory {
  createButton() {
    throw new Error("not implemented!");
  }
}

class WindowsButtonFactory extends AbstractButtonFactory {
  createButton() {
    return new WindowsButton();
  }
}

class MacButtonFactory extends AbstractButtonFactory {
  createButton() {
    return new MacButton();
  }
}

function createButton(factory) {
  const button = factory.createButton();
  return button.render();
}

console.log(createButton(new WindowsButtonFactory()));
console.log(createButton(new MacButtonFactory()));
