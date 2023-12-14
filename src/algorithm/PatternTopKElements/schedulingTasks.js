const Heap = require("../../data-structure/heap");

// Scheduling Tasks

// You are given a list of tasks that need to be run, in any order, on a server. Each task will take one CPU interval to execute but once a task has finished, it has a cooling period during which it can’t be run again.

// If the cooling period for all tasks is ‘K’ intervals, find the minimum number of CPU intervals that the server needs to finish all tasks.

// If at any time the server can’t execute any task then it must stay idle.

// Example 1:
// Input: [a, a, a, b, c, c], K=2
// Output: 7
// Explanation: a -> c -> b -> a -> c -> idle -> a

// Example 2:
// Input: [a, b, a], K=3
// Output: 5
// Explanation: a -> b -> idle -> idle -> a

function schedultTask(taks, k) {
  const frequency = {};

  for (let i = 0; i < taks.length; i++) {
    const key = taks[i];

    if (key in frequency) {
      frequency[key]++;
    } else {
      frequency[key] = 1;
    }
  }

  const maxHeap = new Heap((a, b) => a[0] - b[0]);

  for (const key in frequency) {
    maxHeap.insert([frequency[key], key]);
  }

  let cpuIntervals = 0;

  while (maxHeap.length) {
    const waitList = [];
    let n = k + 1;

    while (n > 0 && maxHeap.length) {
      cpuIntervals++;
      const [frequency, key] = maxHeap.delete();

      if (frequency > 1) {
        waitList.push([frequency - 1, key]);
      }

      n -= 1;
    }

    for (const [frequency, key] of waitList) {
      maxHeap.insert([frequency, key]);
    }

    if (maxHeap.length) {
      cpuIntervals += n;
    }
  }

  return cpuIntervals;
}

console.log(schedultTask(["a", "a", "a", "b", "c", "c"], 2));
console.log(schedultTask(["a", "b", "a"], 3));
