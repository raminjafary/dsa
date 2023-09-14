const Heap = require("../../data-structure/heap");

// Given a string, sort it based on the decreasing frequency of its characters.

// Example 1:
// Input: "Programming"
// Output: "rrggmmPiano"
// Explanation: 'r', 'g', and 'm' appeared twice, so they need to appear before any other character.

// Example 2:
// Input: "abcbab"
// Output: "bbbaac"
// Explanation: 'b' appeared three times, 'a' appeared twice, and 'c' appeared only once.

// TODO: Not working properly!
function sortCharectersByFrequency(str) {
  const frequency = {};

  for (let i = 0; i < str.length; i++) {
    const key = str[i];

    if (key in frequency) {
      frequency[key]++;
    } else {
      frequency[key] = 1;
    }
  }

  const maxHeap = new Heap((a, b) => a[0] - b[0]);

  for (const key in frequency) {
    maxHeap.insert([frequency[key], key]);
  }
  let sortedStr = "";

  while (maxHeap.length) {
    const [frequency, key] = maxHeap.delete();

    for (let i = 0; i < frequency; i++) {
      sortedStr += key;
    }
  }

  return sortedStr;
}

console.log(sortCharectersByFrequency("Programming"));
console.log(sortCharectersByFrequency("abcbab"));
