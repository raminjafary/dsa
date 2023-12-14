// LinkedList Cycle

// Given the head of a Singly LinkedList, write a function to determine if the LinkedList has a cycle in it or not.

const { TreeNode } = require("../../data-structure/tree");

function findLinkedListCycle(head) {
  let fast = head;
  let slow = head;

  while (fast && fast.next) {
    fast = fast.next.next;
    slow = slow.next;

    if (slow === fast) {
      return true;
    }
  }
  return false;
}

const head = new TreeNode(1);
head.next = new TreeNode(2);
head.next.next = new TreeNode(3);
head.next.next.next = new TreeNode(4);
head.next.next.next.next = new TreeNode(5);
head.next.next.next.next.next = new TreeNode(6);

console.log(findLinkedListCycle(head));

head.next.next.next.next.next.next = head.next.next;

console.log(findLinkedListCycle(head));

head.next.next.next.next.next.next.next = head.next.next.next;

console.log(findLinkedListCycle(head));
