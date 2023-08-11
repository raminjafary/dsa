// The Levenshtein Edit Distance Algorithm

// In information theory, linguistics, and computer science, the Levenshtein distance is a string metric for measuring the difference between two sequences.

// Informally, the Levenshtein distance between two words is the minimum number of single-character edits (insertions, deletions or substitutions) required to change one word into the other.

// Levenshtein distance may also be referred to as edit distance, although that term may also denote a larger family of distance metrics known collectively as edit distance

function levenshtein(source, target) {
  const distance = new Array(source.length + 1)
    .fill(0)
    .map(() => new Array(target.length + 1).fill(0));

  for (let i = 0; i <= source.length; i++) distance[i][0] = i;
  for (let j = 0; j <= target.length; j++) distance[0][j] = j;

  for (let i = 1; i <= source.length; i++) {
    for (let j = 1; j <= target.length; j++) {
      const match = source[i - 1] === target[j - 1] ? 0 : 1;

      distance[i][j] = Math.min(
        match + distance[i - 1][j - 1], // // substitution
        1 + distance[i][j - 1], // deletion
        1 + distance[i - 1][j] // insertion
      );
    }
  }

  return distance[source.length][target.length];
}

function levenshtein2(source, target) {
  const distance = [];

  for (let i = 0; i <= target.length; i++) {
    distance[i] = [i];

    for (let j = 1; j <= source.length; j++) {
      distance[i][j] =
        i === 0
          ? j
          : Math.min(
              distance[i - 1][j] + 1, // deletion
              distance[i][j - 1] + 1, // insertion,
              distance[i - 1][j - 1] + (source[i - 1] === target[j - 1] ? 0 : 1) // substitution
            );
    }
  }

  return distance[target.length][source.length];
}

console.log(levenshtein("duck", "dark")); // 2
console.log(levenshtein("sitting", "kitten")); // 3
console.log(levenshtein2("duck", "dark")); // 2
console.log(levenshtein2("sitting", "kitten")); // 3
