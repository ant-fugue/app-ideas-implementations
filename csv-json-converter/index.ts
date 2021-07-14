import fs from "fs";

// import a csv file and generate the json version of it
export const csvToJson = (inputFile: string, outputFile: string): void => {
  // store each line of the csv file as a element of an array
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
