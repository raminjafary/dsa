// Zigzag Traversal

// Given a binary tree, populate an array to represent its zigzag level order traversal.
// You should populate the values of all nodes of the first level from left to right,
// then right to left for the next level and keep alternating in the same manner for the following levels.

const { TreeNode } = require("../../data-structure/tree");

function zigzagLevelOrderTraversal(root) {
  const queue = [root];
  const result = [];
  let leftToRight = true;

  while (queue.length) {
    const level = queue.length;
    const currentLevel = [];

    for (let i = 0; i < level; i++) {
      const node = queue.shift();

      if (leftToRight) {
        currentLevel.push(node.value);
      } else {
        currentLevel.unshift(node.value);
      }

      if (node.left) {
        queue.push(node.left);
      }

      if (node.right) {
        queue.push(node.right);
      }
    }

    result.push(currentLevel);
    leftToRight = !leftToRight;
  }

  return result;
}

const root = new TreeNode(12);
root.left = new TreeNode(7);
root.right = new TreeNode(1);
root.left.left = new TreeNode(9);
root.right.left = new TreeNode(10);
root.right.right = new TreeNode(5);
root.right.left.left = new TreeNode(20);
root.right.left.right = new TreeNode(17);

console.log(zigzagLevelOrderTraversal(root));
