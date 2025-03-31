// The Factory Method pattern lets a class defer instantiation to subclasses. It defines an interface for creating a single object, but lets subclasses decide which class to instantiate.

class Car {
  constructor({ make, model, year } = {}) {
    this.make = make;
    this.model = model;
    this.year = year;
  }

  toString() {
    return `Car: ${this.make} ${this.model} ${this.year}`;
  }
}

class Truck {
  constructor({ make, model, year } = {}) {
    this.make = make;
    this.model = model;
    this.year = year;
  }

  toString() {
    return `Truck: ${this.make} ${this.model} ${this.year}`;
  }
}

class AbstractVehicleFactory {
  createVehicle(options) {
    throw new Error("no implemented!");
  }
}

class VehicleFactory extends AbstractVehicleFactory {
  createVehicle(options) {
    switch (options.type) {
      case "Car":
        return new Car(options);
      case "Truck":
        return new Truck(options);
      default:
        throw new Error("Invalid car type");
    }
  }
}

const vehicleFactory = new VehicleFactory();
const car = vehicleFactory.createVehicle({
  type: "Car",
  make: "Toyota",
  model: "Corolla",
  year: 2020,
});
const truck = vehicleFactory.createVehicle({
  type: "Truck",
  make: "Ford",
  model: "F150",
  year: 2020,
});
console.log(car.toString());
console.log(truck.toString());
