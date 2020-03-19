import { BetterStringLib } from "./betterStringLib";

describe("When betterStringLib run", () => {
  test("it should return the correct output for reverse function", () => {
    const betterStringLib = new BetterStringLib();
    expect(betterStringLib.reverse("ab")).toBe("ba");
    expect(betterStringLib.reverse("foo 𝌆 bar")).toBe("rab 𝌆 oof");
    expect(betterStringLib.reverse("mañana mañana")).toBe("anañam anañam");
  });

  test("it should return the correct output for equals function", () => {
    const betterStringLib = new BetterStringLib();
    expect(betterStringLib.equal("a", "a")).toBe(true);
    expect(betterStringLib.equal("mañana", "mañana")).toBe(true);
  });
});
