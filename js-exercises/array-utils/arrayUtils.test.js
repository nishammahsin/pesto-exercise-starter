import { forEach, map, filter, reduce } from "./arrayUtils";

describe("arrayUtils", () => {
  it("foreach should return correct key and index", () => {
    const array = [1, 2, 3];
    forEach(array, (key, index) => {
      expect(key).toBe(array[index]);
    });
  });

  it("map should return correct output", () => {
    const array = [1, 2, 3];
    const expected = [2, 4, 6];
    const output = map(array, (key, index) => key * 2);
    expect(output).toEqual(expected);
  });

  it("filter should return correct output", () => {
    const array = [11, 2, 13];
    const expected = [11, 13];
    const output = filter(array, value => value > 10);
    expect(output).toEqual(expected);
  });

  it("reduce should return correct output", () => {
    const array = [1, 2, 3, 4];
    const expected = 10;
    const reducer = (accumulator, currentValue) => accumulator + currentValue;
    const output = reduce(array, reducer);
    expect(output).toEqual(expected);
  });
});
