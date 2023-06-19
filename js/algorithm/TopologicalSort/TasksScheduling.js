// There are ‘N’ tasks, labeled from ‘0’ to ‘N-1’.
// Each task can have some prerequisite tasks which need to be completed before it can be scheduled.
// Given the number of tasks and a list of prerequisite pairs, find out if it is possible to schedule all the tasks.

// Example 1:
// Input: Tasks=3, Prerequisites=[0, 1], [1, 2]
// Output: true
// Explanation: To execute task '1', task '0' needs to finish first. Similarly, task '1' needs to finish
// before '2' can be scheduled. A possible sceduling of tasks is: [0, 1, 2]

// Example 2:
// Input: Tasks=3, Prerequisites=[0, 1], [1, 2], [2, 0]
// Output: false
// Explanation: The tasks have cyclic dependency, therefore they cannot be sceduled.

// Example 3:
// Input: Tasks=6, Prerequisites=[2, 5], [0, 5], [0, 4], [1, 4], [3, 2], [1, 3]
// Output: true
// Explanation: A possible sceduling of tasks is: [0 1 4 3 2 5]

function isSchedulingPossible(tasks, prerequisites) {
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

  while (sources.length) {
    const source = sources.shift();

    sortedOrder.push(source);

    graph[source].forEach((child) => {
      inDegree[child]--;
      if (inDegree[child] === 0) {
        sources.push(child);
      }
    });
  }

  return sortedOrder.length === tasks;
}

console.log(
  isSchedulingPossible(3, [
    [0, 1],
    [1, 2],
  ])
);
