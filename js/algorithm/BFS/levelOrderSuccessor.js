// Level Order Successor

// Given a binary tree and a node, find the level order successor of the given node in the tree.
// The level order successor is the node that appears right after the given node in the level order traversal.

const { TreeNode } = require("../../data-structure/tree");

function levelOrderSuccessor(root, value) {
  const queue = [root];

  while (queue.length) {
    const node = queue.shift();

    if (node.left) {
      queue.push(node.left);
    }

    if (node.right) {
      queue.push(node.right);
    }

    if (node.value === value) {
      break;
    }
  }

  if (queue.length) {
    return queue[0].value;
  }
}

const root = new TreeNode(12);
root.left = new TreeNode(7);
root.right = new TreeNode(1);
root.left.left = new TreeNode(9);
root.right.left = new TreeNode(10);
root.right.right = new TreeNode(5);

console.log(levelOrderSuccessor(root, 12));
console.log(levelOrderSuccessor(root, 9));
