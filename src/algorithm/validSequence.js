function findValidSequence2(array, sequence) {
  let index = 0;
  const items = [];

  for (const value of array) {
    if (value === sequence[index]) {
      items.push(value);
      index++;
    }
    if (index === sequence.length) return items;
  }

  return items;
}

const array = [3, 1, 7, 5, 10, 2];

console.log(findValidSequence2(array, [1, 5, 2])); // true
console.log(findValidSequence2(array, [5, 1, 2])); // false
