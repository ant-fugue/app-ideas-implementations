import { csvToJson, jsonToCsv } from "./index";
import assert from "assert";
import fs from "fs";
import path from "path";

describe("csv-json converter", () => {
  test("When a csv file is given, csvToJson(jsonToCsv()) returns the same content of the original file", () => {
    const sampleCSV = path.join(__dirname, "sample.csv");
    const outputCSV = path.join(__dirname, "output.csv");
    const outputJSON = path.join(__dirname, "output.json");
    csvToJson(sampleCSV, outputJSON);
    jsonToCsv(outputJSON, outputCSV);
    const actual = fs.readFileSync(outputCSV);
    const expect = fs.readFileSync(sampleCSV);
    assert.deepStrictEqual(actual, expect);
  });

  test("When a json file is given, jsonToCsv(csvToJson()) returns the same content of the original file", () => {
    const sampleJSON = path.join(__dirname, "sample.json");
    const outputCSV = path.join(__dirname, "output.csv");
    const outputJSON = path.join(__dirname, "output.json");
    jsonToCsv(sampleJSON, outputCSV);
    csvToJson(outputCSV, outputJSON);
    const actual = fs.readFileSync(outputJSON);
    const expect = fs.readFileSync(sampleJSON);
    assert.deepStrictEqual(actual, expect);
  });
});

