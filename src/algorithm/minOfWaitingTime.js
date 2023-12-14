function minimumWaitingMinTime(arr) {
  let i = 0;
  let total = 0;

  arr.sort((a, b) => a - b);

  for (const duration of arr) {
    total += i;
    i += duration;
  }

  return total;
}

function minimumWaitingMinTime2(arr) {
  let total = 0;

  arr.sort((a, b) => a - b);

  for (let i = 0; i < arr.length; i++) {
    const duration = arr[i];

    total += duration * (arr.length - (i + 1));
  }
  return total;
}

console.log(minimumWaitingMinTime([6, 1]));
console.log(minimumWaitingMinTime([8, 9, 10, 11]));
console.log(minimumWaitingMinTime2([6, 1]));
console.log(minimumWaitingMinTime2([8, 9, 10, 11]));
