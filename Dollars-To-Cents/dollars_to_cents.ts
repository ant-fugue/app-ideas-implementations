export const dollarsToCents = (dollars: number): any => {
  if (dollars < 0) {
    throw Error("the argument must be non-negative");
  }
  let result = {
    quarter: 0,
    dime: 0,
    nickel: 0,
    pennies: 0,
  };
  let cents = Math.round(dollars * 100);
  while (cents >= 0) {
    if (25 <= cents) {
      result.quarter += 1;
      cents -= 25;
    } else if (10 <= cents && cents < 25) {
      result.dime += 1;
      cents -= 10;
    } else if (5 <= cents && cents < 10) {
      result.nickel += 1;
      cents -= 5;
    } else if (1 <= cents && cents < 5) {
      result.pennies += 1;
      cents -= 1;
    } else {
      break;
    }
  }
  return result;
};
