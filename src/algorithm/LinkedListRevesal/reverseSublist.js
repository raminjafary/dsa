// Reverse a Sub-list

// Given the head of a LinkedList and two positions ‘p’ and ‘q’, reverse the LinkedList from position ‘p’ to ‘q’.

const { TreeNode } = require("../../data-structure/tree");

function reverseSublist(head, p, q) {
  let currentNode = head;
  let previous = null;
  let i = 0;

  while (currentNode && i < p - 1) {
    previous = currentNode;
    currentNode = currentNode.next;
    i++;
  }

  const lastNodeOfFirstPart = previous;
  const lastNodeOfSublist = currentNode;

  i = 0;

  while (currentNode && i < q - p + 1) {
    let next = currentNode.next;
    currentNode.next = previous;    
    previous = currentNode;
    currentNode = next;
    i++;
  }

  if (lastNodeOfFirstPart) {
    lastNodeOfFirstPart.next = previous;
  } else {
    head = previous;
  }

  lastNodeOfSublist.next = currentNode;

  return head;
}

const head = new TreeNode(1);
head.next = new TreeNode(2);
head.next.next = new TreeNode(3);
head.next.next.next = new TreeNode(4);
head.next.next.next.next = new TreeNode(5);

console.log(JSON.stringify(head, null, 2));
console.log(JSON.stringify(reverseSublist(head, 2, 4), null, 2));
