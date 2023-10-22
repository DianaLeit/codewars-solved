/* Returns true or false (not 'true' and 'false') depending upon whether the given 
number is a Narcissistic number in base 10. A Narcissistic Number (or Armstrong Number) 
is a positive number which is the sum of its own digits, each raised to the power of 
the number of digits in a given base*/
/**
 * @param {number} value
 */
function narcissistic(value) {
  let initNumber = value.toString();
  let calcNumber = initNumber
    .split("")
    .reduce((prev, digit) => prev + Math.pow(digit, initNumber.length), 0);
  return calcNumber === value;
}

// Tests from codewars:
const Test = require("@codewars/test-compat");

describe("Narcissistic Function", function () {
  it("should find small numbers are all narcissistic", function () {
    Test.assertEquals(narcissistic(7), true, "7 is narcissistic");
  });

  it("should find these numbers are narcissistic", function () {
    Test.assertEquals(narcissistic(371), true, "371 is narcissistic");
  });
});
