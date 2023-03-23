// Complement of Base 10 Number

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

// Every non-negative integer N has a binary representation, for example, 8 can be represented as “1000” in binary and 7 as “0111” in binary.

// The complement of a binary representation is the number in binary that we get when we change every 1 to a 0 and every 0 to a 1. For example, the binary complement of “1010” is “0101”.

// For a given positive number N in base-10, return the complement of its binary representation as a base-10 integer.

// Example:
// Input: 8
// Answer: 7
// Explanation: 8 is 1000 in binary, its complement is 0111 in binary, which is 7 in base-10.

// Example:
// Input: 10
// Answer: 5
// Explanation: 10 is 1010 in binary, its complement is 0101 in binary, which is 5 in base-10.

function complementOfBaseTenNumber(num) {
  let bitCount = 0;
  let n = num;

  while (n > 0) {
    bitCount++;
    n >>= 1;
  }
  // for a number which is a complete power of ‘2’ i.e., it can be written as pow(2, n), if we subtract ‘1’ from such a number, we get a number which has ‘n’ least significant bits set to ‘1’. For example, ‘4’ which is a complete power of ‘2’, and ‘3’ (which is one less than 4) has a binary representation of ‘11’ i.e., it has ‘2’ least significant bits set to ‘1’.
  let allBitsSet = Math.pow(2, bitCount) - 1;

  return num ^ allBitsSet;
}

console.log(complementOfBaseTenNumber(8));
console.log(complementOfBaseTenNumber(10));
