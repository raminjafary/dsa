function tournamentWinner(competitions, results) {
  const scores = { "": 0 };

  let highestScore = "";

  results.forEach((result, i) => {
    const [teamOne, teamTwo] = competitions[i];

    const winner = result === 1 ? teamOne : teamTwo;

    if (!scores[winner]) {
      scores[winner] = 3;
    } else {
      scores[winner] += 3;
    }

    if (scores[winner] > scores[highestScore]) {
      highestScore = winner;
    }
  });

  return { scores, highestScore };
}

const competitions = [
  ["Mice", "Pandas"], // mice 3
  ["Pandas", "Pythons"], // pythons 3
  ["Pythons", "Mice"], // mice 3
];

const results = [1, 0, 0];

console.log(tournamentWinner(competitions, results));
