// Path with Maximum Sum

// Find the path with the maximum sum in a given binary tree. Write a function that returns the maximum sum.
// A path can be defined as a sequence of nodes between any two nodes and doesn’t necessarily pass through the root.

const { TreeNode } = require("./tree");

let maxSum = -Infinity;

function _findPathWithMaximumSum(root) {
  if (!root) {
    return 0;
  }

  let maxPathForLeft = _findPathWithMaximumSum(root.left);
  let maxPathForRight = _findPathWithMaximumSum(root.right);

  maxPathForLeft = Math.max(maxPathForLeft, 0);
  maxPathForRight = Math.max(maxPathForRight, 0);

  maxSum = Math.max(maxSum, maxPathForLeft + maxPathForRight + root.value);

  return Math.max(maxPathForLeft, maxPathForRight) + root.value;
}

function findPathWithMaximumSum(root) {
  _findPathWithMaximumSum(root);

  return maxSum;
}
const root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);

console.log(findPathWithMaximumSum(root));

root.left.left = new TreeNode(1);
root.right.right = new TreeNode(3);
root.right.left = new TreeNode(5);
root.right.right = new TreeNode(6);
root.right.left.left = new TreeNode(7);
root.right.left.right = new TreeNode(8);
root.right.right.left = new TreeNode(9);

console.log(findPathWithMaximumSum(root));
