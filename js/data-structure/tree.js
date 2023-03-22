class TreeNode {
  constructor(value, left = null, right = null, next = null) {
    this.value = value;
    this.right = right;
    this.left = left;
    this.next = next;
  }
}

class BST {
  constructor() {
    this.root = null;
  }

  insert(value) {
    const node = new TreeNode(value);

    if (!this.root) {
      this.root = node;
      return this.root;
    }

    return this._insert(this.root, node);
  }

  _insert(root, node) {
    if (node.value < root.value) {
      if (!root.left) {
        root.left = node;
      } else {
        this._insert(root.left, node);
      }
    } else if (node.value > root.value) {
      if (!root.right) {
        root.right = node;
      } else {
        this._insert(root.right, node);
      }
    }

    return root;
  }
}

module.exports = { BST, TreeNode };
