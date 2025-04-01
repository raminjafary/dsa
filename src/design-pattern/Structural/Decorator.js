// The Decorator pattern allows behavior to be added to individual objects, dynamically, without affecting the behavior of other objects from the same class.

class Coffee {
  cost() {
    return 2;
  }
}

class CoffeeDeocrator {
  constructor(coffee) {
    this.coffee = coffee;
  }

  cost() {
    return this.coffee.cost();
  }
}

class MilkDecorator extends CoffeeDeocrator {
  cost() {
    return this.coffee.cost() + 2;
  }
}

class SugarDecorator extends CoffeeDeocrator {
  cost() {
    return this.coffee.cost() + 1;
  }
}

const coffee = new Coffee();
console.log(coffee.cost());

const milkCoffee = new MilkDecorator(coffee);
console.log(milkCoffee.cost());

const sugarMilkCoffee = new SugarDecorator(milkCoffee);
console.log(sugarMilkCoffee.cost());
