import { BST } from "./closestElementBST.js";

const bstRoot = document.querySelector(".root-node");

const bst = BST();
bst.insert(4);
bst.insert(3);
bst.insert(5);
bst.insert(10);
// console.log(bst.findClosestElement(bst.getTree(), 9, bst.getTree().value));
console.log();

bstRoot.textContent = bst.getTree().value;
