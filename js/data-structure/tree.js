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

  inorder(node) {
    if (!node) {
      return;
    }

    this.inorder(node.left);
    console.log("inorder traversal -> ", node.value);

    this.inorder(node.right);
  }

  preorder(node) {
    if (!node) {
      return;
    }

    console.log("preorder traversal -> ", node.value);
    this.preorder(node.left);
    this.preorder(node.right);
  }

  postorder(node) {
    if (!node) {
      return;
    }

    this.postorder(node.left);
    this.postorder(node.right);
    console.log("postorder traversal -> ", node.value);
  }

  findMinNode(node) {
    if (!node?.left) {
      return node;
    } else {
      return this.findMinNode(node.left);
    }
  }

  search(node, value) {
    if (!node) {
      return;
    } else if (value < node.value) {
      return this.search(node.left, value);
    } else if (value > node.value) {
      return this.search(node.right, value);
    } else {
      return node;
    }
  }

  remove(value) {
    this.root = this._remove(this.root, value);
  }

  _remove(root, value) {
    if (!root) {
      return;
    } else if (value < root.value) {
      root.left = this._remove(root.left, value);
      return root;
    } else if (value > root.value) {
      root.right = this._remove(root.right, value);
      return root;
    } else {
      if (!root.left && !root.right) {
        root = null;
        return root;
      }

      if (!root.left) {
        root = root.right;
        return root;
      }

      if (!root.right) {
        root = root.left;
        return root;
      }

      const minNode = this.findMinNode(root.right);
      root.value = minNode.value;

      root.right = this._remove(root.right, minNode.value);
      return root;
    }
  }
}

module.exports = { BST, TreeNode };
