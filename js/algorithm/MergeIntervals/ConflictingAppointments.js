// Given an array of intervals representing ‘N’ appointments, find out if a person can attend all the appointments.

// Example 1:
// Appointments: [[1,4], [2,5], [7,9]]
// Output: false
// Explanation: Since [1,4] and [2,5] overlap, a person cannot attend both of these appointments.

// Example 2:
// Appointments: [[6,7], [2,4], [8,12]]
// Output: true
// Explanation: None of the appointments overlap, therefore a person can attend all of them.

// Example 3:
// Appointments: [[4,5], [2,3], [3,6]]
// Output: false
// Explanation: Since [4,5] and [3,6] overlap, a person cannot attend both of these appointments.

class Interval {
  constructor(start, end) {
    this.start = start;
    this.end = end;
  }

  getInterval() {
    return `[${this.start}, ${this.end}]`;
  }
}

function canAttendAllAppointment(intervals) {
  intervals.sort((a, b) => a.start - b.start);

  for (let i = 1; i < intervals.length; i++) {
    const start = intervals[i].start;
    const end = intervals[i - 1].end;
    if (start < end) {
      return false;
    }
  }

  return true;
}

console.log(
  canAttendAllAppointment([
    new Interval(1, 4),
    new Interval(2, 5),
    new Interval(7, 9),
  ])
);
