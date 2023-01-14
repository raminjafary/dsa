// Longest Substring with n Distinct Characters

// Input: String="araaci", n=2
// Output: 4
// Explanation: The longest substring with no more than '2' distinct characters is "araa".

// Input: String="araaci", n=1
// Output: 2
// Explanation: The longest substring with no more than '1' distinct characters is "aa".

// Input: String="cbbebi", n=3
// Output: 5
// Explanation: The longest substrings with no more than '3' distinct characters are "cbbeb" & "bbebi".

function findLongestSubstring(n, str) {
  let windowStart = 0;
  let numberOfUniqueChars = 0;
  let maxLen = 0;
  const charFrequency = {};

  for (let windowEnd = 0; windowEnd < str.length; windowEnd++) {
    const rightChar = str[windowEnd];

    if (!charFrequency[rightChar]) {
      charFrequency[rightChar] = 0;
      numberOfUniqueChars += 1;
    }

    charFrequency[rightChar] += 1;

    while (numberOfUniqueChars > n) {
      const leftChar = str[windowStart];

      charFrequency[leftChar] -= 1;

      if (!charFrequency[leftChar]) {
        delete charFrequency[leftChar];
        numberOfUniqueChars -= 1;
      }

      windowStart += 1;
    }

    maxLen = Math.max(maxLen, windowEnd - windowStart + 1);
  }

  return maxLen;
}

console.log(findLongestSubstring(2, "araaci"));
