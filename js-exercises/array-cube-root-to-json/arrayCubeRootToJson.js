const arrayCubeRootToJson = array => {
  if (!Array.isArray(array)) {
    throw new Error(`Expected an array ,got ${typeof array}`);
  }
  const cubeRootMap = {};
  for (const item of array) {
    if (!item || isNaN(item)) {
      throw new Error(`Expected a number ,got ${typeof item}`);
    } else {
      cubeRootMap[[item]] = Math.cbrt(item);
    }
  }
  return cubeRootMap;
};

export { arrayCubeRootToJson };
