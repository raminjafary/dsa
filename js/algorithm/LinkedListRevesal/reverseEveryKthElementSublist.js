// Reverse every K-element Sub-list

// Given the head of a LinkedList and a number ‘k’, reverse every ‘k’ sized sub-list starting from the head.
// If, in the end, you are left with a sub-list with less than ‘k’ elements, reverse it too.

const { TreeNode } = require("../../data-structure/tree");

function reverseEveryKthElementSublist(head, k) {
  let currentNode = head;
  let previous = null;

  while (true) {
    let lastOfFirstPart = previous;
    let lastNodeOfSublist = currentNode;

    let i = 0;

    while (currentNode && i < k) {
      let next = currentNode.next;
      currentNode.next = previous;
      previous = currentNode;
      currentNode = next;
      i++;
    }

    if (lastOfFirstPart) {
      lastOfFirstPart.next = previous;
    } else {
      head = previous;
    }

    lastNodeOfSublist.next = currentNode;

    if (!currentNode) break;

    previous = lastNodeOfSublist;
  }

  return head;
}

const head = new TreeNode(1);
head.next = new TreeNode(2);
head.next.next = new TreeNode(3);
head.next.next.next = new TreeNode(4);
head.next.next.next.next = new TreeNode(5);
head.next.next.next.next.next = new TreeNode(6);
head.next.next.next.next.next.next = new TreeNode(7);
head.next.next.next.next.next.next.next = new TreeNode(8);

console.log(JSON.stringify(head, null, 2));
console.log(JSON.stringify(reverseEveryKthElementSublist(head, 3), null, 2));
