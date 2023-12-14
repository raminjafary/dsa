const MinHeap = require("../../data-structure/heap");

// Kth Smallest Number in a Sorted Matrix

// Given an  N * N matrix where each row and column is sorted in ascending order, find the Kth smallest element in the matrix.

// Example 1:
// Input: Matrix=[
//     [2, 6, 8],
//     [3, 7, 10],
//     [5, 8, 11]
//   ],
//   K=5
// Output: 7
// Explanation: The 5th smallest number in the matrix is 7.

function findKthSmallestNumberInSortedMatrix(matrix, k) {
  const minHeap = new MinHeap((a, b) => a[0] < b[0]);

  for (let i = 0; i < Math.min(k, matrix.length); i++) {
    minHeap.insert([matrix[i][0], 0, matrix[i]]);
  }

  let numberCount = 0;
  let number = 0;

  while (minHeap.length) {
    [number, i, row] = minHeap.delete();

    numberCount++;

    if (numberCount === k) break;

    if (row.length > i + 1) {
      minHeap.insert([row[i + 1], i + 1, row]);
    }
  }

  return number;
}

function findKthSmallestNumberInSortedMatrixWithBinarySearch(matrix, k) {
  const n = matrix.length;
  let start = matrix[0][0];
  let end = matrix[n - 1][n - 1];

  while (start < end) {
    const mid = Math.floor(start + (end - start) / 2);

    const [count, smaller, larger] = countLessEqual(
      matrix,
      mid,
      matrix[0][0],
      matrix[n - 1][n - 1]
    );

    if (count === k) return smaller;

    if (count < k) {
      start = larger;
    } else {
      end = smaller;
    }
  }
}

function countLessEqual(matrix, mid, smaller, larger) {
  let count = 0;
  let n = matrix.length;
  let row = n - 1;
  let col = 0;

  while (row >= 0 && col < n) {
    if (matrix[row][col] > mid) {
      larger = Math.min(larger, matrix[row][col]);
      row -= 1;
    } else {
      smaller = Math.max(smaller, matrix[row][col]);
      count += row + 1;
      col += 1;
    }
  }

  return [count, smaller, larger];
}

console.log(
  findKthSmallestNumberInSortedMatrix(
    [
      [2, 6, 8],
      [3, 7, 10],
      [5, 8, 11],
    ],
    5
  )
);

console.log(
  findKthSmallestNumberInSortedMatrixWithBinarySearch(
    [
      [2, 6, 8],
      [3, 7, 10],
      [5, 8, 11],
    ],
    5
  )
);
