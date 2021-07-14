import { csvToJson, jsonToCsv } from "./index";
import assert from "assert";
import fs from "fs";

csvToJson("sample.csv", "output.json");
jsonToCsv("output.json", "output.csv");
const actual = fs.readFileSync("output.csv");
const expect = fs.readFileSync("sample.csv");
assert.deepStrictEqual(actual, expect);

jsonToCsv("sample.json", "output.csv");
csvToJson("output.csv", "output.json");
const act = fs.readFileSync("output.json");
const exp = fs.readFileSync("sample.json");
assert.deepStrictEqual(act, exp);
