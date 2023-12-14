function qs(arr, low, high) {
  if (low >= high) return;

  const pivot = partition(arr, low, high);

  qs(arr, low, pivot - 1);
  qs(arr, pivot + 1, high);
}

function partition(arr, low, high) {
  let pivot = arr[high];
  let idx = low - 1;

  for (let i = low; i < high; i++) {
    if (arr[i] <= pivot) {
      idx++;
      const temp = arr[i];
      arr[i] = arr[idx];
      arr[idx] = temp;
    }
  }
  idx++;
  arr[high] = arr[idx];
  arr[idx] = pivot;

  return idx;
}
const a = [10, 2, 30, 4, 7];
qs(a, 0, 4);
console.log(a);
