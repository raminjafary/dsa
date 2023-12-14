const MinHeap = require("../../data-structure/heap");
const { TreeNode } = require("../../data-structure/tree");

// Merge K Sorted Lists

// Given an array of ‘K’ sorted LinkedLists, merge them into one sorted list.

// Example 1:
// Input: l2=[2, 6, 8], L2=[3, 6, 7], L3=[1, 3, 4]
// Output: [1, 2, 3, 3, 4, 6, 6, 7, 8]

// Example 2:
// Input: L1=[5, 8, 9], L2=[1, 7]
// Output: [1, 5, 7, 8, 9]

function mergeKSortedList(lists) {
  const minHeap = new MinHeap((a, b) => b.value - a.value);

  lists.sort((l1, l2) => l1.value - l2.value);

  console.log(lists);

  lists.forEach((li) => minHeap.insert(li));

  let head = null;
  let tail = null;

  while (minHeap.length) {
    const node = minHeap.delete();

    if (head == null) {
      head = tail = node;
    } else {
      tail.next = node;
      tail = tail.next;
    }

    if (node.next) {
      minHeap.insert(node.next);
    }
  }

  return head;
}

const l1 = new TreeNode(2);
l1.next = new TreeNode(6);
l1.next.next = new TreeNode(8);

const l2 = new TreeNode(3);
l2.next = new TreeNode(6);
l2.next.next = new TreeNode(7);

const l3 = new TreeNode(1);
l3.next = new TreeNode(3);
l3.next.next = new TreeNode(4);

// Not working yet!
console.log(JSON.stringify(mergeKSortedList([l1, l2, l3]), null, 2));
