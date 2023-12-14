const Heap = require("../../data-structure/heap");

// Rearrange String

// Given a string, find if its letters can be rearranged in such a way that no two same characters come next to each other.

// Example 1:
// Input: "aappp"
// Output: "papap"
// Explanation: In "papap", none of the repeating characters come next to each other.

// Example 2:
// Input: "Programming"
// Output: "rgmrgmPiano" or "gmringmrPoa" or "gmrPagimnor", etc.
// Explanation: None of the repeating characters come next to each other.

// Example 3:
// Input: "aapa"
// Output: ""
// Explanation: In all arrangements of "aapa", atleast two 'a' will come together e.g., "apaa", "paaa".

function rearrangeString(str) {
  const charFrequency = {};

  for (let i = 0; i < str.length; i++) {
    const key = str[i];

    if (key in charFrequency) {
      charFrequency[key]++;
    } else {
      charFrequency[key] = 1;
    }
  }

  const maxHeap = new Heap((a, b) => a[0] - b[0]);

  for (const key in charFrequency) {
    maxHeap.insert([charFrequency[key], key]);
  }

  let string = "";
  let previousChar = null;
  let previousCharFrequency = 0;

  while (maxHeap.length) {
    const [frequency, key] = maxHeap.delete();

    if (previousChar && previousCharFrequency > 0) {
      maxHeap.insert([previousCharFrequency, previousChar]);
    }

    string += key;
    previousChar = key;
    previousCharFrequency = frequency - 1;
  }

  if (string.length !== str.length) {
    return "";
  }

  return string;
}

console.log(rearrangeString("aappp"));
console.log(rearrangeString("Programming"));
