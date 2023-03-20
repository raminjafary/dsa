// Path With Given Sequence

// Given a binary tree and a number sequence, find if the sequence is present as a root-to-leaf path in the given tree.

const { TreeNode } = require("./tree");

function _findPathWithGivenSequence(root, seq, path, level) {
  if (!root) {
    return false;
  }

  if (level >= seq.length || seq[level] !== root.value) {
    return false;
  }

  path.push(root.value);

  if (level === seq.length - 1 && !root.left && !root.right) {
    return true;
  }

  return (
    _findPathWithGivenSequence(root.left, seq, path, level + 1) ||
    _findPathWithGivenSequence(root.right, seq, path, level + 1)
  );
}

function findPathWithGivenSequence(root, seq) {
  if (!root) {
    return seq.length === 0;
  }

  const path = [];

  return _findPathWithGivenSequence(root, seq, path, 0);
}

const root = new TreeNode(1);
root.left = new TreeNode(0);
root.right = new TreeNode(1);
root.left.left = new TreeNode(1);
root.right.left = new TreeNode(6);
root.right.right = new TreeNode(5);

console.log(findPathWithGivenSequence(root, [1, 0, 7]));
console.log(findPathWithGivenSequence(root, [1, 1, 6]));
