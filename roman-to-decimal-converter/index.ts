export const romanToDecimal = (roman: string): number => {
  const tokens: any[] = [];

  let current = 0;
  while (current < roman.length) {
    // units
    if (roman[current] === "I") {
      if (roman[current + 1] === "V") {
        tokens.push(4);
        current += 2;
      } else if (roman[current + 1] === "X") {
        tokens.push(9);
        current += 2;
      } else {
        tokens.push(1);
        current += 1;
      }
    }
    if (roman[current] === "V") {
      tokens.push(5);
      current += 1;
    }

    // tens
    if (roman[current] === "X") {
      if (roman[current + 1] === "L") {
        tokens.push(40);
        current += 2;
      } else if (roman[current + 1] === "C") {
        tokens.push(90);
        current += 2;
      } else {
        tokens.push(10);
        current += 1;
      }
    }

    if (roman[current] === "L") {
      tokens.push(50);
      current += 1;
    }

    // hundreds
    if (roman[current] === "C") {
      if (roman[current + 1] === "D") {
        tokens.push(400);
        current += 2;
      } else if (roman[current + 1] === "M") {
        tokens.push(900);
        current += 2;
      } else {
        tokens.push(100);
        current += 1;
      }
    }

    if (roman[current] === "D") {
      tokens.push(500);
      current += 1;
    }

    // thousands
    if (roman[current] === "M") {
      tokens.push(1000);
      current += 1;
    }
  }
  return tokens.reduce((acc, cur) => acc + cur, 0);
};
