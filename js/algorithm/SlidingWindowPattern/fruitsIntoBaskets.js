// Fruits into Baskets
// Given an array of characters where each character represents a fruit tree,
// you are given two baskets and your goal is to put maximum number of fruits in each basket.
// The only restriction is that each basket can have only one type of fruit.

// Input: Fruit=['A', 'B', 'C', 'A', 'C']
// Output: 3
// Explanation: We can put 2 'C' in one basket and one 'A' in the other from the subarray ['C', 'A', 'C']
//
// Input: Fruit=['A', 'B', 'C', 'B', 'B', 'C']
// Output: 5
// Explanation: We can put 3 'B' in one basket and two 'C' in the other basket.
// This can be done if we start with the second letter: ['B', 'C', 'B', 'B',

function fruitsIntoBaskets(fruites) {
  let length = 0;
  let windowStart = 0;
  let basketsLen = 0;
  let frequencyOfFruites = {};

  for (let windowEnd = 0; windowEnd < fruites.length; windowEnd++) {
    if (!frequencyOfFruites[fruites[windowEnd]]) {
      frequencyOfFruites[fruites[windowEnd]] = 0;
      length++;
    }

    frequencyOfFruites[fruites[windowEnd]] += 1;

    while (length > 2) {
      frequencyOfFruites[fruites[windowStart]] -= 1;

      if (!frequencyOfFruites[fruites[windowStart]]) {
        delete frequencyOfFruites[fruites[windowStart]];
        length--;
      }
      windowStart++;
    }
    basketsLen = Math.max(basketsLen, windowEnd - windowStart + 1);
  }

  return basketsLen;
}

console.log(fruitsIntoBaskets(["A", "B", "C", "B", "B", "C"]));
