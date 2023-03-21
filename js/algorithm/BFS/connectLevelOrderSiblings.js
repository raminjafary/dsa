// Connect Level Order Siblings

// Given a binary tree, connect each node with its level order successor.
// The last node of each level should point to a null node.

const { TreeNode } = require("../../data-structure/tree");

function connectLevelOrderSiblings(root) {
  const queue = [root];

  while (queue.length) {
    const level = queue.length;
    let previousNode = null;

    for (let i = 0; i < level; i++) {
      const node = queue.shift();

      if (previousNode) {
        previousNode.next = node;
      }

      previousNode = node;

      if (node.left) {
        queue.push(node.left);
      }

      if (node.right) {
        queue.push(node.right);
      }
    }
  }

  return root;
}

const root = new TreeNode(12);
root.left = new TreeNode(7);
root.right = new TreeNode(1);
root.left.left = new TreeNode(9);
root.right.left = new TreeNode(10);
root.right.right = new TreeNode(5);

connectLevelOrderSiblings(root)
console.log(connectLevelOrderSiblings(root));
