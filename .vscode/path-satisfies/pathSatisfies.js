function pathSatisfies(condition, pathArray, predicateObject) {
  if (pathArray.length === 0) {
    return false;
  }
  const objectKey = pathArray[0];
  const positionTobeChecked = pathArray.length === 3 ? pathArray[1] : 0;
  const objectProperty = pathArray.length === 3 ? pathArray[2] : pathArray[1];
  if (positionTobeChecked > 0) {
    return condition(
      predicateObject[objectKey][positionTobeChecked][objectProperty]
    );
  }
  return condition(predicateObject[objectKey][objectProperty]);
}

export { pathSatisfies };
