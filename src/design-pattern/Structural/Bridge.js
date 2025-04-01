// The Bridge pattern is used to separate an abstraction from its implementation, allowing them to vary independently. Here's a breakdown of the key components:

class RemoteControl {
  constructor(device) {
    this.device = device;
  }

  volumeUp() {
    this.device.setVolume(this.device.volume + 1);
  }

  volumeDown() {
    this.device.setVolume(this.device.volume - 1);
  }
}

class Device {
  constructor() {
    this.volume = 0;
  }

  setVolume(volume) {
    this.volume = volume;
  }

  getVolume() {
    return this.volume;
  }
}

class TVRemoteControl extends Device {
  constructor(device) {
    super(device);
  }
}

class RadioRemoteControl extends Device {
  constructor(device) {
    super(device);
  }
}

const tv = new TVRemoteControl();
const tvRemoteControl = new RemoteControl(tv);
tvRemoteControl.volumeUp();
tvRemoteControl.volumeDown();
tvRemoteControl.volumeUp();
console.log(tv.getVolume());

const radio = new RadioRemoteControl();
const radioRemoteControl = new RemoteControl(radio);
radioRemoteControl.volumeUp();
radioRemoteControl.volumeUp();
console.log(radio.getVolume());
