export const add = (arr: string[]): number => {
  const items = arr.map((elem) => Number(elem));
  if (items.some((item) => !Number.isInteger(item))) {
    throw new Error("arguments must be integers");
  }
  return items.reduce((acc, cur) => acc + cur, 0);
};

export const even = (arr: any[]): number => {
  const items: number[] = arr.map((elem) => Number(elem));
  if (
    items.some((item) => !Number.isInteger(item)) ||
    items.some((item) => item % 2 === 1)
  ) {
    throw new Error("arguments must be even integers");
  }
  return items.reduce((acc, cur) => acc + cur, 0);
};
export const odd = (arr: any[]): number => {
  const items: number[] = arr.map((elem) => Number(elem));
  if (
    items.some((item) => !Number.isInteger(item)) ||
    items.some((item) => item % 2 === 0)
  ) {
    throw new Error("arguments must be odd integers");
  }
  return items.reduce((acc, cur) => acc + cur, 0);
};

// export const addFloat = (arr: any[]): number => {

// };
