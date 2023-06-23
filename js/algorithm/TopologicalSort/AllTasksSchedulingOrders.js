// There are ‘N’ tasks, labeled from ‘0’ to ‘N-1’.
// Each task can have some prerequisite tasks which need to be completed before it can be scheduled.
// Given the number of tasks and a list of prerequisite pairs, write a method to print all possible ordering of tasks meeting all prerequisites.

// Example 1:
// Input: Tasks=3, Prerequisites=[0, 1], [1, 2]
// Output: [0, 1, 2]
// Explanation: There is only possible ordering of the tasks.

// Example 2:
// Input: Tasks=4, Prerequisites=[3, 2], [3, 0], [2, 0], [2, 1]
// Output:
// 1) [3, 2, 0, 1]
// 2) [3, 2, 1, 0]
// Explanation: There are two possible orderings of the tasks meeting all prerequisites.

// Example 3:
// Input: Tasks=6, Prerequisites=[2, 5], [0, 5], [0, 4], [1, 4], [3, 2], [1, 3]
// Output:
// 1) [0, 1, 4, 3, 2, 5]
// 2) [0, 1, 3, 4, 2, 5]
// 3) [0, 1, 3, 2, 4, 5]
// 4) [0, 1, 3, 2, 5, 4]
// 5) [1, 0, 3, 4, 2, 5]
// 6) [1, 0, 3, 2, 4, 5]
// 7) [1, 0, 3, 2, 5, 4]
// 8) [1, 0, 4, 3, 2, 5]
// 9) [1, 3, 0, 2, 4, 5]
// 10) [1, 3, 0, 2, 5, 4]
// 11) [1, 3, 0, 4, 2, 5]
// 12) [1, 3, 2, 0, 5, 4]
// 13) [1, 3, 2, 0, 4, 5]

function findSchedulingOrders(tasks, prerequisites) {
  const sortedOrder = [];

  const graph = Array(tasks)
    .fill(0)
    .map(() => []);
  const inDegree = Array(tasks).fill(0);

  const sources = [];

  prerequisites.forEach((per) => {
    const parent = per[0];
    const child = per[1];

    graph[parent].push(child);
    inDegree[child]++;
  });

  for (let i = 0; i < inDegree.length; i++) {
    if (inDegree[i] === 0) {
      sources.push(i);
    }
  }

  return _findSchedulingOrders(graph, inDegree, sources, sortedOrder);
}

function _findSchedulingOrders(graph, inDegree, sources, sortedOrder) {
  if (sources.length) {
    for (let i = 0; i < sources.length; i++) {
      const vertex = sources[i];

      sortedOrder.push(vertex);

      const sourceForNextCall = sources.slice(0);

      sourceForNextCall.splice(sourceForNextCall.indexOf(vertex), 1);

      graph[vertex].forEach((child) => {
        inDegree[child]--;
        if (inDegree[child] === 0) {
          sourceForNextCall.push(child);
        }
      });

      _findSchedulingOrders(graph, inDegree, sourceForNextCall, sortedOrder);

      sortedOrder.splice(sortedOrder.indexOf(vertex), 1);

      for (let j = 0; j < graph[vertex].length; j++) {
        inDegree[graph[vertex][j]] += 1;
      }
    }
  }

  if (sortedOrder.length === inDegree.length) {
    console.log(sortedOrder);
  }
}

findSchedulingOrders(3, [
  [0, 1],
  [1, 2],
]);
