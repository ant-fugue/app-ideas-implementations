import { dollarsToCents } from "./dollars_to_cents";
import assert from "assert";

describe("dollars to cents app", () => {
  test("given dollars as arguments, dollarsToCents() returns the least count combinations of coins.", () => {
    expect(dollarsToCents(0.58)).toEqual({
      quarter: 2,
      dime: 0,
      nickel: 1,
      pennies: 3,
    });
  });
});
