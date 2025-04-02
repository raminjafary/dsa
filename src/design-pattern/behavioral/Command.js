// The Command pattern is a behavioral design pattern that turns a request into a stand-alone object that contains all information about the request. This transformation allows for parameterizing methods with different requests, delaying or queuing a request's execution, and supporting undoable operations.

class Command {
  execute() {
    throw new Error("execute() must be implemented");
  }

  undo() {
    throw new Error("undo() must be implemented");
  }
}

class LightsOnCommand extends Command {
  constructor(light) {
    super();
    this.light = light;
  }

  execute() {
    this.light.on();
  }

  undo() {
    this.light.off();
  }
}

class LightsOffCommand extends Command {
  constructor(light) {
    super();
    this.light = light;
  }

  execute() {
    this.light.off();
  }

  undo() {
    this.light.on();
  }
}

class Light {
  on() {
    console.log("Light is on");
  }

  off() {
    console.log("Light is off");
  }
}

class RemoteControl extends Command {
  setCommand(command) {
    this.command = command;
  }

  pressButton() {
    this.command.execute();
  }

  pressUndo() {
    this.command.undo();
  }
}

const light = new Light();
const lightsOnCommand = new LightsOnCommand(light);
const lightsOffCommand = new LightsOffCommand(light);

const remoteControl = new RemoteControl();
remoteControl.setCommand(lightsOnCommand);
remoteControl.pressButton();
remoteControl.pressUndo();

remoteControl.setCommand(lightsOffCommand);
remoteControl.pressButton();
remoteControl.pressUndo();
