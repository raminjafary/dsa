// Reverse a LinkedList

// Given the head of a Singly LinkedList, reverse the LinkedList. Write a function to return the new head of the reversed LinkedList.

const { TreeNode } = require("../../data-structure/tree");

function reverseLinkedList(head) {
  let currentNode = head;
  let previous = null;

  while (currentNode) {
    const next = currentNode.next;
    currentNode.next = previous;
    previous = currentNode;
    currentNode = next;
  }

  return previous;
}

const head = new TreeNode(2);
head.next = new TreeNode(4);
head.next.next = new TreeNode(6);
head.next.next.next = new TreeNode(8);
head.next.next.next.next = new TreeNode(10);

console.log(JSON.stringify(head, null, 2));
console.log(JSON.stringify(reverseLinkedList(head), null, 2));
