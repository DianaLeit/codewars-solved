/*The goal of this kata is two-fold:

1) You must produce a fibonacci sequence in the form of an array, containing 
a number of items equal to the input provided.

2) You must replace all numbers in the sequence divisible by 3 with Fizz, 
those divisible by 5 with Buzz, and those divisible by both 3 and 5 with FizzBuzz.

For the sake of this kata, you can assume all input will be a positive integer.

Use Cases
Return output must be in the form of an array, with the numbers as integers and 
the replaced numbers (fizzbuzz) as strings. */

function fibsFizzBuzz(n) {
  let fib = [];
  if (n == 1) {
    fib = [1];
  } else {
    fib = [1, 1];
  }
  for (let i = 2; i < n; i++) {
    fib[i] = fib[i - 2] + fib[i - 1];
  }
  return fib.map(putFizzBuzz);
}

function count(arr, func) {
  let result = 0;
  arr.forEach((element) => {
    if (func(element)) {
      result++;
    }
  });
  return result;
}

function putFizzBuzz(value) {
  if (value % 15 == 0) {
    return "FizzBuzz";
  }
  if (value % 3 == 0) {
    return "Fizz";
  }
  if (value % 5 == 0) {
    return "Buzz";
  }
  return value;
}
//
//
//Tests from Codewars
const Test = require("@codewars/test-compat");

describe("Fibonacci's FizzBuzz", function () {
  it("should work for a value of 2", function () {
    Test.assertSimilar(fibsFizzBuzz(2), [1, 1]);
  });

  it("should work for a value of 5", function () {
    Test.assertSimilar(fibsFizzBuzz(5), [1, 1, 2, "Fizz", "Buzz"]);
  });

  it("should work for a value of 20", function () {
    Test.assertSimilar(fibsFizzBuzz(20), [
      1,
      1,
      2,
      "Fizz",
      "Buzz",
      8,
      13,
      "Fizz",
      34,
      "Buzz",
      89,
      "Fizz",
      233,
      377,
      "Buzz",
      "Fizz",
      1597,
      2584,
      4181,
      "FizzBuzz",
    ]);
  });
});
