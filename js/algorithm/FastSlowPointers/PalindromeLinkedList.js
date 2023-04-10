// Palindrome LinkedList

// Given the head of a Singly LinkedList, write a method to check if the LinkedList is a palindrome or not.

// Your algorithm should use constant space and the input LinkedList should be in the original form once the algorithm is finished. The algorithm should have O(N) time complexity where ‘N’ is the number of nodes in the LinkedList.

// Example 1:
// Input: 2 -> 4 -> 6 -> 4 -> 2 -> null
// Output: true

// Example 2:
// Input: 2 -> 4 -> 6 -> 4 -> 2 -> 2 -> null
// Output: false

const { TreeNode } = require("../../data-structure/tree");

function isLinkedListPalindrome(head) {
  let fast = head;
  let slow = head;

  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }

  let headOfSecondHalf = reverse(slow);
  let headOfSecondHalfCopy = headOfSecondHalf;

  while (head && headOfSecondHalf && headOfSecondHalf) {
    if (head.value !== headOfSecondHalf.value) {
      break;
    }

    head = head.next;
    headOfSecondHalf = headOfSecondHalf.next;
  }

  reverse(headOfSecondHalfCopy);

  if (!head || !headOfSecondHalf) return true;

  return false;
}

function reverse(head) {
  let prev = null;

  while (head) {
    let next = head.next;
    head.next = prev;
    prev = head;
    head = next;
  }
  return prev;
}

const head = new TreeNode(2);
head.next = new TreeNode(4);
head.next.next = new TreeNode(6);
head.next.next.next = new TreeNode(4);
head.next.next.next.next = new TreeNode(2);

console.log(isLinkedListPalindrome(head));

head.next.next.next.next.next = new TreeNode(2);

console.log(isLinkedListPalindrome(head));
