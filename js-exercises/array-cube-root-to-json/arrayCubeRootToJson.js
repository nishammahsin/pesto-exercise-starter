const arrayCubeRootToJson = array => {
  if (!Array.isArray(array)) {
    throw Error();
  }
  const cubeRootMap = {};
  for (const item of array) {
    cubeRootMap[[item]] = Math.cbrt(item);
  }
  return cubeRootMap;
};

export { arrayCubeRootToJson };
// const a = arrayCubeRootToJson([27, 64, 125]);
// console.log(a);
// const b = arrayCubeRootToJson(true);
// console.log(b);
