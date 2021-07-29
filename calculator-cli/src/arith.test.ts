import { add, odd, even } from "./arith";

describe("arith module test", () => {
  test("add() returns the sum of given numbers", () => {
    expect(() => add(["3.1", "5.2"])).toThrow("arguments must be integers");
    expect(add(["3", "5"])).toBe(8);
  });
  test("even() returns the sum of given even numbers", () => {
    expect(() => even([2, 3])).toThrow("arguments must be even integers");
    expect(even([2, 4])).toBe(6);
  });
  test("odd() returns the sum of given odd numbers", () => {
    expect(() => odd([2, 4])).toThrow("arguments must be odd integers");
    expect(odd([3, 5])).toBe(8);
  });
});
