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
