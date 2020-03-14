function diffArray(array1, array2) {
  const itemsFoundOnlyInArray1 = [];
  const itemsFoundOnlyInArray2 = [];
  const itemsFoundInBothArray = [];

  for (const item of array1) {
    if (array2.includes(item)) {
      itemsFoundInBothArray.push(item);
    } else {
      itemsFoundOnlyInArray1.push(item);
    }
  }
  for (const item of array2) {
    if (!itemsFoundInBothArray.includes(item)) {
      itemsFoundOnlyInArray2.push(item);
    }
  }
  return [...itemsFoundOnlyInArray1, ...itemsFoundOnlyInArray2];
}

export { diffArray };
