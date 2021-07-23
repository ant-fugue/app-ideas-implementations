import { romanToDecimal } from "./index";

describe("Roman to decimal converter test", () => {
  test("romanToDecimal() returns the corresponding number of the given roman string", () => {
    expect(romanToDecimal("I")).toBe(1);
    expect(romanToDecimal("V")).toBe(5);
    expect(romanToDecimal("X")).toBe(10);
    expect(romanToDecimal("L")).toBe(50);
    expect(romanToDecimal("C")).toBe(100);
    expect(romanToDecimal("M")).toBe(1000);
    expect(romanToDecimal("CLX")).toBe(160);
    expect(romanToDecimal("CCVII")).toBe(207);
    expect(romanToDecimal("MIX")).toBe(1009);
    expect(romanToDecimal("MDCCLXXVI")).toBe(1776);
  });
});
