import { binToDec } from "./bin_to_dec";
import assert from "assert";

describe("binary to decimal app", () => {
  test("when a binary is given, binToDec() returns a corresponding integer in ten digits system", () => {
    expect(binToDec("0")).toBe(0);
    expect(binToDec("1")).toBe(1);
    expect(binToDec("100")).toBe(4);
    expect(binToDec("1111")).toBe(15);
  });
});
