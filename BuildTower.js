// Build Tower
// Build a pyramid-shaped tower, as an array/list of strings, given a positive integer
// number of floors. A tower block is represented with "*" character.

/**
 * @param {number} nFloors
 * @returns {string[]}
 */
String.padStart
String.padEnd
function towerBuilder(nFloors) {
  let block = "*";
  for (let i = 0; i < nFloors; i++) {
    obj = block.repeat(2 * nFloors - 1);
    console.log(obj);
    return obj;
  }
  console.log(obj);
  return obj;
}

//Codewars tests
const Test = require("@codewars/test-compat");

describe("Tests", () => {
  it("test", () => {
    Test.assertDeepEquals(towerBuilder(1), ["*"]);
    Test.assertDeepEquals(towerBuilder(2), [" * ", "***"]);
    Test.assertDeepEquals(towerBuilder(3), ["  *  ", " *** ", "*****"]);
  });
  it("properties", () => {
    for (let i = 1; i < 11; i++) {
      checkProps(i);
    }
  });
});

// Mine property-based tests
/**
 * @param {number} n
 */
function checkProps(n) {
  let result = towerBuilder(n);
  Test.assertEquals(result.length, n);
  result.forEach((element) => {
    Test.assertEquals(element.length, 2 * n - 1);
  });
  Test.assertNotContains(result[result.length - 1], " ");
  result.forEach((element) => {
    Test.assertContains(element, "*");
  });
}
