class Node {
  constructor(value) {
    this.value = value;
    this.right = this.left = null;
  }
}

let root = null;

function insert(value) {
  root = insertNode(root, value);
  return root;
}

function insertNode(root, value) {
  if (!root) {
    root = new Node(value);
    return root;
  }

  if (root.value < value) {
    root.right = insertNode(root.right, value);
  } else {
    root.left = insertNode(root.left, value);
  }
  return root;
}

function inorder(root) {
  if (root) {
    console.log(inorder(root.left));
    console.log(root.value);
    console.log(inorder(root.right));
  }
}

function preorder(root) {
  if (root) {
    console.log(root.value);
    console.log(preorder(root.left));
    console.log(preorder(root.right));
  }
}

function postorder(root) {
  if (root) {
    console.log(postorder(root.left));
    console.log(postorder(root.right));
    console.log(root.value);
  }
}

function getBranchSum(root) {
  const stack = [{ node: root, sum: 0 }];
  const sums = [];

  while (stack.length) {
    console.log(stack);
    const { node, sum } = stack.pop();

    const newSum = sum + node.value;

    if (!node.left && !node.right) {
      node.value && sums.push(newSum);
      continue;
    }

    if (node.right) {
      stack.push({ node: node.right, sum: newSum });
    }

    if (node.left) {
      stack.push({ node: node.left, sum: newSum });
    }
  }

  return sums;
}

insert(4);
insert(2);
insert(3);
insert(1);
insert(6);

console.log(getBranchSum(root));

console.log(JSON.stringify(root, null, 2));
