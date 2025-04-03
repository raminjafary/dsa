// The Template Method pattern is a behavioral design pattern that defines the skeleton of an algorithm in a method, deferring some steps to subclasses. It allows subclasses to redefine certain steps of an algorithm without changing the algorithm's structure.

class DataProcessor {
  process() {
    this.loadData();
    this.processData();
    this.saveData();
  }
  loadData() {
    throw new Error("You have to implement the method loadData!");
  }

  processData() {
    throw new Error("You have to implement the method processData!");
  }

  saveData() {
    throw new Error("You have to implement the method saveData!");
  }
}

class CSVProcessor extends DataProcessor {
  constructor() {
    super();
  }

  loadData() {
    console.log("Loading CSV data...");
  }

  saveData() {
    console.log("Saving CSV data...");
  }

  processData() {
    console.log("Processing CSV data...");
  }
}

class XMLProcessor extends DataProcessor {
  constructor() {
    super();
  }

  processData() {
    console.log("Processing XML data...");
  }

  loadData() {
    console.log("Loading XML data...");
  }

  saveData() {
    console.log("Saving XML data...");
  }
}

const csvProcessor = new CSVProcessor();
csvProcessor.process();

const xmlProcessor = new XMLProcessor();
xmlProcessor.process();
