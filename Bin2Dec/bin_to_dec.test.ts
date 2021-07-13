import { binToDec } from "./bin_to_dec";
import assert from "assert";

assert.strictEqual(binToDec("0"), 0);
assert.strictEqual(binToDec("1"), 1);
assert.strictEqual(binToDec("100"), 4);
assert.strictEqual(binToDec("1111"), 15);
