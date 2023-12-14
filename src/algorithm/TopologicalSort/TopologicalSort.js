// Topological Sort of a directed graph (a graph with unidirectional edges) is a linear ordering of its vertices such that
// for every directed edge (U, V) from vertex U to vertex V, U comes before V in the ordering.

// Given a directed graph, find the topological ordering of its vertices.

// Example 1:
// Input: Vertices=4, Edges=[3, 2], [3, 0], [2, 0], [2, 1]
// Output: Following are the two valid topological sorts for the given graph:
// 1) 3, 2, 0, 1
// 2) 3, 2, 1, 0

// Example 2:
// Input: Vertices=5, Edges=[4, 2], [4, 3], [2, 0], [2, 1], [3, 1]
// Output: Following are all valid topological sorts for the given graph:
// 1) 4, 2, 3, 0, 1
// 2) 4, 3, 2, 0, 1
// 3) 4, 3, 2, 1, 0
// 4) 4, 2, 3, 1, 0
// 5) 4, 2, 0, 3, 1

// Example 3:
// Input: Vertices=7, Edges=[6, 4], [6, 2], [5, 3], [5, 4], [3, 0], [3, 1], [3, 2], [4, 1]
// Output: Following are all valid topological sorts for the given graph:
// 1) 5, 6, 3, 4, 0, 1, 2
// 2) 6, 5, 3, 4, 0, 1, 2
// 3) 5, 6, 4, 3, 0, 2, 1
// 4) 6, 5, 4, 3, 0, 1, 2
// 5) 5, 6, 3, 4, 0, 2, 1
// 6) 5, 6, 3, 4, 1, 2, 0

function topologicalSort(vertices, edges) {
  const sortedOrder = [];

  const inDegree = Array(vertices).fill(0);
  const graph = Array(vertices)
    .fill(0)
    .map(() => []);

  edges.forEach((edge) => {
    let parent = edge[0];
    let child = edge[1];

    graph[parent].push(child);
    inDegree[child]++;
  });

  const sources = [];

  for (let i = 0; i < inDegree.length; i++) {
    if (inDegree[i] === 0) {
      sources.push(i);
    }
  }

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

  if (sortedOrder.length !== vertices) {
    return [];
  }

  return sortedOrder;
}

console.log(
  topologicalSort(4, [
    [3, 2],
    [3, 0],
    [2, 0],
    [2, 1],
  ])
);
