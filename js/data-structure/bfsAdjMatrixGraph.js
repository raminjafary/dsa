function bfs(graph, source, needle) {
  const prev = new Array(graph.length).fill(false);
  const seen = new Array(graph.length).fill(-1);

  seen[source] = true;

  const queue = [source];

  do {
    const current = queue.shift();

    if (current === needle) {
      break;
    }

    const adjs = graph[current];

    console.log(adjs);

    for (let i = 0; i < adjs.length; i++) {
      if (adjs[i] === 0) {
        continue;
      }

      if (seen[i]) continue;

      seen[i] = true;
      prev[i] = current;
      queue.push(i);
    }
  } while (queue.length);

  if (prev[needle] == -1) return;

  let current = needle;
  const out = [];

  while (prev[current] !== -1) {
    out.push(current);
    current = prev[current];
  }

  if (out.length) {
    return [source].concat(out.reverse());
  }

  return null;
}

const adjsMatrix = [
  [0, 1, 8],
  [0, 1, 5],
  [0, 14, 52],
];

bfs(adjsMatrix, 0, 8);
