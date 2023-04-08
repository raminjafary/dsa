// Start of LinkedList Cycle

// Given the head of a Singly LinkedList that contains a cycle, write a function to find the starting node of the cycle.

const { TreeNode } = require("../../data-structure/tree");

function findStartOfLinkedListCycleLength(head) {
  let fast = head;
  let slow = head;
  let length = 0;

  while (fast && fast.next) {
    fast = fast.next.next;
    slow = slow.next;

    if (slow === fast) {
      length = findLinkedListCycleLength(slow);
      break;
    }
  }
  return _findStartOfLinkedListCycleLength(head, length);
}

function findLinkedListCycleLength(slow) {
  let currentNode = slow;
  let i = 0;

  while (true) {
    currentNode = currentNode.next;
    i++;

    if (currentNode == slow) {
      break;
    }
  }
  return i;
}

function _findStartOfLinkedListCycleLength(head, length) {
  let fast = head;
  let slow = head;

  while (length > 0) {
    fast = fast.next;
    length--;
  }

  while (fast !== slow) {
    fast = fast.next;
    slow = slow.next;
  }

  return slow;
}

const head = new TreeNode(1);
head.next = new TreeNode(2);
head.next.next = new TreeNode(3);
head.next.next.next = new TreeNode(4);
head.next.next.next.next = new TreeNode(5);
head.next.next.next.next.next = new TreeNode(6);

console.log(findStartOfLinkedListCycleLength(head).value);

head.next.next.next.next.next.next = head.next.next;

console.log(findStartOfLinkedListCycleLength(head).value);

head.next.next.next.next.next.next = head.next.next.next;

console.log(findStartOfLinkedListCycleLength(head).value);

head.next.next.next.next.next.next = head;

console.log(findStartOfLinkedListCycleLength(head).value);
