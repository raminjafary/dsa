// Given a list of intervals, merge all the overlapping intervals to produce a list that has only mutually exclusive intervals.

// Example 1:
// Intervals: [[1,4], [2,5], [7,9]]
// Output: [[1,5], [7,9]]
// Explanation: Since the first two intervals [1,4] and [2,5] overlap, we merged them into
// one [1,5].

// Example 2:
// Intervals: [[6,7], [2,4], [5,9]]
// Output: [[2,4], [5,9]]
// Explanation: Since the intervals [6,7] and [5,9] overlap, we merged them into one [5,9].

// Example 3:
// Intervals: [[1,4], [2,6], [3,5]]
// Output: [[1,6]]
// Explanation: Since all the given intervals overlap, we merged them into one.

class Interval {
  constructor(start, end) {
    this.start = start;
    this.end = end;
  }

  getInterval() {
    return `[${this.start}, ${this.end}]`;
  }
}

function mergeIntervals(intervals) {
  const merged = [];

  intervals.sort((a, b) => a.start - b.start);

  let start = intervals[0].start;
  let end = intervals[0].end;

  for (let i = 1; i < intervals.length; i++) {
    const interval = intervals[i];
    if (interval.start <= end) {
      end = Math.max(interval.end, end);
    } else {
      merged.push(new Interval(start, end));
      start = interval.start;
      end = interval.end;
    }
  }

  merged.push(new Interval(start, end));
  return merged;
}

const merged_intervals = mergeIntervals([
  new Interval(1, 4),
  new Interval(2, 5),
  new Interval(7, 9),
]);

let result = "";

for (let i = 0; i < merged_intervals.length; i++) {
  result += merged_intervals[i].getInterval() + " ";
}

console.log(result);
