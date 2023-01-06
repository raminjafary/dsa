class HashTable {
  constructor(size = 10) {
    this.dataMap = new Array(size);
  }

  hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * 23) % this.dataMap.length;
    }

    return hash;
  }

  set(key, value) {
    const index = this.hash(key);

    if (this.dataMap[index]) {
      for (let i = 0; i < this.dataMap[index].length; i++) {
        if (this.dataMap[index][i][0] === key) {
          this.dataMap[index][i][1] = value;
          return;
        }
      }
      this.dataMap[index].push([key, value]);
    } else {
      this.dataMap[index] = [];
      this.dataMap[index].push([key, value]);
    }

    return this;
  }

  get(key) {
    const index = this.hash(key);

    if (this.dataMap[index]) {
      for (let i = 0; i < this.dataMap[index].length; i++) {
        if (this.dataMap[index][i][0]) {
          return this.dataMap[index][i][1];
        }
      }
    }
    return undefined;
  }

  keys() {
    const keys = [];

    for (let i = 0; i < this.dataMap.length; i++) {
      if (this.dataMap[i]) {
        for (let j = 0; j < this.dataMap[i].length; j++) {
          keys.push(this.dataMap[i][j][0]);
        }
      }
    }
    return keys;
  }
}

const hashTable = new HashTable(10);

hashTable.set("key", 5);
hashTable.set("key", 10);
hashTable.set("key2", 5);

console.log(hashTable.keys());
console.log(JSON.stringify(hashTable, null, 1));
