function walk(graph, current, target, seen, path) {
  if (seen[current]) {
    return false;
  }

  seen[current] = true;

  path.push(current);

  if (current === target) {
    return true;
  }

  const list = graph[current];

  for (let i = 0; i < list?.length; i++) {
    const edge = list[i];
    if (walk(graph, edge, target, seen, path)) {
      return true;
    }
  }

  path.pop();

  return false;
}

function dfs(graph, source, target) {
  const seen = new Array(graph.length).fill(false);
  const path = [];

  walk(graph, source, target, seen, path);

  console.log(path);
  return path;
}

const graph = [
  [1, 2],
  [0, 3],
];

dfs(graph, 0, 2);
