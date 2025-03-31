// The Builder pattern separates the construction of a complex object from its representation. This allows the same construction process to create different representations of the object.

class Car {
  constructor(builder) {
    this.make = builder.make;
    this.model = builder.model;
    this.year = builder.year;
    this.color = builder.color;
    this.engine = builder.engine;
  }

  tosString() {
    return `Car: ${this.make} ${this.model} ${this.year} ${this.color} ${this.engine}`;
  }
}

class CarBuilder {
  constructor(make, model) {
    this.make = make;
    this.model = model;
  }

  addMake(make) {
    this.make = make;
    return this;
  }

  addModel(model) {
    this.model = model;
    return this;
  }

  addYear(year) {
    this.year = year;
    return this;
  }

  addColor(color) {
    this.color = color;
    return this;
  }

  addEngine(engine) {
    this.engine = engine;
    return this;
  }

  build() {
    return new Car(this);
  }
}

const car = new CarBuilder("Toyota", "Corolla")
  .addMake("Toyota")
  .addModel("Corolla")
  .addYear(2020)
  .addColor("Red")
  .addEngine("1.8L")
  .build();

console.log(car.toString());
