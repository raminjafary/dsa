// Binary Tree Level Order Traversal

// Given a binary tree, populate an array to represent its level-by-level traversal in reverse order, i.e., the lowest level comes first.
// You should populate the values of all nodes in each level from left to right in separate sub-arrays.

const { TreeNode } = require("../../data-structure/tree");

function reverseBinaryTreeLevelOrder(root) {
  const queue = [root];
  // Better to use a double ended queue or linked list as there'd be no re-indexing and shifting
  const result = [];

  while (queue.length) {
    const level = queue.length;
    const currentLevel = [];

    for (let i = 0; i < level; i++) {
      const node = queue.shift();
      currentLevel.push(node.value);

      if (node.left) {
        queue.push(node.left);
      }

      if (node.right) {
        queue.push(node.right);
      }
    }

    result.unshift(currentLevel);
  }
  return result;
}

const root = new TreeNode(12);
root.left = new TreeNode(7);
root.right = new TreeNode(1);
root.left.left = new TreeNode(9);
root.right.left = new TreeNode(10);
root.right.right = new TreeNode(5);

console.log(reverseBinaryTreeLevelOrder(root, 23));
