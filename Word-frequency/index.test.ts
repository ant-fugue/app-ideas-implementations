import { calcWordFreq } from "./index";

describe("word frequency app test", () => {
  test("calcWordFreq() returns an object which shows the frequency of characters", () => {
    expect(calcWordFreq("this is a pen")).toEqual({
      this: 1,
      is: 1,
      a: 1,
      pen: 1,
    });
    expect(calcWordFreq("This is a pen")).toEqual({
      This: 1,
      is: 1,
      a: 1,
      pen: 1,
    });
    expect(calcWordFreq("that that this is")).toEqual({
      that: 2,
      this: 1,
      is: 1,
    });
  });
});
