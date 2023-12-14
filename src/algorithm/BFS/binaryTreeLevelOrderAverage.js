// Level Averages in a Binary Tree

// Given a binary tree, populate an array to represent the averages of all of its levels.

const { TreeNode } = require("../../data-structure/tree");

function binaryTreeLevelOrderAverage(root) {
  const queue = [root];
  const result = [];

  while (queue.length) {
    const level = queue.length;
    let levelSum = 0;

    for (let i = 0; i < level; i++) {
      const node = queue.shift();

      levelSum += node.value;

      if (node.left) {
        queue.push(node.left);
      }

      if (node.right) {
        queue.push(node.right);
      }
    }
    result.push(levelSum / level);
  }

  return result;
}

const root = new TreeNode(12);
root.left = new TreeNode(7);
root.right = new TreeNode(1);
root.left.left = new TreeNode(9);
root.left.right = new TreeNode(2);
root.right.left = new TreeNode(10);
root.right.right = new TreeNode(5);

console.log(binaryTreeLevelOrderAverage(root));
