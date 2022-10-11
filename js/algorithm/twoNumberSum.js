function twoNumberSum(array, sum) {
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] + array[j] === sum) {
        return [i, j];
      }
    }
  }
}

function twoNumberSum(array, sum) {
  const items = {};
  const indices = [];

  for (let i = 0; i < array.length; i++) {
    const potentialValue = sum - array[i];

    if (!items[potentialValue]) {
      items[array[i]] = i;
    } else {
      indices.push(items[potentialValue], i);
      return [indices, items];
    }
  }
}

console.log(twoNumberSum([1, 3, 10, 11, 14], 13));
