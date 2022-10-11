//Input: [-4,-1,0,3,10]
// Output: [0,1,9,16,100]

//Input: [-7,-3,2,3,11]
// Output: [4,9,9,49,121]

function sortedSquares(array) {
  let i = 0;
  const items = [];

  while (i < array.length) {
    items.push(array[i] * array[i]);
    i++;
  }

  return items.sort((a, b) => a - b);
}

function sortedSquares(array) {
  let r = array.length - 1;
  let l = 0;
  let p = r;
  const items = [];

  while (l <= r) {
    if (array[l] ** 2 > array[r] ** 2) {
      items[p--] = array[l++] ** 2;
    } else {
      items[p--] = array[r--] ** 2;
    }
  }

  return items;
}

console.log(sortedSquares([-4, -1, 0, 3, 10]));
let i = 2;
console.log(--i);
