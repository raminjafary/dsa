const Heap = require("../../data-structure/heap");

// 'K' Closest Numbers

// Given a sorted number array and two integers ‘K’ and ‘X’, find ‘K’ closest numbers to ‘X’ in the array. Return the numbers in the sorted order. ‘X’ is not necessarily present in the array.

// Example 1:
// Input: [5, 6, 7, 8, 9], K = 3, X = 7
// Output: [6, 7, 8]

// Example 2:
// Input: [2, 4, 5, 6, 9], K = 3, X = 6
// Output: [4, 5, 6]

// Example 3:
// Input: [2, 4, 5, 6, 9], K = 3, X = 10
// Output: [5, 6, 9]

// function findKClosestElementsToX(arr, k, x) {
//   const minHeap = new Heap((a, b) => a[0] - b[0]);

//   for (let i = 0; i < arr.length; i++) {
//     const diff = Math.abs(arr[i] - x);

//     if (minHeap.length < k) {
//       minHeap.insert([diff, arr[i]]);
//       continue;
//     }

//     if (diff < minHeap.peek()[0]) {
//       minHeap.delete();
//       minHeap.insert([diff, arr[i]]);
//     }
//   }

//   return minHeap.data.map((item) => item[1]).sort();
// }

// console.log(findKClosestElementsToX([5, 6, 7, 8, 9], 3, 7));
// console.log(findKClosestElementsToX([2, 4, 5, 6, 9], 3, 6));
// console.log(findKClosestElementsToX([2, 4, 5, 6, 9], 3, 10));

function findKClosestElementsToX2(arr, k, x) {
  const index = binarySearch(arr, x);
  let low = index - k;
  let high = index + k;

  low = Math.max(low, 0);
  high = Math.max(high, arr.length - 1);

  const minHeap = new Heap();

  for (let i = low; i < high; i++) {
    minHeap.insert([Math.abs(arr[i] - x), arr[i]]);
  }

  const result = [];

  for (let i = 0; i < k; i++) {
    result.push(minHeap.delete()[1]);
  }

  return result.sort();
}

function binarySearch(arr, target) {
  let low = 0;
  let high = arr.length - 1;

  while (low <= high) {
    const mid = Math.floor(low + (low + high) / 2);

    if (arr[mid] === target) {
      return mid;
    }

    if (arr[mid] < target) {
      low = mid + 1;
    } else {
      high = mid - 1;

      if (low > 0) {
        return low - 1;
      }
    }
  }

  return low;
}

console.log(findKClosestElementsToX2([5, 6, 7, 8, 9], 3, 7));
console.log(findKClosestElementsToX2([2, 4, 5, 6, 9], 3, 6));
console.log(findKClosestElementsToX2([2, 4, 5, 6, 9], 3, 10));
