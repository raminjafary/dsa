// Middle of the LinkedList

// Given the head of a Singly LinkedList, write a method to return the middle node of the LinkedList.

// If the total number of nodes in the LinkedList is even, return the second middle node.

// Example 1:
// Input: 1 -> 2 -> 3 -> 4 -> 5 -> null
// Output: 3

// Example 2:
// Input: 1 -> 2 -> 3 -> 4 -> 5 -> 6 -> null
// Output: 4

// Example 3:
// Input: 1 -> 2 -> 3 -> 4 -> 5 -> 6 -> 7 -> null
// Output: 4

const { TreeNode } = require("../../data-structure/tree");

function findMiddleOfLinkedList(head) {
  let fast = head;
  let slow = head;

  while (fast && fast.next) {
    fast = fast.next.next;
    slow = slow.next;
  }

  return slow;
}

const head = new TreeNode(1);
head.next = new TreeNode(2);
head.next.next = new TreeNode(3);
head.next.next.next = new TreeNode(4);
head.next.next.next.next = new TreeNode(5);

console.log(findMiddleOfLinkedList(head).value);

head.next.next.next.next.next = new TreeNode(6);

console.log(findMiddleOfLinkedList(head).value);

head.next.next.next.next.next.next = new TreeNode(7);

console.log(findMiddleOfLinkedList(head).value);
