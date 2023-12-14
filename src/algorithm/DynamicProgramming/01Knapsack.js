// 0/1 Knapsack

// Introduction
// Given the weights and profits of ‘N’ items, we are asked to put these items in a knapsack which has a capacity ‘C’.
// The goal is to get the maximum profit out of the items in the knapsack. Each item can only be selected once, as we don’t have multiple quantities of any item.

// Let’s take the example of Merry, who wants to carry some fruits in the knapsack to get maximum profit. Here are the weights and profits of the fruits:
// Items: { Apple, Orange, Banana, Melon }
// Weights: { 2, 3, 1, 4 }
// Profits: { 4, 5, 3, 7 }
// Knapsack capacity: 5

// Let’s try to put various combinations of fruits in the knapsack, such that their total weight is not more than 5:
// Apple + Orange (total weight 5) => 9 profit
// Apple + Banana (total weight 3) => 7 profit
// Orange + Banana (total weight 4) => 8 profit
// Banana + Melon (total weight 5) => 10 profit
//
// This shows that Banana + Melon is the best combination as it gives us the maximum profit and the total weight does not exceed the capacity.

// Problem Statement
// Given two integer arrays to represent weights and profits of ‘N’ items, we need to find a subset of these items which will give us maximum profit such that their cumulative weight is not more than a given number ‘C’. Each item can only be selected once, which means either we put an item in the knapsack or we skip it.

// Basic Solution
// A basic brute-force solution could be to try all combinations of the given items (as we did above), allowing us to choose the one with maximum profit and a weight that doesn’t exceed ‘C’.
// Take the example of four items (A, B, C, and D), as shown in the diagram below. To try all the combinations, our algorithm will look like:

function _solveKnapsackTopDown(profits, weights, capacity, currentIndex) {
  const dep = [];

  if (capacity <= 0 || currentIndex >= profits.length) {
    return 0;
  }

  dep[currentIndex] = dep[currentIndex] || [];

  if (typeof dep[currentIndex][capacity] != "undefined") {
    return dep[currentIndex][capacity];
  }

  let profit1 = 0;
  if (weights[currentIndex] <= capacity) {
    profit1 =
      profits[currentIndex] +
      _solveKnapsackTopDown(
        profits,
        weights,
        capacity - weights[currentIndex],
        currentIndex + 1
      );
  }

  const profit2 = _solveKnapsackTopDown(
    profits,
    weights,
    capacity,
    currentIndex + 1
  );

  dep[currentIndex][capacity] = Math.max(profit1, profit2);
  return dep[currentIndex][capacity];
}

// Top-down Dynamic Programming with Memoization
function solveKnapsackTopDown(profits, weights, capacity) {
  return _solveKnapsackTopDown(profits, weights, capacity, 0);
}

function solveKnapsackBottomUp(profits, weights, capacity) {
  const n = profits.length;

  if (capacity <= 0 || n === 0 || weights.length !== n) return 0;

  const dep = new Array(n).fill(0).map(() => new Array(capacity + 1).fill(0));

  for (let i = 0; i < n; i++) {
    dep[i][0] = i;
  }

  for (let i = 0; i <= capacity; i++) {
    if (weights[0] <= i) dep[0][i] = profits[0];
  }

  for (let i = 1; i < n; i++) {
    for (let j = 1; j <= capacity; j++) {
      let profit1 = 0;
      let profit2 = 0;

      if (weights[i] <= j) {
        profit1 = profits[i] + dep[i - 1][j - weights[i]];
      }

      profit2 = dep[i - 1][j];

      dep[i][j] = Math.max(profit1, profit2);
    }
  }

  let selectedWeights = "";
  let totalProfits = dep[weights.length - 1][capacity];
  let remainingCapacity = capacity;

  for (let i = weights.length - 1; i > 0; i--) {
    if (totalProfits != dep[i - 1][remainingCapacity]) {
      selectedWeights = weights[i] + ", " + selectedWeights;
      remainingCapacity -= weights[i];
      totalProfits -= profits[i];
    }
  }

  if (totalProfits !== 0) {
    selectedWeights = weights[0] + ", " + selectedWeights;
  }

  console.log("selectedWeights: ", selectedWeights);

  return dep[n - 1][capacity];
}

function solveKnapsackBottomUpOptimized(profits, weights, capacity) {
  const n = profits.length;

  if (capacity <= 0 || n === 0 || weights.length !== n) return 0;

  const dep = new Array(2).fill(0).map(() => new Array(capacity + 1).fill(0));

  for (let i = 0; i <= capacity; i++) {
    if (weights[0] <= i) dep[0][i] = dep[1][i] = profits[0];
  }

  for (let i = 1; i < n; i++) {
    for (let j = 1; j <= capacity; j++) {
      let profit1 = 0;
      let profit2 = 0;

      if (weights[i] <= j) {
        profit1 = profits[i] + dep[(i - 1) % 2][j - weights[i]];
      }

      profit2 = dep[(i - 1) % 2][j];

      dep[i % 2][j] = Math.max(profit1, profit2);
    }
  }

  return dep[(n - 1) % 2][capacity];
}

const profits = [1, 6, 10, 16];
const weights = [1, 2, 3, 5];

console.log(solveKnapsackBottomUpOptimized(profits, weights, 7));
console.log(solveKnapsackBottomUpOptimized(profits, weights, 6));

console.log(solveKnapsackBottomUp(profits, weights, 7));
console.log(solveKnapsackBottomUp(profits, weights, 6));

console.log(solveKnapsackTopDown(profits, weights, 7));
console.log(solveKnapsackTopDown(profits, weights, 6));
