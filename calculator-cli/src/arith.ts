export const add = (arr: any[]): number => {
  const items = arr.map((elem) => parseInt(elem, 10));
  if (items.some((item) => !Number.isInteger(item))) {
    throw Error("arguments must be even integers");
  }
  return items.reduce((acc, cur) => acc + cur, 0);
};

export const even = (arr: any[]): number => {
  const items: number[] = arr.map((elem) => parseInt(elem, 10));
  if (
    items.some((item) => !Number.isInteger(item)) ||
    items.some((item) => item % 2 === 1)
  ) {
    throw Error("arguments must be even integers");
  }
  return items.reduce((acc, cur) => acc + cur, 0);
};
export const odd = (arr: any[]): number => {
  const items: number[] = arr.map((elem) => parseInt(elem, 10));
  if (
    items.some((item) => !Number.isInteger(item)) ||
    items.some((item) => item % 2 === 0)
  ) {
    throw Error("arguments must be odd integers");
  }
  return items.reduce((acc, cur) => acc + cur, 0);
};

// export const addFloat = (arr: any[]): number => {

// };
