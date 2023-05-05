import * as seqs from "../sequences.js";
import { assert } from "chai";

describe("Sequence tests", function () {
  it("test_Sequence", () => {
    assert.deepEqual(seqs.sequence(5), [1, 2, 3, 4, 5]);
  });
  it("test_IsEven", () => {
    assert.equal(seqs.isEven(5), false);
    assert.equal(seqs.isEven(6), true);
  });
  it("test_ReturnEven", () => {
    assert.deepEqual(seqs.returnEven(10), [2, 4, 6, 8, 10]);
  });
  it("test_Contains", () => {
    assert.equal(seqs.contains([1, 2, 3, 4, 5], 3), true);
    assert.equal(seqs.contains([1, 2, 3, 4, 5], 0), false);
    assert.equal(seqs.contains([1, 2, 3, 4, 5], 6), false);
  });
  it("test_IndexOf", () => {
    assert.equal(seqs.indexOf([1, 2, 3, 4, 5], 3), 2);
    assert.equal(seqs.indexOf([1, 2, 3, 4, 5], 6), null);
  });
  it("test_Last", () => {
    assert.equal(seqs.last([4, 5, 6]), 6);
    assert.equal(seqs.last([], 25), 25);
  });
  it("test_Tail", () => {
    assert.deepEqual(seqs.tail([4, 5, 6]), [5, 6]);
  });
  it("test_Reverse", () => {
    assert.deepEqual(seqs.reverse([4, 5, 6]), [6, 5, 4]);
  });
  it("test_Map", () => {
    assert.deepEqual(
      seqs.map([4, 5, 6], (x) => x * 2),
      [8, 10, 12]
    );
  });
  it("test_Filter", () => {
    assert.deepEqual(seqs.filter([4, 5, 6, 7], seqs.isEven), [4, 6]);
  });
  it("test_Middle", () => {
    assert.equal(seqs.middle([4, 5, 6]), 5);
    assert.equal(seqs.middle([4, 5, 6, 7, 8]), 6);
    assert.equal(seqs.middle([4, 5, 6, 7]), "doesn`t have middle");
  });
  it("test_min", () => {
    assert.equal(seqs.min([6, 5, 4]), 4);
    assert.equal(seqs.min([0, 1, 2, 3]), 0);
    assert.equal(seqs.min([4, 5, 3, 7]), 3);
    assert.equal(seqs.min([4, 5, 3, 7, 4, 6]), 3);
  });
  it("test_Min2", () => {
    assert.equal(seqs.min2(2, 4), 2);
    assert.equal(seqs.min2(5, 3), 3);
  });
  it("test_Fac", () => {
    assert.equal(seqs.fac(4), 24);
    assert.equal(seqs.fac(5), 120);
    assert.equal(seqs.fac(1), 1);
  });
  it("test_Double", () => {
    assert.deepEqual(seqs.double([1, 2, 3, 4, 5]), [2, 4, 6, 8, 10]);
  });
  it("test_Indexes", () => {
    assert.deepEqual(seqs.indexes([1, 2, 3]), [0, 1, 2]);
    assert.deepEqual(seqs.indexes([5, 5, 5]), [0, 1, 2]);
  });
  it("test_Mean2", () => {
    assert.deepEqual(seqs.mean2(1, 2), 1.5);
    assert.deepEqual(seqs.mean2(2, 4), 3);
  });
  it("test_Mean3", () => {
    assert.deepEqual(seqs.mean3(1, 2, 3), 2);
    assert.deepEqual(seqs.mean3(6, 6, 0), 4);
  });
  it("test_Mean", () => {
    assert.deepEqual(seqs.mean([1, 2, 3]), 2);
    assert.deepEqual(seqs.mean([6, 6, 0, 6]), 4.5);
  });
  it("test_ApplyMask", () => {
    assert.deepEqual(seqs.applyMask([1, 2, 3], [true, true, false]), [1, 2]);
    assert.deepEqual(seqs.applyMask([5, 7, 4], [false, true, false]), [7]);
  });
  it("test_Hamming", () => {
    assert.deepEqual(seqs.hamming("cool", "polo"), 3);
    assert.deepEqual(seqs.hamming("above", "abobe"), 1);
    assert.deepEqual(seqs.hamming("above", "above"), 0);
    assert.deepEqual(seqs.hamming("hallo", "hola"), 3);
    assert.deepEqual(seqs.hamming("hola", "hallo"), 3);
  });
  it("test_intersperse", () => {
    assert.deepEqual(seqs.intersperse([1, 2, 3], 0), [1, 0, 2, 0, 3]);
    assert.deepEqual(seqs.intersperse(["a", "b", "c", "d"], "crap"), [
      "a",
      "crap",
      "b",
      "crap",
      "c",
      "crap",
      "d",
    ]);
  });
  it("test_merge", () => {
    assert.deepEqual(seqs.merge([1, 2, 3], [4, 5, 6]), [1, 4, 2, 5, 3, 6]);
    assert.deepEqual(seqs.merge([1, 2, 3], ["a", "b", "c"]), [
      1,
      "a",
      2,
      "b",
      3,
      "c",
    ]);
  });
  it("test_isSorted", () => {
    assert.deepEqual(seqs.isSorted([1, 2, 3]), true);
    assert.deepEqual(seqs.isSorted([6, 6, 0, 6]), false);
  });
  it("test_humanReadable", () => {
     assert.equal(seqs.humanReadable(0), "00:00:00", );
     assert.equal(seqs.humanReadable(59), "00:00:59", );
     assert.equal(seqs.humanReadable(60), "00:01:00", );
     assert.equal(seqs.humanReadable(90), "00:01:30", );
     assert.equal(seqs.humanReadable(3599), "00:59:59");
     assert.equal(seqs.humanReadable(3600), "01:00:00");
     assert.equal(seqs.humanReadable(45296), "12:34:56");
     assert.equal(seqs.humanReadable(86399), "23:59:59");
     assert.equal(seqs.humanReadable(86400), "24:00:00");
     assert.equal(seqs.humanReadable(359999), "99:59:59");
  });
});
