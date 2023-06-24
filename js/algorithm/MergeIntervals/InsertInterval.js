// Given a list of non-overlapping intervals sorted by their start time,
// insert a given interval at the correct position and merge all necessary intervals to produce a list that has only mutually exclusive intervals.

// Example 1:
// Input: Intervals=[[1,3], [5,7], [8,12]], New Interval=[4,6]
// Output: [[1,3], [4,7], [8,12]]
// Explanation: After insertion, since [4,6] overlaps with [5,7], we merged them into one [4,7].

// Example 2:
// Input: Intervals=[[1,3], [5,7], [8,12]], New Interval=[4,10]
// Output: [[1,3], [4,12]]
// Explanation: After insertion, since [4,10] overlaps with [5,7] & [8,12], we merged them into [4,12].

// Example 3:
// Input: Intervals=[[2,3],[5,7]], New Interval=[1,4]
// Output: [[1,4], [5,7]]
// Explanation: After insertion, since [1,4] overlaps with [2,3], we merged them into one [1,4].

class Interval {
  constructor(start, end) {
    this.start = start;
    this.end = end;
  }

  getInterval() {
    return `[${this.start}, ${this.end}]`;
  }
}

function insertInterval(intervals, newInterval) {
  const merged = [];
  let i = 0;

  while (i < intervals.length && intervals[i].end < newInterval.start) {
    merged.push(intervals[i]);
    i++;
  }

  while (i < intervals.length && intervals[i].start <= newInterval.end) {
    newInterval.start = Math.min(newInterval.start, intervals[i].start);
    newInterval.end = Math.min(newInterval.end, intervals[i].end);
    i++;
  }

  merged.push(newInterval);

  while (i < intervals.length) {
    merged.push(intervals[i]);
    i++;
  }

  return merged;
}

const merged_intervals = insertInterval(
  [new Interval(1, 3), new Interval(5, 7), new Interval(8, 12)],
  new Interval(4, 6)
);

let result = "";

for (let i = 0; i < merged_intervals.length; i++) {
  result += merged_intervals[i].getInterval() + " ";
}

console.log(result);
