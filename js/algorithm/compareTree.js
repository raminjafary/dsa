const { BST } = require("./closestElementBST.js");

const bst = BST();
bst.insert(4);
bst.insert(3);
bst.insert(5);
bst.insert(10);

const bst2 = BST();
bst2.insert(4);
bst2.insert(3);
bst2.insert(10);

function compare(a, b) {
  if (a === null && b === null) return true;
  if (a === null || b === null) return false;
  if (a?.value !== b?.value) return false;

  return compare(a?.left, b?.left) && compare(a?.right, b?.right);
}

console.log(compare(bst.getTree(), bst2.getTree()));
