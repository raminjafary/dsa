const Heap = require("../../data-structure/heap");

// Given an array of points in the a 2D  plane, find ‘K’ closest points to the origin.

// Example 1:
// Input: points = [[1,2],[1,3]], K = 1
// Output: [[1,2]]
// Explanation: The Euclidean distance between (1, 2) and the origin is sqrt(5).
// The Euclidean distance between (1, 3) and the origin is sqrt(10).
// Since sqrt(5) < sqrt(10), therefore (1, 2) is closer to the origin.

// Example 2:
// Input: point = [[1, 3], [3, 4], [2, -1]], K = 2
// Output: [[1, 3], [2, -1]]

class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  compare(other) {
    return this.distanceFromOrigin() - other.distanceFromOrigin();
  }

  distanceFromOrigin() {
    return this.x * this.x + this.y * this.y;
  }
}

function findClosestPoints(points, k) {
  const maxHeap = new Heap((a, b) => a.compare(b));

  for (let i = 0; i < k; i++) {
    maxHeap.insert(points[i]);
  }

  for (let i = k; i < points.length; i++) {
    if (points[i].distanceFromOrigin() < maxHeap.peek().distanceFromOrigin()) {
      maxHeap.delete();
      maxHeap.insert(points[i]);
    }
  }

  return maxHeap;
}

console.log(
  findClosestPoints([new Point(1, 3), new Point(3, 4), new Point(2, -1)], 2)
);
