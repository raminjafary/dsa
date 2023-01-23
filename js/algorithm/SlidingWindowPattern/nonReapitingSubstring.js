// No-repeat Substring
// Given a string, find the **length of the longest substring** which has no repeating characters.

// Input: String="aabccbb"
// Output: 3
// Explanation: The longest substring without any repeating characters is "abc".

//Input: String="abbbb"
// Output: 2
// Explanation: The longest substring without any repeating characters is "ab".

// Input: String="abccde"
// Output: 3
// Explanation: Longest substrings without any repeating characters are "abc" & "cde".

function notReapitingSubstring(str) {
  let windowStart = 0;
  let charFrquency = {};
  let maxLen = 0;

  for (let windowEnd = 0; windowEnd < str.length; windowEnd++) {
    endString = str[windowEnd];

    if (endString in charFrquency) {
      windowStart = Math.max(windowStart, charFrquency[endString] + 1);
    }

    charFrquency[endString] = windowEnd;

    maxLen = Math.max(maxLen, windowEnd - windowStart + 1);
  }

  return maxLen;
}

console.log(notReapitingSubstring("abccde"));
