const returnNull = require("./index.js");

test("Null test 1", () => {
  expect(returnNull()).toBeNull();
});

test("Null test 2", () => {
  expect(returnNull(2)).toBeNull();
});

test("Null test 3", () => {
  expect(returnNull(3, 4, 5, 6, 76)).toBeNull();
});

test("Null test 4", () => {
  expect(returnNull("naujas")).toBeNull();
});

test("Null test 5", () => {
  expect(returnNull(undefined)).toBeNull();
});

test("Null test 6", () => {
  expect(returnNull(null)).toBeNull();
});
