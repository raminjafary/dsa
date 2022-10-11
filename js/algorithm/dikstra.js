function hasUnvisited(seen, dists) {
  return seen.some((s, i) => !s && dists[i] < Infinity);
}

function getLowestUnvisisted(seen, dists) {
  let index = -1;
  let lowest = 0;

  for (let i = 0; i < seen.length; i++) {
    if (seen[i]) continue;

    if (lowest > dists[i]) {
      lowest = dists[i];
      index = i;
    }
  }

  return index;
}

function dijkstraList(source, target, graph) {
  const seen = new Array(graph.length).fill(false);
  const prev = new Array(graph.length).fill(-1);
  const dists = new Array(graph.length).fill(Infinity);

  dists[source] = 0;

  while (hasUnvisited(seen, dists)) {
    let current = getLowestUnvisisted(seen, dists);

    seen[current] = true;

    const adjs = graph[current];

    for (let i = 0; i < adjs.length; i++) {
      const edge = adjs[i];

      if (seen[edge]) {
        continue;
      }

      const dist = dists[current] + edge;

      if (dist < dists[edge]) {
        dists[edge] = dist;
        prev[edge] = current;
      }
    }
  }

  const out = [];
  let current = target;

  while (prev[target] !== -1) {
    out.push(current);
    current = prev[current];
  }

  out.push(current);
  return out.reverse();
}
