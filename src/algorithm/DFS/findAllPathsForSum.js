// All Paths for a Sum

// Given a binary tree and a number ‘S’, find all paths from root-to-leaf such that
// the sum of all the node values of each path equals ‘S’.

const { TreeNode } = require("../../data-structure/tree");

function _findSumOfAllPaths(root, n, currentPath, paths) {
  if (!root) {
    return;
  }

  currentPath.push(root.value);

  if (root.value == n && !root.left && !root.right) {
    paths.push([...currentPath]);
  } else {
    _findSumOfAllPaths(root.left, n - root.value, currentPath, paths);
    _findSumOfAllPaths(root.right, n - root.value, currentPath, paths);
  }

  currentPath.pop();
}

function findSumOfAllPaths(root, n) {
  const paths = [];
  const currentPath = [];

  _findSumOfAllPaths(root, n, currentPath, paths);

  return paths;
}

const root = new TreeNode(12);
root.left = new TreeNode(7);
root.right = new TreeNode(1);
root.left.left = new TreeNode(4);
root.right.left = new TreeNode(10);
root.right.right = new TreeNode(5);

console.log(findAllPathsForSum(root, 23));
