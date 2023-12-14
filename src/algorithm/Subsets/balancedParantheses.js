// Balanced Parentheses

// For a given number ‘N’, write a function to generate all combination of ‘N’ pairs of balanced parentheses.

// Example 1:
// Input: N=2
// Output: (()), ()()

// Example 2:
// Input: N=3
// Output: ((())), (()()), (())(), ()(()), ()()()

function generateBalancedParantheses(num) {
  const result = [];
  const queue = [
    {
      str: "",
      openParen: 0,
      closeParen: 0,
    },
  ];

  while (queue.length) {
    const current = queue.shift();

    if (current.openParen === num && current.closeParen === num) {
      result.push(current.str);
    } else {
      if (current.openParen < num) {
        queue.push({
          str: `${current.str}(`,
          openParen: current.openParen + 1,
          closeParen: current.closeParen,
        });
      }

      if (current.openParen > current.closeParen) {
        queue.push({
          str: `${current.str})`,
          openParen: current.openParen,
          closeParen: current.closeParen + 1,
        });
      }
    }
  }

  return result;
}

console.log(generateBalancedParantheses(2));
console.log(generateBalancedParantheses(3));

function _generateBalancedParanthesesRecursice(
  num,
  openParen,
  closeParen,
  strArr,
  index,
  result
) {
  if (openParen === num && closeParen === num) {
    result.push(strArr.join(""));
  } else {
    if (openParen < num) {
      strArr[index] = "(";
      _generateBalancedParanthesesRecursice(
        num,
        openParen + 1,
        closeParen,
        strArr,
        index + 1,
        result
      );
    }

    if (openParen > closeParen) {
      strArr[index] = ")";
      _generateBalancedParanthesesRecursice(
        num,
        openParen,
        closeParen + 1,
        strArr,
        index + 1,
        result
      );
    }
  }
}

function generateBalancedParanthesesRecursice(num) {
  const result = [];
  let strArr = [];

  _generateBalancedParanthesesRecursice(num, 0, 0, str, 0, result);

  return result;
}

console.log(generateBalancedParantheses(2));
console.log(generateBalancedParantheses(3));
