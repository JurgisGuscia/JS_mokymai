const addKey = require("./index.js");

test("addKey({kaina: 50}, 'kaina')", () => {
  expect(addKey({ kaina: 50 }, "kaina")).toBe("Objektas jau turi kainą!");
});

test("addKey({neKaina: 50}, 'kaina')", () => {
  expect(addKey({ neKaina: 50 }, "kaina")).toBe(true);
});
