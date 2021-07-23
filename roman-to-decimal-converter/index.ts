export const romanToDecimal = (roman: string): number => {
  const tokens: any[] = [];

  let current = 0;
  while (current < roman.length) {
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
    if (roman[current] === "X") {
      tokens.push(10);
      current += 1;
    }
  }
  return tokens.reduce((acc, cur) => acc + cur, 0);
};
