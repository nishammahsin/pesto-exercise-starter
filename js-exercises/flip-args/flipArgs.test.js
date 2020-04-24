import { flipArgs } from "./flipArgs";

describe("flipargs", () => {
  it("flipargs should return correct output", () => {
    const expected = [3, 2, 1];
    const flipped = flipArgs(array => array);
    expect(flipped(1, 2, 3)).toEqual(expected);
  });
});
