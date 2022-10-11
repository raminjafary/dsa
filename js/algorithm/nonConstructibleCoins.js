function nonConstructibleCoins(array) {
  let i = 0;
  let sum = 0;

  array.sort((a, b) => a - b);

  while (i < array.length) {
    if (array[i] > sum + 1) return sum + 1;

    sum += array[i];
    i++;
  }

  return sum + 1;
}

console.log(nonConstructibleCoins([5, 7, 1, 1, 2, 3, 22]));
console.log(nonConstructibleCoins([]));
