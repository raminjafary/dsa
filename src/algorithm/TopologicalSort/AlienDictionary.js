// There is a dictionary containing words from an alien language for which we don’t know the ordering of the characters.
// Write a method to find the correct order of characters in the alien language.

// Example 1:
// Input: Words: ["ba", "bc", "ac", "cab"]
// Output: bac
// Explanation: Given that the words are sorted lexicographically by the rules of the alien language, so
// from the given words we can conclude the following ordering among its characters:
//
// 1. From "ba" and "bc", we can conclude that 'a' comes before 'c'.
// 2. From "bc" and "ac", we can conclude that 'b' comes before 'a'
//
// From the above two points, we can conclude that the correct character order is: "bac"

// Example 2:
//
// Input: Words: ["cab", "aaa", "aab"]
// Output: cab
// Explanation: From the given words we can conclude the following ordering among its characters:
//
// 1. From "cab" and "aaa", we can conclude that 'c' comes before 'a'.
// 2. From "aaa" and "aab", we can conclude that 'a' comes before 'b'
//
// From the above two points, we can conclude that the correct character order is: "cab"

// Example 3:
//
// Input: Words: ["ywx", "wz", "xww", "xz", "zyy", "zwz"]
// Output: ywxz
// Explanation: From the given words we can conclude the following ordering among its characters:
//
// 1. From "ywx" and "wz", we can conclude that 'y' comes before 'w'.
// 2. From "wz" and "xww", we can conclude that 'w' comes before 'x'.
// 3. From "xww" and "xz", we can conclude that 'w' comes before 'z'
// 4. From "xz" and "zyy", we can conclude that 'x' comes before 'z'
// 5. From "zyy" and "zwz", we can conclude that 'y' comes before 'w'
//
// From the above five points, we can conclude that the correct character order is: "ywxz"

function findAlienDict(words) {
  const inDegree = {};
  const graph = {};

  words.forEach((word) => {
    for (let i = 0; i < word.length; i++) {
      inDegree[word[i]] = 0;
      graph[word[i]] = [];
    }
  });

  for (let i = 0; i < words.length - 1; i++) {
    const w1 = words[i];
    const w2 = words[i + 1];

    for (let j = 0; j < Math.min(w1.length, w2.length); j++) {
      const parent = w1[j];
      const child = w2[j];

      if (parent !== child) {
        graph[parent].push(child);
        inDegree[child]++;
        break;
      }
    }
  }

  const sources = [];
  const chars = Object.keys(inDegree);

  chars.forEach((key) => {
    if (inDegree[key] === 0) {
      sources.push(key);
    }
  });

  const sortedOrder = [];

  while (sources.length) {
    const vertex = sources.shift();

    sortedOrder.push(vertex);

    graph[vertex].forEach((child) => {
      inDegree[child]--;
      if (inDegree[child] === 0) {
        sources.push(child);
      }
    });
  }

  if (sortedOrder.length !== chars.length) {
    return "";
  }

  return sortedOrder.join("");
}

console.log(findAlienDict(["ba", "bc", "ac", "cab"]));
