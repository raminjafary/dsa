// Count Paths for a Sum

// Given a binary tree and a number ‘S’, find all paths in the tree such that the sum of all
// the node values of each path equals ‘S’. Please note that the paths can start or end at any node but all paths
// must follow direction from parent to child (top to bottom).

const { TreeNode } = require("./tree");

function _countPathForSum(root, sum, currentPath) {
  if (!root) {
    return 0;
  }

  currentPath.push(root.value);

  let pathSum = 0;
  let pathCount = 0;

  for (let i = currentPath.length - 1; i >= 0; i--) {
    pathSum += currentPath[i];

    if (pathSum == sum) {
      pathCount += 1;
    }
  }

  pathCount += _countPathForSum(root.left, sum, currentPath);
  pathCount += _countPathForSum(root.right, sum, currentPath);

  currentPath.pop();

  return pathCount;
}

function countPathForSum(root, sum) {
  return _countPathForSum(root, sum, []);
}

const root = new TreeNode(12);
root.left = new TreeNode(7);
root.right = new TreeNode(1);
root.left.left = new TreeNode(4);
root.right.left = new TreeNode(10);
root.right.right = new TreeNode(5);

console.log(countPathForSum(root, 11));
