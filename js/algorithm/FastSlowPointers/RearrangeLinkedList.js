// Rearrange a LinkedList

// Given the head of a Singly LinkedList, write a method to modify the LinkedList such that
// the nodes from the second half of the LinkedList are inserted alternately to the nodes from the first half in reverse order.
// So if the LinkedList has nodes 1 -> 2 -> 3 -> 4 -> 5 -> 6 -> null, your method should return 1 -> 6 -> 2 -> 5 -> 3 -> 4 -> null.

// Your algorithm should not use any extra space and the input LinkedList should be modified in-place.

// Example 1:
// Input: 2 -> 4 -> 6 -> 8 -> 10 -> 12 -> null
// Output: 2 -> 12 -> 4 -> 10 -> 6 -> 8 -> null

// Example 2:
// Input: 2 -> 4 -> 6 -> 8 -> 10 -> null
// Output: 2 -> 10 -> 4 -> 8 -> 6 -> null

const { TreeNode } = require("../../data-structure/tree");

function rearrangeLinkedList(head) {
  let fast = head;
  let slow = head;

  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }

  let headOfSecondHalf = reverse(slow);
  let headOfFirstHalf = head;

  while (headOfFirstHalf && headOfSecondHalf) {
    let temp = headOfFirstHalf.next;
    headOfFirstHalf.next = headOfSecondHalf;
    headOfFirstHalf = temp;

    temp = headOfSecondHalf.next;
    headOfSecondHalf.next = headOfFirstHalf;
    headOfSecondHalf = temp;
  }

  if (headOfFirstHalf) {
    headOfFirstHalf.next = null;
  }
}

function reverse(head) {
  let prev = null;

  while (head) {
    let next = head.next;
    head.next = prev;
    prev = head;
    head = next;
  }

  return prev;
}

const head = new TreeNode(2);
head.next = new TreeNode(4);
head.next.next = new TreeNode(6);
head.next.next.next = new TreeNode(8);
head.next.next.next.next = new TreeNode(10);
head.next.next.next.next.next = new TreeNode(12);

rearrangeLinkedList(head);

let temp = head;

while (temp) {
  process.stdout.write(`${temp.value} `);
  temp = temp.next;
}
console.log();
