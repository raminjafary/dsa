const { TreeNode } = require("../data-structure/tree");

function BSTToSortedLinkedList(root, head) {
  if (root == null) {
    return head;
  }

  head = BSTToSortedLinkedList(root.right, head);

  root.right = head;

  if (head != null) {
    head.left = null;
  }

  head = root;

  head = BSTToSortedLinkedList(root.left, head);

  return head;
}

function sortedLinkedListToMinHeap(root, head) {
  if (head == null) return;

  const queue = [];

  root = head;

  head = head.right;

  root.right = null;

  queue.push(root);

  while (head) {
    const parent = queue[0];
    queue.shift();

    const leftChild = head;
    head = head.right;
    leftChild.right = null;
    queue.push(leftChild);
    parent.left = leftChild;

    if (head) {
      const rightChild = head;
      head = head.right;
      rightChild.right = null;
      queue.push(rightChild);
      parent.right = rightChild;
    }
  }

  return root;
}

function BSTToMinHeap(root) {
  let head = null;

  head = BSTToSortedLinkedList(root, head);

  root = null;

  root = sortedLinkedListToMinHeap(root, head);

  return root;
}

let root = new TreeNode(8);
root.left = new TreeNode(4);
root.right = new TreeNode(12);
root.right.left = new TreeNode(10);
root.right.right = new TreeNode(14);
root.left.left = new TreeNode(2);
root.left.right = new TreeNode(6);
root = BSTToMinHeap(root);
console.log(JSON.stringify(root, null, 2));
