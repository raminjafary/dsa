// Minimum Depth of a Binary Tree

// Find the minimum depth of a binary tree. The minimum depth is the number of nodes along the shortest path from the root node to the nearest leaf node.

const { TreeNode } = require("../../data-structure/tree");

function binaryTreeMinimumDepth(root) {
  const queue = [root];
  let minDepth = 0;

  while (queue.length) {
    const level = queue.length;

    minDepth++;

    for (let i = 0; i < level; i++) {
      const node = queue.shift();

      if (!node.left && !node.right) {
        return minDepth;
      }

      if (node.left) {
        queue.push(node.left);
      }

      if (node.right) {
        queue.push(node.right);
      }
    }
  }

  return minDepth;
}

const root = new TreeNode(12);
root.left = new TreeNode(7);
root.right = new TreeNode(1);
root.right.left = new TreeNode(10);
root.right.right = new TreeNode(5);

console.log(binaryTreeMinimumDepth(root));

root.left.left = new TreeNode(9);
root.right.left.left = new TreeNode(11);

console.log(binaryTreeMinimumDepth(root));
