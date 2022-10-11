let swapped = true;

function bubbleSort(items) {
  while (swapped) {
    swapped = false;

    for (let i = 0; i < items.length - 1; i++) {
      if (items[i] > items[i + 1]) {
        [items[i], items[i + 1]] = [items[i + 1], items[i]];
        swapped = true;
      }
    }
  }
}

const items = [0, 5, -2, 10, 3, 5];
bubbleSort(items);
console.log(items);
