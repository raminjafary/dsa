function Node(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}

function BST(root) {
  function insert(value) {
    root = insertRec(root, value);
  }

  function insertRec(root, value) {
    if (!root) {
      root = new Node(value);
      return root;
    }

    if (root.value > value) {
      root.left = insertRec(root.left, value);
    } else if (root.value < value) {
      root.right = insertRec(root.right, value);
    }

    return root;
  }

  function findClosestElement(root, target, closest) {
    if (!root) {
      return closest;
    } else if (Math.abs(target - closest) > Math.abs(root.value - target)) {
      closest = root.value;
    }
    if (target > root.value) {
      return findClosestElement(root.right, target, closest);
    } else if (target < root.value) {
      return findClosestElement(root.left, target, closest);
    } else {
      return closest;
    }
  }

  function inorder(root, cb) {
    if (root) {
      inorder(cb(root.left));
      inorder(cb(root.right));
    }
  }

  function getTree() {
    return root;
  }

  return {
    getTree,
    findClosestElement,
    insert,
    inorder,
  };
}

const bst = BST();
bst.insert(4);
bst.insert(3);
bst.insert(5);
bst.insert(10);
// console.log(bst.findClosestElement(bst.getTree(), 9, bst.getTree().value));
// console.log(bst.getTree());

bst.inorder(bst.getTree(), (node) => console.log("node", node));

module.exports = {
  BST,
};
