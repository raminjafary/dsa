// Rotate a LinkedList

// Given the head of a Singly LinkedList and a number ‘k’, rotate the LinkedList to the right by ‘k’ nodes.

const { TreeNode } = require("../../data-structure/tree");

function rotateLinkedList(head, n) {
  let length = 1;
  let lastNode = head;

  while (lastNode.next) {
    length++;
    lastNode = lastNode.next;
  }

  lastNode.next = head;
  n %= length;
  let skipLngth = length - n;
  for (let i = 0; i < skipLngth; i++) {
    lastNode = lastNode.next;
  }

  head = lastNode.next;
  lastNode.next = null;

  return head;
}

const head = new TreeNode(1);
head.next = new TreeNode(2);
head.next.next = new TreeNode(3);
head.next.next.next = new TreeNode(4);
head.next.next.next.next = new TreeNode(5);
head.next.next.next.next.next = new TreeNode(6);

console.log(JSON.stringify(head, null, 2));
console.log(JSON.stringify(rotateLinkedList(head, 3), null, 2));
