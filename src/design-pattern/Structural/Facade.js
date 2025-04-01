// The Facade pattern provides a unified interface to a set of interfaces in a subsystem. It defines a higher-level interface that makes the subsystem easier to use.

class CPU {
  freeze() {
    console.log("Freezing CPU...");
  }
  jump(position) {
    console.log(`Jumping to ${position}...`);
  }
  execute() {
    console.log("Executing instructions...");
  }
}

class Memory {
  load(position, data) {
    console.log(`Loading data '${data}' at position ${position}...`);
  }
}

class HardDrive {
  read(lba, size) {
    console.log(`Reading ${size} bytes from LBA ${lba}...`);
    return "data";
  }
}

class Computer {
  constructor() {
    this.cpu = new CPU();
    this.memory = new Memory();
    this.hardDrive = new HardDrive();
  }
  start() {
    this.cpu.freeze();
    this.memory.load(0, this.hardDrive.read(0, 1024));
    this.cpu.jump(0);
    this.cpu.execute();
  }
}

const computer = new Computer();
computer.start();
