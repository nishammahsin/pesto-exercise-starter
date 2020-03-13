const updateObject = (index, itemTobeReplaced, array) => {
  const NUMBER_OF_ITEM_TO_BE_REPLACED = 1;
  array.splice(index, NUMBER_OF_ITEM_TO_BE_REPLACED, itemTobeReplaced);
  return array;
};

export { updateObject };
