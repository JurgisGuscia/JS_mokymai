const skaiciuotiPlota = require("./index.js");

test("Skaiciuoju plota kai r = 1", () => {
  expect(skaiciuotiPlota(1)).toBe("3.14");
});

test("Skaiciuoju plota kai r = 2", () => {
  expect(skaiciuotiPlota(2)).toBe("12.57");
});

test("Skaiciuoju plota kai r = 0", () => {
  expect(skaiciuotiPlota(0)).toBe("0.00");
});
