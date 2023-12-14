class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    const node = new Node(value);

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
      }
      this._insert(root.right, node);
    }

    return root;
  }

  inorder(root = this.root) {
    if (root) {
      this.inorder(root.left);
      console.log(root.value);
      this.inorder(root.right);
    }
  }

  postorder(root = this.root) {
    if (root) {
      this.postorder(root.left);
      this.postorder(root.right);
      console.log(root.value);
    }
  }

  preorder(root = this.root) {
    if (root) {
      console.log(root.value);
      this.preorder(root.left);
      this.preorder(root.right);
    }
  }

  remove(value) {
    if (!this.root) {
      return;
    }
    return this._remove(value, this.root);
  }

  _remove(value, root) {
    if (value < root.value) {
      root.left = this._remove(value, root.left);
      return root;
    } else if (value > root.value) {
      root.right = this._remove(value, root.right);
      return root;
    } else {
      if (!root.left && !root.right) {
        root = null;
        return root;
      }

      if (!root.left) {
        root = root.right;
        return root;
      } else if (!root.right) {
        root = root.left;
        return root;
      }

      const aux = this.findMinNode(root.right);
      root.value = aux.value;
      root.right = this._remove(aux.value, root.right);
      return root;
    }
  }

  find(value) {
    if (!this.root) {
      return;
    }

    return this._find(value, this.root);
  }

  _find(value, root) {
    if (value < root.value) {
      return this._find(value, root.left);
    } else if (value > root.value) {
      return this._find(value, root.right);
    } else {
      return root;
    }
  }

  findMinNode(root) {
    if (!root.left) {
      return root;
    } else {
      return this.findMinNode(root.left);
    }
  }

  getRootNode() {
    return this.root;
  }
}

const bst = new BinarySearchTree();
bst.insert(5);
bst.insert(2);
bst.insert(8);
bst.insert(1);
console.log(bst.remove(5));
