import { dollarsToCents } from "./dollars_to_cents";
import assert from "assert";

assert.deepStrictEqual(dollarsToCents(0.58), {
  quarter: 2,
  dime: 0,
  nickel: 1,
  pennies: 3,
});
