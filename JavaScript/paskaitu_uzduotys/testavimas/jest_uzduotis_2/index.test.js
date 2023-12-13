const palindrome = require("./index.js");

test("Palindromas: palapine", () => {
  expect(palindrome("palapine")).toBe(false);
});

test("Palindromas: vienas", () => {
  expect(palindrome("vienas")).toBe(false);
});

test("Palindromas: ala", () => {
  expect(palindrome("ala")).toBe(true);
});
