// Single Number

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

// In a non-empty array of integers, every number appears twice except for one, find that single number.

// Example:
// Input: [1, 4, 2, 1, 3, 2, 3]
// Answer: 4

// Example:
// Input: [7, 9, 7]
// Answer: 9

function findSingleNumber(arr) {
  let x = 0;
  for (let i = 0; i < arr.length; i++) {
    x ^= arr[i];
  }
  return x;
}

console.log(findSingleNumber([1, 4, 2, 1, 3, 2, 3]));
console.log(findSingleNumber([7, 9, 7]));
