// In these scripts, All the values of csv files are evaluated as string in converted json files.
// These scripts are only for a education purpose, so detailed error handling is not implemented.

import fs from "fs";

// import a csv file and generate the json version of it
export const csvToJson = (inputFile: string, outputFile: string): void => {
  // store each line of the csv file as an element of an array
  const csvContent: any[] = fs.readFileSync(inputFile, "utf8").split(/\n/);

  // split the array into keys and values
  const keys: any[] = csvContent[0].split(/,/);
  const values = csvContent.slice(1).map((elem) => elem.split(/,/));

  // convert all elements of the array into an object
  const obj: object = values.map((elem: any[]) =>
    elem.reduce(
      (acc: any, cur: string, i: number) => ((acc[keys[i]] = cur), acc),
      {}
    )
  );

  // stringify the object to json
  const json = JSON.stringify(obj);

  fs.writeFileSync(outputFile, json);
};

// import a json file and generate the csv version of it
export const jsonToCsv = (inputFile: string, outputFile: string): void => {
  const jsonContent: string = fs.readFileSync(inputFile, "utf8");
  const data: object[] = JSON.parse(jsonContent);
  const csvKeys = Object.keys(data[0]).join(",");
  const csvValues = data.slice().map((elem) => Object.values(elem).join(","));
  const result = [csvKeys].concat(csvValues).join("\n");
  fs.writeFileSync(outputFile, result);
};
