import * as lists from "../list.js";
import { assert } from "chai";

describe("List tests", function () {
  it("test_fromArray", () => {
    assert.deepEqual(lists.fromArray([42, 14, 33]), {
      val: 42,
      next: { val: 14, next: { val: 33, next: null } },
    });
    assert.deepEqual(lists.fromArray([]), null);
    assert.deepEqual(lists.fromArray([42, null, 33]), {
      val: 42,
      next: { val: null, next: { val: 33, next: null } },
    });
    assert.deepEqual(lists.fromArray([42, 14, undefined]), {
      val: 42,
      next: { val: 14, next: { val: undefined, next: null } },
    });
    assert.deepEqual(lists.fromArray([42, 14]), {
      val: 42,
      next: { val: 14, next: null },
    });
  });
   it("test_toArray", () => {
     assert.deepEqual(
       lists.toArray({
         val: 42,
         next: { val: 14, next: { val: 33, next: null } },
       }),
       [42, 14, 33]
     );
     assert.deepEqual(lists.toArray(null), []);
   });
   it("test_contains", () => {
     assert.deepEqual(
       lists.contains({
         val: 42,
         next: { val: 14, next: { val: 33, next: null } },
       }, 14),
       true
     );
     assert.deepEqual(
       lists.contains({
         val: 42,
         next: { val: 14, next: { val: 33, next: null } },
       }, 56),
       false
     );
     assert.deepEqual(
       lists.contains(
         null, 56),
       false
     );
   });
});
