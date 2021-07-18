export const calcWordFreq = (word: string): Record<string, number> => {
  const obj: Record<string, number> = {};
  const arr = word.split(/\s/);

  arr.forEach((elem) => {
    if (obj[elem] === undefined) {
      obj[elem] = 1;
    } else {
      obj[elem] += 1;
    }
  });
  return obj;
};
