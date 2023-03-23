// Two Single Numbers

// XOR is a logical bitwise operator that returns 0 (false) if both bits are the same and returns 1 (true) otherwise.
// In other words, it only returns 1 if exactly one bit is set to 1 out of the two bits in comparison.

/**
 Following are some important properties of XOR to remember:
 Important properties of XOR to remember #
 
 Taking XOR of a number with itself returns 0, e.g.,
 
 1 ^ 1 = 0
 29 ^ 29 = 0
 Taking XOR of a number with 0 returns the same number, e.g.,
    
 31 ^ 0 = 31
 1 ^ 0 = 1

 XOR is Associative & Commutative, which means:
 
 a ^ b = b ^ a
 (a ^ b) ^ c = a ^ (b ^ c)
 */

// In a non-empty array of numbers, every number appears exactly twice except two numbers that appear only once.
// Find the two numbers that appear only once.

// Example:
// Input: [1, 4, 2, 1, 3, 5, 6, 2, 3, 5]
// Answer: [4, 6]

// Example:
// Input: [2, 1, 3, 2]
// Answer: [1, 3]

function findTwoSingleNumbers(arr) {
  let n1xn2 = 0;

  arr.forEach((n) => {
    n1xn2 ^= n;
  });

  let rightMostSetBit = 1;

  while ((n1xn2 & rightMostSetBit) === 0) {
    rightMostSetBit = rightMostSetBit << 1;
  }

  let num1 = 0;
  let num2 = 0;

  arr.forEach((n) => {
    if ((n & rightMostSetBit) !== 0) {
      num1 ^= n;
    } else {
      num2 ^= n;
    }
  });
  return [num1, num2];
}

console.log(findTwoSingleNumbers([1, 4, 2, 1, 3, 5, 6, 2, 3, 5]));
console.log(findTwoSingleNumbers([2, 1, 3, 2]));
