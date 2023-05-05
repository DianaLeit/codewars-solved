import * as objs from "../objects.js";
import { assert } from "chai";

describe("Object tests", function () {
  it("test_countItems", () => {
    assert.deepEqual(objs.countItems([5, 6, 7, 6, 6, 5]), { 5: 2, 6: 3, 7: 1 });
  });
  it("test_fromKeys", () => {
    assert.deepEqual(objs.fromKeys([5, 6, 7], 0), { 5: 0, 6: 0, 7: 0 });
  });
  it("test_containsKey", () => {
    assert.deepEqual(objs.containsKey({ a: 3, b: 5, c: 7 }, "c"), true);
    assert.deepEqual(objs.containsKey({ a: 3, b: 5, c: 7 }, "b"), true);
    assert.deepEqual(objs.containsKey({ a: 3, b: 5, c: 7 }, "a"), true);
    assert.deepEqual(objs.containsKey({ a: 3, b: 5, c: undefined }, "c"), true);
    assert.deepEqual(objs.containsKey({ a: 3, b: 5, c: 7 }, "d"), false);
  });
  it("test_copy", () => {
    assert.deepEqual(objs.copy({ 5: "a", 6: "b", 7: "c" }), {
      5: "a",
      6: "b",
      7: "c",
    });
    assert.deepEqual(objs.copy({}), {});
  });
  it("test_merge", () => {
    assert.deepEqual(objs.merge({ 1: 2 }, { 3: 4 }), { 1: 2, 3: 4 });
    assert.deepEqual(objs.merge({ a: "f" }, { b: "h" }), { a: "f", b: "h" });
    assert.deepEqual(objs.merge({ a: "f" }, { b: "h", c: "k" }), {
      a: "f",
      b: "h",
      c: "k",
    });
    assert.deepEqual(objs.merge({ a: "f", c: "k" }, { b: "h" }), {
      a: "f",
      c: "k",
      b: "h",
    });
  });
  it("test_swap", () => {
    assert.deepEqual(objs.swap({ a: "end", b: "and" }), {
      end: "a",
      and: "b",
    });
  });
  it("test_toArray", () => {
    assert.deepEqual(objs.toArray({ a: "end", b: "and" }), ["end", "and"]);
  });
  // it("test_parseDate", () => {
  //   assert.deepEqual(objs.parseDate("2023-03-08"), {
  //     year: "2023",
  //     month: "3",
  //     day: "8",
  //   });
  //   assert.deepEqual(objs.parseDate("2023-03-28"), {
  //     year: "2023",
  //     month: "3",
  //     day: "28",
  //   });
  //   assert.deepEqual(objs.parseDate("2023-12-08"), {
  //     year: "2023",
  //     month: "12",
  //     day: "8",
  //   });
  //   assert.deepEqual(objs.parseDate("2023-13-08"), "invalid month");
  //   assert.deepEqual(objs.parseDate("2023-12-45"), "invalid days");
  // });
  // it("test_isLeapYear", () => {
  //   assert.deepEqual(objs.isLeapYear(objs.parseDate("2023-03-28")), false);
  //   assert.deepEqual(objs.isLeapYear(objs.parseDate("2024-03-28")), true);
  // });
  // it("test_getYear", () => {
  //   assert.deepEqual(objs.getYear(objs.parseDate("2023-03-28")), 2023);
  //   assert.deepEqual(objs.getYear(objs.parseDate("2024-03-28")), 2024);
  // });
  // it("test_getMonth", () => {
  //   assert.deepEqual(objs.getMonth(objs.parseDate("2023-01-28")), 1);
  //   assert.deepEqual(objs.getMonth(objs.parseDate("2024-03-28")), 3);
  // });
  // it("test_isLucky", () => {
  //   assert.deepEqual(objs.isLucky("2000-01-28"), true);
  //   assert.deepEqual(objs.isLucky("2024-03-28"), false);
  // });
  it("getYearMethod", () => {
    let d = objs.parseDate("2020-01-31")
    assert.equal(d.getYear(), 2020);
    assert.equal(d.isLucky(), false);
  })
});
