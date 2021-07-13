export const binToDec = (bin: string): number => {
  const binArr = bin.split("");
  const length = binArr.length;
  let data: number = 0;
  binArr.forEach((elem, i) => {
    data += parseInt(elem, 10) * 2 ** (length - 1 - i);
  });
  return data;
};
