// The Flyweight pattern is used to minimize memory usage by sharing as much data as possible with similar objects.

class Flyweight {
  constructor(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
  }
}

class FlyweightFactory {
  constructor() {
    this.flyweights = {};
  }

  get(make, model, year) {
    const key = `${make}-${model}-${year}`;
    if (!this.flyweights[key]) {
      this.flyweights[key] = new Flyweight(make, model, year);
    }
    return this.flyweights[key];
  }

  getCount() {
    return Object.keys(this.flyweights).length;
  }
}

class Car {
  constructor(make, model, year, engine) {
    this.flyweight = carFlyweightFactory.get(make, model, year);
    this.engine = engine;
  }
}

class CarColelction {
  constructor() {
    this.cars = {};
    this.count = 0;
  }

  add(make, model, year, engine) {
    this.cars[engine] = new Car(make, model, year, engine);
    this.count++;
  }

  get(engine) {
    return this.cars[engine];
  }

  getCount() {
    return this.count;
  }
}

const carFlyweightFactory = new FlyweightFactory();

const carCollection = new CarColelction();
carCollection.add("Toyota", "Corolla", "2020", "1.8L");
carCollection.add("Toyota", "Corolla", "2020", "2.0L");
carCollection.add("Toyota", "Corolla", "2020", "2.2L");
carCollection.add("Ford", "Mustang", "2020", "2.2L");

console.log(carCollection.getCount());
console.log(carFlyweightFactory.getCount());
