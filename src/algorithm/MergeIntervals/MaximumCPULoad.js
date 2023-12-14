const Heap = require("../../data-structure/heap");

class Job {
  constructor(start, end, cpuLoad) {
    this.start = start;
    this.end = end;
    this.cpuLoad = cpuLoad;
  }
}

function findMaxCPULoad(jobs) {
  jobs.sort((a, b) => a.start - b.start);

  let maxCPULoad = 0;
  let currentCPULoad = 0;
  const heap = new Heap();

  for (let i = 0; i < jobs.length; i++) {
    while (heap.length && jobs[i].start >= heap.data[heap.length - 1].end) {
      currentCPULoad -= heap.delete().cpuLoad;
    }

    heap.insert(jobs[i]);
    currentCPULoad += jobs[i].cpuLoad;
    maxCPULoad = Math.max(maxCPULoad, currentCPULoad);
  }

  return maxCPULoad;
}

console.log(
  findMaxCPULoad([new Job(1, 4, 3), new Job(2, 5, 4), new Job(7, 9, 6)])
);
