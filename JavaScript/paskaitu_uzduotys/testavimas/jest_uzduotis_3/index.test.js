const max = require("./index.js");

test("rasti didziausia [1,2,3,4,5]: ", () => {
  expect(max([1, 2, 3, 4, 5])).toBe(5);
});

test("rasti didziausia []: ", () => {
  expect(max([])).toBe(0);
});

test("rasti didziausia [9,2,3,4,5]: ", () => {
  expect(max([9, 2, 3, 4, 5])).toBe(9);
});
