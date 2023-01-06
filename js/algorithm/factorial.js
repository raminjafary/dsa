function factorial(n) {
  if (n === 1) {
    return 1;
  }

  return n * factorial(n - 1);
}

function factorialIter(n) {
  let result = 1;

  for (let i = 1; i <= n; i++) {
    result *= i;
  }

  return result;
}

console.log(factorialIter(4));
console.log(factorial(4));
