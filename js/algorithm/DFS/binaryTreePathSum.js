// Binary Tree Path Sum

// Given a binary tree and a number ‘S’, find if the tree has a path from root-to-leaf such that
// the sum of all the node values of that path equals ‘S’.

const { TreeNode } = require("./tree");

function getBSTPathSum(root, n, path = []) {
  if (!root) {
    return false;
  }

  path.push(root.value);

  if (!root.left && !root.right && root.value === n) {
    console.log(path);

    return true;
  }

  return (
    getBSTPathSum(root.left, n - root.value, path) ||
    getBSTPathSum(root.right, n - root.value, path)
  );
}

const root = new TreeNode(12);
root.left = new TreeNode(7);
root.right = new TreeNode(1);
root.left.left = new TreeNode(9);
root.right.left = new TreeNode(10);
root.right.right = new TreeNode(5);

console.log(getBSTPathSum(root, 23));
console.log(getBSTPathSum(root, 16));
