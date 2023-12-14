// Happy Number

// Any number will be called a happy number if, after repeatedly replacing it with a number equal to the sum of the square of
// all of its digits, leads us to number ‘1’. All other (not-happy) numbers will never reach ‘1’.
// Instead, they will be stuck in a cycle of numbers which does not include ‘1’.

// Example 1:
// Input: 23
// Output: true (23 is a happy number)
// Explanations: Here are the steps to find out that 23 is a happy number:
// 2^2 + 3^2 = 4 + 9 = 13
// 1^2 + 3^2 = 1 + 9 = 10
// 1^2 + 0^2 = 1 + 0 = 1

// Example 2:
// Input: 12
// Output: false (12 is not a happy number)
// Explanations: Here are the steps to find out that 12 is not a happy number:

function findHappyNumber(num) {
  let slow = num;
  let fast = num;

  while (true) {
    slow = findSqureSum(slow);
    fast = findSqureSum(findSqureSum(fast));

    if (slow === fast) break;
  }

  return slow === 1;
}

function findSqureSum(num) {
  let sum = 0;

  while (num > 0) {
    let digit = num % 10;
    sum += digit * digit;
    num = Math.floor(num / 10);
  }

  return sum;
}

console.log(findHappyNumber(23));
console.log(findHappyNumber(12));
