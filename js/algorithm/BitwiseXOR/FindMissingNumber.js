// Find Missing Number

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

// Given an array of n 1 integers in the range from 1 to n find the one number that is missing from the array.

// Example:
// Input: 1, 5, 2, 6, 4
// Answer: 3

function findMissingNumber(arr) {
  const n = arr.length + 1;
  let x1 = 1;

  for (let i = 2; i <= n; i++) {
    x1 ^= i;
  }

  x2 = arr[0];

  for (let i = 1; i < n - 1; i++) {
    x2 ^= arr[i];
  }

  return x1 ^ x2;
}

console.log(findMissingNumber([1, 5, 2, 6, 4]));
