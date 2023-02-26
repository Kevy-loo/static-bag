const Bag = require("./Bag");

describe("Bag class", () => {
  //bag has weight
  test("bag has weight", () => {
    const bag = new Bag(22);
    expect(bag.weight).toBe(22);
  });
  //if bag has no weight, return error
  test("bag has no weight to return an error", () => {
    expect(() => new Bag()).toThrowError("bag needs weight");
  });
  test("bag weight is less than the maximum weight", () => {
    const bag = new Bag(22);
    expect(bag.weight).toBeLessThan(Bag.MAX_WEIGHT);
  });
});
