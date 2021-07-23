import { romanToDecimal } from "./index";

describe("Roman to decimal converter test", () => {
  test("romanToDecimal() returns the corresponding number of the given roman string", () => {
    expect(romanToDecimal("I")).toBe(1);
    expect(romanToDecimal("V")).toBe(5);
    expect(romanToDecimal("X")).toBe(10);
    expect(romanToDecimal("IV")).toBe(4);
    expect(romanToDecimal("XX")).toBe(20);
  });
});
