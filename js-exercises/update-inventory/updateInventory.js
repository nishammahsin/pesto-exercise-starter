const searchIn2dArray = (_2dArray, item) => {
  for (const i in _2dArray) {
    if (_2dArray[i][1] === item) {
      return i;
    }
  }
  return -1;
};
function updateInventory(currentInventory, newInventory) {
  const updatedInventory = currentInventory;
  for (const item of newInventory) {
    const itemIndex = searchIn2dArray(currentInventory, item[1]);
    if (itemIndex === -1) {
      updatedInventory.push(item);
    } else {
      updatedInventory[itemIndex][0] += item[0];
    }
  }
  return updatedInventory.sort((item1, item2) => {
    if (item1[1] < item2[1]) {
      return -1;
    }
    if (item1[1] > item2[1]) {
      return 1;
    }
    return 0;
  });
}

export { updateInventory };
